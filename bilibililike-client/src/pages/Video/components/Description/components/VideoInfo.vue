<!--
VideoInfo.vue
-->
<template>
<div class="component-video-info">
  <div class="vinfo-wrap-1">
    <!-- <j-link :link="ownerPage"> -->
      <div class="owner-container">
        <div class="head-img">
          <img v-lazy="ownerFace" :alt="ownerName">
        </div>
        <div class="owner-wrap">
          <div class="owner-name">{{ownerName}}</div>
          <div class="fans-cnt">---粉丝</div>
        </div>
      </div>
    <!-- </j-link> -->
    <div class="attention" :class="{attended:attention}" @click="attention=!attention">
      <i class="iconfont icon-jia" v-if="!attention"/>
      <i class="iconfont icon-caidan" v-else/>
      {{!attention?"关注":"已关注"}}
    </div>
  </div>
  <div class="vinfo-wrap-2">
    <div class="video-title">

    </div>
    <div class="unfold">

    </div>
    <div class="video-data">

    </div>
    <div class="descriptiom">
      <div class="protocol"></div>
      <div class="descr"></div>
    </div>
  </div>
  <div class="vinfo-wrap-3">
  </div>
</div>
</template>

<script>
import {getAttribute} from "@/assets/js/tool.js"

export default {
  name: "VideoInfo",
  props:{
    initialState:{type:Object,default:()=>{return {}}},
  },
  data () {
    return {
      attention:false,
    };
  },
  computed: {
    videoInfo(){
      return getAttribute(this.initialState,"reduxAsyncConnect.videoInfo")
    },
    ownerPage(){
      let mid=getAttribute(this.videoInfo,"owner.mid")
      return "https://m.bilibili.com/space/"+mid
    },
    ownerName(){
      return getAttribute(this.videoInfo,"owner.name")
    },
    ownerFace(){
      return getAttribute(this.videoInfo,"owner.face")
    },
  },
  filters: {
    slice(s){
      return JSON.stringify(s).slice(0,100)
    },
    getAttribute(){
      return getAttribute(...arguments)
    },
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-video-info
  .vinfo-wrap-1
    overflow hidden
    .owner-container
      float left
      margin 1rem
      overflow hidden
      height 3.2rem
      .head-img
        float left
        width @height
        height @height
        border-radius 50%
        overflow hidden
        img
          width 100%
          height 100%
      .owner-wrap
        display grid
        align-items center
        float left
        height 100%
        .owner-name
          color #000
          font-size 1.1rem
        .fans-cnt
          //
    .attention
      float right
      height 100%
      &.attended
        //
  .vinfo-wrap-2
    .video-title
    .unfold
    .video-data
    .descriptiom
      .protocol
      .descr
        //
  .vinfo-wrap-3
    //
</style>