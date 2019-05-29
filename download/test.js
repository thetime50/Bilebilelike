//https://segmentfault.com/a/1190000009469775
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
const util = require('util');

var url = 'http://image.so.com/i?q=%E7%8C%AB&src=tab_www';
var file_path = './catpics'
// @320w_200h.webp
const mkdir= util.promisify(fs.mkdir)
const async_mkdir=async function(f_path){
  await mkdir(f_path,{ recursive: true })
}
async_mkdir(file_path)

requestImgList = function (cb) {
  request(url, function (err, res, body) {
    let imgList = []
    if (!err && res.statusCode === 200) {
      var $ = cheerio.load(body);
      JSON.parse($('script[id="initData"]').html()).list.forEach(function (item) {
        imgList.push(item.img)
      });
      console.log(imgList[0], "(..." + imgList.length + ")");
      cb && cb(imgList)
    }
  });
}

var downloadPic = function (src, dest) {
  request(src).pipe(fs.createWriteStream(dest)).on('close', function () {
    console.log('pic saved!')
  })
}

var one_img = function (imgList) {
  downloadPic(imgList[0], file_path + '/1.jpg');
}

var async = require('async')
var async_down = function (imgList) {
  imgList.splice(5)
  async.mapSeries(imgList, function (item, callback) {
    setTimeout(function () {
      downloadPic(item, file_path + '/' + (new Date()).getTime() + '.jpg');
      callback(null, item);
    }, 400);
  }, function (err, results) { });
}


var Bagpipe = require('bagpipe');
var bagpipe_down = function (imgList) {
  imgList.splice(5)
  var bagpipe = new Bagpipe(10, { timeout: 100 });
  for (var i = 0; i < imgList.length; i++) {
    console.log('i:' + i)
    bagpipe.push(downloadPic, imgList[i], file_path + '/' + i + '.jpg', function (err, data) {
      //
    });
  }
}

// requestImgList(one_img)
// requestImgList(async_down)
requestImgList(bagpipe_down)
