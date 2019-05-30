
<template>
<div class="footer_guide">
    <div class="guide_item" v-for="(item,key) in guide_item" :key="key" @click="goto(item.path)" :class="{on: isCurrent(item.path)}">
      <span class="item_icon">
        <i class="iconfont" :class="item.icon"></i>
      </span>
      <span>{{item.text}}</span>
    </div>
</div>
</template>

<script>
export default {
  name: "FooterGuide",
  data () {
    return {
      guide_item:[
        {path:"/mainpage" ,icon:"icon-zhuye",text:"主页"},
        {path:"/channel"  ,icon:"icon-pindao",text:"频道"},
        {path:"/activity" ,icon:"icon-dongtai",text:"动态"},
        {path:"/shop"     ,icon:"icon-gouwu",text:"会员购"},
      ],
    };
  },
  methods: {
    goto (path) {
      this.$router.replace(path)
    },
    isCurrent (path) {
      let re=new RegExp("^"+path+"(/|$)")
      return re.test(this.$route.path)
    }
  },

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../assets/style/index.styl"
.footer_guide
  // 顶部有白色的边框
  top-border-1px($def-line-color)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height $footer-guide-height
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
      color $blbl-pink
      span
        .iconfont
          text-shadow 0px 0px 15px $blbl-pink-s
    span
      font-size 14px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 26px
</style>