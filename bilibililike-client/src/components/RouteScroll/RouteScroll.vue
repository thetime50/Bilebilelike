<template>
<div class="component-route-scroll">
  <div class="nav">
    <component :is="nav"
      :nowIndex="currentIndex"
      :positionSync="positionSync"
      :routes="routes"/>
  </div>
  <div class="route-scroll-slide">
    <slide :slideConf="slideConfDt" :scrollConf="scrollConfDt" ref="slide">
      <component v-for="(comp,index) in afterComponents" :is="comp" :key="index"/>
      <router-view :key="currentIndex"/>
      <component v-for="(comp,index) in beforeComponents" :is="comp" :key="index+currentIndex+1"/>
    </slide>
  </div>
</div>
</template>

<script>
  import Nav from "./Nav.vue"
  import Slide from "./Slide.vue"
  import tool from "@/assets/js/tool.js"

  var {setAttr2Def}=tool
  const slideConfDef={
    autoPlay  :false,
    showDot   :false,
  }
  const scrollConfDef=function (){ return {
    probeType:3,
    // eventPassthrough : "vertical",
    snap: {
      loop: false,
      threshold: 0.3,
      speed: 400,
    },
  }}

export default {
  name: "RouteScroll",
  components: {
    Slide,
  },
  props:{
    routes    :{type: Array  ,default: ()=>{return []}},//{text:"",path:""}
    nav       :{type: Object ,default: ()=>{return Nav}},
    slideConf :{type: Object ,default: ()=>{return {}}},
    scrollConf:{type: Object ,default: ()=>{return {}}},
  },
  data () {
    return {
      positionSync:0,
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
          this.$router.replace(this.routes[slideIndex].path)
        }
      })
      this.slideBS.on('scroll',({x,y})=>{
        this.positionSync=x/this.slide.pageWidth
      })
      this.slide.toPage(this.currentIndex,0,0)
      this._triggerRouteChange(this.$route.path,"")
    })
  },
  watch: {
    currentIndex(before,after){
      this.slide.toPage(before)
    },
    "$route.path"(before,after){
      this._triggerRouteChange(before,after)
    },
  },
  computed: {
    routeComponents(){
      let comps=[]
      this.routes.forEach((item) => {
        // console.log()
        let comp=this.$router.getMatchedComponents(item.path)
        comps.push(comp[comp.length-1])
      });
      return comps
    },
    currentIndex(){
      let i=0
      for(i=0;i<this.routes.length;i++){
        if(this.routes[i].path === this.$route.path){
          return i
        }
      }
    },
    afterComponents(){
      return this.routeComponents.slice(0,this.currentIndex)
    },
    beforeComponents(){
      return this.routeComponents.slice(this.currentIndex+1)
    },
    slide(){
      return this.$refs.slide
    },
    slideBS(){
      return this.$refs.slide.slide
    },
  },
  methods: {
    _triggerRouteChange(before,after){
      let isAfter = (s)=>new RegExp("^"+after+"\\b").test(s)
      let isBefore = (s)=>new RegExp("^"+before+"\\b").test(s)
      let afterIndex=-1,beforeIndex=-1
      this.routes.forEach((item,index)=>{
        if(isAfter(item.path))
          afterIndex=index
        if(isBefore(item.path))
          beforeIndex=index
      })
      if(afterIndex>=0){
        let routeChange= this.slide.$children[afterIndex].routeChange
        routeChange && routeChange({type:"leave ",before,after})
      }
      if(beforeIndex>=0){
        let routeChange= this.slide.$children[beforeIndex].routeChange
        routeChange && routeChange({type:"enter",before,after})
      }
    },
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-route-scroll
  width 100%
  .route-scroll-slide
    position: relative
</style>