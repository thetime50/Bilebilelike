<template>
<div class="component-left-menu-drawer">
  <DrawerMap :show.sync="show" time="2s">
    <left-menu/>
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
      show:false,
    };
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
      getLeftMenuShow: state => state.leftMenuState.show
    })
  },
  methods: {
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