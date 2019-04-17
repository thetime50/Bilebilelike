<template>
<div class="page-activity">
  <test-header-top left-icon-type="leftMenu">
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
  </test-header-top>

Activity
</div>
</template>

<script>
import TestHeaderTop from "../../components/TestHeaderTop/TestHeaderTop.vue"

export default {
  name: "Activity",
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

  .page-activity
    .header-slot-rc .iconfont
      font-size $com-iconsize*1.1

</style>