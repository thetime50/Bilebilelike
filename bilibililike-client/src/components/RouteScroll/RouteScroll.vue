<template>
<div class="component-route-scroll">
  <div class="nav">
    <!--  -->
  </div>
  <div class="slide">
    <slide :slideConf="slideConfDt" :scrollConf="scrollConfDt" ref="slide">
      <component v-for="(comp,index) in afterComponents" :is="comp" :key="index"/>
      <router-view :key="currentIndex"/>
      <component v-for="(comp,index) in beforComponents" :is="comp" :key="index+currentIndex+1"/>
    </slide>
  </div>
  RouteScroll
</div>
</template>

<script>
  import Slide from "./Slide.vue"
  import tool from "@/assets/js/tool.js"

  var {setAttr2Def}=tool
  const slideConfDef={
    autoPlay  :false,
    showDot   :false,
  }
  const scrollConfDef={
  }

export default {
  name: "RouteScroll",
  components: {
    Slide,
  },
  props:{
    routes    :{type: Array  ,default: ()=>{return []}},//{text:"",path:""}
    slideConf :{type: Object ,default: ()=>{return {}}},
    scrollConf:{type: Object ,default: ()=>{return {}}},
  },
  data () {
    return {
      slideConfDt:{},
      scrollConfDt:{},
    };
  },
  created () {
    this.slideConfDt  =setAttr2Def(this.slideConf ,slideConfDef)
    this.scrollConfDt =setAttr2Def(this.scrollConf,scrollConfDef)
  },
  mounted () {
    this.$nextTick(()=>{
      // console.log(this.slide)
      this.slide.on('scrollEnd',()=>{
        let beforIndex=this.slideIndex
        if(beforIndex!=this.currentIndex){
          this.$router.replace(this.routes[beforIndex].path)
        }
      })
    })
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
    beforComponents(){
      return this.routeComponents.slice(this.currentIndex+1)
    },
    slide(){
      return this.$refs.slide.slide
    },
    slideIndex(){
      return this.$refs.slide.currentPageIndex
    },
  },
  methods: {
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-route-scroll
  width 100%
  .slide
    position: relative
</style>