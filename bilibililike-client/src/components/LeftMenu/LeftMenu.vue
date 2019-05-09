<template>
<div class="component-left-menu">
  <!-- scroll -->
  <div class="left-menu-scroll" ref="left-menu-scroll">
    <div class="left-menu">
      <div class="left-menu-header">
        <img src="../../assets/imgs/bili_drawerbg_logined.png" alt="" class="backimg">
        <div class="head-info">
          <div class="head-pendant" @click="gotoPath('login')">
            <div class="head-img"><img src="../../../static/temp/imgs/head-img.jpg" alt="head-img"></div>
            <div class="item-icon">
              <i class="iconfont icon-wodedahuiyuan"></i>
            </div>
          </div>
          <div class="name-content">
            <div class="name" @click="gotoPath('login')">YouName</div>
            <div class="level"><div class="scale">LV5</div></div>
            <div class="yearbigvip"><div class="scale">年度大会员</div></div>
          </div>
          <div class="property">
            <div class="bbi">
              B币：5.0
            </div>
            <div class="yingbi">
              硬币：321.0
            </div>
          </div>
        </div>
        <div class="right-icon">
            <div class="item-icon" @click="gotoDef('B钱包')">
              <i class="iconfont icon-qianbao5"></i>
            </div>
            <div class="item-icon" @click="gotoDef('扫码')">
              <i class="iconfont icon-saoma"></i>
            </div>
        </div>
      </div>
      <div class="left-menu-bigvip" @click="gotoDef('大会员')">
        <div class="left-content">
          <i class="iconfont icon-wodedahuiyuan"></i>大会员
        </div>
        <div class="right-content">
          畅看番剧国创 <i class="iconfont icon-xiangxi"></i>
        </div>
      </div>
      <div class="left-menu-wrapper">
        <div class="menu-wrapper-item" v-for="(item,index) in wrapperItem" :key="index">
            <div class="item-container" @click="e => itemEvent(e,item)">
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
            <div class="item-container" @click="e => itemEvent(e,item)">
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
      //item的meth接收一个e参数(event)
      wrapperItem:[
          {text:"动态"  ,number:6    ,meth:this.createDefItemMeth("")},
          {text:"关注"  ,number:345  ,meth:this.createDefItemMeth("")},
          {text:"粉丝"  ,number:12   ,meth:this.createDefItemMeth("")},
      ],
      mainMenuGroup:[
        [
          {text:"首页"      ,icon:"icon-zhuye"                ,meth:this.createDefItemMeth("")},
          {text:"历史记录"  ,icon:"icon-lishi"                ,meth:this.createDefItemMeth("")},
          {text:"离线缓存"  ,icon:"icon-lixianhuancun"        ,meth:this.createDefItemMeth("")},
          {text:"我的收藏"  ,icon:"icon-shoucang"             ,meth:this.createDefItemMeth("")},
          {text:"稍后再看"  ,icon:"icon-shaohouzaikan"        ,meth:this.createDefItemMeth("")},
        ],[
          {text:"投稿"      ,icon:"icon-tougao"               ,meth:this.createDefItemMeth("")},
          {text:"创作中心"  ,icon:"icon-chuangzuozhongxin"    ,meth:this.createDefItemMeth("")},
          {text:"热门活动"  ,icon:"icon-huodong"              ,meth:this.createDefItemMeth("")},
        ],[
          {text:"直播中心"    ,icon:"icon-zhibo"              ,meth:this.createDefItemMeth("")},
          {text:"免流量服务"  ,icon:"icon-mianliuliangfuwu"   ,meth:this.createDefItemMeth("")},
          {text:"我的订单"    ,icon:"icon-wodedindan"         ,meth:this.createDefItemMeth("")},
          {text:"会员购中心"  ,icon:"icon-huiyuangouzhongxin" ,meth:this.createDefItemMeth("")},
          {text:"联系客服"    ,icon:"icon-lianxikefu"         ,meth:this.createDefItemMeth("")},
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
    //跳转方法 mode="push" "replace"
    gotoPath(path,mode="push"){
      const modes=["push","replace"]
      if(modes.includes(mode) && path)
        this.$router[mode](path)
      else
        console.log("mode:",mode,"not is:",modes)
    },
    //e是默认的
    //item,mode,path通过createItemMeth绑定
    defItemMeth(e,item,path,mode){
      path=path?path:{path:'/defpage',query:{text:item.text}}
      this.gotoPath(path,mode)
    },
    //放在item初始化里绑定方法和参数
    createItemMeth(fun,...rest){
      let params=[].slice.call(rest)
      return function(e,item){
        if(fun)//这里做判断和数据绑定
          fun(e,item,...params)
      }
    },
    createDefItemMeth(path,mode){
      return this.createItemMeth(this.defItemMeth,path,mode)
    },
    //在dom里绑定的item处理事件
    itemEvent(event,item){
      if(item.meth)
        item.meth(event,item)
    },

    gotoDef(text=""){
      let path={path:'/defpage',query:{text:text}}
      this.gotoPath(path)
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
        height 10rem
        overflow hidden
        .backimg
          position absolute
          filter drop-shadow(1000px 0 0 #f4577d)//#f8668d)
          border-right: 1px solid transparent
          height 95%
          bottom 0
          right 1000px - 1px
        .head-info
          position absolute
          top 0
          left 0
          float left
          margin 1rem
          .head-pendant
            position relative
            top 0
            left 0
            width 4rem
            height 4rem
            .head-img
              width 100%
              height 100%
              border-radius 50%
              border 2.5px solid #fff
              overflow hidden
              img
                width 100%
                height 100%
            .item-icon
              position absolute
              top 70%
              left 70%
              height 1.6rem
              width 1.6rem
              background-color #fff
              border-radius 50%
              // border 1px solid #fff
              overflow hidden
              i
                font-size 1.6rem
                color $blbl-pink
          .name-content
            margin-top 1.4rem
            color #fff
            font-size 0
            .name
              text-align left
              font-size 1.3rem
              margin-right 0.4rem
            >div
              display inline-block
              vertical-align bottom
              >.scale
                font-size 0.7rem
                border-radius 0.3rem
                border 2px solid #fff
                padding 0.2rem 0.2rem
                width:fit-content
                transform scale(0.8)
            .level
              >div
                font-weight 900
            .yearbigvip
              >div
                color $blbl-pink
                background-color rgba(255,255,255,0.6)
          .property
            position relative
            top 0
            left 0
            margin-top 0.8rem
            *
              float left
              text-align left
              font-size 0.8rem
              color #fdc7d6
            .bbi
              position absolute
              left 0
            .yingbi
              position absolute
              left 4.5rem
        .right-icon
          position absolute
          top 0
          right 0
          margin 1rem
          div
            float left
            border-radius 50%
            border 1px solid #fff
            padding 0.5rem
            margin-left 1rem
            overflow hidden
            i
              position relative
              top 0.05rem
              left 0.05rem
              color #fff
              font-size 1.2rem
      .left-menu-bigvip
        display grid
        grid-template-columns 1fr 1fr
        grid-template-rows 1fr
        place-items center stretch
        height 3rem
        .left-content
          text-align left
          margin-left 1rem
          font-size 1.2rem
          vertical-align middle
          color $blbl-pink
          i
            display inline
            font-size 1.8rem
            vertical-align middle
        .right-content
          text-align right
          margin-right 1rem
          font-size 0.9rem
          vertical-align bottom
          color $def-font-color
          i
            display inline
            font-size 1rem
            vertical-align bottom
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
            overflow hidden
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