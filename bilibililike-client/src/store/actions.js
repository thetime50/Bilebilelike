//通过mutation更新state
import {
  reqUserInfo,
  reqLogout,
  reqResLoc,
  reqRegion,
  reqVideoPage,
  reqRankingRegion,
  reqRecommendnew,
  reqReply,
} from '../api'
 import {
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  BLBI_RES_LOC,
  BLBI_REGION,
  BLBI_VIDEO_PAGE,
  BLBI_RANKING_REGION,
  BLBI_RECOMMENDNEW,
  BLBI_REPLY,
} from './mutation-types'
 
 export default{
  // 同步记录用户信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  // 异步获取用户信息
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },
  // 异步登出
  async logout ({commit}) {
    const result = await reqLogout()
    if (result.code === 0) { commit(RESET_USER_INFO) }
  },

  // 获取首页轮播数据
  async getResLoc({commit}){
    const result = await reqResLoc()
    if (result.code === 0) {
      const resLoc = result.data
      commit(BLBI_RES_LOC, {resLoc})
    }
  },
  // 获取首页推荐数据
  async getRegion({commit}){
    const result = await reqRegion()
    if (result.code === 0) {
      const region = result.data
      commit(BLBI_REGION, {region})
    }
  },
  // 获取视频页面
  async getVideoPage({commit},av,callback){
    const result = await reqVideoPage(av)
    if (result.code === 0) {
      const videoPage = result.data
      commit(BLBI_VIDEO_PAGE, {videoPage})
      callback && callback()
    }
  },
  // 获取视频页介绍
  async getRankingRegion({commit},tid,callback){
    const result = await reqRankingRegion(tid)
    if (result.code === 0) {
      const rankingRegion = result.data
      commit(BLBI_RANKING_REGION, {rankingRegion})
      callback && callback()
    }
  },
  // 获取视频页关联视频推荐
  async getRecommendnew({commit},av,callback){
    const result = await reqRecommendnew(av)
    if (result.code === 0) {
      const recommendnew = result.data
      commit(BLBI_RECOMMENDNEW, {recommendnew})
      callback && callback()
    }
  },
  // 获取视频页评论
  async getReply({commit},av,callback){
    const result = await reqReply(av)
    if (result.code === 0) {
      const reply = result.data
      commit(BLBI_REPLY, {reply})
      callback && callback()
    }
  },
}