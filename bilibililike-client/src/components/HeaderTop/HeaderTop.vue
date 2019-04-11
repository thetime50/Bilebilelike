<template>
  <header class="header">
    <div class="lift-icon" v-if="liftIconType=='liftMenu'"><!-- src -->
      <span class="icon_span">
        <i class="iconfont icon-caidan"></i>
      </span>
      <div class="head-img"><img src="../../../static/temp/imgs/head-img.jpg" alt="head-img"></div>
    </div>
    <div class="lift-icon" v-if="liftIconType=='back'"></div>

    <div class="centerContent"> <slot name="centerContent"/> </div>
    <div class="divisions" ref="divisions" :style="{width: divisions_fill.width}">
      <div class="div-section1">
        <div class="liftContent">   <slot name="liftContent"/>   </div> 
        <div class="rightContent">  <slot name="rightContent"/>  </div>
      </div>
      <div class="div-section2">
        <slot/> <!-- name="default" --> <!-- 这里的样式完全由引用处控制 -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderTop",
  props:{
    liftIconType : String, // liftMenu / back / none
  },
  data () {
    return {
      divisions_fill:{
        ele:false,
        width:""
      }
    };
  },
  mounted: function (){
    this.divisions_fill.ele=this.$refs.divisions
    this.autoFill(this.divisions_fill)
  },
  created: function (){
      window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
      window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize (event) {
      this.autoFill(this.divisions_fill)
    },
    autoFill(ele_fill){
      let ele=ele_fill.ele
      if(ele){
        ele_fill.width=ele.parentNode.clientWidth - ele.offsetLeft -1 +"px"
        let w=ele.parentNode.clientWidth - ele.offsetLeft +"px"
        console.log(ele.parentNode.clientWidth , ele.offsetLeft,ele_fill.width,w)
        console.log(typeof(ele.parentNode.clientWidth ),typeof( ele.offsetLeft))
      }
    }
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
  @import "../../assets/style/index.styl"

  .header
    background-color $blbl-pink
    position static
    z-index 100
    left 0
    top 0
    width 100%
    height 3.5rem
    font-size 2rem
    // padding 0.5rem
    outline 0
    *
      margin 0
      border 0
      padding 0
      height 100%
    >*
      float left
      margin-top 0.7rem
      >*
        float left
        display: table-cell;
        vertical-align: middle;
    .lift-icon
      .icon_span
        .iconfont
          font-size 1.6rem
          margin 0 0.3rem
      .head-img
        width 2rem
        height 2rem
        border-radius 50%
        margin 0 0.3rem
        overflow hidden
        img
          width 100%
          height 100%
    .centerContent
      position absolute
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    .divisions
      .div-section2
        position absolute
      .div-section1
        width 100%
        position relative
        .liftContent
          float left
        .rightContent
          float right


</style>