<template>
<div class="page-message">
  <header-top left-icon-type="back">
    <template v-slot:leftContent>
      <div class="header-slot-lc">
        <p>消息</p>
      </div>
    </template>
    <template v-slot:rightContent>
      <div class="header-slot-rc">
        <span class="m-tongxunlu"><!-- tongxunlu -->
            <i class="iconfont icon-tongxunlu"></i>
        </span>
        <span class="m-gengduo"><!-- offline-gengduo -->
          <i class="iconfont icon-gengduo"></i>
        </span>
      </div>
    </template>
  </header-top>
  Message
</div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"

export default {
  name: "Message",
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
  @import "../../assets/style/index.styl"

  .page-message
    .iconfont.icon-tongxunlu
      font-size $com-iconsize*1.2
</style>