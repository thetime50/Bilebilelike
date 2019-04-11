<template>
<div class="main-page">
  <header-top lift-icon-type="liftMenu">
    <template v-slot:liftContent>
      <div class="heater-v-slot">
        <span class="m-search"><!-- search -->
          <div class="search-back-div">
            <i class="iconfont icon-sousuo"></i>
          </div>
        </span>
      </div>
    </template>
    <template v-slot:rightContent>
      <div class="heater-v-slot">
        <span class="m-game"><!-- game -->
          <i class="iconfont icon-youxifull"></i>
        </span>
        <span class="m-offline-cache"><!-- offline-cache -->
          <i class="iconfont icon-xiazai"></i>
        </span>
        <span class="m-message"><!-- message -->
          <i class="iconfont icon-xiaoxo"></i>
        </span>
      </div>
    </template>
  </header-top>
  MainPage
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
  .main-page .header .div-section1//尽量外面套自己的class 不要去引内部的class
    width 100%
    .liftContent
      width 70%
      .heater-v-slot
        &>[m-*]
          float left
          display: table-cell;
          vertical-align: middle;//没啥效果??
        .m-search //todo 这里回头加到henderTop组件里
          float left
          width 100%
          .search-back-div
            width 100%
            height $com-iconsize*1.6
            position relative
            top @height*0.1
            margin-left 0.4rem
            background-color $blbl-search-pink
            border-radius @height*0.5
            text-align left
            padding-left @height*0.27
            .iconfont
              margin 0
              position relative
              top -@height*0.15
              opaticy 0.1
    .m-game .iconfont.icon-youxifull
      font-size $com-iconsize*1.2

</style>