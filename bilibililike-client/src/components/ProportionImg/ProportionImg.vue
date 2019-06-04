<!--
ProportionImg.vue
-->
<template>
  <div class="component-proportion-img" ref="proportion">
    <div class="img-div">
      <!-- <img :src="info.pic" :alt="info.title"> -->
      <img v-if="lazy" v-lazy="imgSrc" :alt="imgAlt">
      <img v-else :src="imgSrc" :alt="imgAlt">
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "ProportionImg",
  props:{
    imgSrc      :{type: String  ,default: ""},
    imgAlt      :{type: String  ,default: ""},
    proportion  :{type: Number  ,default: 100},//100%
    lazy        :{type: Boolean ,default: true},
  },
  data() {
    return {};
  },
  mounted () {
    this.$nextTick(()=>{
      this.setPaddingBottom(this.proportion)
    })
  },
  watch: {
    proportion(before,after){
      this.setPaddingBottom(before)
    }
  },
  methods: {
    setPaddingBottom(p){
      this.$refs.proportion.style["padding-bottom"]=p+"%"
    }
  }
};
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-proportion-img
  position relative
  width 100%
  // padding-bottom 62.5%//@320w_200h
  &>.img-div
    position absolute
    width 100%
    height 100%
    display flex
    &>img
      display block
      width 100%
      height 100%
      margin auto
      &[lazy=loading]
        width auto
        height 40%
</style>