/*
assert.js
*/

/* 功能性测试 */

const assert = require("assert")
const {
  setAttribute,
  iteration,
  objToolCreater } = require("./obj_test.js")

function putResult(){
  // console.log(...arguments)
}

var obja = {
  a: 123, b: 456,
  c: {
    x: 233,
    y: {
      m: "666", n: "777"
    }
  },
  d:[
    {p:"ppp0",q:"qqq0"},
    {p:"ppp1",q:"qqq1"},
    {p:"ppp2",q:"qqq2"},
  ]
}

function iterationTest_1() {
  let str = ""
  let cb = function (state) {
    if (state.type == "after") {
      if (typeof (state.point) != "object" || state.point == {} ||
        Array.isArray(state.point) && state.point.lenght==0) {
        str = str + 
        state.depth + " " +
        state.path.join("/") + ": " +
        state.point + "\r\n"
      }
    }
  }
  iteration({ obj: obja, cb})
  return str
}

console.log("- iterationTest_1()")
putResult(iterationTest_1())
assert.strictEqual(iterationTest_1(), 
  "1 a: 123\r\n" +
  "1 b: 456\r\n" +
  "2 c/x: 233\r\n" +
  "3 c/y/m: 666\r\n" +
  "3 c/y/n: 777\r\n" +
  "3 d/0/p: ppp0\r\n" +
  "3 d/0/q: qqq0\r\n" +
  "3 d/1/p: ppp1\r\n" +
  "3 d/1/q: qqq1\r\n" +
  "3 d/2/p: ppp2\r\n" +
  "3 d/2/q: qqq2\r\n"
);


function iterationTest_2() {
  let str = ""
  let cb = function (state) {
    if (state.type == "after") {
      if (typeof (state.point) != "object" || state.point == {} ||
        Array.isArray(state.point) && state.point.lenght==0) {
        str = str + 
        state.depth + " " +
        state.path.join("/") + ": " +
        state.point + "\r\n"

        if(state.point==233)
          return {break:true}
      }
    }
  }
  iteration({ obj: obja, cb})
  return str
}

console.log("- iterationTest_2()")
putResult(iterationTest_2())
assert.strictEqual(iterationTest_2(), 
  "1 a: 123\r\n" +
  "1 b: 456\r\n" +
  "2 c/x: 233\r\n" +
  "3 d/0/p: ppp0\r\n" +
  "3 d/0/q: qqq0\r\n" +
  "3 d/1/p: ppp1\r\n" +
  "3 d/1/q: qqq1\r\n" +
  "3 d/2/p: ppp2\r\n" +
  "3 d/2/q: qqq2\r\n"
);

function setAttributeTeat(){
  return JSON.stringify(
    setAttribute({},"a.b.c[12].d[0][3].c",4)
  )
}
console.log("- setAttributeTeat()")
putResult(setAttributeTeat())
assert.strictEqual(setAttributeTeat(), 
  '{"a":{"b":{"c":'+
    '[null,null,null,null,null,null,null,null,null,null,null,null,'+
      '{"d":[null,null,null,{"c":4}]}]'+
  '}}}')

function objToolCreaterTest_1(){
  //一比一复制测试
  let objtool = new objToolCreater({ obj: obja })
  objtool.tree = {}
  objtool.tree.obj = {}
  objtool.tree.point = objtool.tree.obj
  // objtool.tree.path path是共用的
  objtool.tree.pathObj = [objtool.tree.point]
  objtool.tree.lastPathObj = (n=0)=>objtool.tree.pathObj[objtool.tree.pathObj.length-1-n]

  objtool.cb = function (state) {
    if(state.path.length==0)
      return
    if(state.type == "after") {
      if(objtool.tree.lastPathObj()[state.index]==undefined){
        if(Array.isArray( state.point )){
          objtool.tree.lastPathObj()[state.index]=[]
        }else if(typeof(state.point)=="object"){
          objtool.tree.lastPathObj()[state.index]={}
        }else{
          objtool.tree.lastPathObj()[state.index]=state.point
        }
      }
      objtool.tree.pathObj.push(
        objtool.tree.lastPathObj()[state.index]
      )
    } else if(state.type == "before") {
      objtool.tree.pathObj.pop()
    }
  }
  objtool.iteration()
  return [JSON.stringify(objtool.obj),JSON.stringify(objtool.tree.obj)]
}

console.log("- objToolCreaterTest_1()")
var temp=objToolCreaterTest_1()
putResult(temp[0],"\r\n",temp[1])
assert.strictEqual(...objToolCreaterTest_1())
