<!--
StickyScroll.vue
-->
<template>
<div class="component-sticky-scroll">
  <div class="sticky-scroll-scroll-container" ref="sticky-scroll-scroll-container">
    <div class="sticky-scroll-scroll"> <slot/> </div>
  </div>
  <div class="sticky-scroll-sticky" ref="sticky-scroll-sticky">
    <slot name="sticky"></slot> <!-- position absolute must -->
  </div>
</div>
</template>

<script>
import BScroll from "better-scroll"

export default {
  name: "StickyScroll",
  data () {
    return {
    };
  },
  mounted () {
    // this.$nextTick(()=> {//
    this._interval=setInterval(()=>{
      // console.dir(this.$refs["sticky-scroll-scroll"].innerHTML.length)
      if(this.$refs["sticky-scroll-scroll-container"].innerHTML.length>100){
        clearInterval(this._interval)
        this.scroll = new BScroll(this.$refs["sticky-scroll-scroll-container"],{ 
          click: true,
          bounce:false,
          bindToWrapper:true,
          probeType:3,
          // stopPropagation:true,
        })
        this.scroll.on('scroll',({x,y})=>{
          this.stickyTopRefresh(y)
        })
        this.stickyTopRefresh(0)
      }
    },10)
  },
  beforeDestroy () {
    this._interval && clearInterval(this._interval)
  },
  methods: {
    stickyTopRefresh(y){
      let appNavList=this.$refs["sticky-scroll-sticky"]
      let childrenTop=appNavList.children[0].offsetTop
      if(childrenTop+y>0)
        appNavList.style.top=y+"px"
      else
        appNavList.style.top=-childrenTop+"px"
    }
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-sticky-scroll
  position relative
  width 100%
  height 100%
  .sticky-scroll-scroll-container
    position relative
    width 100%
    height 100%
    .sticky-scroll-scroll
      width 100%
  .sticky-scroll-sticky
    position absolute
    width 100%
</style>