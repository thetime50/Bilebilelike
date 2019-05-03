<template>
<div class="component-left-menu">
  <!-- scroll -->
  <div class="left-menu-scroll" ref="left-menu-scroll">
    <div class="scroll-container">
      <div v-for="(item,index) in mainMenu" :key="index">
        {{item}}
      </div>
    </div>
  </div>
  <div class="menu-footer">
    <div class="menu-footer-item" v-for="(item,index) in footerItem" :key="index">
      <router-link :to="item.path?item.path:{path:'/defpage',query:{text:item.text}}">
        <div class="item-container">
          <div class="item-icon">
            <i class="iconfont" :class="item.icon"></i>
          </div>
          <div class="item-text">{{item.text}}</div>
        </div>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
import BScroll from "better-scroll"

export default {
  name: "LeftMenu",
  props: {
    scrollEn:{type: Boolean,default:true},
  },
  data () {
    return {
      //data
      mainMenu:"123fsagwgxcfd".repeat(3),
      footerItem:[
        {path:"" ,icon:"icon-shezhi",text:"设置"},
        {path:"" ,icon:"icon-zhuti",text:"主题"},
        {path:"" ,icon:"icon-yejianmoshi",text:"夜间"},
      ],

      //state
      scrolling:false,
    };
  },
  watch: {
    scrollEn: function (to, from) {
      if(to)
        this.scroll.enable()
      else
        this.scroll.disable()
    }
  },
  mounted () {
    this.$nextTick(() =>{
      this.scroll = new BScroll(this.$refs["left-menu-scroll"],{ 
        click: true,
        bounce:false,
        bindToWrapper:true,
        // stopPropagation:true,
      })
    })
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
@import "../../assets/style/index.styl"

.component-left-menu
  *
    border 0.2px solid #088
  .left-menu-scroll
    height 20rem
    overflow hidden
  .menu-footer
    position absolute
    bottom 0
    height 4rem
    width 100%
    display grid
    grid-template-columns repeat(3,1fr)
    grid-template-rows 1rm
    place-items center center
  .menu-footer-item
    color $def-color
    .item-container
      .item-icon
        display inline-block
        vertical-align: middle
        width 2rem
        height 2rem
        border 1px solid $def-color
        border-radius 50%
        i
          display: inline-block
          vertical-align: middle
          line-height 2rem
          font-size 1.5rem
      .item-text
        display: inline-block
        vertical-align: middle
</style>