<template>
<div class="component-video">
  Video<br>
  {{av}}<br><br>
  initialState<br>
  {{initialState | slice}}<br><br>
  recommendnew<br>
  {{recommendnew | slice}}<br><br>
  reply<br>
  {{reply | slice}}<br>
</div>
</template>

<script>
import {mapState,mapGetters,mapActions} from "vuex"

export default {
  name: "Video",
  data () {
    return {
    };
  },
  created () {
    this.getVideoPage(this.av)
    this.getRecommendnew(this.av)
    this.getReply(this.av)
  },
  computed: {
    av(){
      return this.$route.params.av.slice(2)
    },
    ...mapState(["recommendnew","reply"]),
    ...mapGetters(["initialState"]),
  },
  filters: {
    slice(s){
      return JSON.stringify(s).slice(0,100)
    },
  },
  methods: {
    ...mapActions(["getVideoPage","getRecommendnew","getReply"]),
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
</style>