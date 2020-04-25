<template>
<div class="component-sct-component">
  <p>hi this is sct-component</p>
  <slot class="this-is-sct-component-slot" :style="{color:'#ff8080'}" :a="1" b="2"></slot>
  <!-- <slot v-bind="{class:'this-is-sct-component-slot',style:'color:#ff8080;'}" class="this-is-sct-component-slot" style="color:#ff8080;"></slot> -->

</div>
</template>

<script>
export default {
  name: "SCTComponent",
  data () {
    return {
    };
  }
}
</script>

<style lang="stylus">
.component-sct-component{
    // 
}
</style>