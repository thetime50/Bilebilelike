<template>
  <div id="app">
    <!-- <p style="color : #fb7299 ; font-size : 25px"><b>Hello Bilibililike </b></p>
    <div><i class="iconfont icon-pindao" style="font-size:100px;color:#fb7299"></i></div> -->
    <DbgMsg/>
    <left-menu-drawer></left-menu-drawer>
    <div class="app-router-view-contain" :class="{'show-footer':$route.meta.showFooter}">
      <router-view/>
    </div>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import tool from "./assets/js/tool"

import LeftMenuDrawer from "./components/LeftMenuDrawer/LeftMenuDrawer.vue"
import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
import DbgMsg from "./components/DbgMsg/DbgMsg.vue"

export default {
  name: 'App',
  components: {
    LeftMenuDrawer,
    FooterGuide,
    DbgMsg,
  },
  mounted () {
  },
  methods: {
  },
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

<style lang="stylus"  rel="stylesheet/stylus">
@import "./assets/style/index.styl"

@keyframes animated_div {
  0%		{transform: rotate(0deg);}
  100%		{transform: rotate(360deg);}
}

img
  &[lazy=loading]//居中
    width 2.5rem
    animation:animated_div 2s infinite linear;
    -moz-animation:animated_div 2s infinite linear;
    -webkit-animation:animated_div 2s infinite linear;
    -o-animation:animated_div 2s infinite linear;
  // &[lazy=error]//居中
  //   //
  // &[lazy=loaded]
  //   //
#app
  position relative
  height 100%
  .app-router-view-contain
    overflow hidden
    top 0
    bottom 0
    width 100%
    position absolute
    &.show-footer
      bottom $footer-guide-height
</style>

