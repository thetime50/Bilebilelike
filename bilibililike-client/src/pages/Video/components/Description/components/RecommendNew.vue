<!--
RecommendNew.vue
-->
<template>
<div class="component-recommend-new">
  <div class="card-item" v-for="(item,index) in recommendnew" :key="index">
    <VideoPageCard :info="item"/>
  </div>
</div>
</template>

<script>
import {getAttribute} from "@/assets/js/tool.js"
import tool from "@/assets/js/tool.js"
import VideoPageCard from "./VideoPageCard.vue"

export default {
  name: "RecommendNew",
  components: {
    VideoPageCard,
  },
  props:{
    recommendnew:{type:Object,default:()=>{return {}}},
  },
  data () {
    return {
    };
  },
  computed: {

  },
  filters: {
    getAttribute(){
      return getAttribute(...arguments)
    },
    autoChNum(num,chCnt=4,type=2){
      return tool.autoChNum(num,chCnt,type)
    },
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
@import "../../../../../assets/style/index.styl"

.component-recommend-new
  .card-item
    width 100%
    padding ($block-interval*0.8) 0
    border-bottom 1px solid $def-line-color
    &:nth-last-child(1)
      border-bottom none
      padding-bottom 0
</style>