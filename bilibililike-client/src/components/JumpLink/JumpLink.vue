<template>
<div class="component-jump-link" :class="styles['comp']">
  <router-link v-if="!divWrap && isRouterLink" :to="link" :class="styles['rtlink']"> <slot/> </router-link>
  <a v-else-if="!divWrap && !isRouterLink" href="javascript:void(0)" @click="exLink" :class="styles['exlink']"> <slot/> </a>

  <div v-else @click="divClick" :class="styles['divlink']"> <slot/> </div>
</div>
</template>

<script>
import {mapState,mapMutations} from "vuex"

export default {
  name: "JumpLink",
  props:{
    link    :{type: String ,default: ""},
    styles  :{type: Object ,default: ()=>{return {}}},//{"ref1":"class1","ref2":"class2"}
    delay   :{type: Number ,default: 3000},
    divWrap :{type: Boolean,default: false}
  },
  data () {
    return {
      linkDt:"",
    };
  },
  watch: {
    phonMsg(before,after){
      before=="" && this.linkDt && (location.href=this.linkDt)
    },
  },
  computed: {
    ...mapState("dbgState",["phonMsg"]),
    isRouterLink(){
      return !(/^https?:\/\//.test(this.link))
    }
  },
  methods: {
    ...mapMutations("dbgState",["setpPhonMsg"]),
    exLink(){
      this.linkDt=this.link
      // this.setpPhonMsg("页面正在编写\n将离开Demo跳转至:\n  "+this.link)
      // this.delay && setTimeout(()=>{
      //   this.setpPhonMsg("")
      // },this.delay)
      if(confirm("页面正在编写\n将离开Demo跳转至:\n  "+this.link))
        location.href=this.linkDt
    },
    divClick(){
      if(this.isRouterLink){
        this.$router.push(this.link)
      }else{
        this.exLink()
      }
    },
  },
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
</style>