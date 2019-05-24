<template>
  <div class="component-camera-updata">
    <video width="95%" id="myVideo" ref="myVideo"></video>
    <div>
      <button id="myButton" @click="paishe">拍摄</button>
      <button id="myButton2" @click="yulan">预览</button>
      <button id="myButton3" ref="myButton3">
        <a download="video.png">另存为</a>
      </button>
    </div>
    <canvas
      :width="vobjClientWidth"
      :height="vobjClientHeight"
      id="myCanvas"
      ref="myCanvas"
    ></canvas>
  </div>
</template>

<script>
//Web调取摄像头拍照
//https://www.cnblogs.com/dongh/p/6612082.html

export default {
  name: "CameraUpdata",
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      var cobj = this.$refs.myCanvas.getContext("2d");
      var vobj = this.$refs.myVideo;
      this.getUserMedia(
        { video: true },
        function(stream) {
          vobj.src = stream;
          vobj.play();
        },
        function() {}
      );
    });
  },
  computed: {
    vobjClientWidth(){
      if(this.$refs.myVideo)
        return this.$refs.myVideo.clientWidth
      return 0
    },
    vobjClientHeight(){
      if(this.$refs.myVideo)
        return this.$refs.myVideo.clientHeight
      return 0
    },
  },
  methods: {
    getUserMedia(obj, success, error) {
      let getUserMedia=function(){}
      if (navigator.getUserMedia) {
        getUserMedia = function(obj, success, error) {
          navigator.getUserMedia(
            obj,
            function(stream) {
              success(window.URL.createObjectURL(stream));
            },
            error
          );
        };
      } else if (navigator.webkitGetUserMedia) {
        getUserMedia = function(obj, success, error) {
          navigator.webkitGetUserMedia(
            obj,
            function(stream) {
              var _URL = window.URL || window.webkitURL;
              success(_URL.createObjectURL(stream));
            },
            error
          );
        };
      } else if (navigator.mozGetUserMedia) {
        getUserMedia = function(obj, success, error) {
          navigator.mozGetUserMedia(
            obj,
            function(stream) {
              success(window.URL.createObjectURL(stream));
            },
            error
          );
        };
      } else {
        return false;
      }
      return getUserMedia(obj, success, error);
    },
    paishe() {
      var cobj = this.$refs.myCanvas.getContext("2d");
      var vobj = this.$refs.myVideo;
      cobj.drawImage(vobj, 0, 0, this.vobjClientWidth, this.vobjClientHeight);
      this.$refs.myButton3.children[0].href = cobj.canvas.toDataURL(
        "image/png"
      );
    },
    yulan() {
      var cobj = this.$refs.myCanvas.getContext("2d");
      window.open(cobj.canvas.toDataURL("image/png"), "_blank");
    }
  }
};
</script>

<style lang="stylus"  rel="stylesheet/stylus"></style>