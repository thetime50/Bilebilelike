<!--
ReplyCard.vue
-->
<template>
  <div class="component-reply-card">
    <div class="left-header">
      <div class="header-img">
        <!-- <img :src="replie | avatarFilter" :alt="replie | unameFilter"> -->
        <img v-lazy="replyRootAvatar" :alt="replie | unameFilter">
      </div>
    </div>
    <div class="right-warp">
      <div class="name">
        {{replie | unameFilter}}
      </div>
      <div class="attention">
        <i class="iconfont icon-jia"/>关注
      </div>
      <div class="date"> {{replie | ctimeDateFilter}} </div>
      <div class="content">{{replie | contentMessageFilter}}</div>
      <div class="like-nolike-share">
        <div class="like">{{replie | likeFilter}}</div>
        <div class="nolike"></div>
        <div class="share"></div>
      </div>
      <div class="reply-depth-2">
        <div class="interior-replie" v-for="(insReplie,index) in interiorReplies" :key="index">
          {{insReplie | unameFilter}}:{{insReplie | contentMessageFilter}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getAttribute} from "@/assets/js/tool.js"
export default {
  name: "ReplyCard",
  props: {
    replie:{type:Object,default:()=>{return {}}}
  },
  data() {
    return {};
  },
  computed: {
    replyRootAvatar(){
      return getAttribute(this.replie,"member.avatar")
    },
    interiorReplies(){
      return getAttribute(this.replie,"replies")
    }
  },
  filters: {
    slice(s){
      return JSON.stringify(s).slice(0,100)
    },
    getAttribute(){
      return getAttribute(...arguments)
    },
    unameFilter(replie){
      return getAttribute(replie,"member.uname")
    },
    avatarFilter(replie){
      return getAttribute(replie,"member.avatar")
    },
    levelFilter(replie){
      return getAttribute(replie,"member.level_info.current_level")
    },
    ctimeFilter(replie){
      return getAttribute(replie,"ctime")
    },
    ctimeDateFilter(replie){
      let tim=getAttribute(replie,"ctime")
      tim=new Date(tim*1000)
      return (tim.getMonth()+1) + "-" + tim.getDate()
    },
    contentMessageFilter(replie){
      return getAttribute(replie,"content.message")
    },
    likeFilter(replie){
      return getAttribute(replie,"up_action.like")
    },
  },
};
</script>

<style lang="stylus"  rel="stylesheet/stylus">
  .component-reply-card
    display grid
    grid-template-columns auto 1fr
    grid-template-rows auto
    align-items start
    .left-header
      .header-img
        width 4rem
        height @width
        img
          width 100%
          height 100%
    .right-warp
      //
      &>div
        text-align left
      .name
      .attention
      .date
      .content
      .like-nolike-share
        .like
        .nolike
        .share
          //
      .reply-depth-2
        .interior-replie
          //
</style>