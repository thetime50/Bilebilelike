<template>
<div class="component-nav">
  <ul class="nav-list">
    <li class="item" v-for="(item,index) in routes" 
      :class="{'active': nowIndex===index}" @click="tabClick(item)" 
      ref="navlist" :key="index">
      {{item.text}}
    </li>
  </ul>
  <div class="cursor"></div>
</div>
</template>

<script>
//滑动同步 动画同步
//点击事件
export default {
  name: "Vav",
  props:{
    nowIndex  :{type: Number ,default: 0},
    routes    :{type: Array  ,default: ()=>{return []}},//{text:"",path:""}
  },
  data () {
    return {
    };
  },
  computed: {
    navList(){
      return this,$refs.navlist
    }
  },
  methods: {
    tabClick(item){
      this.$router.replace(item.path)
    },
    getEleMiddle(ele){
      console.log(ele)
    }
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
  @import "../../assets/style/index.styl"
  $line = 2.8rem
  .component-nav
    position relative
    margin-bottom 0.5rem
    border-bottom 1px solid $def-line-color
    .nav-list
      position sticky
      width 100%
      overflow hidden
      .item
        width $line*1.3
        display inline-block
        text-align center
        height $line
        line-height $line
        color $def-char-color
        &.active
          color $blbl-pink
    .cursor
      position absolute
      height 0.15rem
      width 2.5rem
      bottom 0
      background-color $blbl-pink

</style>