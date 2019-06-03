/*
originConf.js
*/
// export const BASE_URL = 'http://local:4000'
export const BASE_URL = ''//'/api'

// export const BLBL_ORIGIN = 'https://zeromake.com:8086' //代理服务台服务器 发布用
// export const BLBL_ORIGIN = 'http://192.168.31.6:8088'  //proxy-bilibili本地代理 调试用
export const BLBL_ORIGIN = "/biliapi"                  //mock 或者 VUE代理 调试用 上面这条可以用 这不需要了
export const BLBL_API    = BLBL_ORIGIN+"/api"
export const BLBL_COMMENT= BLBL_ORIGIN+"/comment"
export const BLBL_M      = BLBL_ORIGIN+"/mbilibili"
