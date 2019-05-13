//基础属性
export default{
  headImgGetter:function(state,getters){
    return "../../.."+(state.userInfo?state.userInfo.headImg:
      "/static/temp/imgs/bili_default_avatar.png")},
  bigvipGetter:function(state,getters){
    return state.userInfo?state.userInfo.bigvip:false}
}