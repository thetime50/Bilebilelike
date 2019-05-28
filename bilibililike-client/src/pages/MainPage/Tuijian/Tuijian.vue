<template>
<div class="component-tuijian">
  <div class="loop-slider">
    <slide :slideConf="{}" :scrollConf="{}" :key="refreshTime.getTime()"
      :styles="{ 'dots':'tj-dots', 'dot':'tj-dot' }">
      <div v-for="(item,index) in resLoc" :key="index">
        <!-- <img :src="item.pic" :alt="item.name"> -->
        {{item.pic}}<br>
        {{item.name}}
      </div>
    </slide>
  </div>
  Tuijian <br><br>
  resLoc:<br>
  {{resLoc}}<br><br>
  ranking:<br>
  {{ranking}}<br><br>
</div>
</template>

<script>
import Slide from "@/components/RouteScroll/Slide.vue"
import {mapState,mapActions} from "vuex"

// 首页轮播
// 首页视频
// 超时切换或 下拉刷新

export default {
  name: "Tuijian",
  components: {
    Slide,
  },
  data () {
    return {
      refreshTime:new Date(0),//可能会把这时间放vuex里边
    };
  },
  mounted () {
  },
  watch: {
  },
  computed: {
    ...mapState([
      "resLoc",
      "ranking",
    ]),
  },
  methods: {
    ...mapActions([
      "getResLoc",
      "getRanking",
    ]),
    async checkRefresh(){
      let now=new Date()
      if((now-this.refreshTime) > 8*1000){//3*1000*60){//3min
        console.log("Refresh")
        await this.getResLoc()
        await this.getRanking()
        this.refreshTime=new Date()
      }
    },
    routeChange(e){
      if(e.type=="enter"){
        this.checkRefresh()
      }
    },
  }
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