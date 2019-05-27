/*
与后台交互模块
 */
import ajax from './ajax.js'
// const BASE_URL = 'http://local:4000'
const BASE_URL = ''//'/api'

// const BLBL_ORIGIN = 'https://zeromake.com:8086' //代理服务台服务器 发布用
const BLBL_ORIGIN = 'http://192.168.31.6:8088'  //proxy-bilibili本地代理 调试用
// const BLBL_ORIGIN = "/biliapi"                   //VUE代理 调试用 上面这条可以用 这不需要了
const BLBL_API    = BLBL_ORIGIN+"/api"
const BLBL_COMMENT= BLBL_ORIGIN+"/comment"

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
/**
 * 首页推荐视频
 */
export const reqRegion = (rid=0) => ajax(BLBL_API + '/x/web-interface/ranking?rid=' + rid + '&day=3&jsonp=jsonp')
