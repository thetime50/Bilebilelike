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
  Tuijian <br>
  {{test}}
</div>
</template>

<script>
import Slide from "@/components/RouteScroll/Slide.vue"
import {reqRegion} from "../../../api"

export default {
  name: "Tuijian",
  components: {
    Slide,
  },
  data () {
    return {
      test:{},
    };
  },
  async mounted () {
    this.test={... await reqRegion()}
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