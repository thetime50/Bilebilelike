<!--
Reply.vue
-->
<template>
<div class="component-reply">
  <div class="reply-depth-1" v-for="(item,index) in rootReplies" :key="index">
    <ReplyCard :replie="item"/>
  </div>
</div>
</template>

<script>
import {getAttribute} from "@/assets/js/tool.js"
import ReplyCard from "./ReplyCard.vue"

export default {
  name: "Reply",
  components: {
    ReplyCard,
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
</style>