/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-disable */
/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

// var precacheConfig = [
//   ["//m.bilibili.com/index.html", "232323lkjljlkjl2222xxx222asd"],
//   ["//static.hdslb.com/mobile/js/swipe.min.js", "fdfljdffgjudohogh"],
//   ["//at.alicdn.com/t/font_66virlr2p1jg7gb9.js", "fsfsfsfvvvv"],
//   ["//api.bilibili.com/x/web-interface/dynamic/region?rid=1&jsonp=jsonp", "juoihjoi"],
//   ["//api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695", 'fdfdsf'],
//   ["//api.bilibili.com/x/web-interface/ranking/index?day=3", "fdfsdfdsfdsfsfggyh"],
//   ["//cdn.bootcss.com/fastclick/1.0.6/fastclick.min.js", "dsfdsfdsfdsfdsf"],
//   ["//static.hdslb.com/js/simple.v2.min.js", "dcsvc"],
//   ["//msite.baidu.com/sdk/c.js?appid=1580859622074471", "lkvdfxlkv"],
//   ["//static.hdslb.com/js/jquery.min.js", "ffsgdfgdfgdgdfghd"],
// ]

var precacheConfig = [
  ["//m.bilibili.com/index.html", "232323lkjljlkjl2222xxx222asd"],
  ["//static.hdslb.com/mobile/js/swipe.min.js", "fdfljdffgjudohogh"],
  ["//at.alicdn.com/t/font_66virlr2p1jg7gb9.js", "fsfsfsfvvvv"],
  ["//api.bilibili.com/x/web-interface/dynamic/region?rid=1&jsonp=jsonp", "juoihjoi"],
  ["//api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695", 'fdfdsf'],
  ["//api.bilibili.com/x/web-interface/ranking/index?day=3", "fdfsdfdsfdsfsfggyh"],
  ["//cdn.bootcss.com/fastclick/1.0.6/fastclick.min.js", "dsfdsfdsfdsfdsf"],
  ["//static.hdslb.com/js/simple.v2.min.js", "dcsvc"],
  ["//msite.baidu.com/sdk/c.js?appid=1580859622074471", "lkvdfxlkv"],
  ["//static.hdslb.com/js/jquery.min.js", "ffsgdfgdfgdgdfghd"],
  ["//s1.hdslb.com/bfs/static/mult/0--1711075381.js", "a7fb99d7728c204906ca5968ed6629d5"],
  ["//s1.hdslb.com/bfs/static/mult/1--1711075381.js", "bbbff6bd17490dfdec3a62a08b517189"],
  ["//s1.hdslb.com/bfs/static/mult/10--1711075381.js", "efe715e0166a8c9fa7ebbd59c0bcc722"],
  ["//s1.hdslb.com/bfs/static/mult/11--1711075381.js", "d5b64da18dc1372e162a43c7d72a6a0c"],
  ["//s1.hdslb.com/bfs/static/mult/12--1711075381.js", "38d60c207b189ff61cb5c05ec5e80157"],
  ["//s1.hdslb.com/bfs/static/mult/2--1711075381.js", "d13dd7ff5b6cb098336d4693e947f35d"],
  ["//s1.hdslb.com/bfs/static/mult/3--1711075381.js", "1f2b259bdba23067bc0daf8d7c2bd65c"],
  ["//s1.hdslb.com/bfs/static/mult/4--1711075381.js", "9526e8619369ef08f480bdb4db5fcdb2"],
  ["//s1.hdslb.com/bfs/static/mult/404--1711075381.css", "47fd22eb696ef1de12f1dcf4ecefff0f"],
  ["//s1.hdslb.com/bfs/static/mult/404--1711075381.js", "46729d4e82bcca55a87d80168cd61704"],
  ["//s1.hdslb.com/bfs/static/mult/5--1711075381.js", "c2d4cbeac7ed4e9a0a1bb4dfea9c104e"],
  ["//s1.hdslb.com/bfs/static/mult/6--1711075381.js", "3a80dbe9cea43b4c949fc6162b9fce1d"],
  ["//s1.hdslb.com/bfs/static/mult/7--1711075381.js", "4120ea914c8a6a4e30043e2531a770d5"],
  ["//s1.hdslb.com/bfs/static/mult/8--1711075381.js", "2f97647d35754bd3bb31148229c5dc91"],
  ["//s1.hdslb.com/bfs/static/mult/9--1711075381.js", "9769bd5f82a914d155f74bd36c574a76"],
  ["//s1.hdslb.com/bfs/static/mult/app--1711075381.js", "923cd0db3b935d20fc7201541d93197b"],
  ["//s1.hdslb.com/bfs/static/mult/audio--1711075381.css", "3086e9d55d76a77b10c48d738d5fdefa"],
  ["//s1.hdslb.com/bfs/static/mult/audio--1711075381.js", "71c9347141d9fc2096f2b4dc99b84bba"],
  ["//s1.hdslb.com/bfs/static/mult/audiolist--1711075381.css", "98306d9c105b383e4edf6eadd2930b5f"],
  ["//s1.hdslb.com/bfs/static/mult/audiolist--1711075381.js", "fa7fe0bcad6bb0b1a898c91cd2e64be6"],
  ["//s1.hdslb.com/bfs/static/mult/channel--1711075381.css", "e45b658eb34dc9b174084e1d1a73843b"],
  ["//s1.hdslb.com/bfs/static/mult/channel--1711075381.js", "485ebbe60b5229cfbc9729d133031c78"],
  ["//s1.hdslb.com/bfs/static/mult/css/reset.css", "f2a9958b69dd17be87bda329c4878704"],
  ["//s1.hdslb.com/bfs/static/mult/css/simple.v2.css", "8e56272ec7b04cd9be7c42dce9d65d4d"],
  ["//s1.hdslb.com/bfs/static/mult/home--1711075381.css", "811ece149a8e98ae8061a197e1defe98"],
  ["//s1.hdslb.com/bfs/static/mult/home--1711075381.js", "2e3a7c69ab77d440e9f8fee2a146a69f"],
  ["//s1.hdslb.com/bfs/static/mult/images/404.png", "bd7f33ee12f98fcf23333f56700d0940"],
  ["//s1.hdslb.com/bfs/static/mult/images/Icon_Barrage-Off.png", "319990f1f93437788d0cc83f7664d329"],
  ["//s1.hdslb.com/bfs/static/mult/images/Icon_Barrage-On.png", "9e52e4fb69633755e8a4d27645ffb284"],
  ["//s1.hdslb.com/bfs/static/mult/images/Icon_Fullscreen.png", "017a1ae71e153ee2cfbe50d1fe793775"],
  ["//s1.hdslb.com/bfs/static/mult/images/Icon_comment_special.svg", "833aa5c77562d79e6d3adfccc75c43fc"],
  ["//s1.hdslb.com/bfs/static/mult/images/TV-Pause.png", "1fcf9b4adda965f383e6a0a529133856"],
  ["//s1.hdslb.com/bfs/static/mult/images/TV-Play.png", "75c1a3242d14fc0aaac49c9d55601bdd"],
  ["//s1.hdslb.com/bfs/static/mult/images/activity.jpg", "f3b24135de58c5de8525c03b8479ef28"],
  ["//s1.hdslb.com/bfs/static/mult/images/alert-icon.png", "075c8192ee287c57e3573ba46098eb49"],
  ["//s1.hdslb.com/bfs/static/mult/images/app-loading.gif", "e74e91d78283fe18ecf3e22a34cff413"],
  ["//s1.hdslb.com/bfs/static/mult/images/app_download.png", "06e971d8332ceec287840a4483f8caed"],
  ["//s1.hdslb.com/bfs/static/mult/images/app_logo.png", "d338ff90242df4d8b319a8388872ceec"],
  ["//s1.hdslb.com/bfs/static/mult/images/arrow_down@2x.png", "7d455caf8a7b1f0ddcd5031dd4d91bf8"],
  ["//s1.hdslb.com/bfs/static/mult/images/audio_icon_comment.png", "10bfd9b9e9d77ee274ce5f685d7eb07d"],
  ["//s1.hdslb.com/bfs/static/mult/images/audio_icon_play.png", "669d82e3e16b4dd3bb8e2309cfc44f85"],
  ["//s1.hdslb.com/bfs/static/mult/images/audio_play.png", "71c41cf3fcd02489fa8020928906a38f"],
  ["//s1.hdslb.com/bfs/static/mult/images/audio_stop.png", "267cd3180734a35fa0b615ac037d613f"],
  ["//s1.hdslb.com/bfs/static/mult/images/back.png", "72eb99b0b0399a9a177d0b860e169e26"],
  ["//s1.hdslb.com/bfs/static/mult/images/bangumi.png", "f49a3ef86e762bcc56ec22d3b95dedac"],
  ["//s1.hdslb.com/bfs/static/mult/images/banner-close.png", "9dc5eeb385bcccf367f602251d6d1992"],
  ["//s1.hdslb.com/bfs/static/mult/images/bannerTop.png", "d651f318daee3797b0e638e7319227c5"],
  ["//s1.hdslb.com/bfs/static/mult/images/big.png", "c95c511d5f78583a55d22c7523e6db3d"],
  ["//s1.hdslb.com/bfs/static/mult/images/bt.png", "8d7bd3e33eae0f38d983278bdb41c267"],
  ["//s1.hdslb.com/bfs/static/mult/images/btn_video_grey.png", "520626b151166cff9d9a85e5239c4a97"],
  ["//s1.hdslb.com/bfs/static/mult/images/cellphone.png", "4098df835280373da88043cdb8fa6f1f"],
  ["//s1.hdslb.com/bfs/static/mult/images/chat.svg", "028c85cc88c4474fe37e0668a76e5575"],
  ["//s1.hdslb.com/bfs/static/mult/images/close1.png", "eb0bdbb20d248548cda33e436b33af8f"],
  ["//s1.hdslb.com/bfs/static/mult/images/collect.png", "686352a14150d6aec48dc1eafc9c30d8"],
  ["//s1.hdslb.com/bfs/static/mult/images/comment.png", "1c8dbac93c1a7ec8196dd688c64bade4"],
  ["//s1.hdslb.com/bfs/static/mult/images/computer.png", "fab1df0fc4eb76dc1a71f58500d3be9b"],
  ["//s1.hdslb.com/bfs/static/mult/images/down.png", "ba4633049531434c63d36fa1c93ae40f"],
  ["//s1.hdslb.com/bfs/static/mult/images/download.png", "c60f01834c05d6633296fe710e0c565e"],
  ["//s1.hdslb.com/bfs/static/mult/images/end.png", "97c81d436efdcbdeae8d2a82e9620a7d"],
  ["//s1.hdslb.com/bfs/static/mult/images/enter-icon.png", "489347c81fedc7e5c30e26cb42be781c"],
  ["//s1.hdslb.com/bfs/static/mult/images/enter.png", "ed411b0dd39270fc3fc75a40d4ef54ef"],
  ["//s1.hdslb.com/bfs/static/mult/images/eye.png", "2360bb8be61a3a69ae517b493ec161df"],
  ["//s1.hdslb.com/bfs/static/mult/images/follow.png", "f44f91cfc1297b38b10e5da94f424779"],
  ["//s1.hdslb.com/bfs/static/mult/images/forward-arrow.svg", "cbb62032e7383290457dfe527957754f"],
  ["//s1.hdslb.com/bfs/static/mult/images/history.png", "8bdd0d5b0c56978dd20117eccde6e462"],
  ["//s1.hdslb.com/bfs/static/mult/images/ic_close_bottom.png", "8ee2664e92396bb0701a2da1bb062d24"],
  ["//s1.hdslb.com/bfs/static/mult/images/ic_danmu.png", "434fbe79ffd3bd95a1c65f2880d50973"],
  ["//s1.hdslb.com/bfs/static/mult/images/ic_downtop.png", "e50bd7bd1e8dc2dfada39badc24bd716"],
  ["//s1.hdslb.com/bfs/static/mult/images/ic_next.png", "143e77bbfda18febfdfd5aa83b43065c"],
  ["//s1.hdslb.com/bfs/static/mult/images/ic_next_end.png", "6d1bbfb98303b970821e4109e6140662"],
  ["//s1.hdslb.com/bfs/static/mult/images/ic_play.png", "812562c38acf3726488bc5c5983e634f"],
  ["//s1.hdslb.com/bfs/static/mult/images/ic_player.png", "4ad8cbe2c9f4e0f864d6a6729d83305c"],
  ["//s1.hdslb.com/bfs/static/mult/images/ic_popular.svg", "67506dc4b868a2fda0821efe9361d978"],
  ["//s1.hdslb.com/bfs/static/mult/images/ic_replay.png", "344e9aca0feb60df434aacbd22f51a97"],
  ["//s1.hdslb.com/bfs/static/mult/images/ic_replay_end.png", "b119cb0f1ff2250432fa0cfa09411bb1"],
  ["//s1.hdslb.com/bfs/static/mult/images/ic_share.png", "c3c839b60ceb0ddb93fa26f4d6a16dff"],
  ["//s1.hdslb.com/bfs/static/mult/images/ico_Barrage.svg", "618802804960c24377b83118b074fdb1"],
  ["//s1.hdslb.com/bfs/static/mult/images/ico_Play.svg", "46ff6c24caac1ed734fec58e18c095ba"],
  ["//s1.hdslb.com/bfs/static/mult/images/ico_danmu.png", "4f0ea413f94ce44e5a60680df9ecb3e9"],
  ["//s1.hdslb.com/bfs/static/mult/images/ico_danmu1.png", "fbd9ec208857686b54531fbe641c87ee"],
  ["//s1.hdslb.com/bfs/static/mult/images/ico_play.png", "e724ba1f6daa50bf7db2b13a86f09505"],
  ["//s1.hdslb.com/bfs/static/mult/images/ico_play1.png", "709aa2d71775b93aa9ccb50c85c48ef6"],
  ["//s1.hdslb.com/bfs/static/mult/images/ico_up.png", "b541ec17a44de29d87e8d1308ebb6f0c"],
  ["//s1.hdslb.com/bfs/static/mult/images/icon-close.png", "c2ab0b7e5c1dba6cee85ac59d17fdb47"],
  ["//s1.hdslb.com/bfs/static/mult/images/icon-search.png", "081da6b2f708cfd92fe3bd81b5503f81"],
  ["//s1.hdslb.com/bfs/static/mult/images/icon_UP.svg", "67b0f67e7588d4311537ed685d11b355"],
  ["//s1.hdslb.com/bfs/static/mult/images/icon_comment.png", "f111d4f772a58d73c42d6bb4ac534ba2"],
  ["//s1.hdslb.com/bfs/static/mult/images/icon_play.png", "92eb3777b2a282bb0a10cb8e041a6411"],
  ["//s1.hdslb.com/bfs/static/mult/images/icons.png", "aef9bb0b527ccadf9ecabbc0191f3ebb"],
  ["//s1.hdslb.com/bfs/static/mult/images/img_loading.png", "a3516567b5e351598868e1c7d0d94af0"],
  ["//s1.hdslb.com/bfs/static/mult/images/line.png", "e3e292c77c5c08a735267ed3b2408e2b"],
  ["//s1.hdslb.com/bfs/static/mult/images/lineR.png", "da91393335360fae29ab27ddb8e7da64"],
  ["//s1.hdslb.com/bfs/static/mult/images/loading.png", "18a4e6c65d852276ad2a8d82629d3522"],
  ["//s1.hdslb.com/bfs/static/mult/images/loading.svg", "a516b9f80648013ffdc41ac06a124f8a"],
  ["//s1.hdslb.com/bfs/static/mult/images/login.png", "d3599827b395ec238937198482dc425d"],
  ["//s1.hdslb.com/bfs/static/mult/images/logo.png", "a494fabb44f5c3ed27a8faf72b95f440"],
  ["//s1.hdslb.com/bfs/static/mult/images/logo_bottom.png", "fd818b8b998f3833d8ed85e8d069e9ce"],
  ["//s1.hdslb.com/bfs/static/mult/images/lv0.png", "37e0b2acee43a68d8cc9fe9a4d5537b7"],
  ["//s1.hdslb.com/bfs/static/mult/images/lv1.png", "334555f5a80bb250b853071f7fed49a2"],
  ["//s1.hdslb.com/bfs/static/mult/images/lv2.png", "8fa3966d9e7d1fbfa6d713845af2b4e9"],
  ["//s1.hdslb.com/bfs/static/mult/images/lv3.png", "5e8ad0e92d909b248f9168f71ebcc13b"],
  ["//s1.hdslb.com/bfs/static/mult/images/lv4.png", "c8642002472cab76ce99cb28e0c13e35"],
  ["//s1.hdslb.com/bfs/static/mult/images/lv5.png", "b2434541175c73784e54fa5f705bc05f"],
  ["//s1.hdslb.com/bfs/static/mult/images/lv6.png", "81d638072436f424e284fdd76aa23e18"],
  ["//s1.hdslb.com/bfs/static/mult/images/mask.png", "c572027f6bbc6ad2ac897a9b5e97a4b1"],
  ["//s1.hdslb.com/bfs/static/mult/images/microphone.png", "ee225a0308a1594c559a55d0b8c4eee1"],
  ["//s1.hdslb.com/bfs/static/mult/images/movie.png", "931de20cb8cadb6fd60168e4ff08cbd1"],
  ["//s1.hdslb.com/bfs/static/mult/images/noContent.png", "b34282a547a9976cfae9dfd557fcaacb"],
  ["//s1.hdslb.com/bfs/static/mult/images/notFound.png", "3ff930af1dfb4a59f1eb0575d9f34bd6"],
  ["//s1.hdslb.com/bfs/static/mult/images/open-notice.png", "1baede28856c6f5001a2c91005ca8276"],
  ["//s1.hdslb.com/bfs/static/mult/images/output.png", "fcd6bcb56c1689fcef28b57c22475bad"],
  ["//s1.hdslb.com/bfs/static/mult/images/pause.png", "074048c611ec740eaad63eb8ea2effb3"],
  ["//s1.hdslb.com/bfs/static/mult/images/play.png", "33d2527b6ea02c9d8c9bb94c35425b8c"],
  ["//s1.hdslb.com/bfs/static/mult/images/playlist-cover-icon.png", "0c65db9468e91cd81428175943f98647"],
  ["//s1.hdslb.com/bfs/static/mult/images/rank-icon.png", "6e177762cadc6922bb296fb628120a68"],
  ["//s1.hdslb.com/bfs/static/mult/images/rank1.png", "4badd3b76e4e4151e4c6b5758293e45a"],
  ["//s1.hdslb.com/bfs/static/mult/images/rank2.png", "1e6a1413f900f04515ca603406d61e9a"],
  ["//s1.hdslb.com/bfs/static/mult/images/rank3.png", "bb07f2757316d43b6c45d6482af97c4b"],
  ["//s1.hdslb.com/bfs/static/mult/images/remind.png", "e9678c1dc0165a4568422be219da7af6"],
  ["//s1.hdslb.com/bfs/static/mult/images/search-close.png", "7fab349e47c68bd6fa10ca09444c313a"],
  ["//s1.hdslb.com/bfs/static/mult/images/search-pro.png", "5cf2d873b4db442bb30d93a10b1250b0"],
  ["//s1.hdslb.com/bfs/static/mult/images/share.png", "8947c2003ef6bbb283e6a4c66bc9e37e"],
  ["//s1.hdslb.com/bfs/static/mult/images/small-down.png", "0ea940411cf038727d9ec930aff1124a"],
  ["//s1.hdslb.com/bfs/static/mult/images/star-been.svg", "8776f12ea077819227ba08a3a4cb7d13"],
  ["//s1.hdslb.com/bfs/static/mult/images/star.svg", "1d5dc9c938b57077d27d8d47bc7a64c8"],
  ["//s1.hdslb.com/bfs/static/mult/images/tagDefault.png", "50424ebf9baf60c31228a8128d71320e"],
  ["//s1.hdslb.com/bfs/static/mult/images/thumb.png", "bf7b737c0de9a34ca6258eb8c7cd6972"],
  ["//s1.hdslb.com/bfs/static/mult/images/tips.png", "5f2d263e7681be9b79645b036570a692"],
  ["//s1.hdslb.com/bfs/static/mult/images/toTop.png", "d127443a8f6c3b7f8d01fa609cb31585"],
  ["//s1.hdslb.com/bfs/static/mult/images/toTop1.png", "d127443a8f6c3b7f8d01fa609cb31585"],
  ["//s1.hdslb.com/bfs/static/mult/images/tv.png", "d79a46963d9d76da9fe3193be1536136"],
  ["//s1.hdslb.com/bfs/static/mult/images/ui_2.png", "2df6818bc016fdfb79bf31292b6b962d"],
  ["//s1.hdslb.com/bfs/static/mult/images/up.png", "bf473e3168a27c0d31f1c4119d72693e"],
  ["//s1.hdslb.com/bfs/static/mult/images/video-disable.png", "7d41aca3b9bd92a956e309fe39e92244"],
  ["//s1.hdslb.com/bfs/static/mult/images/video-playing.png", "271676de7f05808eb2bf997bc32a92b5"],
  ["//s1.hdslb.com/bfs/static/mult/images/video_play.png", "aed7d59e5b897410df6e532a5050d789"],
  ["//s1.hdslb.com/bfs/static/mult/index.html", "704aa0cd1d3c4bf3817ddb590c26984b"],
  ["//s1.hdslb.com/bfs/static/mult/js/Blob.js", "2a8d45a295d75c6129daca8a81b9f4c1"],
  ["//s1.hdslb.com/bfs/static/mult/js/Rx.min.js", "4d99356964809d0efa93548a1dce64ca"],
  ["//s1.hdslb.com/bfs/static/mult/js/cookies.js", "6b414f40e5fdf5fd20ba4c20e3ed326a"],
  ["//s1.hdslb.com/bfs/static/mult/js/eruda.js", "1778c5de31c2f777f0b6f8921207171a"],
  ["//s1.hdslb.com/bfs/static/mult/js/hotcss.js", "69e29cbd4a8c834b568c86f9e846e45a"],
  ["//s1.hdslb.com/bfs/static/mult/js/jquery.dotdotdot.js", "74b2bca6b01d3a6cc54da517f53a1d5c"],
  ["//s1.hdslb.com/bfs/static/mult/js/jquery.min.js", "e32244b28e45b4b5aa1a0a336444e6fe"],
  ["//s1.hdslb.com/bfs/static/mult/js/new-simple-event.js", "8f438ecf50dcef09eb3bd939478bb1a8"],
  ["//s1.hdslb.com/bfs/static/mult/js/new-simple-no-jquery.js", "451fc4904a9b23a196a525f1bb6f1a66"],
  ["//s1.hdslb.com/bfs/static/mult/new-channel--1711075381.css", "303b4fd311cd917c9bacbfebc96a2275"],
  ["//s1.hdslb.com/bfs/static/mult/new-channel--1711075381.js", "7ff33fa6796bebe71fe8c96b0f112caa"],
  ["//s1.hdslb.com/bfs/static/mult/playlist--1711075381.css", "78b51c87db835e3617a5b50cd1066227"],
  ["//s1.hdslb.com/bfs/static/mult/playlist--1711075381.js", "c7cbdc32349c65da340dbe254bb42e83"],
  ["//s1.hdslb.com/bfs/static/mult/ranking--1711075381.css", "1246f387576aaa0de1096b314e52fd34"],
  ["//s1.hdslb.com/bfs/static/mult/ranking--1711075381.js", "adf9b60c8a79bbaa213a4068929a5a07"],
  ["//s1.hdslb.com/bfs/static/mult/search--1711075381.css", "09fec16bb3a26b773ecb88a382d70b48"],
  ["//s1.hdslb.com/bfs/static/mult/search--1711075381.js", "c528b7c0a0a99874e811017c711aa098"],
  ["//s1.hdslb.com/bfs/static/mult/space--1711075381.css", "5bafe588ec1c457bc0b676b19e2f982e"],
  ["//s1.hdslb.com/bfs/static/mult/space--1711075381.js", "4d86346fed0b1bae60e9a70ec5d14ea0"],
  ["//s1.hdslb.com/bfs/static/mult/tag--1711075381.css", "1024b50ded21b5780335d3b48b313c0c"],
  ["//s1.hdslb.com/bfs/static/mult/tag--1711075381.js", "4d878f88c4586c0c2e670a4dcd81e2b7"],
  ["//s1.hdslb.com/bfs/static/mult/utils--1711075381.js", "5476b0d31954dc68ff056dd998708a6c"],
  ["//s1.hdslb.com/bfs/static/mult/vendor--1711075381.js", "9c1cfb269d36528006ad4d0ebae21fd6"],
  ["//s1.hdslb.com/bfs/static/mult/video--1711075381.css", "3c22cfe5c64f40bb980b660cd4a5f7cf"],
  ["//s1.hdslb.com/bfs/static/mult/video--1711075381.js", "4d9e67b81bdc6f0dc072967e8af1a5ec"],
  ["//s1.hdslb.com/bfs/static/mult/video-list--1711075381.css", "f254e927d7c1c65a8da651a11433f951"],
  ["//s1.hdslb.com/bfs/static/mult/video-list--1711075381.js", "c03902c21c93bb19cc74ee40fd0c567b"],
  ["//s1.hdslb.com/bfs/static/mult/video.html", "fd3e5edd8befb3797f361a4bd2cd5250"]
];
var cacheName = 'sw-precache-v3-mobile-h5-ssr-' + (self.registration ? self.registration.scope : '')


