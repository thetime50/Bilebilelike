<template>
<div class="main-page">
  <header-top left-icon-type="leftMenu">
    <template>
      <div class="heater-v-slot">
        <span class="m-search"><!-- search -->
          <div class="search-back-div">
            <i class="iconfont icon-sousuo"></i>
          </div>
        </span>
        <router-link class="m-game" :to="'/game'"><!-- game -->
          <i class="iconfont icon-youxifull"></i>
        </router-link>
        <router-link class="m-offline-cache" :to="'/offlinecache'"><!-- offline-cache -->
          <i class="iconfont icon-xiazai"></i>
        </router-link>
        <span class="m-message"><!-- message -->
          <i class="iconfont icon-xiaoxi"></i>
        </span>
      </div>
    </template>
  </header-top>
  MainPage
  <br><br>
  <div class="emmm">
    我说啊，我在这写demo，不如去给你写产品
  </div>
</div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"

export default {
  name: "MainPage",
  components: {
    HeaderTop,
  },
  data () {
	 return {
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
        flex 1
      .m-offline-cache
        flex 1
      .m-message
        flex 1
    .m-game .iconfont.icon-youxifull
      font-size $com-iconsize*1.2
  .emmm
    color #c0c0ff
</style>