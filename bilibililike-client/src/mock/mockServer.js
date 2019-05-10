import Mock from "mockjs"
import mockDb from "./mockDb.js"
import data from "./data.json"

import store from '@/store'

var Random=Mock.Random
export default{
  sendcode(options){
    let phon_captcha=Random.string('number',4)
    mockDb.set("phon_captcha",phon_captcha)
    store.commit('dbgState/setpPhonMsg', '验证码：'+phon_captcha)
    return {code: 0}
  },
  login_sms(options){
    let s_code=mockDb.get("phon_captcha")
    if(JSON.parse(options.body).code==s_code)
      return {code: 0}
    else
      return {code: 1}
  },
  userinfo(options){
    return {code:0, data: Random.name()}
  },
  captcha(options){
    return Random.image('100x50', Random.color(), Random.color(), Random.word(4))
  },
  unknownPath(options){
    console.log("unknownPath",options)
  }
}