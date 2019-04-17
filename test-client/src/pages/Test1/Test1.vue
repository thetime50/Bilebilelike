<template>
<div class="page-channel">
  <test-header-top left-icon-type="leftMenu">
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
  </test-header-top>

<drawer-layout
  ref="drawer"
  
  :enable="true"
  :animatable="true"
  :z-index="0"
  :drawable-distance="Math.floor(800/3)"
  :content-drawable="false"
  :backdrop="true"
  :backdrop-opacity-range="[0,0.4]"
  >
    <div class="drawer-content" slot="drawer">
      123
    </div>
    <div slot="content">
      456
    </div>
</drawer-layout>

<!-- <drawer-layout ref="drawer" :drawer-width="800">
  <div class="drawer-content" slot="drawer">
    123
  </div>
  <div class="content-content" slot="content">
    233
  </div>
</drawer-layout> -->
Channel
</div>
</template>

<script>
import TestHeaderTop from "../../components/TestHeaderTop/TestHeaderTop.vue"
import {DrawerLayout} from 'vue-drawer-layout'

export default {
  name: "Channel",
  components: {
    TestHeaderTop,
    DrawerLayout,
  },
  data () {
	 return {
	 };
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.page-channel
  .drawer-content
    background rgba(255,255,255,0.5)
  .content-content
    background rgba(255,20,20,0.5)
</style>