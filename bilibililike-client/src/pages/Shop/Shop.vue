<template>
<div class="page-shop">
  <header-top left-icon-type="leftMenu">
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
  </header-top>

Shop
</div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"

export default {
  name: "Shop",
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

  .page-shop
    .iconfont
      &.icon-gouwuche
        font-size $com-iconsize*1.15
      &.icon-gouwuxinxi
        font-size $com-iconsize*1.1
</style>