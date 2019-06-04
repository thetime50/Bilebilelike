<template>
<div class="component-video">
  <div class="video-container">
    <div class="video-proportion">
      <div class="video-div"></div>
      <div class="video-header"></div>
      <div class="video-footer"></div>
      <div class="video-masker"></div>
    </div>
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

const components=[
  {text:"简介",comp:Description},
  {text:"评论",comp:Replay},
]

export default {
  name: "Video",
  components: {
    ComponentScroll,
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
</style>