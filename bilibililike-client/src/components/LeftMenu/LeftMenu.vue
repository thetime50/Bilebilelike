<template>
<div class="component-left-menu">
  <!-- scroll -->
  <div class="left-menu-scroll" ref="left-menu-scroll">
    <div class="left-menu">
      <div class="left-menu-header">
        <img src="../../assets/imgs/bili_drawerbg_logined.png" alt="" class="backimg">
        header
      </div>
      <div class="left-menu-bigvip">
        <div class="item-icon">
          <i class="iconfont icon-wodedahuiyuan"></i>
        </div>
      </div>
      <div class="left-menu-wrapper">
        <div class="menu-wrapper-item" v-for="(item,index) in wrapperItem" :key="index">
            <div class="item-container" @click="pushItem(item)">
              <div class="item-number">
                {{item.number}}
              </div>
              <div class="item-text">{{item.text}}</div>
            </div>
        </div>
      </div>
      <div class="left-menu-groups">
        <div class="left-menu-group" v-for="(group,gindex) in mainMenuGroup" :key="gindex">
          <hr v-if="gindex">
          <div class="left-menu-item" v-for="(item,index) in group" :key="index">
            <div class="item-container" @click="pushItem(item)">
              <div class="item-icon">
                <i class="iconfont" :class="item.icon"></i>
              </div>
              <div class="item-text">{{item.text}}</div>
            </div>
          </div>
        </div>
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
      wrapperItem:[
          {text:"动态"  ,number:6,    path:""},
          {text:"关注"  ,number:345,  path:""},
          {text:"粉丝"  ,number:12,   path:""},
      ],
      mainMenuGroup:[
        [
          {text:"首页"      ,icon:"icon-zhuye",path:""},
          {text:"历史记录"  ,icon:"icon-lishi",path:""},
          {text:"离线缓存"  ,icon:"icon-lixianhuancun",path:""},
          {text:"我的收藏"  ,icon:"icon-shoucang",path:""},
          {text:"稍后再看"  ,icon:"icon-shaohouzaikan",path:""},
        ],[
          {text:"投稿"      ,icon:"icon-tougao",path:""},
          {text:"创作中心"  ,icon:"icon-chuangzuozhongxin",path:""},
          {text:"热门活动"  ,icon:"icon-huodong",path:""},
        ],[
          {text:"直播中心"    ,icon:"icon-zhibo",path:""},
          {text:"免流量服务"  ,icon:"icon-mianliuliangfuwu",path:""},
          {text:"我的订单"    ,icon:"icon-wodedindan",path:""},
          {text:"会员购中心"  ,icon:"icon-huiyuangouzhongxin",path:""},
          {text:"联系客服"    ,icon:"icon-lianxikefu",path:""},
        ]],
      footerItem:[
        {text:"设置",icon:"icon-shezhi"     ,path:"",},
        {text:"主题",icon:"icon-zhuti"      ,path:"",},
        {text:"夜间",icon:"icon-yejianmoshi",path:"",},
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
    this.$nextTick(function() {
      this.scroll = new BScroll(this.$refs["left-menu-scroll"],{ 
        click: true,
        bounce:false,
        bindToWrapper:true,
        // stopPropagation:true,
      })
      //不知道为什么这里一定要重新刷新
      setTimeout(()=>this.scroll.refresh(),120)
    })
  },
  methods: {
    pushItem (item) {
      let path=item.path?item.path:{path:'/defpage',query:{text:item.text}}
      this.$router.push(path)
    },
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
@import "../../assets/style/index.styl"

.component-left-menu
  // *
  //   border 0.2px solid #088
  display grid
  grid-template-columns 1fr
  grid-template-rows 1fr 4rem
  place-items stretch stretch
  height 100%
  .item-icon *
    color $def-font-color
  .item-text
    color $def-char-color
  .left-menu-scroll
    overflow hidden
    .left-menu
      .left-menu-header
        position relative
        background-color $blbl-pink
        height 9rem
        overflow hidden
        .backimg
          position absolute
          filter drop-shadow(1000px 0 0 #f4577d)//#f8668d)
          border-right: 1px solid transparent
          height 95%
          bottom 0
          right 1000px - 1px
      .left-menu-bigvip
        height 3rem
      .left-menu-wrapper
        display grid
        grid-template-columns repeat(3,1fr)
        grid-template-rows 1fr
        place-items stretch stretch
        border-top 1px solid $def-line-color
        border-bottom 1px solid $def-line-color
        height 5rem
        .menu-wrapper-item
          .item-container
            width 100%
            height 100%
            *
              margin 0.6rem
              text-align center
            .item-text
              font-size 0.95rem
            .item-number
              position relative
              margin-top 1.6rem
              left -0.1rem
              font-size 1.1rem
      .left-menu-groups
        .left-menu-group
          hr
            background-color $def-line-color
            height 1px
            border 0
          .left-menu-item
            display grid
            place-items center stretch
            height 3.5rem
            .item-container
              display grid
              grid-template-columns 4.2rem 1fr
              grid-template-rows 1fr
              justify-items center start
              align-items center
              height 2.8rem
              .item-icon
                .iconfont
                  font-size 1.5rem
              .item-text
                font-size 1.1rem
                margin-left 0.8rem
                text-align left
  .menu-footer
    display grid
    grid-template-columns repeat(3,1fr)
    grid-template-rows 1fr
    place-items center center
    background-color #fff
    border-top 1px solid $def-line-color
    .menu-footer-item
      .item-container
        .item-icon
          display inline-block
          vertical-align: middle
          width 2rem
          height 2rem
          border 1px solid $def-font-color
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