<template>
<div class="page-Game">
  <header-top left-icon-type="back" page-case="game">
    <template v-slot:centerContent>
      <div class="header-slot-cc">
        <p>首页</p>
      </div>
    </template>
    <template v-slot:rightContent>
      <div class="header-slot-rc">
        <span class="m-tixing"><!-- tixing -->
            <i class="iconfont icon-tixing"></i>
        </span>
        <router-link class="m-search" :to="{path:'/search',query:{page:'Game'}}"><!-- search -->
            <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
    </template>
  </header-top>
  Game
</div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"

export default {
  name: "Game",
  components: {
    HeaderTop,
  },

  data () {
	 return {
	 };
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
</style>