<template>
<div class="component-login">
  {{userInfo}}
</div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
  name: "Login",
  data () {
    return {
    };
  },
  mounted () {
    this.getUserInfo()
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    ...mapActions(["getUserInfo"])
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
</style>