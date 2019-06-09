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
    for (let index in point) {
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
      if (ret && ret.break)
        break
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

// var objtool = new objToolCreater({ obj: replyJson })
// objtool.tree.obj = {}
// objtool.tree.point = objtool.tree.obj
// objtool.cb = function (state) {

// }


module.exports={
  iteration,
  objToolCreater,
}