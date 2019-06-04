<template>
<div class="component-component-scroll">
  <div class="nav">
    <component :is="nav"
      :nowIndex="currentIndex"
      :positionSync="positionSync"
      :components="components"
      :_propsSync="_dummyNavPropsSync"
      @navChange="navChange"/>
  </div>
  <div class="component-scroll-slide">
    <slide :slideConf="slideConfDt" :scrollConf="scrollConfDt" ref="slide">
      <component v-for="(comp,index) in componentsArr" :is="comp" :key="index"/>
    </slide>
  </div>
</div>
</template>

<script>
  import ComponentNav from "./ComponentNav.vue"
  import Slide from "./Slide.vue"
  import tool from "@/assets/js/tool.js"

  var {setAttr2Def}=tool
  const slideConfDef={
    autoPlay  :false,
    showDot   :false,
  }
  const scrollConfDef=function (){ return {
    probeType:3,
    stopPropagation:false,
    click: false,
    // eventPassthrough : "vertical",
    snap: {
      loop: false,
      threshold: 0.3,
      speed: 400,
    },
  }}

export default {
  name: "ComponentScroll",
  components: {
    Slide,
  },
  props:{
    components          :{type: Array  ,default: ()=>{return []}},//{text:"",comp:component}
    nav                 :{type: Object ,default: ()=>{return ComponentNav}},
    slideConf           :{type: Object ,default: ()=>{return {}}},
    scrollConf          :{type: Object ,default: ()=>{return {}}},
    _dummyNavPropsSync  :{type: Function},
  },
  data () {
    return {
      positionSync:0,//光标位置
      currentIndex:0,//用来和slide同步
      slideConfDt:{},
      scrollConfDt:{},
    };
  },
  created () {
    this.slideConfDt  =setAttr2Def(this.slideConf ,slideConfDef)
    this.scrollConfDt =setAttr2Def(this.scrollConf,scrollConfDef())
  },
  mounted () {
    this.$nextTick(()=>{
      // console.log(this.slideBS)
      // 滑动后更新path
      this.slideBS.on('scrollEnd',()=>{
        let slideIndex=this.slide.currentPageIndex
        if(slideIndex!=this.currentIndex){
          this.currentIndex=slideIndex
        }
      })
      this.slideBS.on('scroll',({x,y})=>{
        this.positionSync=x/this.slide.pageWidth
      })
      this.slide.toPage(this.currentIndex,0,0)
      this._triggerRouteChange(0,-1)
    })
  },
  watch: {
    currentIndex(before,after){
      this.slide.toPage(before)
      this._triggerRouteChange(before,after)
    },
  },
  computed: {
    componentsArr(){
      let comps=[]
      this.components.forEach((item) => {
        comps.push(item.comp)
      });
      return comps
    },
    slide(){
      return this.$refs.slide
    },
    slideBS(){
      return this.$refs.slide.slide
    },
  },
  methods: {
    _triggerRouteChange(before,after){//卡片切换回调
      let afterIndex=after,beforeIndex=before
      if(afterIndex>=0){
        let routeChange= this.slide.$children[afterIndex].routeChange
        routeChange && routeChange({type:"leave ",before,after})
      }
      if(beforeIndex>=0){
        let routeChange= this.slide.$children[beforeIndex].routeChange
        routeChange && routeChange({type:"enter",before,after})
      }
    },
    navChange({index}){
      this.currentIndex=index
    },
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-component-scroll
  width 100%
  .component-scroll-slide
    position: relative
</style>