<template>
<div class="component-video">
  <div class="video-container">
    <ProportionImg :imgSrc="infoPic" :imgAlt="infoTitle" :proportion="proportion">
      <div class="video-header"></div>
      <div class="video-footer"></div>
      <div class="video-masker"></div>
    </ProportionImg>
    <div class="danmu">
      
    </div>
  </div>
  <!-- user and info -->
  <ComponentScroll
    :components="components"
  />

</div>
</template>

<script>
import {mapState,mapGetters,mapActions} from "vuex"
import ComponentScroll from "../../components/RouteScroll/ComponentScroll.vue"
import Description from "./compontents/Description.vue"
import Replay from "./compontents/Replay.vue"
import ProportionImg from "../../components/ProportionImg/ProportionImg.vue"

const components=[
  {text:"简介",comp:Description},
  {text:"评论",comp:Replay},
]

export default {
  name: "Video",
  components: {
    ComponentScroll,
    ProportionImg,
  },
  data () {
    return {
      components:components,
    };
  },
  created () {
    this.getVideoPage(this.av)
    this.getRecommendnew(this.av)
    this.getReply(this.av)
  },
  computed: {
    av(){
      return this.$route.params.av.slice(2)
    },
    ...mapState(["recommendnew","reply"]),
    ...mapGetters(["initialState"]),
    infoPic(){
     return (this.initialState.videoInfo ?
        this.initialState.videoInfo.pic:"")
    },
    infoTitle(){
      return (this.initialState.videoInfo ?
        this.initialState.videoInfo.title:"")
    },
    proportion(){
      // this.initialState.videoInfo. dimension/pages.dimension .width
      return 62.5
    },
  },
  filters: {
    slice(s){
      return JSON.stringify(s).slice(0,100)
    },
  },
  methods: {
    ...mapActions(["getVideoPage","getRecommendnew","getReply"]),
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-video
  width 100%
  height 100%
  .video-container
    width 100%
    .video-header
    .video-footer
    .video-masker
      //
    .danmu
      //
</style>