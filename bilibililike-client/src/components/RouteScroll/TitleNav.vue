<!--
TitleNav.vue
-->
<template>
<div class="component-title-nav" :class="[navStyle]">
  <ul class="nav-list">
    <li class="item" v-for="(item,index) in titles" ref="items" :key="index">
      <div class="item-text" :class="{'active': nowIndex===index}"
        @click="tabClick(index)">
        {{item}}
      </div>
      <div class="item-cursor" ref="cursors" 
        :style="{width:cursorWidth+'%'}"></div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "TitleNav",
  props:{
    nowIndex      :{type: Number ,default: 0},              //文本高亮
    cursorWidth   :{type: Number ,default: 70},             //70%
    positionSync  :{type: Number ,default: 0},              //光标位置同步
    titles        :{type: Array  ,default: ()=>{return []}},//{text:"",path:""}
    navStyle      :{type: String ,default:""},
    navChange     :{type: Function},
  },
  data () {
    return {
      //navlist:{},
      cursors:[],
      items:[],
      listChange:false,
    };
  },
  mounted () {
    this.$nextTick(()=>{
      this.refsRefres()
      this._positionSync(this.positionSync)
    })
  },
  watch: {
    positionSync(before,after){
      this._positionSync(before)
    },
    titles(before,after){
      this.listChange=true
    }
  },
  computed: {
  },
  updated () {
    if(this.listChange){
      this.refsRefres()
      this.listChange=false
    }
  },
  methods: {
    tabClick(index){
      this.navChange && this.navChange({index})
    },
    _positionSync(x){
      let items=this.items
      let cursors=this.cursors
      for(let i=0;i<cursors.length;i++){
        let itemW=this.items[i].clientWidth
        let cursorW=this.cursors[i].clientWidth
        cursors[i].style.right=itemW*i+x*itemW+(itemW-cursorW)/2+"px"
      }
    },
    refsRefres(){
      this.cursors=this.$refs.cursors?[...this.$refs.cursors]:[]
      this.items =this.$refs.items?[...this.$refs.items]:[]
    },
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
  @import "../../assets/style/index.styl"
  $line = $title-nav-height
  .component-title-nav
    position relative
    border-bottom 1px solid $def-line-color
    .nav-list
      position sticky
      width 100%
      height $line
      overflow hidden
      .item
        position relative
        display inline-block
        bottom 0
        padding 0 0.2rem
        overflow hidden
        .item-text
          height $line
          line-height $line
          color $def-char-color
          text-align center
          padding 0 0.5rem
          &.active
            color $blbl-pink
        .item-cursor
          position absolute
          height 0.15rem
          // width 80%//2.5rem//
          bottom 0
          background-color $blbl-pink
          transition opacity 0.2s ease-out
</style>