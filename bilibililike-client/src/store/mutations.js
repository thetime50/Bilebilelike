//更新state
import {
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  BLBI_RES_LOC,
  BLBI_RANKING,
  BLBI_VIDEO_PAGE,
  BLBI_RANKING_REGION,
  BLBI_RECOMMENDNEW,
  BLBI_REPLY,
} from './mutation-types'
 
export default{
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = {...userInfo}
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = ""
  },
  [BLBI_RES_LOC] (state, {resLoc}) {
    state.resLoc = {...resLoc}
  },
  [BLBI_RANKING] (state, {ranking}) {
    state.ranking = {...ranking}
  },
  [BLBI_VIDEO_PAGE] (state, {videoPage}) {
    state.videoPage = {...videoPage}
  },
  [BLBI_RANKING_REGION] (state, {rankingRegion}) {
    state.rankingRegion = {...rankingRegion}
  },
  [BLBI_RECOMMENDNEW] (state, {recommendnew}) {
    state.recommendnew = {...recommendnew}
  },
  [BLBI_REPLY] (state, {reply}) {
    state.reply = {...reply}
  },
}