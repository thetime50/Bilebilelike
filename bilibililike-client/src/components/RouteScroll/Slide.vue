<template>
  <div class="slide" ref="slide">
    <div class="slide-group" ref="slideGroup">
      <div class="slide-item" v-for="(item,index) in items" :key="index">
        <a :href="item.linkUrl">
          <img :src="item.picUrl">
        </a>
      </div>
    </div>
    <div v-if="showDot" class="dots">
      <span class="dot" :class="{active: currentPageIndex === index }"
       v-for="(item, index) in dots"  :key="index"></span>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"

  const items = [
    [
      {
        linkUrl: 'http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg',
        id: 11351
      },
      {
        linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg',
        id: 11372
      }
    ],
    [
      {
        linkUrl: 'http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg',
        id: 11378
      },
      {
        linkUrl: 'https://y.qq.com/msa/218/0_4085.html',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg',
        id: 11375
      },
      {
        linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg',
        id: 11287
      }
    ]
  ]

  const scrollConfDef={
      scrollX: true,
      scrollY: false,
      momentum: false,
      snap: {
        loop: true,
        threshold: 0.3,
        speed: 400,
      },
      bounce: false,
      stopPropagation: true,
      click: true
    }

  const COMPONENT_NAME = 'slide'

  export default {
    name: COMPONENT_NAME,
    props: {
      autoPlay  :{type: Boolean ,default: true},
      interval  :{type: Number  ,default: 4000},
      showDot   :{type: Boolean ,default: true},
      
      scrollConf:{type: Object ,default: ()=>{return {}}},
    },
    data() {
      return {
        scrollConfDt:{},
        dots: [],
        currentPageIndex: 0,
        items:items[1]
      }
    },
    created () {
      this.scrollConfUpdate(this.scrollConf)
    },
    mounted() {
      this.update()

      window.addEventListener('resize', () => {
        if (!this.slide || !this.slide.enabled) {
          return
        }
        clearTimeout(this.resizeTimer)
        this.resizeTimer = setTimeout(() => {
          if (this.slide.isInTransition) {
            this._onScrollEnd()
          } else {
            if (this.autoPlay) {
              this._play()
            }
          }
          this.refresh()
        }, 60)
      })
    },
    watch: {
      scrollConf(newVal, oldVal){
        this.scrollConfUpdate(newVal)
      },
      scrollConfDt() {
        this.update()
      },
      autoPlay() {
        this.update()
      },
    },
    activated() {
      if (!this.slide) {
        return
      }
      this.slide.enable()
      let pageIndex = this.slide.getCurrentPage().pageX
      this.slide.goToPage(pageIndex, 0, 0)
      this.currentPageIndex = pageIndex
      if (this.autoPlay) {
        this._play()
      }
    },
    deactivated() {
      this.slide.disable()
      clearTimeout(this.timer)
    },
    beforeDestroy() {
      this.slide.disable()
      clearTimeout(this.timer)
    },
    methods: {
      scrollConfUpdate(newVal){
        let obj={...scrollConfDef}
        for(let index in newVal){
          obj[index]=newVal[index]
        }
        this.scrollConfDt={...obj}
      },
      update() {
        if (this.slide) {
          this.slide.destroy()
        }
        this.$nextTick(() => {
          this.init()
        })
      },
      refresh() {
        this._setSlideWidth(true)
        this.slide.refresh()
      },
      prev() {
        this.slide.prev()
      },
      next() {
        this.slide.next()
      },
      init() {
        clearTimeout(this.timer)
        this.currentPageIndex = 0
        this._setSlideWidth()
        if (this.showDot) {
          this._initDots()
        }
        this._initSlide()

        if (this.autoPlay) {
          this._play()
        }
      },
      _setSlideWidth(isResize) {
        this.children = this.$refs.slideGroup.children
        let slideWidth = this.$refs.slide.clientWidth
        let width = 0
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          child.style.width = slideWidth + 'px'//item div 与scroll容器宽度相同
          width += slideWidth
        }
        if (this.scrollConfDt.loop && !isResize) {
          width += 2 * slideWidth
        }
        this.$refs.slideGroup.style.width = width + 'px'
      },
      _initSlide() {
        // console.log(this.scrollConfDt.threshold)
        if(!this.slide){
          this.slide = new BScroll(this.$refs.slide, this.scrollConfDt)
        }

        this.slide.on('scrollEnd', this._onScrollEnd)

        this.slide.on('touchEnd', () => {
          if (this.autoPlay) {
            this._play()
          }
        })

        this.slide.on('beforeScrollStart', () => {
          if (this.autoPlay) {
            clearTimeout(this.timer)
          }
        })
      },
      _onScrollEnd() {
        let pageIndex = this.slide.getCurrentPage().pageX
        this.currentPageIndex = pageIndex
        if (this.autoPlay) {
          this._play()
        }
      },
      _initDots() {
        this.dots = new Array(this.children.length)
      },
      _play() {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.slide.next()
        }, this.interval)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $color-light-grey-s = #ccc
  $color-white = #fff

  .slide
    position: relative
    min-height: 1px
    .slide-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slide-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      transform: translateZ(1px)
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-light-grey-s
        &.active
          width: 20px
          border-radius: 5px
          background: $color-white
</style>
