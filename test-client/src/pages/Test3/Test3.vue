<template>
<div class="page-shop">
  <test-header-top left-icon-type="leftMenu">
    <template v-slot:centerContent>
      <div class="header-slot-cc">
        <p>会员购</p>
      </div>
    </template>
    <template v-slot:rightContent>
      <div class="header-slot-rc">
        <span class="m-gouwuche"><!-- gouwuche -->
          <i class="iconfont icon-gouwuche"></i>
        </span>
        <span class="m-gouwuxinxi"><!-- gouwuxinxi -->
            <i class="iconfont icon-gouwuxinxi"></i>
        </span>
      </div>
    </template>
  </test-header-top>

Shop
</div>
</template>

<script>
import TestHeaderTop from "../../components/TestHeaderTop/TestHeaderTop.vue"

export default {
  name: "Shop",
  components: {
    TestHeaderTop,
  },

  data () {
	 return {
	 };
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
  @import "../../assets/style/index.styl"

  .page-shop
    .iconfont
      &.icon-gouwuche
        font-size $com-iconsize*1.15
      &.icon-gouwuxinxi
        font-size $com-iconsize*1.1
</style>