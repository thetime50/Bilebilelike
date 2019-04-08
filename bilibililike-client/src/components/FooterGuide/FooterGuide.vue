
<template>
<div class="foot_guide">
    <div class="guide_item" v-for="(path,icon,text) in guide_item" @click="goto(path)" :class="{on: isCurrent(path)}">
    <span class="item_icon">
      <i class="iconfont" :class="icon"></i>
    </span>
    <span>{{text}}</span>
    </div>
</div>
</template>

<script>
export default {
  name: "FooterGuide",
  data () {
    return {
      guide_item:[
        {path:"/mainpge"  ,icon:"icon-zhuye",text:"主页"},
        {path:"/channel"  ,icon:"icon-pindao",text:"频道"},
        {path:"/activity" ,icon:"icon-dongtaiweixuanzhong",text:"动态"},
        {path:"/shop"     ,icon:"icon-gouwu",text:"购物"},
      ],
    };
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.footer_guide
  // 顶部有白色的边框
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color #02a774
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>