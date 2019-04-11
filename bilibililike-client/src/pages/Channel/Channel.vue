<template>
<div>
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

Channel
</div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"

export default {
  name: "Channel",
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