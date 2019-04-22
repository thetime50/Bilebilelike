<template>
<div class="page-activity">
  <test-header-top left-icon-type="leftMenu">
    <template v-slot:centerContent>
      <div class="header-slot-cc">
        <p>动态</p>
      </div>
    </template>
    <template v-slot:rightContent>
      <div class="header-slot-rc">
        <span class="m-bianji"><!-- bianji -->
            <i class="iconfont icon-bianji"></i>
        </span>
      </div>
    </template>
  </test-header-top>

  <div class="wrapper">
    <ul>
      <li v-for="(iten,index) in range(20)" :key="index">
        -{{iten}}-
        <!-- <a :href="'https://www.baidu.com/s?wd='+String(iten)+'&ie=UTF-8'">-{{iten}}-</a> -->
      </li>
    </ul>
  </div>

  <div class="wrapper bs" ref="wrapper">
    <ul>
      <input type="number" v-model="bs.value"> <!-- observeDOM 测试 -->
      <li v-for="(iten,index) in range(bs.value)" :key="index">
        -{{iten}}-
        <a :href="'https://www.baidu.com/s?wd='+iten+'&ie=UTF-8'">-{{iten}}-</a>
      </li>
    </ul>
  </div>

  <!-- 默认全屏使用的?? 一样会模糊 比bs好一点 -->
  <!-- <div class="wrapper vs"> 
    <scroller>
      <input type="number" v-model="vs.value">
      <div v-for="(iten,index) in range(vs.value)" :key="index">
        -{{iten}}-
        <a :href="'https://www.baidu.com/s?wd='+iten+'&ie=UTF-8'">-{{iten}}-</a>
      </div>
    </scroller>
  </div> -->

  <!-- <div class="wrapper sw"> 
    <swiper :options="{pagination: {el: '.swiper-pagination'}}">
      <swiper-slide v-for="(slide, index) in sw.swiperSlides" :key="index">I'm Slide {{ slide }}</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div> -->
Activity
</div>
</template>

<script>
import TestHeaderTop from "../../components/TestHeaderTop/TestHeaderTop.vue"
import BScroll from "better-scroll"

export default {
  name: "Activity",
  components: {
    TestHeaderTop,
  },
  mounted () {
    this.$nextTick(() =>{
      this.scroll = new BScroll(this.$refs.wrapper,{ click: true})
    })
  },
  data () {
    return {
      bs:{
        value:20,
      },
      vs:{
        value:20,
      },
      sw:{
        swiperSlides: [1, 2, 3, 4, 5]
      },
    };
  },
  methods: {
    range:function* (start = 0, end = 0, step = 1) {
      if (start > end) {
         [start, end] = [end, start]
      }
      for (let i of Array((end - start) / step).keys()) {
         yield i * step + start
      }
    },
  },
  mounted() {
    setInterval(() => {
      console.log('simulate async data')
      if (this.sw.swiperSlides.length < 10) {
        this.sw.swiperSlides.push(this.sw.swiperSlides.length + 1)
      }
    }, 3000)
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
  @import "../../assets/style/index.styl"

  .page-activity
    .header-slot-rc .iconfont
      font-size $com-iconsize*1.1
    ul
      padding-left 0.4rem
    li
      list-style-type none
      text-align left
    .wrapper
      height 10rem
      width 3rem
      overflow hidden
      border 0.5px solid #888
      float left
      margin 2px
      ul
        margin 0
      &.bs
        width 25%
        input
          width 80%
      &.vs
        width 25%
      &.sw
        width 100%

</style>