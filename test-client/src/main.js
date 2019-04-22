// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/style/main-index.styl'

import VueTouch from 'vue-touch'
// import VueTouchjs from 'vue-touchjs'
//VueTouch
Vue.use(VueTouch,{name:"v-touch"})
// VueTouch.config.swipe = {
//   threshold: 4 //这玩意好像没有用哎，也不知道其他的参数设置
// }
// console.log(VueTouch.config.swipe.threshold)
//VueTouchjs
// Vue.use(VueTouchjs,{name:"v-touchjs"})

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

// require styles
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
