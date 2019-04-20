<template>
<div class="component-left-menu-drawer">
  <DrawerMap>
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
  data () {
    return {
    };
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
</style>