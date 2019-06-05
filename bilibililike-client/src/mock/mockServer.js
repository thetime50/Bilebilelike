import Mock from "mockjs"
import mockDb from "./mockDb.js"
import data from "./data.json"
import tool from "../assets/js/tool"

import resLoc from "./data/main/loc.json"
import ranking  from "./data/main/ranking.json"
// import videoPage from "./data"
// import rankingRegion from "./data"
// import recommendnew from "./data"
// import reply from "./data"

import store from '@/store'

var Random=Mock.Random
export default{
  login_pwd(options){
    let captcha=mockDb.get("captcha")
    let loginInfo=JSON.parse(options.body)
    let users=mockDb.get("users","db")
    let i=0,userCheck=false
    for(i=0;i<users.length;i++){
      if(users[i].name==loginInfo.name && users[i].pwd==loginInfo.pwd){
        userCheck=true
        break
      }
    }
    if(loginInfo.captcha==captcha && userCheck){
      mockDb.set("user",users[i])
      return {
        "code": 0,
        "data": {
          "_id": users[i]._id,
          "name": users[i].name,
        }
      }
    }else{
      mockDb.set("user","")
      return {
        "code": 1,
        "msg": "用户名或密码不正确"
      }
    }
  },
  sendcode(options){
    let code=Random.string('number',4)
    let phone=JSON.parse(options.body).phone
    mockDb.set("login_sms",{phone:phone,code:code})
    store.commit('dbgState/setpPhonMsg',code)
    return {code: 0}
  },
  login_sms(options){
    let login_sms_db=JSON.stringify(mockDb.get("login_sms"))
    let loginInfo=JSON.parse(options.body)
    let users=mockDb.get("users","db")
    let i=0,userCheck=false
    for(i=0;i<users.length;i++){
      if(users[i].phone==loginInfo.phone){
        userCheck=true
        break
      }
    }
    if(login_sms_db==options.body && userCheck){
      mockDb.set("user",users[i])
      return {
        "code": 0,
        "data": {
          "_id": users[i]._id,
          "phone": users[i].phone
        }
      }
    }else{
      mockDb.set("user","")
      return {
        "code": 1,
        "msg": "手机号或验证码不正确"
      }
    }
  },
  userinfo(options){
    let session_user=mockDb.get("user")
    if(session_user){
      return {code:0, data: session_user}
    }else{
      return {
        "code": 1,
        "msg": "请先登陆"
      }
    }
  },
  captcha(options){
    let captcha=Random.word(4)
    mockDb.set("captcha",captcha)
    return Random.image('100x50', Random.color(), Random.color(), captcha)
  },
  logout(options){
    mockDb.set("user","")
    return {code: 0}
  },

  // bili api
  resLoc(options){
    return resLoc
  },
  ranking(options){
    return ranking
  },
  videoPage(options){
    return {code:0,data:{test:"videoPage test str"}}
  },
  initialState(options){
    let av=/\/\d{8}$/.exec(options.url)
    if(av){
      av=av[0].slice(1)
      let initial_state=require("./data/video/av"+av+"/initial_state.json")
      return {code:0,data:{...initial_state}}
    }else{
      return {code: 1}
    }
  },
  rankingRegion(options){
    return {code:0,data:{test:"rankingRegion test str"}}
  },
  recommendnew(options){
    let av=/,\d{8}$/.exec(options.url)
    if(av){
      av=av[0].slice(1)
      let recommendnew=require("./data/video/av"+av+"/recommendnew,"+av+".json")
      return {code:0,data:{...recommendnew}}
    }else{
      return {code: 1}
    }
},
  reply(options){
    let pu=tool.parseUrl(options.url)
    let av=pu._querys.oid
    if(av){
      let reply=require("./data/video/av"+av+"/reply.json")
      return {code:0,data:{...reply}}
    }else{
      return {code: 1}
    }
},

  unknownPath(options){
    console.log("unknownPath",options)
  }
}

function initData(){
  let db=mockDb.get("","db")
  if(db==undefined||db.users[0]!=data.users[0]){
    console.log("mockDB init data...")
    //清除session
    mockDb.set("",data,"db")
  }
}
initData()