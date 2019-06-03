<template>
  <div id="app">
    <!-- <p style="color : #fb7299 ; font-size : 25px"><b>Hello Bilibililike </b></p>
    <div><i class="iconfont icon-pindao" style="font-size:100px;color:#fb7299"></i></div> -->
    <DbgMsg/>
    <left-menu-drawer></left-menu-drawer>
    <div class="app-sticky-scroll-contain">
      <StickyScroll>
        <template>
          <router-view/>
        </template>
        <template v-slot:sticky>
          <div class="app-nav-list" ref="app-nav-list">
            <NavList v-if="nav_enable"
              :nowIndex="nav_nowIndex"
              :cursorWidth="nav_cursorWidth"
              :positionSync="nav_positionSync"
              :routes="nav_routes"/>
          </div>
        </template>
      </StickyScroll>
    </div>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import {mapState} from "vuex"
import tool from "./assets/js/tool"

import LeftMenuDrawer from "./components/LeftMenuDrawer/LeftMenuDrawer.vue"
import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
import DbgMsg from "./components/DbgMsg/DbgMsg.vue"
import NavList from "./components/RouteScroll/Nav.vue"
import StickyScroll from "./components/StickyScroll/StickyScroll.vue"

export default {
  name: 'App',
  components: {
    LeftMenuDrawer,
    FooterGuide,
    DbgMsg,
    NavList,
    StickyScroll,
  },
  mounted () {
  },
  computed:{
    ...mapState("navState",[
      "nav_enable",
      "nav_nowIndex",
      "nav_cursorWidth",
      "nav_positionSync",
      "nav_routes",
    ]),
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
  .app-sticky-scroll-contain
    overflow hidden
    top 0
    bottom $footer-guide-height
    width 100%
    position absolute
    .app-nav-list
      position absolute
      top $header-top-height
      width 100%
      background-color #fff
</style>

