<template>
<div class="component-left-menu-drawer">
  <DrawerMap :show.sync="curShow" time="2s">
    <left-menu/>
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
  props:{
    show:{default:false},
  },
  data () {
    return {
      curShow:false,
    };
  },
  watch: {
    show : function(newVal, oldVal){
      this.curShow = newVal;
    },
    curShow : function(newVal, oldVal){
      this.$emit("update:show", newVal);
    }
  },

}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
</style>