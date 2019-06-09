/*
assert.js
*/

/* 功能性测试 */

const assert = require("assert")
const { iteration,objToolCreater } = require("./obj_test.js")

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
  d:{
    p:"ppp",q:"qqq"
  }
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

console.log("iterationTest_1()")
putResult(iterationTest_1())
assert.strictEqual(iterationTest_1(), 
  "1 a: 123\r\n" +
  "1 b: 456\r\n" +
  "2 c/x: 233\r\n" +
  "3 c/y/m: 666\r\n" +
  "3 c/y/n: 777\r\n" +
  "2 d/p: ppp\r\n" +
  "2 d/q: qqq\r\n"
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

console.log("iterationTest_2()")
putResult(iterationTest_2())
assert.strictEqual(iterationTest_2(), 
  "1 a: 123\r\n" +
  "1 b: 456\r\n" +
  "2 c/x: 233\r\n" +
  "2 d/p: ppp\r\n" +
  "2 d/q: qqq\r\n"
);

