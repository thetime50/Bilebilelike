<template>
<div class="page-activity">
  <header-top left-icon-type="back">
    <template v-slot:centerContent>
      <div class="header-slot-cc">
        <p>动态</p>
      </div>
    </template>
    <template v-slot:rightContent>
      <div class="header-slot-rc">
        <span class="m-bianji"><!-- bianji -->
            <i class="iconfont icon-bianji"></i>
        </span>
      </div>
    </template>
  </header-top>

Activity
</div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"

export default {
  name: "Activity",
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

  .page-activity
    .header-slot-rc .iconfont
      font-size $com-iconsize*1.1

</style>