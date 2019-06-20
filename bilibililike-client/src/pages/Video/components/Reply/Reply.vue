<!--
Reply.vue
-->
<template>
<div class="component-reply" ref="component-reply">
  <VerticalScroll>
      <div class="reply-depth-1" v-for="(item,index) in rootReplies" :key="index">
        <ReplyCard :replie="item"/>
      </div>
  </VerticalScroll>
</div>
</template>

<script>
import {getAttribute} from "@/assets/js/tool.js"
import ReplyCard from "./ReplyCard.vue"
import VerticalScroll from "@/components/VerticalScroll/VerticalScroll.vue"
import {getAbsPosition} from "@/assets/js/dom.js"

export default {
  name: "Reply",
  components: {
    ReplyCard,
    VerticalScroll,
  },
  props:{
    reply:{type:Object,default:()=>{return {}}},
  },
  data () {
    return {
    };
  },
  computed: {
    rootReplies(){
      let replies=getAttribute(this.reply.replies)
      return (replies ? replies.slice(0,10) : replies)
    },
  },
  mounted () {
    this._interval=setInterval(()=>{
      let ele=this.$refs["component-reply"]
      let top=getAbsPosition(ele).y
      if(window.innerHeight != top){
        ele.style.height=window.innerHeight-top+"px"
        clearInterval(this._interval)
      }
    },10)
  },
  filters: {
    slice(s){
      return JSON.stringify(s).slice(0,100)
    },
    getAttribute(){
      return getAttribute(...arguments)
    },
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
@import "../../../../assets/style/index.styl"

.component-reply
  .reply-depth-1
    padding $block-interval
    border-bottom 1px solid $def-line-color
</style>