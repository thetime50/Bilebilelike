/* 
proxyApi.js
*/
import ajax from './ajax.js'
import {
  BLBL_ORIGIN,
  BLBL_API,
  BLBL_COMMENT,
  BLBL_M,
} from './originConf.js'

let getAttribute = function (obj, attrPath,type=0) {
  let attr=obj
  let paths=[]
  if(typeof attrPath === "string")
    paths=attrPath.split('.')
  else if(typeof attrPath === "array")
    paths=attrPath
  for(let i=0;i<paths.length;i++){
    if(attr[paths[i]]!=undefined){//存在属性
      attr=attr[paths[i]]
    }else{
      if(type==0){
        attr=attr[paths[i]]//undefined
        break
      }else{
        attr[paths[i]]=i<paths.length-1?{}:undefined
        attr=attr[paths[i]]
      }
    }
  }
  return attr
}
function replacesStrAttribute(obj,attrPath,replace){
  let paths=[],point=obj,i=0
  if(typeof attrPath === "string")
    paths=attrPath.split('.')
  else if(typeof attrPath === "array")
    paths=attrPath
  for(i=0;i< paths.length-1;i++){
    if(point[paths[i]]===undefined)
      point[paths[i]]={}
    point=point[paths[i]]
  }
  point[paths[i]]=point[paths[i]].replace(replace.re,replace.str)
  return obj
}

let assetsUrlProxy = function (url, orgData, proxyRewrites) {
  if (/^https?:\/\//.test(url) && orgData.code == 0) {
    //proxyRewrites[m]
    //数据里的多个列表
    proxyRewrites.forEach((rewrite, index, arr) => {
      let list=getAttribute(orgData,rewrite.listPath)
      //orgData[proxyRewrites[m].listPath][n]
      //列表里的数据
      list.forEach((item,index,arr)=>{
        //proxyRewrites[m].replaces[o]
        //replace替换规则列表 attrPath - re - str
        rewrite.replaces.forEach((replace,index,arr)=>{
          replacesStrAttribute(item,replace.attrPath,replace)
        })
      })
    })
  }
  // return orgData
}

/**
 * 首页轮播
 */
export const proxyResLoc = async function (url = '', data = {}, type = 'GET') {
  let orgData = await ajax(url, data, type)
  if (/^https?:\/\//.test(url) && orgData.code == 0) {
    // url orgData proxyRewrite
    //list paths
    //attribute path list
    //re str list
    orgData.data.forEach((item, index, arr) => {
      item.pic = item.pic.replace(/http:\/\/i(\d)\.hdslb\.com\b/, BLBL_ORIGIN + '/i$1hdslb')
    });
  }
  return orgData
}
/**
 * 首页推荐视频
 */
export const proxyRanking = async function (url = '', data = {}, type = 'GET') {
  //
}
/**
 * 视频页面 用来解析tid
 */
export const proxyVideoPage = async function (url = '', data = {}, type = 'GET') {
  //
}
/**
 * 视频介绍
 */
export const proxyRankingRegion = async function (url = '', data = {}, type = 'GET') {
  //
}
/**
 * 关联视频推荐
 */
export const proxyRecommendnew = async function (url = '', data = {}, type = 'GET') {
  //
}
/**
 * 评论
 */
export const proxyReply = async function (url = '', data = {}, type = 'GET') {
  //
}