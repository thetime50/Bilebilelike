import Vue from "vue"
import Vuex from "vuex"

import state from "./state.js"
import mutations from "./mutations.js"
import actions from "./actions.js"
import getters from "./getters.js"

import navState from "./NavState"

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    navState,
    localState:{
      namespaced:true,
      state:{
        leftMenuState:{
          enable:false,
          show:false,
        }
      },
      mutations:{
        setLeftMenuState_enable (state,en){
          state.leftMenuState.enable=en
        },
        setLeftMenuState_show (state,sh){
          state.leftMenuState.show=sh
        },
      },
    },

    dbgState:{
      namespaced:true,
      state:{
        phonMsg:"",
      },
      mutations:{
        setpPhonMsg (state,msg){
          state.phonMsg=msg
        },
      },
    }
  }
})