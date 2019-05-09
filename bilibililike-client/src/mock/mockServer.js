import Mock from "mockjs"
// import mockDb from "./mockDb.js"
import data from "./data.json"
var Random=Mock.Random
export default{
  userinfo(options){
    return {code:0, data: Random.name()}
  },
  captcha(options){
    return Random.image('100x50', Random.color(), Random.color(), Random.word(4))
  }
}