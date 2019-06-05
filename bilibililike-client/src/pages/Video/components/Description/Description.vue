<!--
Description.vue
-->
<template>
<div class="component-description">
  <VideoInfo/>
  <RecommendNew/>
</div>
</template>

<script>
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
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
</style>