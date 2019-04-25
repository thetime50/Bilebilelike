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
    @panstart="touchEvent"
    @panmove="touchEvent"
    @panend="touchEvent"
    @press="touchEvent" :press-options='{time:400}'>
    <div class="drawer-container"
      @click="touchEvent">
      <div class="drawer-mask" ref="drawer-mask"
      :style="{backgroundColor : mapBackgroundColor}">

      </div>
      <div class="drawer-content" ref="drawer-content"
      :style="{width:drawerW+'px'}">
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
    drawerWidth        :{type: String,default:"18rem"},
    mapOpacity         :{type: Number,default:0.5},
    mapDisplayWidth    :{type: String,default:"0.2rem"},
    mapBackgroundColor :{type: String,default:"#222"},
    pressWidth         :{type: String,default:"0.5rem"},
    time               :{type: String,default:"0.6s"},
    zIndex             :{type: Number},
    eventStop          :{type: Boolean,default:true},
    //threshold
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
      this.drawerW=tool.length2px('18rem')
    this.mapDisplayW=tool.length2px(this.mapDisplayWidth)
    if(!this.mapDisplayW) 
      this.mapDisplayW=tool.length2px('0.2rem')
    this.pressW=tool.length2px(this.pressWidth)
    if(!this.pressW) 
      this.pressW=tool.length2px('0.5rem')
  },
  mounted () {
    //resize
    this.maskEle     =this.$refs["drawer-mask"]
    this.contentEle =this.$refs["drawer-content"]
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
    componentRootEvent: function(e){
      //stop
      // console.log("componentRootEvent",event.type)
      if(this.eventStop){
        event.stopPropagation() 
      }
    },
    touchEvent: function(e){
      //flick
      let eType=e.type
      if(eType==="panend" && 
        e.deltaTime<300 && Math.abs(e.overallVelocityX) >0.32){
        eType='flick'
        this.dbg.overallVelocityX=e.overallVelocityX
      }
      // console.log('val',e.type,this.dbg.overallVelocityX)
      //console.log('obj',e)
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
          this.setState('swipe',e)
        }
      }else if(this.state==="swipe"){
        if(eType==="panmove"){
          this.setState('swipe',e)
        }else if(eType==="panend"){
          if(this.out.x>this.drawerW/2){
            this.setState('on')
          }else{
            this.setState('off')
          }
        }
      }else if(this.state==="on"){
        if((eType==="panstart")||(eType==="panmove")){
          if(e.target!=this.maskEle)
            this.setState('swipe',e)
        }else if(eType==="click"){
          if(e.target===this.maskEle){
            this.setState('off')
          }
        }
      }else{
        console.error('state error'+this.state)
      }
    },
    setState: function(state,e){
      let map     =this.out.map
      let content =this.out.content
      console.log("set state",state,this.originX)
      if(state!=this.state){
        if(state==="on"){
          this.curShow=true
          this.out.animation =true
          this.out.x         =this.drawerW
          this.setMaping(true)
        }else if(state==="swipe"&&e){
          this.out.animation =false
          this.originX       =this.contentEle.offsetLeft+this.drawerW
          this.startX        =e.deltaX
          this.setMaping(true)
        }else if(state==="off"){
          this.curShow=false
          this.out.animation =true
          this.out.x         =0
          this.setMaping(false)//动画结束 //关闭时用动画事件操作
        }
      }else if(state==="swipe"&&e){
        this.out.x= (this.deltaX(e)+this.originX<this.drawerW) ? 
          this.deltaX(e)+this.originX : this.drawerW
      }
      this.state=state
      this.setPosition()
      this.setStyle()
    },
    deltaX: function(e){
      return e.deltaX-this.startX
    },
    setPosition: function(){
      this.maskEle.style.opacity=this.out.x/this.drawerW*this.mapOpacity
      this.contentEle.style.left=-this.drawerW+this.out.x+"px"
    },
    setStyle: function(){
      let map     =this.out.map
      let content =this.out.content
      if(this.out.animation){
        this.maskEle.style.transition="opacity "+this.time+" ease-out"
        this.contentEle.style.transition="left "+this.time+" ease-out"
      }else{
        this.maskEle.style.transition=""
        this.contentEle.style.transition=""
      }
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