<template>
<div class="component-video-page-card">
  <j-link :link="infoAid | av2url">
    <div class="video-page-card-wrap">
      <div class="image-div">
        <!-- <img :src="infoPic" :alt="infoTitle"> -->
        <ProportionImg :imgSrc="infoPic" :imgAlt="infoTitle" :proportion="10/16*100"/>
      </div>
      <div class="right-info">
        <div class="title"> {{infoTitle}} </div>
        <div class="owner">
          <div class="owner-up"><i class="iconfont icon-upzhu"></i></div>
          <div class="owner-name">{{infoName}}</div>
        </div>
        <div class="footer-data">
          <div class="bofang-icon">
            <i class="iconfont icon-bofangshu"></i>
          </div>
          <div class="bofang-num">
            {{infoView | autoChNum}} 
          </div>
          <div class="danmu-icon">
            <i class="iconfont icon-danmushu"></i>
          </div>
          <div class="danmu-num">
            {{infoDanmaku | autoChNum}}
          </div>
          <!-- <div class="duration">{{info.duration}}</div> -->
        </div>
      </div>
    </div>
  </j-link>
</div>
</template>

<script>
import {getAttribute} from "@/assets/js/tool.js"
import tool from "@/assets/js/tool.js"
import ProportionImg from "@/components/ProportionImg/ProportionImg.vue"

const autoChNum=tool.autoChNum
// 图片懒加载
export default {
  name: "VideoPageCard",
  components: {
    ProportionImg,
  },
  data () {
    return {
    };
  },
  props:{
    info  :{type: Object ,default: ()=>{return {}}},
  },
  computed: {
    infoAid(){
      return getAttribute(this.info,"aid")
    },
    infoPic(){
      return getAttribute(this.info,"pic")
    },
    infoTitle(){
      return getAttribute(this.info,"title")
    },
    infoView(){
      return getAttribute(this.info,"stat.view")
    },
    infoDanmaku(){
      return getAttribute(this.info,"stat.danmaku")
    },
    infoName(){
      return getAttribute(this.info,"owner.name")
    },
  },
  filters: {
    getAttribute(){
      return getAttribute(...arguments)
    },
    autoChNum(num,chCnt=4,type=2){
      return autoChNum(num,chCnt,type)
    },
    av2url(av){
      return "https://m.bilibili.com/video/av"+av+".html"
      // return "/video/av"+av
    }
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
@import "../../../../../assets/style/index.styl"

$dbg=false
$img-footer-font-size = 0.7rem
.component-video-page-card
  .video-page-card-wrap
    overflow hidden
    border-radius $block-radius
    display grid
    grid-template-columns auto 1fr
    grid-template-rows auto
    align-items stretch
    .image-div
      float left
      width 9rem
      margin-right $block-interval
    .right-info
      position relative
      float left
      .title
        display -webkit-box
        -webkit-box-orient vertical
        overflow hidden
        -webkit-line-clamp 2
        text-align left
        font-size 0.9rem
        line-height 120%
        height (0.9rem * 1.2 * 2)
        font-stretch 900//ultra-expanded
        color #000
      .owner
        text-align left
        position absolute
        bottom $img-footer-font-size+0.7rem
        vertical-align middle
        &>div
          display inline-block
          font-size $img-footer-font-size
        .owner-up
        .owner-name
          i
            font-size ($img-footer-font-size * 1.3)
      .footer-data
        position absolute
        bottom 0
        text-align left
        width 100%
        &>div
          display inline-block
          font-size $img-footer-font-size
        .bofang-icon,.bofang-num
        .danmu-icon,.danmu-num
          i
            font-size ($img-footer-font-size * 1.3)
</style>