var ignoreUrlParametersMatching = [/^utm_/, /^bbid/, /^bsource/, /^share_medium/, /^share_source/, /^ts/]

var addDirectoryIndex = function(originalUrl, index) {
  var url = new URL(originalUrl)
  if (url.pathname.slice(-1) === '/') {
    url.pathname += index
  }
  return url.toString()
}

var cleanResponse = function(originalResponse) {
  // If this is not a redirected response, then we don't have to do anything.
  if (!originalResponse.redirected) {
    return Promise.resolve(originalResponse)
  }

  // Firefox 50 and below doesn't support the Response.body stream, so we may
  // need to read the entire body to memory as a Blob.
  var bodyPromise = 'body' in originalResponse ?
    Promise.resolve(originalResponse.body) :
    originalResponse.blob()

  return bodyPromise.then(function(body) {
    // new Response() is happy when passed either a stream or a Blob.
    return new Response(body, {
      headers: originalResponse.headers,
      status: originalResponse.status,
      statusText: originalResponse.statusText
    })
  })
}

var createCacheKey = function(originalUrl, paramName, paramValue,
  dontCacheBustUrlsMatching) {
  // Create a new URL object to avoid modifying originalUrl.
  var url = new URL(originalUrl)

  // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
  // then add in the extra cache-busting URL parameter.
  if (!dontCacheBustUrlsMatching ||
    !(url.pathname.match(dontCacheBustUrlsMatching))) {
    url.search += (url.search ? '&' : '') +
      encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue)
  }

  return url.toString()
}

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
  // If the whitelist is empty, then consider all URLs to be whitelisted.
  if (whitelist.length === 0) {
    return true
  }

  // Otherwise compare each path regex to the path of the URL passed in.
  var path = (new URL(absoluteUrlString)).pathname
  return whitelist.some(function(whitelistedPathRegex) {
    return path.match(whitelistedPathRegex)
  })
}

