<template>
<div class="component-remen">
  <VerticalScroll>
    <div class="remen-wrap">
      <div class="card-item" v-for="(item,index) in getRankingList" :key="index">
        <HotCard :info="item"/>
      </div>
    </div>
  </VerticalScroll>
</div>
</template>

<script>
import {getAttribute} from "@/assets/js/tool.js"
import {mapState,mapActions} from "vuex"
import HotCard from "@/components/InfoCard/HotCard.vue"
import VerticalScroll from "@/components/VerticalScroll/VerticalScroll.vue"

export default {
  name: "Remen",
  components: {
    HotCard,
    VerticalScroll,
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
      "ranking",
    ]),
    getRankingList(){
      let list=getAttribute(this.ranking,"list")
      return (list?list:[]).slice(0,this.loadCnt)
    }
  },
  methods: {
    ...mapActions([
      "getRanking",
    ]),
    async checkRefresh(){
      let now=new Date()
      if((now-this.refreshTime) > 8*1000){//3*1000*60){//3min
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

.component-remen
  height calc(100% - 2.8rem)//$title-nav-height
  overflow hidden
  .remen-wrap
    background-color $def-back-color
    padding ($block-interval * 0.8) 0
    overflow hidden
    .card-item
      width 100%
      padding ($block-interval*0.8) $block-interval
      border-bottom 1px solid $def-line-color
      box-sizing border-box
      &:nth-last-child(1)
        border-bottom none
        padding-bottom 0
</style>