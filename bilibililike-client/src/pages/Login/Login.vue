<template>
<div class="component-login">
  <!-- {{userInfo}}
  <div class="dbg-phonmsg">
    {{dbgStr}}
  </div> -->
  <!-- headtop -->
  <header-top left-icon-type="back">
    <template v-slot:leftContent>
      <div class="header-slot-lc">
        <p>登录</p>
      </div>
    </template>
    <template v-slot:rightContent>
      <div class="header-slot-rc">
        <p>忘记密码？</p>
      </div>
    </template>
  </header-top>
  <div class="ic2233">
    <img :src="ic22Src" alt="ic22" class="ic22">
    <div class="bilidiv"><img :src="biliSrc" alt="bili" class="bili"></div>
    <img :src="ic33Src" alt="ic33" class="ic33">
  </div>
  <div class="loginInner">
    <div class="login_header">
      <!-- <h2 class="login_logo">BiliBili</h2> --> <!-- img -->
      <div class="login_header_title">
        <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
        <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
      </div>
    </div>
    <div class="login_content">
      <form @submit.prevent="login">
        <div :class="{on: loginWay}">
          <section class="login_message">
            <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
            <button :disabled="!rightPhone" class="get_verification" :class="{right_phone:rightPhone}"
              @click.prevent="getCode">{{computeTime>0 ? `(${computeTime}s)已发送` : '获取验证码'}}</button>
          </section>
          <section class="login_verification">
            <input type="tel" maxlength="4" placeholder="验证码" v-model="code">
          </section>
        </div>

        <div :class="{on: !loginWay}">
          <section>
            <section class="login_message">
              <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
            </section>
            <section class="login_verification">
              <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd"
                @focus="ic2233Src(0)" @blur="ic2233Src(1)">
              <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd"
                @focus="ic2233Src(0)" @blur="ic2233Src(1)">
              <div class="switch_button off" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
                <div class="switch_circle" :class="{right: showPwd}"></div>
                <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
              </div>
            </section>
            <section class="login_message">
              <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
              <!-- <img class="get_verification" src="" alt="captcha" @click="getCaptcha" ref="captcha"> -->
              <img class="get_verification" v-lazy="captchaSrc" :key="captchaSrc" @click="refreshCaptcha" ref="captcha">
            </section>
          </section>
        </div>
        <button class="login_submit">登录</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import {mapState,mapActions,mapMutations} from "vuex"
import {reqSendCode, reqSmsLogin, reqPwdLogin,reqCaptcha} from '../../api'
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue"
import IC22IMG from "@/assets/imgs/ic_22.png"
import IC33IMG from "@/assets/imgs/ic_33.png"
import IC22HIMG from "@/assets/imgs/ic_22_hide.png"
import IC33HIMG from "@/assets/imgs/ic_33_hide.png"
import BILIIMG from "@/assets/imgs/ic_bili_logo.png"

