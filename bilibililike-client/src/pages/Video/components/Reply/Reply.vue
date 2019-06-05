<!--
Reply.vue
-->
<template>
<div class="component-reply">
  {{reply | slice}}<br>
  Reply <br>
  Reply <br>
  Reply <br>
  Reply <br>
</div>
</template>

<script>
import {getAttribute} from "@/assets/js/tool.js"

export default {
  name: "Reply",
  props:{
    reply:{type:Object,default:()=>{return {}}},
  },
  data () {
    return {
    };
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