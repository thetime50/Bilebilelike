<template>
  <div class="component-camera-updata">
    <div id="camera">
      <div id="contentHolder">
        <video id="video" ref="video" width="85%" autoplay></video>
        <canvas style="display:none;" id="canvas" ref="canvas" width="640" height="480"></canvas>
      </div>
      <div id="buttons">
        <button id="btn_snap" class="btn btn_blue" @click="paizhao">拍照</button>
        <button id="btn_cancel" class="btn btn_blue" style="display:none;">取消</button>
        <button id="btn_upload" class="btn btn_green" style="display:none;">上传</button>
      </div>
    </div>
  </div>
</template>

<script>
//web HTML5 调用摄像头的代码
//https://www.cnblogs.com/wsk198726/p/5550535.html

export default {
  name: "CameraUpdata",
  props: {
    videoConf  :{default: true},
  },
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      // 获取元素，创建设置等等
      var canvas = this.$refs.canvas,
        context = canvas.getContext("2d"),
        video = this.$refs.video,
        videoObj = { video: this.videoConf },
        errBack = function(error) {
          console.log("Video capture error: ", error.code);
        };

      // 添加video 监听器
      if (navigator.getUserMedia) {
        // 标准
        navigator.getUserMedia(
          videoObj,
          function(stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
          },
          errBack
        );
      } else if (navigator.webkitGetUserMedia) {
        // WebKit 前缀
        navigator.webkitGetUserMedia(
          videoObj,
          function(stream) {
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
          },
          errBack
        );
      } else if (navigator.mozGetUserMedia) {
        // Firefox 前缀
        navigator.mozGetUserMedia(
          videoObj,
          function(stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
          },
          errBack
        );
      } else {
        alert("浏览器不支持HTML5！");
        //console.log('your browser not support getUserMedia');
      }
    });
  },
  methods: {
    paizhao() {
      var video = this.$refs.video
      var canvas = this.$refs.canvas,
        context = canvas.getContext("2d")
      context.drawImage(video, 0, 0, video.clientWidth, video.clientHeight);
    }
  }
};
</script>

<style lang="stylus"  rel="stylesheet/stylus">
#camera {
  /* width: 640px; */
  /* height: 525px; */
  width: 85%;
  position: fixed;
  border: 1px solid #f0f0f0;
  -moz-border-radius: 4px 4px 0 0;
  -webkit-border-radius: 4px 4px 0 0;
  border-radius: 4px 4px 0 0;
  -moz-box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
}

#buttons {
  text-align: center;
}

.btn {
  width: 99px;
  height: 38px;
  line-height: 32px;
  margin: 0px 4px 0px 0px;
  border: 1px solid #fff;
  -moz-border-radius: 5px; /* Gecko browsers */
  -webkit-border-radius: 5px; /* Webkit browsers */
  border-radius: 5px; /* W3C syntax */
  cursor: default;
  text-align: center;
  font-size: 14px;
  color: #fff;
}

.btn_blue {
  background-color: #5CACEE;
}

.btn_green {
  background-color: #00EE00;
}

.hidden {
  display: none;
}
</style>