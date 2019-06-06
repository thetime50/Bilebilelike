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
    <div class="attention-div" :class="{attention}" @click="attention=!attention">
      <i class="iconfont icon-jia" v-if="!attention"/>
      <i class="iconfont icon-caidan" v-else/>
      {{!attention?"关注":"已关注"}}
    </div>
  </div>
  <div class="vinfo-wrap-2">
    <div class="video-title-container">
      <div class="video-title"
        :class="{'no-unfold':!unfold,'no-unfoldc-lamp':noUnfoldcLamp}"
        @transitionend="titleTransitionend">
        {{videoTitle}}
      </div>
      <div class="unfold-div" @click="unfoldChange">
        <i class="iconfont icon-shouqi" v-if="unfold"/>
        <i class="iconfont icon-zhankai" v-else/>
      </div>
    </div>
    <div class="descriptiom" :class="{'no-unfold':!unfold}">
      <div class="video-data">
        <div class="bofang-num">
          <i class="iconfont icon-bofangshu"></i>
          {{videoView | autoChNum}} 
        </div>
        <div class="danmu-num">
          <i class="iconfont icon-danmushu"></i>
          {{videoDanmaku | autoChNum}}
        </div>
        <div class="av-serial">
          AV{{videoAid}}
        </div>
        <div class="reprint">
          <i class="iconfont icon-jinzhi"></i>
          未经作者授权禁止转载
        </div>
      </div>
      <div class="descr">{{videoDesc}}</div>
    </div>
  </div>
  <div class="vinfo-wrap-3">
  </div>
</div>
</template>

<script>
import {getAttribute} from "@/assets/js/tool.js"
import tool from "@/assets/js/tool.js"

export default {
  name: "VideoInfo",
  props:{
    initialState:{type:Object,default:()=>{return {}}},
  },
  data () {
    return {
      attention:false,
      unfold:false,
      noUnfoldcLamp:true,//未打开时为true
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
    videoTitle(){
      return getAttribute(this.videoInfo,"title")
    },
    videoAid(){
      return getAttribute(this.videoInfo,"aid")
    },
    videoDesc(){
      return getAttribute(this.videoInfo,"desc")
    },
    videoView(){//播放数
      return getAttribute(this.videoInfo,"stat.view")
    },
    videoDanmaku(){//弹幕
      return getAttribute(this.videoInfo,"desc.danmaku")
    },
  },
  filters: {
    slice(s){
      return JSON.stringify(s).slice(0,100)
    },
    getAttribute(){
      return getAttribute(...arguments)
    },
    autoChNum(num,chCnt=4,type=2){
      return tool.autoChNum(num,chCnt,type)
    },
  },
  methods: {
    unfoldChange(){
      this.unfold=!this.unfold
      if(this.unfold)
        this.noUnfoldcLamp=false
    },
    titleTransitionend(){
      if(!this.unfold)
        this.noUnfoldcLamp=true
    },
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
@import "../../../../../assets/style/index.styl"

.component-video-info
  .vinfo-wrap-1
    position relative
    overflow hidden
    .owner-container
      float left
      margin 1rem 0.8rem
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
    .attention-div
      position: absolute;
      top 50%;
      right 0//0.8rem
      transform: translate(0, -50%);
      font-size 0.9rem
      width 5.5em
      height 1.8rem
      line-height @height
      border-radius 0.1em
      background-color $blbl-pink
      color #fff
      i
        font-size @font-size
      &.attention
        background-color #e7e7e7
        color #999999
  .vinfo-wrap-2
    .video-title-container
      display flex
      .video-title
        flex 1
        font-size 1.2rem
        text-align left
        overflow hidden
        margin-right 1rem
        line-height 120%
        max-height 3em
        transition max-height 1s ease
        &.no-unfold
          max-height (1em * 1.2)//font-size * line-height
        &.no-unfoldc-lamp
          display -webkit-box
          -webkit-box-orient vertical
          -webkit-line-clamp 1
      .unfold-div
        //
    .descriptiom
      line-height 120%
      text-align left
      overflow hidden
      margin-top 0.5rem
      max-height 30em
      transition max-height 1s ease
      &.no-unfold
        max-height (0.9rem * 2.5)
      .video-data
        font-size 0.9rem
        line-height 250%
        margin-bottom 0.5rem
        div
          display inline-block
          font-size @font-size
          i
           font-size @font-size
        // .bofang-num
        // .danmu-num
        // .av-serial
        .reprint
          .iconfont
            color $blbl-pink
      .descr
        //
  .vinfo-wrap-3
    //
</style>