
<template>
<div class="test_footer_guide">
    <div class="guide_item" v-for="(item,key) in guide_item" :key="key" @click="goto(item.path)" :class="{on: isCurrent(item.path)}">
      <span class="item_icon">
        <i class="iconfont" :class="item.icon">{{item.text[1]}}</i>
      </span>
      <span>{{item.text}}</span>
    </div>
</div>
</template>

<script>
export default {
  name: "TestFooterGuide",
  data () {
    return {
      guide_item:[
        {path:"/testmainpage" ,icon:"icon-zhuye",text:"TMP"},
        {path:"/test1"  ,icon:"icon-pindao",text:"T1"},
        {path:"/test2" ,icon:"icon-dongtai",text:"T2"},
        {path:"/test3"     ,icon:"icon-gouwu",text:"T3"},
      ],
    };
  },
  methods: {
    goto (path) {
      this.$router.replace(path)
    },
    isCurrent (path) {
      // console.log(this.$route.path)
      return this.$route.path === path
    }
  },

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../assets/style/index.styl"
.test_footer_guide
  // 顶部有白色的边框
  top-border-1px(#dcdcdc)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 63px
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