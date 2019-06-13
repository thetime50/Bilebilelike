<template>
<div class="component-left-menu-drawer">
  <DrawerMap :enable="true" :show.sync="show" 
    :directionLock="true" :velocity="true" @drawerMapEvent="DMEvent">
    <left-menu :scrollEn="scrollEn"/>
  </DrawerMap>
</div>
</template>

<script>
import DrawerMap from "../DrawerMap/DrawerMap.vue"
import LeftMenu from "../LeftMenu/LeftMenu.vue"

export default {
  name: "LeftMenuDrawer",
  components: {
     DrawerMap,
     LeftMenu,
  },
  data () {
    return {
      show:false,
      scrollEn:true,
    };
  },
  created () {
  },
  watch: {
  },
  computed: {
  },
  methods: {
    DMEvent(e){
      if(e.type==="movestart"){
        this.scrollEn=false
      }else if(e.type==="moveend"){
        this.scrollEn=true
      }
    },
  }

}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
  .component-left-menu-drawer
    position fixed
    z-index 500
    top 0
    left 0
    height 0
    width 0
    margin 0
    border 0
    padding 0

</style>