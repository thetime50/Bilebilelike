<template>
  <div class="component-slide" ref="slide">
    <div class="slide-group" ref="slideGroup">
      <slot/>
    </div>
    <div v-if="showDot" class="dots">
      <span class="dot" :class="{active: currentPageIndex === index }"
       v-for="(item, index) in dots"  :key="index"></span>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  import { addClass } from "@/assets/js/dom"
  import tool from "@/assets/js/tool.js"

  var {setAttr2Def}=tool

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
  const slideConfDef={
    autoPlay  :true,
    interval  :4000,
    showDot   :true,
  }

  export default {
    name: "Slide",
    props: {
      slideConf :{type: Object ,default: ()=>{return {}}},
      scrollConf:{type: Object ,default: ()=>{return {}}},
    },
    data() {
      return {
        slideConfDt:{},
        scrollConfDt:{},
        dots: [],
        currentPageIndex: 0,

        _slideConfDef :slideConfDef,
        _scrollConfDef:scrollConfDef,
      }
    },
    created () {
      this.slideConfDt  =setAttr2Def(this.slideConf ,slideConfDef)
      this.scrollConfDt =setAttr2Def(this.scrollConf,scrollConfDef)
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
    computed: {
      loop      (){return this.scrollConfDt.snap.loop},
      autoPlay  (){return this.slideConfDt.autoPlay},
      interval  (){return this.slideConfDt.interval},
      showDot   (){return this.slideConfDt.showDot },
      length    (){return ((this.slide&&this.loop) ? (this.children.length-2) : (this.children.length))}
    },
    methods: {
      update() {
        if (this.slide) {
          this.slide.destroy()
        }
        this.$nextTick(() => {
          this.init()
        })
      },
      refresh() {
        this._setSlideWidth()
        this.slide.refresh()
      },
      prev() {
        this.slide.prev()
      },
      next() {
        this.slide.next()
      },
      toPage(page,time,easing){
        if(page!=this.currentPageIndex){
          this.slide.goToPage(page,time,easing)
        }
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
      _setSlideWidth() {
        this.children = this.$refs.slideGroup.children
        let slideWidth = this.$refs.slide.clientWidth
        let width = 0
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          addClass(child, 'slide-item')
          child.style.width = slideWidth + 'px'//item div 与scroll容器宽度相同
          width += slideWidth
        }
        if (this.loop && !this.slide) {
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
        this.dots = new Array(this.length)
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

  .component-slide
    // position: relative
    min-height: 1px
    overflow hidden
    width 100%
    height 100%
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
