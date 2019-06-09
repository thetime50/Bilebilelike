/*
assert.js
*/

/* 功能性测试 */

const assert = require("assert")
const { iteration,objToolCreater } = require("./obj_test.js")


var obja = {
  a: 123, b: 456,
  c: {
    x: 233,
    y: {
      m: "666", n: "777"
    }
  }
}

function iterationTest_1() {
  let str = ""
  let cb = function (state) {
    if (state.type == "after") {
      str = str + state.path.join("/") + "\r\n"
    }
  }
  iteration({ obj: obja, cb})
  return str
}


// assert.strictEqual(iterationTest_1, 0);
console.log("iterationTest_1()")
console.log(iterationTest_1())
