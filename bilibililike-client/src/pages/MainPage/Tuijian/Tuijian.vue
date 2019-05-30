<template>
<div class="component-tuijian">
  <div class="loop-slider">
    <slide :slideConf="{}" :scrollConf="{}" :key="refreshTime.getTime()"
      :styles="{ 'dots':'tj-dots', 'dot':'tj-dot' }">
      <j-link v-for="(item,index) in resLoc" :link="item.url" :styles="{'comp':'loop-div'}" :key="index">
        <img :src="item.pic" :alt="item.name" width="100%">
      </j-link>
    </slide>
  </div>
  <div class="cades">
    <div v-for="(item,index) in loadRanking" class="cades-line" :key="index">
      <div class="card"><InfoCard :info="item[0]" :key="'in-'+2*index"> </InfoCard></div>
      <div class="card"><InfoCard :info="item[1]" :key="'in-'+2*index+1"> </InfoCard></div>
    </div>
  </div>
</div>
</template>

<script>
import {mapState,mapActions} from "vuex"
import Slide from "@/components/RouteScroll/Slide.vue"
import InfoCard from "@/components/InfoCard/InfoCard.vue"

// 首页轮播
// 首页视频
// 超时切换或 下拉刷新
// 分片加载

export default {
  name: "Tuijian",
  components: {
    Slide,
    InfoCard,
  },
  data () {
    return {
      refreshTime:new Date(0),//可能会把这时间放vuex里边
      loadCnt:30,
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
    loadRanking(){
      let sList=this.ranking.list?this.ranking.list.slice(0,this.loadCnt):[]
      let dList=[]
      for(let i=0;i<sList.length;i+=2){
        dList.push([sList[i],sList[i+1]])
      }
      return dList
    }
  },
  methods: {
    ...mapActions([
      "getResLoc",
      "getRanking",
    ]),
    async checkRefresh(){
      let now=new Date()
      if((now-this.refreshTime) > 8*1000){//3*1000*60){//3min
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

$dbg=false

.component-tuijian
  background-color $def-back-color
  padding-top ($block-interval * 0.8)
  *
    $debug-border($dbg)
  .loop-slider
    $debug-border($dbg)
    margin 0 $block-interval
    border-radius $block-radius
    overflow hidden
    .loop-div a img
      display block
    .tj-dots
      position absolute
      right 0.5rem
      bottom -0.2rem
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
  .cades
    margin $block-interval
    .cades-line
      width 100%
      overflow hidden
      &:nth-child(n+1)
        margin-top $block-interval
      .card
        width 50%
        box-sizing border-box
        float left
        &:nth-child(odd)
          padding-right ($block-interval / 2)
        &:nth-child(even)
          padding-left ($block-interval / 2)
</style>