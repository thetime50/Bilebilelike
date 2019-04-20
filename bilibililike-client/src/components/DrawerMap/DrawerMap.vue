<template>
<div class="component-drawer-map"
  @longTap="touchEvent" 
  @swipe="touchEvent" 
  @touchend="touchEvent">

  <div class="drawer-content">
    <slot/>
  </div>
  <div class="drawer-mask">

  </div>
</div>
</template>

<script>
export default {
  name: "DrawerMap",
  props: {
    show:false,//显示开关
    drawerWidth:"20rem",
    longTapWidth:"0.5rem",
  },
  data () {
    return {
      maskShow:false,
    };
  },
  mounted () {
    
  },
  methods:{
    touchEvent(e){
      console.log(e.type,e)
      
    }
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-drawer-map
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  .drawer-content
    position fixed
    // &.swipe
    //   //
    &.to-open
      //
    &.to-close
      //
    &.to-long-tap
      //
  .drawer-mask
    position fixed
    top 0
    bottom 0

</style>