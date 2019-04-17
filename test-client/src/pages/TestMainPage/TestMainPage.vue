<template>
<div class="page-main-page">
  MainPage
  <div class="cc">
    <div class="container">
      <div class="move" :class="{'back-origin':backOrigin}" @mousedown="move">
        clientY  {{clientY}}<br>
        pageY    {{pageY  }}<br>
        screenY  {{screenY}}<br>
        layerY   {{layerY }}<br>
        offsetY  {{offsetY}}<br>
      </div>
      <p>
        clientY  {{clientY}}<br>
        pageY    {{pageY  }}<br>
        screenY  {{screenY}}<br>
        layerY   {{layerY }}<br>
        offsetY  {{offsetY}}<br>
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "MainPage",
  data () {
    console.log("data",this)
    return {
      clientY :0,
      pageY   :0,
      screenY :0,
      layerY  :0,
      offsetY :0,
      positionX:0,
      positionY:0,
      backOrigin:false,
    };
  },
  methods:{
    move(e){
      this.clientY = e.clientY
      this.pageY   = e.pageY  
      this.screenY = e.screenY
      this.layerY  = e.layerY 
      this.offsetY = e.offsetY

      this.backOrigin=false
      
      let odiv = e.target;        //获取目标元素
            
      //算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft;
      let disY = e.clientY - odiv.offsetTop;
      /*e.toElement*/document.onmousemove = (e)=>{       //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX;    
        let top = e.clientY - disY;
        
        //绑定元素位置到positionX和positionY上面
        this.positionX = top;
        this.positionY = left;
        
        //移动当前元素
        odiv.style.left = left + 'px';
        odiv.style.top = top + 'px';
      };
      /*e.toElement*/document.onmouseup = (e) => {
        /*e.toElement*/document.onmousemove = null;
        /*e.toElement*/document.onmouseup = null;
        this.backOrigin=true
        odiv.style=''
      };
    }
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.page-main-page
  *
    border 0.5px solid #888
  .cc
    width 85%
    height 800px
    overflow-y scroll
    .container
      position relative
      height 900px
      line-height @height
      text-align center
      .move
        position absolute
        width 7rem
        height 6rem
        text-align left
        line-height 1rem
        top 20px
        left 30px
        cursor default
        user-select none
        &.back-origin
          transition: top 2s, left 2s ,cubic-bezier(0.32, 0.86, 0.21, 1.15) 1s
      p
        line-height: 1.5;
        display: inline-block;
        vertical-align: middle;
</style>