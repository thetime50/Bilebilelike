<template>
<div class="component-drawer-map" v-show="compEnable" :style="{zIndex : zIndex}"
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
      @click="touchEvent"
      @touchstart="touchEvent"
      @mousedown="touchEvent"
      @touchend="touchEvent"
      @mouseup="touchEvent">
      <div class="drawer-mask" ref="drawer-mask"
      :style="{backgroundColor : mapBackgroundColor}">

      </div>
      <div class="drawer-content" ref="drawer-content"
      :style="{width:drawerW+'px'}" @transitionend="animationEvent">
        <slot/>
      </div>
      <!-- <div class="debug" v-if="dbg">
        <p>a{{dbg.overallVelocityX}} </p>
        <p v-html="dbg.str"></p>
      </div> -->
    </div>
  </v-touch>
</div>
</template>

<script>
import tool from "@/assets/js/tool.js"
export default {
  name: "DrawerMap",
  props: {
    enable             :{type: Boolean,default:true},   //是否使用组件
    show               :{default:false},                //显示开关
    drawerWidth        :{type: String ,default:"18rem"},//显示区域宽度
    mapOpacity         :{type: Number ,default:0.5},    //mask透明度
    mapDisplayWidth    :{type: String ,default:"0.6rem"},//mask边缘宽度
    mapBackgroundColor :{type: String ,default:"#222"}, //mask颜色
    pressWidth         :{type: String ,default:"2rem"}, //长按弹出宽度
    threshold          :{type: Number ,default:0.5},    //on/off 比例
    time               :{type: String ,default:"0.6s"}, //动画时长
    velocity           :{type: Boolean,default:false},   //使用速度模式 动画时间与滑动距离有关
    zIndex             :{type: Number },//这个可能没什么用 业务被父级DOM控制
    eventStop          :{type: Boolean,default:false},   //true 阻止事件冒泡
    directionLock      :{type: Boolean,default:false},   //true 锁定起始方向
  },
  data () {
    return {
      compEnable :true, //动画中延迟隐藏组件
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
      animating:false,
      updataCompEnable:true,
      timeStamp:0,
      moved:false,//在swipe后移动过
      moving:false,//在动画或移动过程中

      //out
      out:{
        animation:false,
        x:0,
      },

      //debug
      dbg:{
        overallVelocityX:0,
        animationOffset:0.1,
        str:"",
      }
    };
  },
  created () {
    this.compEnable=this.enable
    this.curShow=this.show
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
      this.setState('on',0,null,true)
      this.setMaping(true)
    }else{
      this.setState('off',0,null,true)
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
    },
    //"$route.fullPath"
    enable:function (to, from) {
      //如果on 或者动画状态 动画结束同步 否则立即同步
      if(this.compEnable &&( this.animating || this.state==="on")){
        this.updataCompEnable=true
      }else{
        this.compEnable=to
        this.updataCompEnable=false
      }
      if(!to)
        this.curShow=false
    },
    moving:function (to, from) {
      if(to)
        this.$emit('drawerMapEvent', {type:"movestart"})
      else
        this.$emit('drawerMapEvent', {type:"moveend"})
    },
  },
  methods:{
    componentRootEvent: function(e){
      //stop
      // this.dbgPut("componentRootEvent",event.type)
      if(this.eventStop){
        event.stopPropagation() 
      }
    },
    touchEvent: function(e){
      //flick
      let eType=e.type,touchX=e.deltaX
      let timeStamp=e.srcEvent?e.srcEvent.timeStamp:e.timeStamp
      let strMap={
        "pancancel" :"panend",
        "mousedown" :"touchstart",
        "mouseup"   :"touchend",}
      if(strMap.hasOwnProperty(eType)){
        eType=strMap[eType]
      }
      if(eType==="panend" && 
        e.deltaTime<300 && Math.abs(e.overallVelocityX) >0.32){
        eType='flick'
        this.dbg.overallVelocityX=e.overallVelocityX
      }
      // this.dbgPut('val',e.type,eType,this.moved,e.deltaX,e.deltaY)//,this.dbg.overallVelocityX)
      // this.dbgPut('obj',e)
      if(!this.enable || !this.compEnable)//切换过程禁止交互
        return
      if(this.state==="off"){
        if(eType==="press"){
          this.setState('press',timeStamp)
        }else if(eType==="panstart"){
          if(!this.animating || e.target!=this.maskEle)
            this.setState('swipe',timeStamp,touchX)
        }else if(eType==="touchstart"){
          if(e.target!=this.maskEle && this.animating){
            this.setState('swipe',timeStamp,0)//touchX)//这个本来是给滑动跨边界用的
          }
        }
      }else if(this.state==="press"){
        if(eType==="pressup"||eType==="touchend"){
          this.setState("off",timeStamp)
        }else if(eType==="panstart"){
          this.setState('swipe',timeStamp,touchX)
        }
      }else if(this.state==="swipe"){
        if(eType==="panmove"){
          this.setState('swipe',timeStamp,touchX)
        }else if(eType==="panend"){
          if(this.out.x>this.thresholdW){
            this.setState('on',timeStamp)
          }else{
            this.setState('off',timeStamp)
          }
        }else if(eType==="touchend"){
          if(!this.moved){
            if(this.out.x>this.thresholdW){
              this.setState('on',timeStamp)
            }else{
              this.setState('off',timeStamp)
            }
          }
        }else if(eType==="flick"){
          if(e.overallVelocityX>0){
            this.setState('on',timeStamp)
          }else if(e.overallVelocityX<0){
            this.setState('off',timeStamp)
          }
        }
      }else if(this.state==="on"){
        if((eType==="panstart")){//||(eType==="panmove")){
          if(!this.directionLock||Math.abs(e.deltaX)>Math.abs(e.deltaY))//未锁定或者deltaX更大
            if(e.target!=this.maskEle)
              this.setState('swipe',timeStamp,touchX)
        }else if(eType==="click" && timeStamp!=this.timeStamp){
          if(e.target===this.maskEle){
            this.setState('off',timeStamp)
          }
        }else if(eType==="touchstart"){
          if(e.target!=this.maskEle && this.animating){
            this.setState('swipe',timeStamp,0)//touchX)
          }
        }
      }else{//if on or off is animation to swipe
        console.error('state error'+this.state)
      }
    },
    setState: function(state,timeStamp,touchX,init=false){
      let map     =this.out.map
      let content =this.out.content
      // this.dbgPut("set state",state,this.originX)
      this.timeStamp=timeStamp
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
        this.moved=false
      }
      if(state==="swipe"&&typeof(touchX)==="number"){
        this.moved = this.moved||(this.deltaX(touchX)!=0)
        this.out.x = (this.deltaX(touchX)+this.originX<this.drawerW) ? 
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
        +(this.dbg?this.dbg.animationOffset:0)
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
      this.animating=e.type.indexOf("end")<0?true:false
      if(!this.animating&&this.state==="off"){
        this.setMaping(false)
        if(this.updataCompEnable){
          this.compEnable=this.enable
          this.updataCompEnable=false
        }
      }else{
        this.setMaping(true)
      }
      this.moving=this.animating||this.state==="swipe"
    },
    setMaping: function(sw){
      this.maskEle.style.width =sw?"100%":this.mapDisplayW+"px"
    },

    dbgPut(){
      console.log(...arguments)
      if(!this.dbg)
        return
      this.dbg.str+=
        [...arguments].reduce((total, num)=> {return total+" "+num}) + "<br>"

      let isBr=/<br>/igm
      let cnt=this.dbg.str.match(isBr).length
      let search
      if(cnt>15){
        for(let i=15;i<cnt;i++){
          search=isBr.exec(this.dbg.str)
        }
        this.dbg.str=this.dbg.str.slice(search.index+4)
      }
    }
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-drawer-map
  // *
  //   border 0.2px solid #088
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
      text-align left
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