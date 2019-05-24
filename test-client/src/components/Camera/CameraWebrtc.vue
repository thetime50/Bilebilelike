<template>
  <div class="component-camera-webrtc">
    <video src id="iv" ref="iv" style="width:95%;" autoplay="autoplay"></video>
  </div>
</template>

<script>
//webrtc 调用摄像头并实时在浏览器中显示图像
//https://www.jianshu.com/p/1ddfa72de165

export default {
  name: "CameraWebrtc",
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      //web rtc 调用摄像头(兼容性写法(谷歌、火狐、ie))
      navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

      console.log();
      //调用成功会回调返回一个stream流 video:true 表示采集视频,audio:true 表示采集声音,反之就都不采集
      navigator.getUserMedia(
        { video: true, audio: false },
        function(stream) {
          //将采集到的视频信息显示在video标签中
          this.$refs.iv.srcObject = stream;
        },
        console.log
      );
    });
  }
};
</script>

<style lang="stylus"  rel="stylesheet/stylus"></style>