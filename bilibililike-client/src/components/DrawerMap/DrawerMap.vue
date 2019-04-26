<template>
<div class="component-drawer-map" :style="{zIndex : zIndex}" 
  @click="componentRootEvent"
  @mousedown="componentRootEvent"
  @mousemove="componentRootEvent"
  @mouseup="componentRootEvent"
  @touchstart="componentRootEvent"
  @touchmove="componentRootEvent"
  @touchend="componentRootEvent">
  <v-touch
    @panstart="touchEvent" :pan-options="{threshold:5}"
    @panmove="touchEvent"
    @panend="touchEvent"
    @pancancel="touchEvent"
    @press="touchEvent" :press-options='{time:400}'
    @pressup="touchEvent">
    <div class="drawer-container"
      @click="touchEvent">
      <div class="drawer-mask" ref="drawer-mask"
      :style="{backgroundColor : mapBackgroundColor}">

      </div>
      <div class="drawer-content" ref="drawer-content"
      :style="{width:drawerW+'px'}" @transitionend="animationEvent">
        <slot/>
      </div>
      <div class="debug">
        a{{dbg.overallVelocityX}}
      </div>
    </div>
  </v-touch>
</div>
</template>

<script>
import tool from "@/assets/js/tool.js"
export default {
  name: "DrawerMap",
  props: {
    show:{default:false},//显示开关
    drawerWidth        :{type: String ,default:"18rem"},
    mapOpacity         :{type: Number ,default:0.5},
    mapDisplayWidth    :{type: String ,default:"0.6rem"},
    mapBackgroundColor :{type: String ,default:"#222"},
    pressWidth         :{type: String ,default:"2rem"},
    time               :{type: String ,default:"0.6s"},
    velocity           :{type: Boolean,default:true},
    zIndex             :{type: Number },
    eventStop          :{type: Boolean,default:true},
    threshold          :{type: Number ,default:0.5},
  },
  data () {
    return {
      curShow    :false,//prop 副本 用于内部操作和同步
      originX    :0,
      startX     :0,
      maskEle    :{},
      contentEle :{},

      //state
      state:'',//off on swipe
      drawerW:0,
      mapDisplayW:0,
      pressW:0,
      inVelocity:0,
      inThreshold:0,

      //out
      out:{
        animation:false,
        x:0,
      },

      //debug
      dbg:{
        overallVelocityX:0,
        animationOffset:0.1,
      }
    };
  },
  created () {
    this.drawerW=tool.length2px(this.drawerWidth)
    if(!tool.isNumber(this.drawerW))
      this.drawerW=tool.length2px("18rem")
    this.mapDisplayW=tool.length2px(this.mapDisplayWidth)
    if(!tool.isNumber(this.mapDisplayW))
      this.mapDisplayW=tool.length2px("0.6rem")
    this.pressW=tool.length2px(this.pressWidth)
    if(!tool.isNumber(this.pressW))
      this.pressW=tool.length2px("2rem")
    this.inVelocity=tool.timeStr2s(this.time) ?
      this.drawerW/tool.timeStr2s(this.time) : NaN
    this.thresholdW = this.drawerW * (
      (this.threshold>=0 && this.threshold<=1) ? this.threshold : 0.5)
  },
  mounted () {
    //resize
    this.maskEle     =this.$refs["drawer-mask"]
    this.contentEle =this.$refs["drawer-content"]
    if(this.curShow){
      this.setState('on',null,true)
      this.setMaping(true)
    }else{
      this.setState('off',null,true)
      this.setMaping(false)
    }
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
    componentRootEvent: function(e){
      //stop
      // console.log("componentRootEvent",event.type)
      if(this.eventStop){
        event.stopPropagation() 
      }
    },
    touchEvent: function(e){
      //flick
      let eType=e.type,touchX=e.deltaX
      if(eType==="pancancel"){
        eType="panend"
      }
      if(eType==="panend" && 
        e.deltaTime<300 && Math.abs(e.overallVelocityX) >0.32){
        eType='flick'
        this.dbg.overallVelocityX=e.overallVelocityX
      }
      //console.log('val',e.type,this.dbg.overallVelocityX)
      //console.log('obj',e)
      if(this.state==="off"){
        if(eType==="press"){
          this.setState('press')
        }else if(eType==="panstart"){
          this.setState('swipe',touchX)
        }
      }else if(this.state==="press"){
        if(eType==="pressup"){
          this.setState("off")
        }else if(eType==="panstart"){
          this.setState('swipe',touchX)
        }
      }else if(this.state==="swipe"){
        if(eType==="panmove"){
          this.setState('swipe',touchX)
        }else if(eType==="panend"){
          if(this.out.x>this.thresholdW){
            this.setState('on')
          }else{
            this.setState('off')
          }
        }else if(eType==="flick"){
          if(e.overallVelocityX>0){
            this.setState('on')
          }else if(e.overallVelocityX<0){
            this.setState('off')
          }
        }
      }else if(this.state==="on"){
        if((eType==="panstart")||(eType==="panmove")){
          if(e.target!=this.maskEle)
            this.setState('swipe',touchX)
        }else if(eType==="click"){
          if(e.target===this.maskEle){
            this.setState('off')
          }
        }
      }else{//if on or off is animation to swipe
        console.error('state error'+this.state)
      }
    },
    setState: function(state,touchX,init=false){
      let map     =this.out.map
      let content =this.out.content
      console.log("set state",state,this.originX)
      if(state!=this.state){
        if(state==="on"){
          this.curShow=true
          this.out.animation =true
          this.out.x         =this.drawerW
        }else if(state==="press"){
          this.out.animation =true
          this.out.x         =this.pressW
        }else if(state==="swipe"&&typeof(touchX)==="number"){
          this.out.animation =false
          this.originX       =this.contentEleOffset()
          this.startX        =touchX
        }else if(state==="off"){
          this.curShow=false
          this.out.animation =true
          this.out.x         =0
        }
      }
      if(state==="swipe"&&typeof(touchX)==="number"){
        this.out.x= (this.deltaX(touchX)+this.originX<this.drawerW) ? 
          this.deltaX(touchX)+this.originX : this.drawerW
      }
      this.state=state
      if(!init){
        this.setAnimation()
      }
      this.setPosition()
    },
    deltaX: function(touchX){
      return touchX-this.startX
    },
    contentEleOffset: function(){
      return this.contentEle.offsetLeft+this.drawerW
    },
    setPosition: function(){
      this.maskEle.style.opacity=this.out.x/this.drawerW*this.mapOpacity
        +(this.dbg.animationOffset?this.dbg.animationOffset:0)
      this.contentEle.style.left=-this.drawerW+this.out.x+"px"
    },
    setAnimation: function(){
      let map     =this.out.map
      let content =this.out.content
      let distance=Math.abs(this.out.x-this.contentEleOffset())
      if(this.out.animation&&distance){
        let time=0
        if(this.velocity&&this.inVelocity){
          time=distance/this.inVelocity+"s"
        }else{
          time=this.time
        }
        this.maskEle.style.transition="opacity "+time+" ease-out"
        this.contentEle.style.transition="left "+time+" ease-out"
        this.animationEvent({type:'start'})
      }else{
        this.maskEle.style.transition=""
        this.contentEle.style.transition=""
        this.animationEvent({type:'end'})
      }
    },
    animationEvent: function(e){
      if(e.type.indexOf("end")>=0&&this.state==="off")
        this.setMaping(false)
      else
        this.setMaping(true)
    },
    setMaping: function(sw){
      this.maskEle.style.width =sw?"100%":this.mapDisplayW+"px"
    }
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-drawer-map
  *
    border 0.2px solid #088
  position fixed
  top 0
  left 0
  height 0
  width 0
  padding 0
  margin 0
  .drawer-container
    position fixed
    color #2c3e50
    .debug
      // display none
      position fixed
      color #888
      top 20%
    .drawer-mask
      position fixed
      top 0
      left 0
      height 100%
      padding 0
      margin 0
    .drawer-content
      position fixed
      top 0
      left 0
      height 100%
      padding 0
      margin 0
      background-color #fff

</style>