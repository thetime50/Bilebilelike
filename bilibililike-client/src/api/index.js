/*
与后台交互模块
 */
import ajax from './ajax.js'
import {
  BASE_URL,
  BLBL_ORIGIN,
  BLBL_API,
  BLBL_COMMENT,
  BLBL_M,
} from './originConf.js'
import {
  proxyResLoc,
  proxyRanking,
  proxyVideoPage,
  proxyRankingRegion,
  proxyRecommendnew,
  proxyReply,
} from './proxyApi.js'

/**
 * 账号密码登录
 */
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST')
/**
 * 获取短信验证码
 */
export const reqSendCode = phone => ajax(BASE_URL + '/sendcode', {phone}, 'POST')
/**
 * 手机号验证码登录
 */
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST')
/**
 * 获取用户信息(根据会话)
 */
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')
/**
 * 请求登出
 */
export const reqLogout = () => ajax(BASE_URL + '/logout')
/**
 * 获取一次性验证码
 */
export const reqCaptcha = () => ajax(BASE_URL + '/captcha?time=' + {time:Date.now()})

/******************/
/*  BiliBili API  */
/******************/
/* 首页 */
/**
 * 首页轮播
 */
export const reqResLoc = () => proxyResLoc(BLBL_API + '/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695')
/**
 * 首页推荐视频
 */
export const reqRanking = (rid=0) => proxyRanking(BLBL_API + '/x/web-interface/ranking?rid=' + rid + '&day=3&jsonp=jsonp')
/* 视频页面 */
/**
 * 视频页面 用来解析tid
 */
export const reqVideoPage = (av) => reqInitialState(av)//{return {}}//ajax(BLBL_M + "/video/av"+ av +".html")//
/**
 * 视频页面tid (获取mock的initial state数据)
 */
export const reqInitialState = (av) => ajax(BLBL_M   + "/video/initial_state/"+av)
/**
 * 视频介绍
 */
export const reqRankingRegion = (tid) => ajax(BLBL_API + "/x/web-interface/ranking/region?rid=" + tid + "&day=7")
/**
 * 关联视频推荐
 */
export const reqRecommendnew = (av) => ajax(BLBL_COMMENT + "//recommendnew," + av)
/**
 * 评论
 */
export const reqReply = (av) => ajax(BLBL_API + "/x/v2/reply?type=1&sort=2&oid=" + av + "&pn=1&nohot=1")