var stripIgnoredUrlParameters = function(originalUrl,
  ignoreUrlParametersMatching) {
  var url = new URL(originalUrl)
  // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
  url.hash = ''

  url.search = url.search.slice(1) // Exclude initial '?'
    .split('&') // Split into an array of 'key=value' strings
    .map(function(kv) {
      return kv.split('=') // Split each 'key=value' string into a [key, value] array
    })
    .filter(function(kv) {
      return ignoreUrlParametersMatching.every(function(ignoredRegex) {
        return !ignoredRegex.test(kv[0]) // Return true iff the key doesn't match any of the regexes.
      })
    })
    .map(function(kv) {
      return kv.join('=') // Join each [key, value] array into a 'key=value' string
    })
    .join('&') // Join the array of 'key=value' strings into a string with '&' in between each

  return url.toString()
}


var hashParamName = '_sw-precache'
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0]
    var hash = item[1]
    var absoluteUrl = new URL(relativeUrl, self.location)
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false)
    return [absoluteUrl.toString(), cacheKey]
  })
)

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url
    })
  }).then(function(urls) {
    return new Set(urls)
  })
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request
              if (cacheKey.indexOf('//api.bilibili.com') >= 0) {
                request = new Request(cacheKey, {
                  method: 'GET',
                  mode: 'cors',
                  cache: 'default'
                })
              } else if (cacheKey.indexOf('//m.bilibili.com') < 0) {
                request = new Request(cacheKey, {
                  mode: "no-cors"
                })
              } else {
                request = new Request(cacheKey, {
                  credentials: 'same-origin'
                })
              }
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                // if (!response.ok) {
                //   throw new Error('Request for ' + cacheKey + ' returned a ' +
                //     'response with status ' + response.status);
                // }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache)
                })
              })
            }
          })
        )
      })
    }).then(function() {
      // Force the SW to transition from installing -> active state
      return self.skipWaiting()
    }).catch()
  )
})

self.addEventListener('activate', function(event) {
  console.log('actived')
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values())

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest)
            }
          })
        )
      })
    }).then(function() {
      return self.clients.claim()
    })
  )
})


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond
    var shouldRefresh = false
    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching)
    shouldRespond = urlsToCacheKeys.has(url)

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html'
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex)
      // shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = ''
    if (!shouldRespond &&
      navigateFallback &&
      (event.request.mode === 'navigate') &&
      isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString()
      shouldRespond = urlsToCacheKeys.has(url)
    }
    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      // console.log(event)
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response
            }
            throw Error('The cached response that was expected is missing.')
          })
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', urlsToCacheKeys.get(url), e)

          // return fetch(  )
          return fetch(event.request)
        })
      )
    }
  }
})