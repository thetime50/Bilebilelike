<template>
<div class="component-info-card">
  <div class="image-div">
    <j-link :link="info.aid | av2url">
      <div class="img-proportion">
        <div class="img-div">
          <!-- <img :src="info.pic" :alt="info.title"> -->
          <img v-lazy="info.pic" :alt="info.title">
        </div>
      </div>
      <div class="img-footer">
        <div class="bofang-icon">
          <i class="iconfont icon-bofangshu"></i>
        </div>
        <div class="bofang-num">
          {{info.play | autoChNum}} 
        </div>
        <div class="danmu-icon">
          <i class="iconfont icon-danmushu"></i>
        </div>
        <div class="danmu-num">
          {{info.video_review | autoChNum}}
        </div>
        <div class="duration">{{info.duration}}</div>
      </div>
    </j-link>
  </div>
  <j-link :link="info.aid | av2url">
    <div class="title"> {{info.title}} </div>
  </j-link>
  <div class="card-fooder">
    <div class="type">分类</div>
    <span class="operation"><i class="iconfont icon-gengduo"></i></span>
  </div>
</div>
</template>

<script>
import tool from "@/assets/js/tool.js"
const autoChNum=tool.autoChNum
// 图片懒加载
export default {
  name: "InfoCard",
  data () {
    return {
    };
  },
  props:{
    info  :{type: Object ,default: ()=>{return {}}},
  },
  filters: {
    autoChNum(num,chCnt=4,type=2){
      return autoChNum(num,chCnt,type)
    },
    av2url(av){
      // return "https://m.bilibili.com/video/av"+av+".html"
      return "/video/av"+av
    }
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
@import "../../assets/style/index.styl"

$dbg=false
$normal-interval = 0.7rem
.component-info-card
  border-radius $block-radius
  overflow hidden
  background-color #fff
  *
    $debug-border($dbg)
  .image-div
    position relative
    .img-proportion
      position relative
      width 100%
      padding-bottom 62.5%//@320w_200h
      .img-div
        position absolute
        width 100%
        height 100%
        display flex
        img
          display block
          width 100%
          height 100%
          margin auto
          &[lazy=loading]
            width auto
            height 40%
    .img-footer
      $img-footer-font-size = 0.7rem
      position absolute
      bottom -0.1rem
      overflow hidden
      width 100%
      padding 0.2rem 0.3rem
      box-sizing border-box
      *
        color #fff
        font-size $img-footer-font-size
      .bofang-icon,.bofang-num
      .danmu-icon,.danmu-num
        float left
        i
          position relative
          bottom 0.15em
          font-size ($img-footer-font-size * 1.3)
      .duration
        float right
  .title
    margin ($normal-interval * 0.7) $normal-interval
    display -webkit-box
    -webkit-box-orient vertical
    overflow hidden
    // word-wrap break-word
    // word-break normal
    // white-space normal
    -webkit-line-clamp 2
    text-align left
    font-size 0.9rem
    line-height 120%
    height (0.9rem * 1.2 * 2)
    font-stretch 900//ultra-expanded
    color #000
  .card-fooder
    vertical-align middle
    padding 0 $normal-interval
    padding-top $normal-interval*0.1
    padding-bottom  $normal-interval*0.3
    overflow hidden//解决float left丢失高度
    .type
      display inline-block
      float left
      font-size 0.7rem
      color #999999
    .operation
      position relative 
      top -0.2rem
      display inline-block
      float right
      vertical-align middle
      i
        display inline
        font-size 0.8rem
        color #c8c8c8
</style>