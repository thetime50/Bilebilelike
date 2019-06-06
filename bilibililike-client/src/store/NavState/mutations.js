/*
\store\NavState\mutations.js
*/
//更新state
import {
  SET_NAV_STATE,
  SET_NAV_ENABLE,
  SET_NAV_NOW_INDEX,
  SET_NAV_CURSOR_WIDTH,
  SET_NAV_POSITION_SYNC,
  SET_NAV_TITLES,
  SET_NAV_STYLE,
  SET_NAV_CHANGE,
} from './mutation-types'
 
export default{
  [SET_NAV_STATE](state, states){
    let keys=Object.keys(state)
    for(let item in states){
      if(keys.indexOf(item)>=0){
        if(Array.isArray(state[item])){
          state[item]=[...states[item]]
        }else if(typeof(state[item])=="object"){
          state[item]={...states[item]}
        }else{
          state[item]=states[item]
        }
      }
    }
  },
  [SET_NAV_ENABLE] (state, nav_enable) {
    state.nav_enable = nav_enable
  },
  [SET_NAV_NOW_INDEX] (state, nav_nowIndex) {
    state.nav_nowIndex = nav_nowIndex
  },
  [SET_NAV_CURSOR_WIDTH] (state, nav_cursorWidth) {
    state.nav_cursorWidth = nav_cursorWidth
  },
  [SET_NAV_POSITION_SYNC] (state, nav_positionSync) {
    state.nav_positionSync = nav_positionSync
  },
  [SET_NAV_TITLES] (state, nav_titles) {
    state.nav_titles = [...nav_titles]
  },
  [SET_NAV_STYLE] (state, nav_style) {
    state.nav_style = [...nav_style]
  },
  [SET_NAV_CHANGE] (state, nav_change) {
    state.nav_change = [...nav_change]
  },
}