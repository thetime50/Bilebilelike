<!--
Description.vue
-->
<template>
<div class="component-description">
  <VideoInfo :initialState="initialState"/>
  <RecommendNew :recommendnew="recommendnew"/>
</div>
</template>

<script>
import {getAttribute} from "@/assets/js/tool.js"
import VideoInfo from "./components/VideoInfo.vue"
import RecommendNew from "./components/RecommendNew.vue"

export default {
  name: "Description",
  components: {
    VideoInfo,
    RecommendNew,
  },
  props:{
    initialState:{type:Object,default:()=>{return {}}},
    recommendnew:{type:Object,default:()=>{return {}}},
  },
  data () {
    return {
    };
  },
  filters: {
    slice(s){
      return JSON.stringify(s).slice(0,100)
    },
    getAttribute(){
      return getAttribute(...arguments)
    },
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
@import "../../../../assets/style/index.styl"

.component-description
  padding $block-interval
</style>