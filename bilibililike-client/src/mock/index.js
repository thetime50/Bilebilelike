import Mock from "mockjs"
import mockServer from "./mockServer.js"

// 账号密码登录
Mock.mock("/login_pwd",mockServer.login_pwd)
// 获取短信验证码
Mock.mock("/sendcode","post",mockServer.sendcode)
// 手机号验证码登录
Mock.mock("/login_sms",mockServer.login_sms)
// 获取用户信息(根据会话)
Mock.mock("/userinfo",mockServer.userinfo)
// 请求登出
Mock.mock("/logout",mockServer.logout)
// 验证码
Mock.mock(/^\/captcha($|(\?))/,mockServer.captcha)


// export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST')
// export const reqSendCode = phone => ajax(BASE_URL + '/sendcode', {phone}, 'POST')
// export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST')
// export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')
// export const reqLogout = () => ajax(BASE_URL + '/logout')


/* bilibili api mock */
const BLBL_ORIGIN = "/biliapi"                   //mock 或者
const BLBL_API    = BLBL_ORIGIN+"/api"
const BLBL_COMMENT= BLBL_ORIGIN+"/comment"
const BLBL_M      = BLBL_ORIGIN+"/m"

const BLBL_API_PATHS={
  resLoc        : BLBL_API + "/x/web-show/res/loc",             // "?jsonp=jsonp&pf=7&id=1695",
  ranking       : BLBL_API + "/x/web-interface/ranking",        // "?rid=' + rid + '&day=3&jsonp=jsonp",
  videoPage     : BLBL_M   + "/video",                          // "/av"+ av +".html",
  rankingRegion : BLBL_API + "/x/web-interface/ranking/region", // "?rid=" + tid + "&day=7",
  recommendnew  : BLBL_COMMENT + "//recommendnew",              // "," + av,
  reply         : BLBL_API + "/x/v2/reply",                     // "?type=1&sort=2&oid=" + av + "&pn=1&nohot=1",
}

let pathRegExp= function(path){
  return RegExp("^"+path+"\\b")
}

// 首页轮播
// BLBL_API + '/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695'
Mock.mock(pathRegExp(BLBL_API_PATHS.resLoc),        mockServer.resLoc)
// 首页推荐视频
// BLBL_API + '/x/web-interface/ranking?rid=' + rid + '&day=3&jsonp=jsonp'
Mock.mock(pathRegExp(BLBL_API_PATHS.ranking),       mockServer.ranking)
/* 视频页面 */
// 视频页面 用来解析tid
// BLBL_M + "/video/av"+ av +".html"
Mock.mock(pathRegExp(BLBL_API_PATHS.videoPage),     mockServer.videoPage)
// 视频介绍
// BLBL_API + "/x/web-interface/ranking/region?rid=" + tid + "&day=7"
Mock.mock(pathRegExp(BLBL_API_PATHS.rankingRegion), mockServer.rankingRegion)
// 关联视频推荐
// BLBL_COMMENT + "//recommendnew," + av
Mock.mock(pathRegExp(BLBL_API_PATHS.recommendnew),  mockServer.recommendnew)
// 评论
// BLBL_API + "/x/v2/reply?type=1&sort=2&oid=" + av + "&pn=1&nohot=1"
Mock.mock(pathRegExp(BLBL_API_PATHS.reply),         mockServer.reply)



// Mock.mock(/.*/,mockServer.unknownPath)
