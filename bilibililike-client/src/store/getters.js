//基础属性
export default{
  headImgGetter:function(state,getters){
    return "."+(state.userInfo?state.userInfo.headImg:
      "/static/temp/imgs/bili_default_avatar.png")},
  bigvipGetter:function(state,getters){
    return state.userInfo?state.userInfo.bigvip:false},
  initialState:function(state,getters){
    let vPage=state.videoPage
    // console.log(10,vPage)//getStr)
    // if(vPage=={}||vPage.tid){
    //   return vPage
    // }
    // const startStr= "window.__INITIAL_STATE__="
    // const endStr="if(window.__INITIAL_STATE__"
    // let initState = {}
    // let temp=vPage.indexOf(startStr)
    // let getStr=vPage.slice(temp+startStr.length)
    // temp=vPage.indexOf(endStr)
    // getStr=vPage.slice(0,temp+startStr.length)
    // initState=JSON.parse(getStr)
    // console.log(21,vPage)//getStr)
    // return initState
    
    let urlReplace={re:/^(https?:)?\/\/i(\d)\.hdslb\.com\b/,
                  str:"./static/i0.hdslb.com"}
    if(vPage.reduxAsyncConnect){
      vPage.reduxAsyncConnect.videoInfo.pic=
        vPage.reduxAsyncConnect.videoInfo.pic.replace(
          urlReplace.re,urlReplace.str)
        vPage.reduxAsyncConnect.videoInfo.owner.face=
        vPage.reduxAsyncConnect.videoInfo.owner.face.replace(
          urlReplace.re,urlReplace.str)
    }
    return vPage
  },
}