//更新state
import {
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
} from './mutation-types'
 
export default{
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = ""
  },
}