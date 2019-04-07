import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Activity from "../pages/Activity/Activity.vue"
import Channel from "../pages/Channel/Channel.vue"
import MainPage from "../pages/MainPage/MainPage.vue"
import Shop from "../pages/Shop/Shop.vue"


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/mainpage'
    },
    {
      path: '/activity',
      component: Activity,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/channel',
      component: Channel,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/mainpage',
      component: MainPage,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shop',
      component: Shop,
      meta: {
        showFooter: true
      }
    },
  ]
})
