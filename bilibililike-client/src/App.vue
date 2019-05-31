<template>
  <div id="app">
    <!-- <p style="color : #fb7299 ; font-size : 25px"><b>Hello Bilibililike </b></p>
    <div><i class="iconfont icon-pindao" style="font-size:100px;color:#fb7299"></i></div> -->
    <DbgMsg/>
    <left-menu-drawer></left-menu-drawer>
    <div class="app-router-view-contain" ref="app-router-view-contain">
        <router-view/>
    </div>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import BScroll from "better-scroll"
import LeftMenuDrawer from "./components/LeftMenuDrawer/LeftMenuDrawer.vue"
import FooterGuide from "./components/FooterGuide/FooterGuide.vue"
import DbgMsg from "./components/DbgMsg/DbgMsg.vue"

export default {
  name: 'App',
  components: {
    LeftMenuDrawer,
    FooterGuide,
    DbgMsg,
  },
  mounted () {
    // this.$nextTick(()=> {
    //   console.dir(this.$refs["app-router-view-contain"].innerHTML.slice(0,40))
    //   this.scroll = new BScroll(this.$refs["router-view-contain"],{ 
    //     click: true,
    //     bounce:false,
    //     bindToWrapper:true,
    //     // stopPropagation:true,
    //   })
    //   //不知道为什么这里一定要重新刷新
    //   setTimeout(()=>this.scroll.refresh(),120)
    // })
    this._interval=setInterval(()=>{
      // console.dir(this.$refs["app-router-view-contain"].innerHTML.length)
      if(this.$refs["app-router-view-contain"].innerHTML.length>100){
        clearInterval(this._interval)
        this.scroll = new BScroll(this.$refs["app-router-view-contain"],{ 
          click: true,
          bounce:false,
          bindToWrapper:true,
          // stopPropagation:true,
        })
      }
    },10)
  },
  methods: {
  },
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>

<style lang="stylus"  rel="stylesheet/stylus">
@import "./assets/style/index.styl"

@keyframes animated_div {
  0%		{transform: rotate(0deg);}
  100%		{transform: rotate(360deg);}
}

img
  &[lazy=loading]//居中
    width 2.5rem
    animation:animated_div 2s infinite linear;
    -moz-animation:animated_div 2s infinite linear;
    -webkit-animation:animated_div 2s infinite linear;
    -o-animation:animated_div 2s infinite linear;
  // &[lazy=error]//居中
  //   //
  // &[lazy=loaded]
  //   //
#app
  position relative
  height 100%
  .app-router-view-contain
    overflow hidden
    top 0
    bottom $footer-guide-height
    width 100%
    position absolute

</style>

