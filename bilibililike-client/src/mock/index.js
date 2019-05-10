import Mock from "mockjs"
import mockServer from "./mockServer.js"

// // 账号密码登录
// Mock.mock("/login_pwd",mockServer.userinfo)
// 获取短信验证码
Mock.mock("/sendcode","post",mockServer.sendcode)
// // 手机号验证码登录
Mock.mock("/login_sms",mockServer.login_sms)
// 获取用户信息(根据会话)
Mock.mock("/userinfo",mockServer.userinfo)
// // 请求登出
// Mock.mock("/logout",mockServer.userinfo)

Mock.mock(/^\/captcha($|(\?))/,mockServer.captcha)

// Mock.mock(/.*/,mockServer.unknownPath)


// export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST')
// export const reqSendCode = phone => ajax(BASE_URL + '/sendcode', {phone}, 'POST')
// export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST')
// export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')
// export const reqLogout = () => ajax(BASE_URL + '/logout')

