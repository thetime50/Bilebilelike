<template>
<div class="page-channel">
  <header-top left-icon-type="leftMenu">
    <template v-slot:centerContent>
      <div class="header-slot-cc">
        <p>频道</p>
      </div>
    </template>
    <template v-slot:rightContent>
      <div class="header-slot-rc">
        <span class="m-offline-cache"><!-- offline-cache -->
          <i class="iconfont icon-xiazai"></i>
        </span>
        <span class="m-search"><!-- search -->
            <i class="iconfont icon-sousuo"></i>
        </span>
      </div>
    </template>
  </header-top>

Channel
</div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"

export default {
  name: "Channel",
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
</style>