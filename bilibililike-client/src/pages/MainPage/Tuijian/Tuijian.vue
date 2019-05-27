<template>
<div class="component-tuijian">
  <div class="loop-slider">
    <slide :slideConf="{}" :scrollConf="{}"
      :styles="{ 'dots':'tj-dots', 'dot':'tj-dot' }">
      <div v-for="(item,index) in ['123','456','789']" :key="index">
        {{item}}
        <br>
        23333
      </div>
    </slide>
  </div>
  Tuijian <br><br>
  reqResLoc:<br>
  {{reqResLoc}}<br><br>
  reqRegion:<br>
  {{reqRegion}}<br><br>
  reqRankingRegion:<br>
  {{reqRankingRegion}}<br><br>
  reqRecommendnew:<br>
  {{reqRecommendnew}}<br><br>
  reqReply:<br>
  {{reqReply}}<br><br>
</div>
</template>

<script>
import Slide from "@/components/RouteScroll/Slide.vue"
import {
  reqResLoc,
  reqRegion,
  reqVideoPage,
  reqRankingRegion,
  reqRecommendnew,
  reqReply} from "../../../api"

export default {
  name: "Tuijian",
  components: {
    Slide,
  },
  data () {
    return {
      reqResLoc:{},
      reqRegion:{},
      reqVideoPage:{},
      reqRankingRegion:{},
      reqRecommendnew:{},
      reqReply:{},
    };
  },
  async mounted () {
    this.reqResLoc={... await reqResLoc()}
    this.reqRegion={... await reqRegion()}
    this.reqVideoPage={... await reqVideoPage(53054599)}
    this.reqRankingRegion={... await reqRankingRegion(47)}
    this.reqRecommendnew={... await reqRecommendnew(53054599)}
    this.reqReply={... await reqReply(53054599)}
  },
  computed: {
    // 首页轮播
    // 首页视频
    // 超时切换或 下拉刷新
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
@import "../../../assets/style/index.styl"

$debug-border()
  if true
    border 1px solid #088

.component-tuijian
  *
    // $debug-border()
  .loop-slider
    $debug-border()
    margin 0 $block-interval
    border-radius $block-radius
    .tj-dots
      position absolute
      right 1.5rem
      .tj-dot
        vertical-align middle
        $dot-size = 0.5rem
        background-color #fff
        width: $dot-size
        height: $dot-size
        &.active
          width: $dot-size
          height: $dot-size
          background-color $blbl-pink
</style>