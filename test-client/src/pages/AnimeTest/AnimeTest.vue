<!--
AnimeTest.vue
-->
<template>
<div class="component-anime-test">
  <div>AnimeTest</div>
  <div class="demo-content function-based-values-demo">
    <div class="line">
      <div class="small circle shadow"></div>
      <div data-x="170" class="small circle el el1"></div>
    </div>
    <div class="line">
      <div class="small circle shadow"></div>
      <div data-x="80" class="small circle el el2"></div>
    </div>
    <div class="line">
      <div class="small circle shadow"></div>
      <div data-x="270" class="small circle el el3"></div>
    </div>
  </div>
</div>
</template>

<script>
import anime from "animejs"

export default {
  name: "AnimeTest",
  data () {
    return {
    };
  },
  mounted () {
    this.$nextTick(()=>{
      anime({
        targets: '.function-based-values-demo .el',
        translateX: function(el) {
          return el.getAttribute('data-x');
        },
        translateY: function(el, i) {
          return 50 + (-50 * i);
        },
        scale: function(el, i, l) {
          return (l - i) + .25;
        },
        rotate: function() { return anime.random(-360, 360); },
        borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
        // duration: function(e,i) { console.log("duration",i,anime.random(1000, 4000)); return anime.random(3000, 7000); },
        duration: function(e,i) { return anime.random(1500, 3000); },
        delay: function() { return anime.random(0, 400); },
        direction: 'alternate',
        loop: true,
        // easing: 'linear',
      })
    })
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-anime-test
  .demo-content
    .line
      position relative
      margin-top 5px
      .small.circle
        width 30px
        height 30px
        border-radius 5px
        &.shadow
          background-color #ccc
        &.el
          position absolute
          top 0px
        &.el1
          background-color rgba(200,200,250,0.4)
        &.el2
          background-color rgba(250,200,200,0.4)
        &.el3
          background-color rgba(200,250,200,0.4)
</style>