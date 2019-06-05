<template>
<div class="component-progress">
  <div class="percentage-container">
    <div class="percentage" :style="{width:percentage+'%'}"></div>
  </div>
  <div class="img-container">
    <img src="./ic_tv_pink.png" alt="" class="progress" 
     :style="{left:percentage+'%'}" height="100%" width="100%">
  </div>
</div>
</template>

<script>
export default {
  name: "Progress",
  props: {
    percentage:{type:Number   ,default:0},
    styles    :{type: Object  ,default: ()=>{return {}}},//{"ref1":"class1","ref2":"class2"}
  },
  data () {
    return {
    };
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
@import "../../assets/style/index.styl"

$height = 0.2rem

.component-progress
  position relative
  width 100%
  height $height
  .percentage-container
    width 100%
    height 100%
    border-radius $height
    overflow hidden
    background-color rgba(200,200,200,0.3)
    .percentage
      height 100%
      width 0%
      background-color $blbl-pink
  .img-container
    position absolute
    top 0
    width 100%
    height 100%
    line-height $height
    vertical-align middle
    text-align left
    .progress
      position absolute
      top -0.45rem
      height 1rem
      width auto
</style>