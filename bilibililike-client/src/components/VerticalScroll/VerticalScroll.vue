<!--
VerticalScroll.vue
-->
<template>
<div class="component-vertical-scroll"  ref="component-vertical-scroll">
  <div class="vertical-scroll-scroll"> <slot/> </div>
</div>
</template>

<script>
import BScroll from "better-scroll"

export default {
  name: "VerticalScroll",
  data () {
    return {
    };
  },
  mounted () {
    // this.$nextTick(()=> {//
    this._interval=setInterval(()=>{
      // console.log(this.$refs["component-vertical-scroll"].innerHTML.length)
      if(this.$refs["component-vertical-scroll"].innerHTML.length>100){
        clearInterval(this._interval)
        this.scroll = new BScroll(this.$refs["component-vertical-scroll"],{ 
          click: true,
          bounce:false,
          bindToWrapper:true,
          probeType:3,
          // stopPropagation:true,
        })
      }
    },10)
  },
  beforeDestroy () {
    this._interval && clearInterval(this._interval)
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-vertical-scroll
  position relative
  width 100%
  height 100%
  .vertical-scroll-scroll
    width 100%

</style>