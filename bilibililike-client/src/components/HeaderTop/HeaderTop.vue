<template>
  <div class="header-div">
    <header class="header" :class="{'header-game-page': pageCase==='game'}">
      <div class="left-icon left-menu" v-if="leftIconType=='leftMenu'" 
        @click="setLeftMenuShow(!getLeftMenuShow)"><!-- src -->
        <span class="icon_span">
          <i class="iconfont icon-caidan"></i>
        </span>
        <div class="head-img"><img :src="headImgGetter" alt="head-img"></div>
      </div>
      <div class="left-icon back" v-if="leftIconType=='back'">
        <span class="icon_span" @click="$router.go(-1)">
          <i class="iconfont icon-fanhui"></i>
        </span>
      </div>

      <div class="centerContent"> <slot name="centerContent"/> </div>
      <div class="divisions-prosition">
        <div class="divisions" ref="divisions">
          <div class="div-section1">
            <div class="leftContent">   <slot name="leftContent"/>   </div> 
            <div class="rightContent">  <slot name="rightContent"/>  </div>
          </div>
          <div class="div-section2">
            <slot/> <!-- name="default" --> <!-- 这里的样式完全由引用处控制 -->
          </div>
        </div>
      </div>
    </header>
    <div><br></div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters} from "vuex"
export default {
  name: "HeaderTop",
  props:{
    leftIconType : String, // leftMenu / back / none
    pageCase : String,// normal / game
  },
  components: {
  },
  data () {
    return {
      divisions_fill:{
        ele:false,
        width:""
      },
    };
  },
  created () {
    if(this.leftIconType=='leftMenu'){
      this.setLeftMenuEnable(true)
    }
  },
  computed: {
    ...mapState("localState",{
      getLeftMenuShow: state => state.leftMenuState.show
    }),
    ...mapGetters(["headImgGetter"]),
  },
  methods: {
    ...mapMutations('localState', {
      setLeftMenuShow: "setLeftMenuState_show",
      setLeftMenuEnable: "setLeftMenuState_enable"
    })
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
  @import "../../assets/style/index.styl"
  header-font-size = 1.5rem
  header-text-pt   = 0.5rem
  header-height    = 2.2rem

  .header
    position relative
    display flex
    z-index 100
    left 0
    top 0
    width 100%
    height 3.5rem
    font-size 2rem
    // padding 0.5rem
    outline 0
    *
      background-color rgba(0,0,0,0)
      // border 0.2px solid #888
    //&.header-normal-page //debug
    background-color $blbl-pink
    color #fff
    a
      color #fff
    &.header-game-page
      position sticky
      background-color #fff
      color $game-blue
      *
        color $game-blue
    //全局icon
    .iconfont
      font-size $com-iconsize
      margin 0 0.3rem
    //一级子类 大类
    &>*
      float left
      margin-top 0.7rem
      &>*//二级子类
        float left
        display: table-cell;
        vertical-align: middle;
        //.......
        margin 0
        border 0
        padding 0
        height 100%
      &.left-icon
        height header-height
        &.left-menu
          position relative
          left -1rem
          .head-img
            width 2rem
            height 2rem
            border-radius 50%
            margin-left  0 0.3rem
            overflow hidden
            border 1.5px solid #fff
            background-color #fff
            position relative
            left 0.5rem
            img
              width 100%
              height 100%
      &.centerContent
        position absolute
        top header-text-pt + @margin-top
        left 50%
        transform translate(-50%, -50%)
        font-size header-font-size
        height header-height
        padding-top @height*0.2
      &.divisions-prosition//用来定位 计算宽度
        width 1px
        height header-height
        flex 1
        margin-left header-height*0.1
        margin-right @margin-left
        .divisions
          position relative//使用非static定位作为absolute的基准
          width 100%
          .div-section2
            position absolute
            top 0
            font-size header-font-size
            padding-top header-text-pt
          .div-section1
            width 100%
            position relative
            .leftContent
              float left
              font-size header-font-size
              padding-top header-text-pt
            .rightContent
              float right
              font-size header-font-size
              padding-top header-text-pt

</style>