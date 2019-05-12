<template>
<div class="component-my-page">
  myPage
  <div class="exit" @click="exitfun">
    退出登录
  </div>
</div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: "myPage",
  data () {
    return {
    };
  },
  methods: {
    exitfun:function(){
      this.logout()
      this.$router.replace("/")
    },
    ...mapActions(["logout"])
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-my-page
  .exit
    position relative
    top 6rem
    height 8rem
    width 15rem
    background-color #eeF
    margin auto
    font-size 2rem
    line-height 8rem
</style>