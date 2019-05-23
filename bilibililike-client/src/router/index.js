import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// import Activity from "../pages/Activity/Activity.vue"
// import Channel from "../pages/Channel/Channel.vue"
// import MainPage from "../pages/MainPage/MainPage.vue"
// import Shop from "../pages/Shop/Shop.vue"

const Activity = () => import("../pages/Activity/Activity.vue")
const Channel  = () => import("../pages/Channel/Channel.vue")
const MainPage = () => import("../pages/MainPage/MainPage.vue")
const Shop     = () => import("../pages/Shop/Shop.vue")

import Zhibo    from "@/pages/MainPage/Zhibo/Zhibo.vue"
import Tuijian  from "@/pages/MainPage/Tuijian/Tuijian.vue"
import Remen    from "@/pages/MainPage/Remen/Remen.vue"
import Zhuifan  from "@/pages/MainPage/Zhuifan/Zhuifan.vue"
import Yingshi  from "@/pages/MainPage/Yingshi/Yingshi.vue"


import Game from "../pages/Game/Game.vue"
import OfflineCache from "../pages/OfflineCache/OfflineCache.vue"
import Message from"../pages/Message/Message.vue"
import Search from"../pages/Search/Search.vue"
import DefPage from"../pages/DefPage/DefPage.vue"
import Login from"../pages/Login/Login.vue"
import MyPage from"../pages/MyPage/MyPage.vue"


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/mainpage'
    },
    {
      path: '/activity',
      component: Activity,
      meta: {showFooter: true},
    },
    {
      path: '/channel',
      component: Channel,
      meta: {showFooter: true},
    },
    {
      path: '/mainpage',
      redirect: '/mainpage/tuijian',
      component: MainPage,
      // meta: {showFooter: true},
      children: [{
        path: '/mainpage/zhibo',
        component: Zhibo,
        meta: {showFooter: true},
      },
      {
        path: '/mainpage/tuijian',
        component: Tuijian,
        meta: {showFooter: true},
      },
      {
        path: '/mainpage/remen',
        component: Remen,
        meta: {showFooter: true},
      },
      {
        path: '/mainpage/zhuifan',
        component: Zhuifan,
        meta: {showFooter: true},
      },
      {
        path: '/mainpage/yingshi',
        component: Yingshi,
        meta: {showFooter: true},
      },]
    },
    {
      path: '/shop',
      component: Shop,
      meta: {showFooter: true},
    },
    {
      path: '/game',
      component: Game,
      meta: {
      }
    },
    {
      path: '/offlinecache',
      component: OfflineCache,
      meta: {
      }
    },
    {
      path: '/message',
      component: Message,
      meta: {
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
      }
    },
    {
      path: '/defpage',
      component: DefPage,
      meta: {
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
      }
    },
    {
      path: '/mypage',
      component: MyPage,
      meta: {
      }
    },
  ]
})
