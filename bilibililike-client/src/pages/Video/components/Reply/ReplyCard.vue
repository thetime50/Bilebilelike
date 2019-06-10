<!--
ReplyCard.vue
-->
<template>
  <div class="component-reply-card">
    <div class="left-header">
      <j-link :link="replie | spaceFilter">
        <div class="header-warp">
          <div class="header-img">
            <!-- <img :src="replie | avatarFilter" :alt="replie | unameFilter"> -->
            <img v-lazy="replyRootAvatar" :alt="replie | unameFilter">
          </div>
          <div class="pendant-img" v-if="replyRootPendant.image">
            <img :src="replyRootPendant.image" :alt="replyRootPendant.name">
          </div>
        </div>
      </j-link>
    </div>
    <div class="right-warp">
      <j-link :link="replie | spaceFilter">
        <div class="uname" :class="{vip:vipStatus}">
          {{replie | unameFilter}}
        </div>
      </j-link>
      <div class="attention">
        <i class="iconfont icon-jia"/>关注
      </div>
      <div class="date"> {{replie | ctimeDateFilter}} </div>
      <div class="content">{{replie | contentMessageFilter}}</div>
      <div class="like-nolike-share">
        <div class="like">
          <i class="iconfont icon-dianzan"/>{{replie | likeFilter | autoChNum}}
        </div>
        <div class="nolike"><i class="iconfont icon-buxihuan-"/></div>
        <div class="share"><i class="iconfont icon-fenxiang"/></div>
        <div class="more"><i class="iconfont icon-gengduo"/></div>
      </div>
      <div class="reply-depth-2">
        <div class="interior-replie" v-for="(insReplie,index) in interiorReplies" :key="index">
          <j-link :link="insReplie | spaceFilter">{{insReplie | unameFilter}}</j-link>: {{insReplie | contentMessageFilter}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getAttribute} from "@/assets/js/tool.js"
import tool from "@/assets/js/tool.js"
const autoChNum=tool.autoChNum

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
    replyRootPendant(){
      return getAttribute(this.replie,"member.pendant")
    },
    interiorReplies(){
      return getAttribute(this.replie,"replies")
    },
    vipStatus(){
      return getAttribute(this.replie,"member.vip.vipStatus")
    },
  },
  filters: {
    slice(s){
      return JSON.stringify(s).slice(0,100)
    },
    getAttribute(){
      return getAttribute(...arguments)
    },
    autoChNum(num,chCnt=4,type=2){
      return autoChNum(num,chCnt,type)
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
      return getAttribute(replie,"like")
    },
    spaceFilter(replie){
      let mid = getAttribute(replie,"member.mid")
      return "http://space.bilibili.com/"+mid
    },
  },
};
</script>

<style lang="stylus"  rel="stylesheet/stylus">
@import "../../../../assets/style/index.styl"

  .component-reply-card
    display grid
    grid-template-columns auto 1fr
    grid-template-rows auto
    align-items start
    .left-header
      position relative
      .header-warp
        width 3rem
        height @width
        .header-img
          width 100%
          height 100%
          border-radius 2rem
          overflow hidden
          img
            width 100%
            height 100%
        .pendant-img
          position absolute
          top 50%
          left 50%
          height 170%
          width 170%
          transform translate(-50%,-50%)
          img
            height 100%
            width 100%
    .right-warp
      position relative
      margin-left $block-interval
      &>div
        text-align left
        &:not(.attention):not(.uname)
          margin-top 0.8rem
      .uname
        font-size 0.9rem
        font-weight 900
        &.vip
          color $blbl-pink
      .attention
        position absolute
        top 0
        right 0
        color $blbl-pink
      .date
        font-size 0.7rem
        color $def-info-color
      .content
        font-size 0.9rem
        line-height 120%
      .like-nolike-share
        position relative
        display grid
        grid-template-columns 1fr 1fr 1fr 1fr
        grid-template-rows auto
        align-items start
        div
          font-size 0.7rem
          top 0
          color $def-info-color
        // .like
        // .nolike
        // .share
        .more
          position absolute
          right 0
      .reply-depth-2
        background-color $def-back-color
        padding 0.6rem
        .interior-replie
          display -webkit-box
          -webkit-box-orient vertical
          overflow hidden
          -webkit-line-clamp 2
          font-size 0.9rem
          line-height 120%
          max-height (@font-size * 1.2 *2)
          div
            display inline
          &:nth-child(n+2)
            margin-top 0.6rem
          .component-jump-link *
            color #5090cc
            font-size @font-size

</style>