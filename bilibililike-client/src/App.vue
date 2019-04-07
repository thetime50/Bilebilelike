<template>
  <div id="app">
    <p style="color : #fb7299 ; font-size : 25px"><b>Hello Bilibililike </b></p>
    <div><i class="iconfont icon-pindao" style="font-size:100px;color:#fb7299"></i></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
