<template>
  <header class="header">
    <dir class="lift-icon" v-if="liftIconType=='liftMenu'"><!-- src -->
      <!-- 半个菜单 -->
      <!-- 头像 -->
    </dir>
    <dir class="lift-icon" v-if="liftIconType=='back'"></dir>
    <slot/> <!-- name="default" -->
  </header>
</template>

<script>
export default {
  name: "HeaderTop",
  props:{
    liftIconType:String // liftMenu / back / none
  },
  data () {
    return {
    };
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
  @import "../../assets/style/index.styl"

  .header
    background-color $blbl-pink
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px

</style>