export default {
  name: "Login",
  data () {
    return {
      loginWay: true,
      phone: '',
      computeTime: 0,
      showPwd: false,
      pwd: '',
      name: '',
      code: '',
      captcha: '',
      // alertText: '',
      // alertShow: false,
      captchaSrc:'',
      ic22Src:"",
      ic33Src:"",
      biliSrc:BILIIMG,

      dbgStr:"",
    };
  },
  components: {
    HeaderTop,
  },
  created () {
    this.refreshCaptcha()
    this.ic2233Src(1)
  },
  computed: {
    rightPhone () {
      return /^1\d{10}$/.test(this.phone)
    },
    ...mapState(["userInfo"]),
  },
  methods: {
    ic2233Src(num){
      console.log(num)
      this.ic22Src=num==0?IC22HIMG:IC22IMG
      this.ic33Src=num==0?IC33HIMG:IC33IMG
    },
    async getCode () {
      if (!this.computeTime) {
        this.computeTime = 5
        this.intervalId = setInterval(() => {
          this.computeTime--
          if (this.computeTime <= 0) {
            clearInterval(this.intervalId)
          }
        }, 1000)

        // 发送验证码
        const result = await reqSendCode(this.phone)
        if (result.code === 1) {//发送失败
          if (this.computeTime) {
            this.computeTime = 0
            clearInterval(this.intervalId)
            this.intervalId = undefined
          }
        }
      }
    },
    async login () {
      let result
      if (this.loginWay) { // 短信登陆
        const {phone, code} = this
        if (!this.rightPhone) {
          // this.showAlert('请检查手机号')
          return
        } else if (!/^\d{4}$/.test(code)) {
          // this.showAlert('验证必须是6位数字')
          return
        }
        result = await reqSmsLogin(phone, code)
      } else { // 密码登陆
        const {name, pwd, captcha} = this
        if (!this.name) {
          // this.showAlert('请输入用户名')
          return
        } else if (!this.pwd) {
          // this.showAlert('请输入密码')
          return
        } else if (!this.captcha) {
          // this.showAlert('请输入验证码')
          return
        }
        result = await reqPwdLogin({name, pwd, captcha})
      }

      if (result.code === 0) {//登录成功
        // const user = result.data
        // 停止计时
        if (this.computeTime) {
          this.computeTime = 0
          clearInterval(this.intervalId)
          this.intervalId = undefined
        }
        this.$router.replace('/')
        this.dbgStr="登录成功"
      } else {
        this.refreshCaptcha()//更新图片验证码
        // const msg = result.msg
        // this.showAlert(msg)
        this.dbgStr="登录失败"
      }
      this.receive_user_info("")
      this.getUserInfo()
    },
    // async getCaptcha () {
    //   this.$refs.captcha.src = await reqCaptcha()
    // },
    async getCaptcha () {
      return await reqCaptcha()
    },
    async refreshCaptcha () {
      this.captchaSrc = await reqCaptcha()
    },
    ...mapActions(["getUserInfo"]),
    ...mapMutations(["receive_user_info"])
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
@import "../../assets/style/index.styl"

.component-login
  width 100%
  height 100%
  background #fff
  button
    outline: none
  .header-slot-rc
    font-size 1rem
    margin-top 0.2rem
  .ic2233
    position: relative
    margin-top 1rem
    height 5rem
    width 100%
    .ic22
      height 100%
      float left
    .ic33
      height 100%
      float right
    .bilidiv
      position absolute
      top 0
      width 10rem
      left 50%
      transform translateX(-50%)
      .bili
        position relative
        width 100%
        filter drop-shadow(1000px 0 0 $blbl-pink)
        right 1000px
  .loginInner
    padding-top 0rem
    width 80%
    margin 0 auto
    .login_header
      .login_header_title
        padding-top 1rem
        text-align center
        >a
          color #666
          font-weight 500
          font-size 1rem
          padding-bottom 0.3rem
          &:first-child
            margin-right 2.6rem
          &.on
            color $blbl-pink
            font-weight 700
            border-bottom 0.2rem solid $blbl-pink
    .login_content
      >form
        >div
          display none
          &.on
            display block
          input
            width 100%
            height 100%
            padding-left 0.7rem
            box-sizing border-box
            border 1px solid #ddd
            border-radius 0.3rem
            outline 0
            font 400 1.2rem Arial
            &:focus
              border 1px solid $blbl-pink
          .login_message
            position relative
            margin-top 1.2rem
            height 3rem
            font-size 0.9rem
            background #fff
            .get_verification
              position absolute
              top 50%
              right 0rem
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 1rem
              background transparent
              &.right_phone
                color black
            img.get_verification
              &[lazy=loading]
                display inline-block
                width 2.5rem
                top 0.4rem
                right 1.6rem
          .login_verification
            position relative
            margin-top 1.2rem
            height 3rem
            font-size 1rem
            background #fff
            .switch_button
              font-size 0.9rem
              border 1px solid #ddd
              border-radius 0.9rem
              transition background-color .3s,border-color .3s
              padding 0 0.4rem
              width 1.4rem
              height 1rem
              line-height 1.1rem
              color #fff
              position absolute
              top 50%
              right 0.7rem
              transform translateY(-50%)
              &.off
                background #fff
                .switch_text
                  float right
                  color #ddd
              &.on
                background $blbl-pink
              >.switch_circle
                //transform translateX(27px)
                position absolute
                top -1px
                left -1px
                width 1rem
                height 1rem
                border 1px solid #ddd
                border-radius 50%
                background #fff
                box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                transition transform .3s
                &.right
                  transform translateX(1.5rem)
        .login_submit
          display block
          width 11rem
          height 2.8rem
          margin auto
          margin-top 3rem
          border-radius 4px
          background $blbl-pink
          color #fff
          text-align center
          font-size 1.2rem
          line-height 2.8rem
          border 0
          &:active
            background-color $blbl-search-pink
</style>