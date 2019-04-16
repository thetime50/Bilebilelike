<template>
<div class="page-header-top-search">
  <header-top v-if="searchPage==='MainPage'||searchPage==='Channel'" left-icon-type="none">
    <div class="header-slot-d">
      <div class="import-container">
        <div class="import-container-icon">
          <i class="iconfont icon-sousuo"></i>
        </div>
        <div class="import-container-input">
          <input type="text">
        </div>
      </div>
      <div class="text" @click="$router.go(-1)">取消</div>
    </div>
  </header-top>

  <header-top v-if="searchPage==='Game'" left-icon-type="back" page-case="game">
    <div class="header-slot-d">
      <div class="import-container">
        <div class="import-container-input">
          <input type="text" placeholder="搜索游戏...">
        </div>
      </div>
      <div>
        <i class="iconfont icon-sousuo"></i>
      </div>
    </div>
  </header-top>

</div>
</template>

<script>
import HeaderTop from "../HeaderTop/HeaderTop.vue"
export default {
  name: "HeaderTopSearch",
  components: {
    HeaderTop,
  },
  props: {
    searchPage:String,
  },
  data () {
   return {
   };
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
  @import "../../assets/style/index.styl"
  .page-header-top-search
    // *
    //   border 0.2px solid #088
    .header-game-page
      bottom-border-1px(#dcdcdc)
      input
        caret-color $blbl-pink
    .div-section2
      width 100%
      .header-slot-d
        display flex
        width 100%
        .import-container
          flex 1
          display flex
          height $com-iconsize*1.6
          border-radius @height*0.5
          position relative
          top -@height*0.15
          background-color #FFF
          margin 0 0.8rem
          &>*
            margin-top @height*0.08
          .import-container-icon
            padding-left @height*0.1
            .iconfont
              color #bbb
          .import-container-input
            width 100%
            flex 1
            margin-right @height*0.4
            input
              width 100%
              color #000
              &:focus
                outline none
        &>div.text
          margin 0 0.4rem
          font-size 1.4rem

</style>