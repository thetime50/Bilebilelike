<template>
<div>
    <header-top left-icon-type="back">
    <template v-slot:leftContent>
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