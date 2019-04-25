<template>
<v-touch
  @panstart="touchEvent"
  @panmove="touchEvent"
  @panend="touchEvent"
  @press="touchEvent" :press-options='{time:400}'>
  <div class="component-drawer-map" ref="component-drawer-map"
    :style="{backgroundColor : mapBackgroundColor}">
    <div class="drawer-content" ref="drawer-content"
    :style="{width:drawerW+'px'}">
      <slot/>
    </div>
    <div class="debug">
      a{{dbg.overallVelocityX}}
    </div>
  </div>
</v-touch>
</template>

<script>
import tool from "@/assets/js/tool.js"
export default {
  name: "DrawerMap",
  props: {
    show:{default:false},//显示开关
    drawerWidth:{default:"8rem"},
    mapOpacity:{default:0.7},
    mapDisplayWidth:{default:"0.2rem"},
    mapBackgroundColor:{default:"#444"},
    pressWidth:{default:"0.5rem"},
    time:{default:"0.5s"},
  },
  data () {
    return {
      curShow:false,//prop 副本 用于内部操作和同步

      //state
      state:'off',//off on swipe
      drawerW:0,
      mapDisplayW:0,
      pressW:0,

      //out
      out:{
        animation:false,
        x:0,
      },

      //debug
      dbg:{overallVelocityX:0}
    };
  },
  created () {
    this.drawerW=tool.length2px(this.drawerWidth)
    if(!this.drawerW) 
      this.drawerW=tool.length2px('8rem')
    this.mapDisplayW=tool.length2px(this.mapDisplayWidth)
    if(!this.mapDisplayW) 
      this.mapDisplayW=tool.length2px('0.2rem')
    this.pressW=tool.length2px(this.pressWidth)
    if(!this.pressW) 
      this.pressW=tool.length2px('0.5rem')
  },
  mounted () {
    //resize
    if(this.curShow)
      this.setState('on')
    else
      this.setState('off')
  },
  watch: {
    show : function(newVal, oldVal){
      this.curShow = newVal;
    },
    curShow : function(newVal, oldVal){
      this.$emit("update:show", newVal);
      if(newVal && this.state==="off"){
        this.setState('on')
      }else if(!newVal && this.state==="on"){
        this.setState('off')
      }
    }
  },
  methods:{
    touchEvent: function(e){
      //flick
      let eType=e.type
      if(eType==="panend" && 
        e.deltaTime<300 && Math.abs(e.overallVelocityX) >0.32){
        eType='flick'
        this.dbg.overallVelocityX=e.overallVelocityX
      }
      // console.log('val',e.type,this.dbg.overallVelocityX)
      console.log('obj',e)
      // if(eType==="flick"){
      //   if(this.state==="off" && e.overallVelocityX>0){
      //     this.state="on"
      //   }else if(this.state==="on" && e.overallVelocityX<0){
      //     this.state="off"
      //   }
      // }
      if(this.state==="off"){
        if(eType==="press"){
          this.out.x=this.pressW
          this.setPosition()
        }else if(eType==="panstart"){
          this.setState('swipe')
        }
      }else if(this.state==="swipe"){
        if(eType==="panmove"){
          //set state swipe
        }else if(eType==="panend"){
          //if x>this.drawerW/2
          //set state on
          //else
          //set state off
        }
      }else if(this.state==="on"){
        //click
        if((eType==="panstart")||(eType==="panmove")){
          if(e.target!=this.$refs["component-drawer-map"])
            this.setState('swipe')
        }
      }else{
        console.error('state error'+this.state)
      }
    },
    setState: function(state){
      this.state=state
      let map     =this.out.map
      let content =this.out.content
      if(state==="on"){
        this.curShow=true
        this.out.animation =true
        this.out.x         =this.drawerW
        this.setMaping(true)
      }else if(state==="swipe"){
        this.out.animation=false
        this.setMaping(true)
      }else if(state==="off"){
        this.curShow=false
        this.out.animation =true
        this.out.x         =0
        this.setMaping(false)
      }
      this.setPosition()
      this.setStyle()
    },
    setPosition: function(){
      let mapEle  =this.$refs["component-drawer-map"]
      let contentEle  =this.$refs["drawer-content"]
      mapEle.style.opacity=this.out.x/this.drawerW*this.mapOpacity
      contentEle.style.left=-this.drawerW+this.out.x+"px"
    },
    setStyle: function(){
      let map     =this.out.map
      let content =this.out.content
      let mapEle  =this.$refs["component-drawer-map"]
      let contentEle  =this.$refs["drawer-content"]
      if(this.out.animation){
        mapEle.style.transition="opacity "+this.time+",ease-out "+this.time
        contentEle.style.transition="left "+this.time+",ease-out "+this.time
      }else{
        mapEle.style.transition=""
        contentEle.style.transition=""
      }
    },
    setMaping: function(sw){
      this.$refs["component-drawer-map"].style.width=
        sw?"100%":this.mapDisplayW+"px"
    }
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-drawer-map
  *
    border 0.2px solid #088
  .debug
    // display none
    position fixed
    color #888
    top 20%
  position fixed
  top 0
  left 0
  height 100%
  padding 0
  margin 0
  .drawer-content
    position fixed
    height 100%
    background-color #fff

</style>