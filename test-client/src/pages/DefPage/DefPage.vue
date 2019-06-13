<template>
<div class="component-def-page">
  <div class="text">
    {{$route.query.text}}
  </div>
  <div class="back" v-if="$route.query.back!=false"
     @click="$router.go(-1)">
     <div>
      <i class="iconfont icon-fanhui"></i>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "DefPage",
  data () {
    return {
    };
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-def-page
  .text
    margin-top 20%
    font-size 3rem
  .back
    margin:2rem auto
    border 0.5rem solid #8cf
    border-radius 2rem
    overflow hidden
    max-width 12rem
    text-align:center
  .back *
    font-size 8rem
    color #8cf
    border-radius 2rem
    margin 0.5rem
    overflow hidden
</style>