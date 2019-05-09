<template>
<div class="component-login">
  {{userInfo}}
  <div class="login_header">
    <h2 class="login_logo">BiliBili</h2>
    <div class="login_header_title">
      <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
      <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
    </div>
  </div>
  <div class="login_content">
    <form @submit.prevent="login">
      <div v-show="loginWay">
        <section class="login_message">
          <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
          <button :disabled="!rightPhone" class="get_verification" :class="{right_phone:rightPhone}"
            @click.prevent="getCode">{{computeTime>0 ? `(${computeTime}s)已发送` : '获取验证码'}}</button>
        </section>
        <section class="login_verification">
          <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
        </section>
      </div>

      <div v-show="!loginWay">
        <section>
          <section class="login_message">
            <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
          </section>
          <section class="login_verification">
            <input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd">
            <input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd">
            <div class="switch_button off" :class="showPwd?'on':'off'" @click="showPwd=!showPwd">
              <div class="switch_circle" :class="{right: showPwd}"></div>
              <span class="switch_text">{{showPwd ? 'abc' : '...'}}</span>
            </div>
          </section>
          <section class="login_message">
            <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
            <img class="get_verification" src="" alt="captcha" @click="getCaptcha" ref="captcha">
          </section>
        </section>
      </div>
      <button class="login_submit">登录</button>
    </form>
  </div>
</div>
</template>

<script>
import {mapState,mapActions} from "vuex"
import {reqSendCode, reqSmsLogin, reqPwdLogin,reqCaptcha} from '../../api'
export default {
  name: "Login",
  data () {
    return {
      loginWay: false,
      phone: '',
      computeTime: 0,
      showPwd: false,
      pwd: '',
      name: '',
      code: '',
      captcha: '',
      // alertText: '',
      // alertShow: false,
    };
  },
  async mounted () {
    this.getUserInfo()
    this.$refs.captcha.src = await reqCaptcha()
  },
  computed: {
    rightPhone () {
      return /^1\d{10}$/.test(this.phone)
    },
    ...mapState(["userInfo"]),
  },
  methods: {
    async getCode () {
      if (!this.computeTime) {
        this.computeTime = 30
        this.intervalId = setInterval(() => {
          this.computeTime--
          if (this.computeTime <= 0) {
            clearInterval(this.intervalId)
          }
        }, 1000)
      }
      // 发送验证码
      const result = await reqSendCode(this.phone)
      if (result.code === 1) {//发送失败
        if (this.computeTime) {
          this.computeTime = 0
          clearInterval(this.intervalId)
          this.intervalId = undefined
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
        } else if (!/^\d{6}$/.test(code)) {
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
        const user = result.data
        // 停止计时
        if (this.computeTime) {
          this.computeTime = 0
          clearInterval(this.intervalId)
          this.intervalId = undefined
        }
        this.$store.dispatch('recordUser', user)//获取user
        this.$router.replace('/profile')
      } else {
        this.getCaptcha()//更新图片验证码
        const msg = result.msg
        // this.showAlert(msg)
      }
    },
    async getCaptcha () {
      this.$refs.captcha.src = await reqCaptcha()
    },
    ...mapActions(["getUserInfo"]),
  }
}
</script>

<style lang="stylus"  rel="stylesheet/stylus">
.component-login
  .login_content
    &>form
      //
</style>