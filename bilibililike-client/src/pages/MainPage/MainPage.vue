<template>
<div class="main-page">
  <header-top lift-icon-type="liftMenu">
    <template v-slot:liftContent>
      l
    </template>
    <template v-slot:centerContent>
      <p>ccccc</p>
    </template>
    <template v-slot:rightContent>
      rr
    </template>
    <!-- v-slot:default -->
    d
  </header-top>
  MainPage
</div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"

export default {
  name: "MainPage",
  components: {
    HeaderTop,
  },
  data () {
	 return {
	 };
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
</style>