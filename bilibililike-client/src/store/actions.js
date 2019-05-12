//通过mutation更新state
import {
  reqUserInfo,
  reqLogout,
 } from '../api'
 import {
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
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
}