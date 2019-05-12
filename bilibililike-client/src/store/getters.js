//基础属性
export default{
  userInfoGetter:(state,getters)=>{
    return state.userInfo?JSON.parse(state.userInfo):""
  },
  headImgGetter:function(state,getters){
    return (getters.userInfoGetter?getters.userInfoGetter.headImg:
      "/static/temp/imgs/bili_default_avatar.png")},
  bigvipGetter:function(state,getters){
    return getters.userInfoGetter?getters.userInfoGetter.bigvip:false}
}