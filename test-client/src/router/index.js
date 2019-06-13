import Vue from 'vue'
import Router from 'vue-router'

const TestMainPage = () => import("../pages/TestMainPage/TestMainPage.vue")
const Test1  = () => import("../pages/Test1/Test1.vue")
const Test2  = () => import("../pages/Test2/Test2.vue")
const Test3  = () => import("../pages/Test3/Test3.vue")
import DefPage from "../pages/DefPage/DefPage.vue"
import AnimeTest from "../pages/AnimeTest/AnimeTest.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/testmainpage'
    },
    {
      path: '/testmainpage',
      component: TestMainPage,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/test1',
      component: Test1,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/test2',
      component: Test2,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/test3',
      component: Test3,
      meta: {
        showFooter: true
      }
    },{
      path: '/defpage',
      component: DefPage,
      meta: {
      }
    },{
      path: '/animetest',
      component: AnimeTest,
      meta: {
      }
    },
  ]
})
