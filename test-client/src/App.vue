<template>
  <div id="app">
    <left-menu-drawer></left-menu-drawer>
    <router-view/>
    <TestFooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import TestFooterGuide from "./components/TestFooterGuide/TestFooterGuide.vue"
import LeftMenuDrawer from "./components/LeftMenuDrawer/LeftMenuDrawer.vue"

export default {
  name: 'App',
  components: {
    LeftMenuDrawer,
    TestFooterGuide
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
