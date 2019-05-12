<template>
<div class="component-dbg-msg btn" :data-clipboard-text="phonMsg">
  <transition name='dbg-msg'>
    <div class="map-container" v-show="phonMsg">
      <div class="container">
        <div class="phon-msg">phonMsg:<br>{{phonMsg}}</div>
        <div class="clickcopy">点击复制到剪贴板</div>
      </div>
    </div>
  </transition>
</div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
import Clipboard from 'clipboard'

export default {
  name: "DbgMsg",
  data () {
    return {
      clipboard:{},
    };
  },
  mounted () {
    let that=this
    this.clipboard=new Clipboard('.btn')
    this.clipboard.on('success', function(e) {
      // console.log('success',e);
      that.setpPhonMsg("")
    })
    this.clipboard.on('error', function(e) {
      // console.log('error:', e)
      that.setpPhonMsg("")
    })
  },
  destroyed () {
    this.clipboard.destroy()
  },
  computed: {
    ...mapState("dbgState",["phonMsg"]),
  },
  methods: {
    ...mapMutations("dbgState",["setpPhonMsg"]),
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
  .component-dbg-msg
    top 0
    border 0
    margin 0
    padding 0
    // .dbg-msg-enter-active
    // .dbg-msg-leave-active
    //   transition: all 3;
    // // .dbg-msg-enter .dbg-msg-leave-to
    // //   opacity: 0
    // .dbg-msg-leave .dbg-msg-enter-to
    //   transform: translateY(-10rem)
    .dbg-msg-enter-active
      transition: all 0.15s ease-out
    .dbg-msg-leave-active 
      transition: all 0.15s ease-in
    .dbg-msg-enter, .dbg-msg-leave-to
      transform: translateY(-10rem)
      opacity: 0;
    .map-container
      display grid
      z-index 200
      grid-template-columns 1fr
      grid-template-rows 1fr
      place-items center center
      position fixed
      // top 0
      left 0
      right 0
      height 10rem
      background-color rgba(0,0,0,0.5)
      .container
        position relative
        height 4rem
        width 12rem
        background linear-gradient(#ccc,#eee 10%,#fff 20%,#fff 40%,#ddd 80%,#aaa 100%);
        padding 0.4rem
        border-radius 0.6rem
        .phon-msg
          //
        .clickcopy
          position absolute
          right 0.3rem
          bottom 0.3rem
          color #eee
          font-size 0.8rem
</style>