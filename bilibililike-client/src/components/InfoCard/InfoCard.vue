<template>
<div class="component-info-card">
  <div class="image-div">
    <div class="img-div">
      <img :src="info.pic" alt="info.title">
    </div>
    <div class="img-footer">
      <!-- 
        play icon
        play num
        video_review icon
        video_review
        duration
       -->
    </div>
  </div>
  <div class="title"></div>
  <div class="card-fooder">
    <div class="type"></div>
    <div class="operation"></div>
  </div>
</div>
</template>

<script>
// 图片懒加载
export default {
  name: "InfoCard",
  data () {
    return {
    };
  },
  props:{
    info  :{type: Object ,default: ()=>{return {}}},
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-info-card
  .image-div
    .img-div
      img
        width 100%
    .img-footer
      // <!-- 
      //   play icon
      //   play num
      //   video_review icon
      //   video_review
      //   duration
      //  -->
  .title
  .card-fooder
    .type
    .operation
      //
</style>