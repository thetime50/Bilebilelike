<!--
Video.vue
-->
<template>
<div class="component-video">
  <div class="video-container">
    <ProportionImg :imgSrc="infoPic" :imgAlt="infoTitle" :proportion="proportion">
      <div class="video-header">
        <div class="lift-icon">
          <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="right-icon">
          <i class="iconfont icon-lingting"></i>
          <i class="iconfont icon-touping"></i>
          <i class="iconfont icon-gengduo"></i>
        </div>
      </div>
      <div class="video-footer">
        <div class="video-bofang">
          <i class="iconfont icon-bofang"></i>
        </div>
        <div class="video-progress"><Progress :percentage="playProportion"/></div>
        <div class="video-time">{{videoTimeStr}}</div>
        <div class="video-quanping">
          <i class="iconfont icon-quanping"></i>
        </div>
      </div>
      <div class="video-masker"></div>
    </ProportionImg>
    <div class="danmu">
      
    </div>
  </div>
  <!-- user and info -->
  <SlotScroll :titles="titles">
    <Description :initialState="initialState" :recommendnew="recommendnew"/>
    <Reply :reply="reply"/>
  </SlotScroll>
  
</div>
</template>

<script>
import {mapState,mapGetters,mapActions} from "vuex"
import {getAttribute} from "@/assets/js/tool.js"
import SlotScroll from "../../components/RouteScroll/SlotScroll.vue"
import ProportionImg from "../../components/ProportionImg/ProportionImg.vue"
import Progress from "../../components/Progress/Progress.vue"

import Description from "./components/Description/Description.vue"
import Reply from "./components/Reply/Reply.vue"

export default {
  name: "Video",
  components: {
    SlotScroll,
    Description,
    Reply,

    ProportionImg,
    Progress,
  },
  data () {
    return {
      titles:["简介","评论"],
    };
  },
  created () {
    this.getVideoPage(this.av)
    this.getRecommendnew(this.av)
    this.getReply(this.av)
  },
  computed: {
    av(){
      return this.$route.params.av.slice(2)
    },
    ...mapGetters(["initialState"]),
    ...mapState(["recommendnew","reply"]),
    infoPic(){
      return getAttribute(this.initialState,"reduxAsyncConnect.videoInfo.pic")
    },
    infoTitle(){
      return getAttribute(this.initialState,"reduxAsyncConnect.videoInfo.title")
    },

    proportion(){
      // this.initialState.videoInfo. dimension/pages.dimension .width
      return 1080/1920*100
    },
    
    //video time
    infoDuration(){
      let duration=getAttribute(this.initialState,"reduxAsyncConnect.videoInfo.duration")
      duration=duration?duration:"00:00"
      if(duration.length>5 && /^00/.test(duration)){
        duration=duration.slice(3)
      }
      return duration
    },
    videoTime(){
      let durationArr=this.infoDuration.split(":")
      let duration=0
      durationArr.forEach((item)=>{
        duration=duration*60+parseInt(item)
      })
      return duration
    },
    videoTimeStr(){
      return this.playDuration+"/"+this.infoDuration
    },

    //play time
    playDuration(){
      let tempStr=this.infoDuration.replace(/\d/g,0)
      let playStr=this.time2str(this.playTime)
      playStr=tempStr.slice(0,tempStr.length-playStr.length)+playStr
      return playStr
    },
    playTime(){
      return this.videoTime*0.2
    },
    playProportion(){
      return this.playTime/this.videoTime*100
    }
  },
  filters: {
    slice(s){
      return JSON.stringify(s).slice(0,100)
    },
    getAttribute(){
      return getAttribute(...arguments)
    },
  },
  methods: {
    ...mapActions(["getVideoPage","getRecommendnew","getReply"]),
    time2str(time){
      time=parseInt(time)
      let str=""
      let part=time%60
      str=(part<10 ? "0" : "") + part
      time=parseInt(time/60)
      part=time%60
      str=(part<10 ? "0" : "") + part + ":"+str
      time=parseInt(time/60)
      if(time){
        str=time+":"+str
      }
      return str
    },
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-video
  width 100%
  height 100%
  .video-container
    width 100%
    .video-header
      position absolute
      width 100%
      padding 0.8rem 0.8rem
      box-sizing border-box
      .iconfont
        font-size 1.4rem
        margin 0 0.4rem
        color #fff
      .lift-icon
        float left
      .right-icon
        float right
    .video-footer
      display flex
      align-items center 
      position absolute
      bottom 0
      width 100%
      height 2rem
      background linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.6))
      box-sizing border-box
      padding 0 0.4rem
      >*
        color #fff
      >div
        margin 0 0.4rem
      .video-bofang
        //
      .video-progress
        flex 1
      .video-time
        font-size 0.5rem
        margin 0 
      .video-quanping
        //
    .video-masker
      position absolute
      //
    .danmu
      //
</style>