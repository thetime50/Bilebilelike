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

const getAttribute = function (obj, attrPath,type=0) {
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
const replacesStrAttribute = function(obj,attrPath,replace){
  let paths=[],point=obj,i=0
  if(typeof attrPath === "string")
    paths=attrPath.split('.')
  else if(typeof attrPath === "array")
    paths=attrPath
  for(i=0;i< paths.length-1;i++){
    if(point[paths[i]]===undefined)
      return
    point=point[paths[i]]
  }
  if(point[paths[i]])
    point[paths[i]]=point[paths[i]].replace(replace.re,replace.str)
}

export const assetsUrlProxy = function (url, orgData, proxyRewrites) {
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

const IN_HDSLB_REPL={
  re:/^(https?:)?\/\/i(\d)\.hdslb\.com\b/ ,
  str:BLBL_ORIGIN + '/i$2hdslb',
}

/**
 * 首页轮播
 */
export const proxyResLoc = async function (url = '', data = {}, type = 'GET') {
  let orgData = await ajax(url, data, type)
  // url orgData proxyRewrite
  assetsUrlProxy(url,orgData,[//list path array
    {
      listPath:"data",//list path
      replaces:[//attrPath re str list
        {
          attrPath:"pic",
          ...IN_HDSLB_REPL,
        }
      ]
    }
  ])
  return orgData
}
/**
 * 首页推荐视频
 */
export const proxyRanking = async function (url = '', data = {}, type = 'GET') {
  let orgData = await ajax(url, data, type)
  // url orgData proxyRewrite
  assetsUrlProxy(url,orgData,[{
    listPath:"data.list",
    replaces:[{
      attrPath:"pic",
      ...IN_HDSLB_REPL,
    }]
  }])
  return orgData
}
/**
 * 视频页面 用来解析tid
 */
export const proxyVideoPage = async function (url = '', data = {}, type = 'GET') {
  // console.log(url)
  let orgData = await ajax(url, data, type)
  if(/^https?:\/\//.test(url)){
    return {code:0,data:{...orgData}}
  }else{
    return orgData
  }
}
/**
 * 视频介绍(介绍在page里边，这个暂时没有用)
 */
export const proxyRankingRegion = async function (url = '', data = {}, type = 'GET') {
  let orgData = await ajax(url, data, type)
  //
  return orgData
}
/**
 * 关联视频推荐
 */
export const proxyRecommendnew = async function (url = '', data = {}, type = 'GET') {
  let orgData = await ajax(url, data, type)
  // url orgData proxyRewrite
  assetsUrlProxy(url,orgData,[{
    listPath:"data",
    replaces:[{
      attrPath:"pic",
      ...IN_HDSLB_REPL,
    },{
      attrPath:"owner.face",
      ...IN_HDSLB_REPL,
    }]
  }])
  return orgData
}
/**
 * 评论
 */
export const proxyReply = async function (url = '', data = {}, type = 'GET') {
  let orgData = await ajax(url, data, type)
  // url orgData proxyRewrite
  assetsUrlProxy(url,orgData,[{
    listPath:"data.replies",
    replaces:[{
        attrPath:"member.avatar",
        ...IN_HDSLB_REPL,
    },{
      attrPath:"member.pendant.image",
      ...IN_HDSLB_REPL,
    },{
      attrPath:"member.nameplate.image",
      ...IN_HDSLB_REPL,
    },{
      attrPath:"member.nameplate.image_small",
      ...IN_HDSLB_REPL,
    }]
  }])
  return orgData
}