<template>
<div class="page-offline-cache">
  <header-top left-icon-type="back">
    <template v-slot:leftContent>
      <div class="header-slot-lc">
        <p>离线缓存</p>
      </div>
    </template>
    <template v-slot:rightContent>
      <div class="header-slot-rc">
        <span class="m-search"><!-- search -->
            <i class="iconfont icon-sousuo"></i>
        </span>
        <span class="m-offline-config"><!-- offline-config -->
          <i class="iconfont icon-xz-shezhi"></i>
        </span>
      </div>
    </template>
  </header-top>
  <div class="holder-empty-div">
    <div class="holder-empty">
      <img v-lazy="require('../../assets/imgs/ic_holder_empty.png')" alt="holder_empty">
      <!-- <img v-lazy="'../../assets/imgs/ic_holder_empty.png'" alt="holder_empty"> -->
    </div>
    <p><br> 这里还什么都没有呢~</p>
  </div>
</div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"

export default {
  name: "OfflineCache",
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
  @keyframes animated_div {
    0%		{transform: rotate(0deg);}
    100%		{transform: rotate(360deg);}
  }

  .page-offline-cache
    .header-slot-lc
      padding-left 1.5rem
    .holder-empty-div
      height 10rem
      margin:35% auto
      .holder-empty
        text-align center
        height @height
        line-height @height
        img
          vertical-align middle
          &[lazy=error]//[lazy=loading]//居中
            width 2.5rem
            animation:animated_div 2s infinite linear;
            -moz-animation:animated_div 2s infinite linear;
            -webkit-animation:animated_div 2s infinite linear;
            -o-animation:animated_div 2s infinite linear;
          // &[lazy=error]//居中
          //   //
          &[lazy=loaded]
            height 100%
      p
        font-size 0.8rem

</style>