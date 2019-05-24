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

  <select v-model="selected">
    <!-- <option disabled value="">请选择</option> -->
    <option v-for="(item,index) in Cameras" :key="index">{{index}}</option>
  </select>
  <br>
  <component :is="Cameras[selected]"/>
Shop
</div>
</template>

<script>
import TestHeaderTop  from "../../components/TestHeaderTop/TestHeaderTop.vue"
import CameraSave     from "../../components/Camera/CameraSave.vue"
import CameraUpdata   from "../../components/Camera/CameraUpdata.vue"
import CameraWebrtc   from "../../components/Camera/CameraWebrtc.vue"

const Cameras={
  "camera-save"  :CameraSave  ,
  "camera-updata":CameraUpdata,
  "camera-webrtc":CameraWebrtc,
}

export default {
  name: "Shop",
  components: {
    TestHeaderTop,
  },

  data () {
    return {
      selected:"camera-save",
      Cameras:Cameras,
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