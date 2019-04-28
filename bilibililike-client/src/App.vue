<template>
  <div id="app">
    <!-- <p style="color : #fb7299 ; font-size : 25px"><b>Hello Bilibililike </b></p>
    <div><i class="iconfont icon-pindao" style="font-size:100px;color:#fb7299"></i></div> -->
    <left-menu-drawer></left-menu-drawer>
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import LeftMenuDrawer from "./components/LeftMenuDrawer/LeftMenuDrawer.vue"
import FooterGuide from "./components/FooterGuide/FooterGuide.vue"

export default {
  name: 'App',
  components: {
    LeftMenuDrawer,
    FooterGuide
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
