## 首页

https://m.bilibili.com/index.html

S: /main/service-worker.js  
H: /main/home--1711075381.js  

- 首页轮播  
https://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695  
S: ["//api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695", 'fdfdsf'],  
H: $.get("//api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695", function(r) {  
H: r = Y + "/x/web-show/res/loc?&pf=7&id=2806",  

- 首页视频  
https://api.bilibili.com/x/web-interface/ranking?rid=0&day=3&jsonp=jsonp  
S: ["//api.bilibili.com/x/web-interface/ranking/index?day=3", "fdfsdfdsfdsfsfggyh"]  
H: return r = "//" + C + "/x/web-interface/ranking/region?rid=" + i + "&day=7",  
H: $.get("//api.bilibili.com/x/web-interface/ranking?rid=" + r + "&day=3&jsonp=jsonp", function(r) {  

## 视频页面

https://m.bilibili.com/video/av53054599.html

https://api.bilibili.com/x/web-interface/ranking/region?rid=47&day=7 //多条介绍？？  
https://api.bilibili.com/x/web-interface/nav //用户信息  
https://comment.bilibili.com/recommendnew,53054599 //推荐  
https://api.bilibili.com/x/v2/reply?type=1&sort=2&oid=53054599&pn=1&nohot=1 //评论  

V: /video/video--1711075381.js  
A: /video/av53054599.html  

- 介绍  
https://api.bilibili.com/x/web-interface/ranking/region?rid=47&day=7  
V: var r, i, n = e.tid;  
V: return r = "//" + O + "/x/web-interface/ranking/region?rid=" + n + "&day=7",  
A: "tid": 47,  

- 推荐  
https://comment.bilibili.com/recommendnew,53054599  
V: return r = "//comment.bilibili.com/recommendnew," + e,  

- 评论  
https://api.bilibili.com/x/v2/reply?type=1&sort=2&oid=53054599&pn=1&nohot=1  
V: return r = O + "/x/v2/reply?type=1&sort=2&oid=" + n + "&pn=1&nohot=1",  

