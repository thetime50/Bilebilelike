var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
const util = require('util');
var reqPath = require('path')

var dowmload_path = "download"// '/'开头是当前盘符 不写是当前目录
// process.cwd() 当前执行程序的路径（执行命令行时候的路径,不是代码路径 例如 在根目录下执行 node ./xxx/xxx/a.js 则 cwd 返回的是 根目录地址 ）
// __dirname: 代码存放的位置
// process.execPath: 当前执行的node路径（如：/bin/node）

var fileStr=function(f){
  var obj=f.lastIndexOf("/")
  obj=obj<0?lastIndexOf("\\"):obj
  var path=f.substr(0,obj)
  var name=f.substr(obj)
  return {path:path,name:name}
}

readJsonFile=function(j_path){
  let data = fs.readFileSync(j_path, 'utf8')
  return JSON.parse(data)
}

const mkdir= util.promisify(fs.mkdir)
const async_mkdir=async function(f_path){
  await mkdir(f_path,{ recursive: true })
}

var downloadPic = function (src, dest) {
  request(src).pipe(fs.createWriteStream(dest)).on('close', function () {
    console.log('pic saved!')
  })
}

var Bagpipe = require('bagpipe');
var bagpipe_down = function (imgList,max) {
  imgList.splice(max)
  console.log(imgList.length)
  console.log(imgList)
  var bagpipe = new Bagpipe(10, { timeout: 100 });
  for (var i = 0; i < imgList.length; i++) {
    (function(j){
      var f=fileStr(imgList[j].file)
      console.log(j%5?".":j+" "+imgList[j].file)
      fs.mkdir(f.path,{ recursive: true },(e)=>{
        e && console.log(e)
        bagpipe.push(downloadPic, imgList[j].img, imgList[j].file, function (err, data) {
          //
        });
      })
    })(i)
  }
}

/////////////////////////////////////////////////
const getAttribute = function (obj, attrPath,type=0) {
  let attr=obj
  let paths=[]
  if(typeof attrPath === "string")
    paths=attrPath.split(/\.|\[|\]/)
  else if(typeof attrPath === "array")
    paths=attrPath
  for(let i=0;i<paths.length;i++){
    if(paths[i]=="")
      continue
    if(attr[paths[i]]!=undefined){//存在属性
      attr=attr[paths[i]]
    }else{
      if(type==0){
        attr=attr[paths[i]]//undefined
        break
      }else{
        attr[paths[i]]=i<paths.length-1?{}:undefined
        attr=attr[paths[i]]
      }
    }
  }
  return attr
}

function makeImgList (f_path,list_path,attr_paths,imgSuffix=""){
  let hdslbRe=/^i\d\.hdslb\.com\b/
  let json=readJsonFile(f_path)
  let imgList=[]
  let list=getAttribute(json,list_path)
  for(let i=0;i<list.length;i++){
    let val=list[i]
    attr_paths.forEach((apath,index,arr) => {
      let attr=getAttribute(val,apath)
      if(typeof(attr)!="string" || !attr)
        return
      let file=attr.replace(/^(https?:)?\/\//,"")
      file=file.replace(hdslbRe,"i0.hdslb.com")
      file=dowmload_path+"/"+file

      let img=attr+imgSuffix
      if(/^\/\//.test(attr))
        img="http:"+img
      imgList.push({img,file})
    });
  }
  return imgList
}

var ranking_path = '../docs/reference/pages/main/data/ranking'
var video_webp = "@320w_200h.webp"
var ranking_down=function(){
  let imgList=makeImgList (ranking_path,"data.list",["pic"],video_webp)
  bagpipe_down(imgList,60)
}

// var av_serial = "51811079"
var av_serial = "53498266"
var av_path ='../docs/reference/pages/av'+av_serial+'/data'
var recommendnew_path = av_path + '/recommendnew,'+av_serial+'.json'
var recommendnew_down=function(){
  let imgList=makeImgList (recommendnew_path,"data",["pic"/*,"owner.face"*/])
  bagpipe_down(imgList,20)
}

var reply_path = av_path + '/reply.json'
var reply_down=function(){
  let imgList=makeImgList (reply_path,"data.replies",[
    "member.avatar",
    //  "member.pendant.image",
    // "member.nameplate.image_small",
  ])
  bagpipe_down(imgList,20)
}

// ranking_down()
recommendnew_down()
reply_down()
