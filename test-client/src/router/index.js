import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage/MainPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/mainpage'
    },
    {
      path: '/mainpage',
      name: 'MainPage',
      component: MainPage
    }
  ]
})
