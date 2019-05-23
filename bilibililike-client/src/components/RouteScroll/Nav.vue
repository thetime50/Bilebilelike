<template>
<div class="component-nav">
  <ul class="nav-list">
    <li class="item" v-for="(item,index) in routes" :class="{'active': nowIndex===index}" @click="tabClick(index)" :key="index">
      {{item.text}}
    </li>
  </ul>
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
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
  @import "../../assets/style/index.styl"
  
  .component-nav
    margin-bottom: 20px
    .nav-list
      width: 100%
      overflow: hidden
      .item
        width: 20%
        display: inline-block
        text-align: center
        height: 48px
        line-height: 48px
        &.active
          color $blbl-pink

</style>