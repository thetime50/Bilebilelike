<!--
Video.vue
-->
<template>
<div class="component-video">
  <StickyScroll>
    <template v-slot:sticky>
      <div class="video-page-title-nav">
        <TitleNav v-if="nav_enable"
          :nowIndex="nav_nowIndex"
          :cursorWidth="nav_cursorWidth"
          :positionSync="nav_positionSync"
          :titles="nav_titles"
          :navStyle="nav_style"
          :navChange="nav_change"/>
      </div>
    </template>
    <template>
      <div class="video-container">
        <ProportionImg :imgSrc="infoPic" :imgAlt="infoTitle" :proportion="proportion">
          <div class="video-header">
            <div class="lift-icon" @click="$router.go(-1)">
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
          <input type="text" :class="{'have-value':message}" v-model="message" placeholder="发个友善的弹幕见证当下"
          @focus="inputting=true" @blur="inputting=false" @keypress="danmuKeypress">
        </div>
      </div>
      <div class="video-slot-scroll">
        <!-- user and info -->
        <SlotScroll
          :titles="titles"
          :nav="nav"
          :navCursorWidth="40"
          navStyle="video-page-nav"
          :scrollConf="{click:true}"
          :_dummyNavPropsSync="set_nav_state">
          <!--  -->
          <Description :initialState="initialState" :recommendnew="recommendnew"/>
          <Reply :reply="reply"/>
        </SlotScroll>
        <div class="inputting-masker" v-if="inputting"/>
      </div>
    </template>
  </StickyScroll>
</div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from "vuex"
import {getAttribute} from "@/assets/js/tool.js"
import SlotScroll from "../../components/RouteScroll/SlotScroll.vue"
import ProportionImg from "../../components/ProportionImg/ProportionImg.vue"
import Progress from "../../components/Progress/Progress.vue"
import StickyScroll from "@/components/StickyScroll/StickyScroll.vue"
import TitleNav from "@/components/RouteScroll/TitleNav.vue"
import DummyNav from "../../components/RouteScroll/DummyNav.vue"

import Description from "./components/Description/Description.vue"
import Reply from "./components/Reply/Reply.vue"

export default {
  name: "Video",
  components: {
    SlotScroll,
    Description,
    Reply,
    StickyScroll,
    TitleNav,

    ProportionImg,
    Progress,
  },
  data () {
    return {
      titles      :["简介","评论"],
      nav         :DummyNav,

      message     :"",
      inputting   :false,
    };
  },
  created () {
    this.getVideoPage(this.av)
    this.getRecommendnew(this.av)
    this.getReply(this.av)
  },
  computed: {
    ...mapGetters(["initialState"]),
    ...mapState(["recommendnew","reply"]),
    ...mapState("navState",[
      "nav_enable",
      "nav_nowIndex",
      "nav_cursorWidth",
      "nav_positionSync",
      "nav_titles",
      "nav_style",
      "nav_change",
    ]),
    av(){
      return this.$route.params.av.slice(2)
    },
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
    ...mapMutations("navState",["set_nav_state"]),
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
    danmuKeypress(e){
      if(e.key=="Enter"){
        this.message=""
        e.srcElement.blur()
      }
    }
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">

.video-page-nav
  .nav-list
    background-color #fff
    li.item
      padding 0 10%

.component-video
  width 100%
  height 100%
  .video-page-title-nav
    position absolute
    top 15.77rem
    width 100%
    background-color #fff
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
      display flex
      background-color #333333
      height 2.6rem
      justify-content center
      align-items center
      input
        flex 1
        display inline-block
        height 1.8rem
        border-radius @height
        background-color #5a5a5a
        padding 0 0.8rem
        margin 0 1rem
        &:focus,&.have-value
          outline none
          background-color #fff
  .video-slot-scroll
    position relative
    .inputting-masker
      position absolute
      top 0
      width 100%
      height 100%
      background-color rgba(0,0,0,0.6)


</style>