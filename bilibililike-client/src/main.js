// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './assets/style/main-index.styl'

import vueTouch from 'vue-touch'
import vueLazyload from 'vue-lazyload'
import loadingImg from './assets/imgs/sobot_dialog_load_1.png'
import errorImg from './assets/imgs/img_tips_error_banner_tv.png'
// import loadingImg from './assets/imgs/loading.gif'

Vue.config.productionTip = false

Vue.use(vueTouch)

Vue.use(vueLazyload, {
  preLoad: 1.3,
  loading:loadingImg,
  error: errorImg,//loadingImg,//
  attempt: 5,
  // throttleWait:4000000
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
