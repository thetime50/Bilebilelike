var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
const util = require('util');
var reqPath = require('path')

var json_path = '../docs/reference/pages/main/data/ranking'
var dowmload_path = "download"// '/'开头是当前盘符 不写是当前目录
// process.cwd() 当前执行程序的路径（执行命令行时候的路径,不是代码路径 例如 在根目录下执行 node ./xxx/xxx/a.js 则 cwd 返回的是 根目录地址 ）
// __dirname: 代码存放的位置
// process.execPath: 当前执行的node路径（如：/bin/node）

var webp = "@320w_200h.webp"
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

var main=function(){
  let json=readJsonFile(json_path)
  let imgList=json.data.list.map((val,index,arr)=>{
    //"http://i0.hdslb.com/bfs/archive/7917b40671d87ec6d66a8b5d9bceb5de40aa0ee5.jpg"
    let file=val.pic.replace(/^https?:\/\//,"")
    let hdslbRe=/^i\d\.hdslb\.com\b/
    file=file.replace(hdslbRe,"i0.hdslb.com")
    // file=reqPath.join(__dirname,file)
    file=dowmload_path+"/"+file
    return {img:val.pic+webp,file:file}
  })
  bagpipe_down(imgList,60)
}

main()
