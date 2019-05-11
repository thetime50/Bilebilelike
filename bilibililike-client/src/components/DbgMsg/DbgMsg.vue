<template>
<div class="component-dbg-msg btn" v-show="phonMsg" :data-clipboard-text="phonMsg">
  <div class="container">
    <div class="phon-msg">phonMsg:<br>{{phonMsg}}</div>
    <div class="clickcopy">点击复制到剪贴板</div>
  </div>
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
    display grid
    grid-template-columns 1fr
    grid-template-rows 1fr
    place-items center center
    position fixed
    top 0
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