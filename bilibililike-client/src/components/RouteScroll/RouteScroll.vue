<template>
<div class="component-route-scroll">
  <div class="slide"><slide/></div>
  <router-view/>
  RouteScroll
</div>
</template>

<script>
import Slide from "./Slide.vue"
export default {
  name: "RouteScroll",
  components: {
    Slide,
  },
  props:{
    //
  },
  data () {
    return {
    };
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-route-scroll
  width 100%
  .slide
    position: relative
</style>