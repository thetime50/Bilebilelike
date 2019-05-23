<template>
<div class="main-page">
  <header-top left-icon-type="leftMenu">
    <template>
      <div class="heater-v-slot">
        <router-link class="m-search" :to="{path:'/search',query:{page:'MainPage'}}"><!-- search -->
          <div class="search-back-div">
            <i class="iconfont icon-sousuo"></i>
          </div>
        </router-link>
        <router-link class="m-game" :to="'/game'"><!-- game -->
          <i class="iconfont icon-youxifull"></i>
        </router-link>
        <router-link class="m-offline-cache" :to="'/offlinecache'"><!-- offline-cache -->
          <i class="iconfont icon-xiazai"></i>
        </router-link>
        <router-link class="m-message" :to="'/message'"><!-- message -->
          <i class="iconfont icon-xiaoxi"></i>
        </router-link>
      </div>
    </template>
  </header-top>
  <route-scroll :routes="routes"/>
</div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"
import RouteScroll from "../../components/RouteScroll/RouteScroll.vue"

const routes=[
  {text:"直播",path:"/mainpage/zhibo"},
  {text:"推荐",path:"/mainpage/tuijian"},
  {text:"热门",path:"/mainpage/remen"},
  {text:"追番",path:"/mainpage/zhuifan"},
  {text:"影视",path:"/mainpage/yingshi"},
]

export default {
  name: "MainPage",
  components: {
    HeaderTop,
    RouteScroll,
  },
  data () {
    return {
      routes:routes,
    };
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
  @import "../../assets/style/index.styl"
  .main-page .header .div-section2//尽量外面套自己的class 不要去引内部的class
    width 100%
    .heater-v-slot
      display: -webkit-flex; /* Safari */
      display: flex;
      width 100%
      // &>[m-*]
      //   display: table-cell;
      //   vertical-align: middle;//没啥效果??
      .m-search //todo 这里回头加到henderTop组件里
        flex 6
        .search-back-div
          width auto
          height $com-iconsize*1.6
          position relative
          top -@height*0.15
          margin-left 0.4rem
          margin-right 0.2rem
          background-color $blbl-search-pink
          border-radius @height*0.5
          text-align left
          padding-left @height*0.27
          .iconfont
            margin 0
            position relative
            top @height*0.095
            opaticy 0.1
      .m-game
      .m-offline-cache
      .m-message
        margin 0 $com-iconsize*0.1
    .m-game .iconfont.icon-youxifull
      font-size $com-iconsize*1.2
</style>