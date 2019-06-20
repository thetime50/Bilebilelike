<!--
Description.vue
-->
<template>
<div class="component-description" ref="component-description">
  <VerticalScroll>
    <div class="description-wrap">
      <VideoInfo :initialState="initialState"/>
      <RecommendNew :recommendnew="recommendnew"/>
    </div>
  </VerticalScroll>
</div>
</template>

<script>
import {getAttribute} from "@/assets/js/tool.js"
import VideoInfo from "./components/VideoInfo.vue"
import RecommendNew from "./components/RecommendNew.vue"
import VerticalScroll from "@/components/VerticalScroll/VerticalScroll.vue"
import {getAbsPosition} from "@/assets/js/dom.js"

export default {
  name: "Description",
  components: {
    VideoInfo,
    RecommendNew,
    VerticalScroll,
  },
  props:{
    initialState:{type:Object,default:()=>{return {}}},
    recommendnew:{type:Object,default:()=>{return {}}},
  },
  data () {
    return {
    };
  },
  mounted () {
    this.$nextTick(()=>{
      let ele=this.$refs["component-description"]
      let top=getAbsPosition(ele).y
      console.log(top)
      ele.style.height=window.innerHeight-top+"px"
    })
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
  .description-wrap
    padding $block-interval
</style>