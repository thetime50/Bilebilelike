/*
obj_test.js
*/

"use strict"

// if(window==undefined){
//   var fs = require('fs')
//   var replyJson = JSON.parse(fs.readFileSync("./obj_test/reply.json", 'utf8'))
// }else{

// }

// const replyJson =require("./reply")


const setAttribute = function(obj,attrPath,value){
  let paths=[],attr=obj,i=0
  let arrStr = (replace)=>{
    let base="\\[(\\d+)\\]"
    if(replace){
      return new RegExp(base,"g")
    }else{
      return new RegExp("^" + base + "$")
    }
  }

  if(typeof attrPath === "string"){
    attrPath=attrPath.replace(arrStr(true),".[$1]")
    paths=attrPath.split(".")
    paths.forEach((val,index,arr) => {
      if(arrStr().test(val)){
        arr[index]=parseInt(val.slice(1,val.length-1))
      }
    });
  }else if(typeof attrPath === "array")
    paths=attrPath
  for(i=0;i< paths.length-1;i++){
    if(paths[i]=="")
      continue
    if(attr[paths[i]]===undefined){
      if(typeof(paths[i+1])=="number")
        attr[paths[i]]=[]
      else
        attr[paths[i]]={}
    }
    attr=attr[paths[i]]
  }
  attr[paths[i]]=value
  return obj
}

const iteration = function({
  obj,
  point = obj,
  depth = 0,
  parent = undefined,
  index = "",
  path = [],
  cb,
}) {
  let needBreak = false
  let retTemp
  cb && (retTemp = cb({ obj, point, depth, parent, index, path, type: "after" }))
  needBreak = needBreak || (retTemp && retTemp.break)
  if (typeof (point) == "object") {
    const enterIter = (index) => {
      let item = point[index]
      path.push(index)
      let ret = iteration({
        obj,
        point: item,
        depth: depth + 1,
        parent: point,
        index: index,
        path,
        cb,
      })
      path.pop()
      return (ret && ret.break)
    }
    if(Array.isArray(point)){
      for (let index=0; index<point.length; index++){
        if( enterIter(index) )
          break
      }
    }else{
      for (let index in point) {
        if( enterIter(index) )
          break
      }
    }
  }
  cb && (retTemp = cb({ obj, point, depth, parent, index, path, type: "before" }))
  needBreak = needBreak || (retTemp && retTemp.break)
  if (needBreak)
    return { break: true }
}

// function jcb(state) {
//   // if (typeof (state.point) != "object" || state.point == {}) {
//   //   console.dir(state.depth, state.point)
//   // }

//   if (typeof (state.point) == "object") {
//     if (state.type == "after") {
//       console.log(new Array(state.depth + 1).join("  ") +
//         state.index +
//         ":" + (Array.isArray(state.point) ? "[" : "{"))
//     } else {
//       console.log(new Array(state.depth + 1).join("  ") +
//         (Array.isArray(state.point) ? "]," : "},"))
//     }
//   }
// }

// iteration({ obj: replyJson, cb: jcb })

//////////////////////////////////////////
const objToolCreater = function({ obj, cb }) {
  this.obj = obj
  this.cb = cb
  this.iteration = function () {
    iteration({ obj: this.obj, cb: this.cb })
  }
}

module.exports={
  setAttribute,
  iteration,
  objToolCreater,
}