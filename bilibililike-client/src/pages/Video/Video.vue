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
        <div class="video-bar"></div>
        <div class="video-time">{{videoTime}}</div>
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
  <ComponentScroll
    :components="components"
  />
: <br>
{{initialState | slice}} <br>
: <br>
{{infoTitle}}
</div>
</template>

<script>
import {mapState,mapGetters,mapActions} from "vuex"
import ComponentScroll from "../../components/RouteScroll/ComponentScroll.vue"
import Description from "./compontents/Description.vue"
import Replay from "./compontents/Replay.vue"
import ProportionImg from "../../components/ProportionImg/ProportionImg.vue"
import {getAttribute} from "@/assets/js/tool.js"

const components=[
  {text:"简介",comp:Description},
  {text:"评论",comp:Replay},
]

export default {
  name: "Video",
  components: {
    ComponentScroll,
    ProportionImg,
  },
  data () {
    return {
      components:components,
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
    ...mapState(["recommendnew","reply"]),
    ...mapGetters(["initialState"]),
    infoPic(){
      return getAttribute(this.initialState,"reduxAsyncConnect.videoInfo.pic")
    },
    infoTitle(){
      return getAttribute(this.initialState,"reduxAsyncConnect.videoInfo.title")
    },
    infoDuration(){
      let duration=getAttribute(this.initialState,"reduxAsyncConnect.videoInfo.duration")
      duration=duration?duration:"00:00"
      if(duration.length>5 && /^00/.test(duration)){
        duration=duration.slice(3)
      }
      return duration
    },
    videoTime(){
      let duration=this.infoDuration
      return duration.replace(/\d/g,"0")+"/"+duration
    },
    proportion(){
      // this.initialState.videoInfo. dimension/pages.dimension .width
      return 1080/1920*100
    },
  },
  filters: {
    slice(s){
      return JSON.stringify(s).slice(0,100)
    },
    getAttribute(){
      return getAttribute(...arguments)
    }
  },
  methods: {
    ...mapActions(["getVideoPage","getRecommendnew","getReply"]),
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
      div
        margin 0 0.4rem
      .video-bofang
        //
      .video-bar
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