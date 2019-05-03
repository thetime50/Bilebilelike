<template>
<div class="component-left-menu-drawer">
  <DrawerMap :enable="getLeftMenuEnable" :show.sync="show" 
    :directionLock="true" @drawerMapEvent="DMEvent">
    <left-menu :scrollEn="scrollEn"/>
  </DrawerMap>
</div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
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
      show:true,
      scrollEn:true,
    };
  },
  created () {
    this.setLeftMenuShow(this.show)
  },
  watch: {
    show : function(newVal, oldVal){
      this.setLeftMenuShow(newVal)
    },
    getLeftMenuShow: function(newVal, oldVal){
      this.show=newVal
    }
  },
  computed: {
    ...mapState("localState",{
      getLeftMenuShow: state => state.leftMenuState.show,
      getLeftMenuEnable: state => state.leftMenuState.enable
    })
  },
  methods: {
    DMEvent(e){
      if(e.type==="movestart"){
        this.scrollEn=false
      }else if(e.type==="moveend"){
        this.scrollEn=true
      }
    },
    ...mapMutations('localState', {
      setLeftMenuShow: "setLeftMenuState_show"
    })
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