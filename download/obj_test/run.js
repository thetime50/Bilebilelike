/*
run.js
*/
const fs = require('fs')
const {
  setAttribute,
  iteration,
  objToolCreater } = require("./obj_test.js")
const replyJson =require("./reply")

function objToolCreaterTest_1() {
  let objtool = new objToolCreater({ obj: replyJson })
  objtool.tree = {}
  objtool.tree.obj = {}
  objtool.tree.point = objtool.tree.obj
  // objtool.tree.path path是共用的
  objtool.tree.pathObj = [objtool.tree.point]
  objtool.tree.lastPathObj = (n = 0) => objtool.tree.pathObj[objtool.tree.pathObj.length - 1 - n]

  objtool.cb = function (state) {
    let treeIndex=Array.isArray(state.parent)?0:state.index
    if (state.path.length == 0)
      return
    if (state.type == "after") {
      if (objtool.tree.lastPathObj()[treeIndex] == undefined) {
        if (Array.isArray(state.point)) {
          objtool.tree.lastPathObj()[treeIndex] = []
        } else if (typeof (state.point) == "object") {
          objtool.tree.lastPathObj()[treeIndex] = {}
        } else {
          objtool.tree.lastPathObj()[treeIndex]=state.point
        }
      }
      objtool.tree.pathObj.push(
        objtool.tree.lastPathObj()[treeIndex]
      )
    } else if (state.type == "before") {
      objtool.tree.pathObj.pop()
    }
  }
  objtool.iteration()
  return objtool.tree.obj
}

console.log("- objToolCreaterTest_1()")
var temp = {
  time: new Date().toLocaleTimeString(), 
  extract:objToolCreaterTest_1()
}

fs.writeFile(__dirname+"/out.json",
  JSON.stringify(temp),
  {flag:'w'},
  (err)=>{console.log("writeFile:", err)})



console.log(process.cwd()) // 当前执行程序(命令行)的路径
console.log(__dirname) // 代码存放的位置
console.log(process.execPath) // 当前执行的node路径（如：/bin/node）
