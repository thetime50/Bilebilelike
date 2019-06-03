<template>
<div class="component-dummy-nav" :class="styles['component-dummy-nav']">
  <ul class="nav-list" :class="styles['nav-list']">
    <li class="item" :class="styles['item']">
      <div class="item-text" :class="styles['item-text']"> </div>
      <div class="item-cursor" :class="styles['item-cursor']"></div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "DummyNav",
  props:{
    nowIndex      :{type: Number ,default: 0},              //文本高亮
    cursorWidth   :{type: Number ,default: 70},             //70%
    positionSync  :{type: Number ,default: 0},              //光标位置同步
    routes        :{type: Array  ,default: ()=>{return []}},//{text:"",path:""}
    styles    :{type: Object ,default: ()=>{return {"component-dummy-nav":"component-nav"}}},//{"ref1":"class1","ref2":"class2"}
    _propsSync    :{type: Function },
  },
  data () {
    return {
    }
  },
  mounted () {
    this._propsSync({
      "nav_nowIndex":this.nowIndex,
      "nav_cursorWidth":this.cursorWidth,
      "nav_positionSync":this.positionSync,
      "nav_routes":this.routes,
      })
    this._propsSync({"nav_enable":true})
  },
  beforeDestroy () {
    this._propsSync({"nav_enable":false})
    this._propsSync({"nav_rou1s":[]})
  },
  watch: {
    nowIndex(before,after){
      this._propsSync({"nav_nowIndex":before})
    },
    cursorWidth(before,after){
      this._propsSync({"nav_cursorWidth":before})
    },
    positionSync(before,after){
      this._propsSync({"nav_positionSync":before})
    },
    routes(before,after){
      this._propsSync({"nav_routes":before})
    },
    // styles(before,after){
    //   this._propsSync({"nav_styles":before})
    // },
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
  @import "../../assets/style/index.styl"
  // 样式结构和component-nav是相同的
  .component-dummy-nav
    // .nav-list
    //   .item
    //     .item-text
    //       &.active
    //     .item-cursor

</style>