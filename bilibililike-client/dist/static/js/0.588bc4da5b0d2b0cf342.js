webpackJsonp([0],{"03mm":function(t,n){},"53v3":function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA5CAMAAABKzSg6AAAAAXNSR0IArs4c6QAAAXRQTFRF/HKa7neZ/3KZ////9HSU9nKV+HOXR3BM93GUakROrlpyPDU3Z0NN4WmLODQ19G+WnlVpfUlYa0VP+XGY+G6Q9XWTNTM09nKV4nGN+3OZ+m6W9XGX93Oa+G6XNjY2MzMzMzMzMzMzNDQ0MzMz/22R/3GbzGaZNDQ0Qzk8Rzk893KXMzMzQDc69HSU72+PNTM0NTQ0+nOZNDMz93CVzGaC826b8nKZYEBJx2F++XKXu113PDw8+m6V93KY/3+UNTQ0STk++3KZ/39/ODg4Y0JJ/HGZ/3+Z6WqU+XCZ+3CW+3Cb+G+P+HKT/3aa53OL+XSW/3+q/3CX83OW+XOW+XGa/39/9G+P93iW+nWa/2aZ+XKa+3Ga/3Gq8m2R/2+f+XSU92+X+HKS+XSb93SZMzMzMzMz////MzMzzMzMo6OjhYWFXFxcwcHBx8fHcHBwhoaGs7OzPz8/6urqUVFRXV1dq6ur8/Pz29vbenp69vb2Q0NDb29vzsppzQAAAGZ0Uk5TYA9OATAdKgAkr3/usmj0YoefrVwlGvg6CUkzGyElQoZ2/kTIBxIFiWbbRfzkGBDo+jf8Ri0XFKlzWXgVNUMM181OAiRkWgoMXUJNJyYcC1oGTxYsXgQwIj0FYFEJFRAwICguIzY3muUKigAAAmNJREFUSMflludT20AQxdcRxs9gcAVXeu+999577y3hbMD0nn8+d2fCWI6L5MlkJsP7pNt9P+lmJd0umdISfRmstLgwvq2wuDQxVsUYK4pHFfFEVSKsr45nS77/Sf0o4Ym6vgTYGBMqU2IppUwmxuJho55Bw5BMVxtiVC3DQ4ZBz2gMNpUHrnGZb2qHSu1NMjwurvOmorDlBcDVP+AdGZaGrm8qdcng8Ih3oN8FLCz/xha3MDczTVy9rcLR3E1R6m4WsdZecT09M4etxQjmATaXeMxqsztq5J3rzVGql6Eah91m5aalTcAjsI0AfOtEOZZclkK5lhyidR8CGxxbxZqTKCubaVB2FpFzDasm2gFWOJXPNCmfcyvADh3Cx3con3UdCgcTKhy6ls/j+/ThkPzwEll44P3qPIWu3rnNQuSFn47hJKuoRkqKc6IuVnLimM5OiGxih+ca9JMbbUQnZ4RTIjtfhbRgIW60E52CkEHk4KuwFizMjQ6ijAhm5qugFizIjea/iL3dPt3Hmu+fbt+SY88PjN29qKmXO8YenpNiolTsVY29ss9CJ8JuhOVRjT2K2E1S7EJYLtXYpYhdfFkszUqm+d7S/ErS/Cb/xY+Tzt99pP8sOeJYpv6TKxMUcO3qPSd3XQEyYk/vqbwHIx1gW28P2MYB7WN+Ql/HmZjHPilGuElPfyM3jAqZJoE20t5NqQ2YFL27E6ilj95tTqiP3k21QKds+UoD0NJDmtTTAjQokQFDqQAK3LPOVIxz1s0Hkwrlcwoql0NQQWZSFcgxqFw1c1U2dviNKeTvaKz8n2blX8uOtRXUqOoMAAAAAElFTkSuQmCC"},"6eNu":function(t,n,i){"use strict";var e=i("Gu7T"),s=i.n(e),o={name:"TitleNav",props:{nowIndex:{type:Number,default:0},cursorWidth:{type:Number,default:70},positionSync:{type:Number,default:0},titles:{type:Array,default:function(){return[]}},navStyle:{type:String,default:""},navChange:{type:Function}},data:function(){return{cursors:[],items:[],listChange:!1}},mounted:function(){var t=this;this.$nextTick(function(){t.refsRefres(),t._positionSync(t.positionSync)})},watch:{positionSync:function(t,n){this._positionSync(t)},titles:function(t,n){this.listChange=!0}},computed:{},updated:function(){this.listChange&&(this.refsRefres(),this.listChange=!1)},methods:{tabClick:function(t){this.navChange&&this.navChange({index:t})},_positionSync:function(t){this.items;for(var n=this.cursors,i=0;i<n.length;i++){var e=this.items[i].clientWidth,s=this.cursors[i].clientWidth;n[i].style.right=e*i+t*e+(e-s)/2+"px"}},refsRefres:function(){this.cursors=this.$refs.cursors?[].concat(s()(this.$refs.cursors)):[],this.items=this.$refs.items?[].concat(s()(this.$refs.items)):[]}}},a={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"component-title-nav",class:[t.navStyle]},[i("ul",{staticClass:"nav-list"},t._l(t.titles,function(n,e){return i("li",{key:e,ref:"items",refInFor:!0,staticClass:"item"},[i("div",{staticClass:"item-text",class:{active:t.nowIndex===e},on:{click:function(n){return t.tabClick(e)}}},[t._v("\r\n        "+t._s(n)+"\r\n      ")]),t._v(" "),i("div",{ref:"cursors",refInFor:!0,staticClass:"item-cursor",style:{width:t.cursorWidth+"%"}})])}),0)])},staticRenderFns:[]};var r=i("VU/8")(o,a,!1,function(t){i("8Fnv")},null,null);n.a=r.exports},"84oH":function(t,n,i){"use strict";var e={name:"DummyNav",props:{nowIndex:{type:Number,default:0},cursorWidth:{type:Number,default:70},positionSync:{type:Number,default:0},titles:{type:Array,default:function(){return[]}},navStyle:{type:String,default:""},navChange:{type:Function,default:function(){return function(){}}},styles:{type:Object,default:function(){return{"component-dummy-nav":"component-title-nav"}}},_propsSync:{type:Function}},data:function(){return{}},mounted:function(){this._propsSync({nav_nowIndex:this.nowIndex,nav_cursorWidth:this.cursorWidth,nav_positionSync:this.positionSync,nav_titles:this.titles,nav_style:this.navStyle,nav_change:this.navChange}),this._propsSync({nav_enable:!0})},beforeDestroy:function(){this._propsSync({nav_enable:!1}),this._propsSync({nav_rou1s:[]})},watch:{nowIndex:function(t,n){this._propsSync({nav_nowIndex:t})},cursorWidth:function(t,n){this._propsSync({nav_cursorWidth:t})},positionSync:function(t,n){this._propsSync({nav_positionSync:t})},titles:function(t,n){this._propsSync({nav_titles:t})},navStyle:function(t,n){this._propsSync({nav_style:t})},navChange:function(t,n){this._propsSync({nav_change:t})}},computed:{},methods:{}},s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"component-dummy-nav",class:this.styles["component-dummy-nav"]},[n("ul",{staticClass:"nav-list",class:this.styles["nav-list"]},[n("li",{staticClass:"item",class:this.styles.item},[n("div",{staticClass:"item-text",class:this.styles["item-text"]}),this._v(" "),n("div",{staticClass:"item-cursor",class:this.styles["item-cursor"]})])])])},staticRenderFns:[]};var o=i("VU/8")(e,s,!1,function(t){i("tmym")},null,null);n.a=o.exports},"8Fnv":function(t,n){},"9AWY":function(t,n){},Qft4:function(t,n){},R0cD:function(t,n){},RXzy:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("mvHQ"),s=i.n(e),o=i("Dd8w"),a=i.n(o),r=i("NYxO"),c=i("InnB"),l=i("6eNu"),u=i("abJV"),d=c.a.setAttr2Def,f={autoPlay:!1,showDot:!1},v={name:"SlotScroll",components:{Slide:u.a},props:{titles:{type:Array,default:function(){return[]}},nav:{type:Object,default:function(){return l.a}},navCursorWidth:{type:Number,default:70},navStyle:{type:String,default:""},slideConf:{type:Object,default:function(){return{}}},scrollConf:{type:Object,default:function(){return{}}},_dummyNavPropsSync:{type:Function}},data:function(){return{positionSync:0,currentIndex:0,slideConfDt:{},scrollConfDt:{}}},created:function(){this.slideConfDt=d(this.slideConf,f),this.scrollConfDt=d(this.scrollConf,{probeType:3,stopPropagation:!1,click:!1,snap:{loop:!1,threshold:.3,speed:400}})},mounted:function(){var t=this;this.$nextTick(function(){t.slideBS.on("scrollEnd",function(){var n=t.slide.currentPageIndex;n!=t.currentIndex&&(t.currentIndex=n)}),t.slideBS.on("scroll",function(n){var i=n.x;n.y;t.positionSync=i/t.slide.pageWidth}),t.slide.toPage(t.currentIndex,0,0),t._triggerRouteChange(0,-1)})},watch:{currentIndex:function(t,n){this.slide.toPage(t),this._triggerRouteChange(t,n),this.titles.length!=this.slide.length&&console.warn("titles length != slot length",this.titles.length,this.slide.length)}},computed:{slide:function(){return this.$refs.slide},slideBS:function(){return this.$refs.slide.slide}},methods:{_triggerRouteChange:function(t,n){var i=n,e=t;if(i>=0){var s=this.slide.$children[i].routeChange;s&&s({type:"leave ",before:t,after:n})}if(e>=0){var o=this.slide.$children[e].routeChange;o&&o({type:"enter",before:t,after:n})}},navChange:function(t){var n=t.index;this.currentIndex=n}}},p={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"component-slot-scroll"},[i("div",{staticClass:"nav"},[i(t.nav,{tag:"component",attrs:{nowIndex:t.currentIndex,cursorWidth:t.navCursorWidth,positionSync:t.positionSync,titles:t.titles,navStyle:t.navStyle,navChange:t.navChange,_propsSync:t._dummyNavPropsSync}})],1),t._v(" "),i("div",{staticClass:"slot-scroll-slide"},[i("slide",{ref:"slide",attrs:{slideConf:t.slideConfDt,scrollConf:t.scrollConfDt}},[t._t("default")],2)],1)])},staticRenderFns:[]};var h=i("VU/8")(v,p,!1,function(t){i("qbby")},null,null).exports,m={name:"ProportionImg",props:{imgSrc:{type:String,default:""},imgAlt:{type:String,default:""},proportion:{type:Number,default:100},lazy:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){var t=this;this.$nextTick(function(){t.setPaddingBottom(t.proportion)})},watch:{proportion:function(t,n){this.setPaddingBottom(t)}},methods:{setPaddingBottom:function(t){this.$refs.proportion.style["padding-bottom"]=t+"%"}}},y={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{ref:"proportion",staticClass:"component-proportion-img"},[n("div",{staticClass:"img-div"},[this.lazy?n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.imgSrc,expression:"imgSrc"}],attrs:{alt:this.imgAlt}}):n("img",{attrs:{src:this.imgSrc,alt:this.imgAlt}})]),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var g=i("VU/8")(m,y,!1,function(t){i("03mm")},null,null).exports,C={name:"Progress",props:{percentage:{type:Number,default:0},styles:{type:Object,default:function(){return{}}}},data:function(){return{}}},_={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"component-progress"},[n("div",{staticClass:"percentage-container"},[n("div",{staticClass:"percentage",style:{width:this.percentage+"%"}})]),this._v(" "),n("div",{staticClass:"img-container"},[n("img",{staticClass:"progress",style:{left:this.percentage+"%"},attrs:{src:i("53v3"),alt:"",height:"100%",width:"100%"}})])])},staticRenderFns:[]};var b=i("VU/8")(C,_,!1,function(t){i("tTGZ")},null,null).exports,S=i("WAMQ"),k=i("84oH"),w={name:"VideoInfo",props:{initialState:{type:Object,default:function(){return{}}}},data:function(){return{attention:!1,unfold:!1,noUnfoldcLamp:!0,like:!1,noLike:!1,coin:!1,favorite:!1}},computed:{videoInfo:function(){return Object(c.b)(this.initialState,"reduxAsyncConnect.videoInfo")},ownerPage:function(){return"https://m.bilibili.com/space/"+Object(c.b)(this.videoInfo,"owner.mid")},ownerName:function(){return Object(c.b)(this.videoInfo,"owner.name")},ownerFace:function(){return Object(c.b)(this.videoInfo,"owner.face")},videoTitle:function(){return Object(c.b)(this.videoInfo,"title")},videoAid:function(){return Object(c.b)(this.videoInfo,"aid")},videoDesc:function(){return Object(c.b)(this.videoInfo,"desc")},videoStat:function(){return Object(c.b)(this.videoInfo,"stat")},videoView:function(){return Object(c.b)(this.videoStat,"view")},videoDanmaku:function(){return Object(c.b)(this.videoStat,"danmaku")},videoLike:function(){return Object(c.b)(this.videoStat,"like")},videoCion:function(){return Object(c.b)(this.videoStat,"coin")},videoFavorite:function(){return Object(c.b)(this.videoStat,"favorite")},videoShare:function(){return Object(c.b)(this.videoStat,"share")},getButtons:function(){var t=this;return[{icon:"icon-xihuan",data:c.a.autoChNum(this.videoLike,4,2),pink:this.like,click:function(){t.like=!t.like,t.noLike=!t.like&&t.noLike}},{icon:"icon-buxihuan",data:"不喜欢",pink:this.noLike,click:function(){t.noLike=!t.noLike,t.like=!t.noLike&&t.like}},{icon:"icon-toubix",data:c.a.autoChNum(this.videoCion,4,2),pink:this.coin,click:function(){return t.coin=!t.coin}},{icon:"icon-shoucang",data:c.a.autoChNum(this.videoFavorite,4,2),pink:this.favorite,click:function(){return t.favorite=!t.favorite}},{icon:"icon-fenxiang1",data:c.a.autoChNum(this.videoShare,4,2),pink:!1,click:function(){}}]}},filters:{slice:function(t){return s()(t).slice(0,100)},getAttribute:function(){return c.b.apply(void 0,arguments)},autoChNum:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return c.a.autoChNum(t,n,i)}},methods:{unfoldChange:function(){this.unfold=!this.unfold,this.unfold&&(this.noUnfoldcLamp=!1)},titleTransitionend:function(){this.unfold||(this.noUnfoldcLamp=!0)}}},x={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"component-video-info"},[i("div",{staticClass:"vinfo-wrap-1"},[i("div",{staticClass:"owner-container"},[i("div",{staticClass:"head-img"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.ownerFace,expression:"ownerFace"}],attrs:{alt:t.ownerName}})]),t._v(" "),i("div",{staticClass:"owner-wrap"},[i("div",{staticClass:"owner-name"},[t._v(t._s(t.ownerName))]),t._v(" "),i("div",{staticClass:"fans-cnt"},[t._v("---粉丝")])])]),t._v(" "),i("div",{staticClass:"attention-div",class:{attention:t.attention},on:{click:function(n){t.attention=!t.attention}}},[t.attention?i("i",{staticClass:"iconfont icon-caidan"}):i("i",{staticClass:"iconfont icon-jia"}),t._v("\r\n      "+t._s(t.attention?"已关注":"关注")+"\r\n    ")])]),t._v(" "),i("div",{staticClass:"vinfo-wrap-2"},[i("div",{staticClass:"video-title-container"},[i("div",{staticClass:"video-title",class:{"no-unfold":!t.unfold,"no-unfoldc-lamp":t.noUnfoldcLamp},on:{click:t.unfoldChange,transitionend:t.titleTransitionend}},[t._v("\r\n        "+t._s(t.videoTitle)+"\r\n      ")]),t._v(" "),i("div",{staticClass:"unfold-div",on:{click:t.unfoldChange}},[t.unfold?i("i",{staticClass:"iconfont icon-shouqi"}):i("i",{staticClass:"iconfont icon-zhankai"})])]),t._v(" "),i("div",{staticClass:"descriptiom",class:{"no-unfold":!t.unfold}},[i("div",{staticClass:"video-data"},[i("div",{staticClass:"bofang-num"},[i("i",{staticClass:"iconfont icon-bofangshu"}),t._v("\r\n          "+t._s(t._f("autoChNum")(t.videoView))+" \r\n        ")]),t._v(" "),i("div",{staticClass:"danmu-num"},[i("i",{staticClass:"iconfont icon-danmushu"}),t._v("\r\n          "+t._s(t._f("autoChNum")(t.videoDanmaku))+"\r\n        ")]),t._v(" "),i("div",{staticClass:"av-serial"},[t._v("\r\n          AV"+t._s(t.videoAid)+"\r\n        ")]),t._v(" "),t._m(0)]),t._v(" "),i("div",{staticClass:"descr"},[t._v(t._s(t.videoDesc))])])]),t._v(" "),i("div",{staticClass:"vinfo-wrap-3"},t._l(t.getButtons,function(n,e){return i("div",{key:e,staticClass:"button-item",on:{click:n.click}},[i("div",{staticClass:"icon"},[i("i",{staticClass:"iconfont",class:[n.icon,{pink:n.pink}]})]),t._v(" "),i("div",{staticClass:"data"},[t._v("\r\n        "+t._s("number"==typeof n.data?n.data|t.autoChNum:n.data)+"\r\n      ")])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"reprint"},[n("i",{staticClass:"iconfont icon-jinzhi"}),this._v("\r\n          未经作者授权禁止转载\r\n        ")])}]};var A=i("VU/8")(w,x,!1,function(t){i("R0cD")},null,null).exports,N=c.a.autoChNum,O={name:"VideoPageCard",components:{ProportionImg:g},data:function(){return{}},props:{info:{type:Object,default:function(){return{}}}},computed:{infoAid:function(){return Object(c.b)(this.info,"aid")},infoPic:function(){return Object(c.b)(this.info,"pic")},infoTitle:function(){return Object(c.b)(this.info,"title")},infoView:function(){return Object(c.b)(this.info,"stat.view")},infoDanmaku:function(){return Object(c.b)(this.info,"stat.danmaku")},infoName:function(){return Object(c.b)(this.info,"owner.name")}},filters:{getAttribute:function(){return c.b.apply(void 0,arguments)},autoChNum:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return N(t,n,i)},av2url:function(t){return"https://m.bilibili.com/video/av"+t+".html"}}},I={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"component-video-page-card"},[i("j-link",{attrs:{link:t._f("av2url")(t.infoAid)}},[i("div",{staticClass:"video-page-card-wrap"},[i("div",{staticClass:"image-div"},[i("ProportionImg",{attrs:{imgSrc:t.infoPic,imgAlt:t.infoTitle,proportion:62.5}})],1),t._v(" "),i("div",{staticClass:"right-info"},[i("div",{staticClass:"title"},[t._v(" "+t._s(t.infoTitle)+" ")]),t._v(" "),i("div",{staticClass:"owner"},[i("div",{staticClass:"owner-up"},[i("i",{staticClass:"iconfont icon-upzhu"})]),t._v(" "),i("div",{staticClass:"owner-name"},[t._v(t._s(t.infoName))])]),t._v(" "),i("div",{staticClass:"footer-data"},[i("div",{staticClass:"bofang-icon"},[i("i",{staticClass:"iconfont icon-bofangshu"})]),t._v(" "),i("div",{staticClass:"bofang-num"},[t._v("\r\n            "+t._s(t._f("autoChNum")(t.infoView))+" \r\n          ")]),t._v(" "),i("div",{staticClass:"danmu-icon"},[i("i",{staticClass:"iconfont icon-danmushu"})]),t._v(" "),i("div",{staticClass:"danmu-num"},[t._v("\r\n            "+t._s(t._f("autoChNum")(t.infoDanmaku))+"\r\n          ")])])])])])],1)},staticRenderFns:[]};var T={name:"RecommendNew",components:{VideoPageCard:i("VU/8")(O,I,!1,function(t){i("9AWY")},null,null).exports},props:{recommendnew:{type:Object,default:function(){return{}}}},data:function(){return{}},computed:{},filters:{getAttribute:function(){return c.b.apply(void 0,arguments)},autoChNum:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return c.a.autoChNum(t,n,i)}}},R={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"component-recommend-new"},this._l(this.recommendnew,function(t,i){return n("div",{key:i,staticClass:"card-item"},[n("VideoPageCard",{attrs:{info:t}})],1)}),0)},staticRenderFns:[]};var j={name:"Description",components:{VideoInfo:A,RecommendNew:i("VU/8")(T,R,!1,function(t){i("wgQo")},null,null).exports},props:{initialState:{type:Object,default:function(){return{}}},recommendnew:{type:Object,default:function(){return{}}}},data:function(){return{}},filters:{slice:function(t){return s()(t).slice(0,100)},getAttribute:function(){return c.b.apply(void 0,arguments)}}},P={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"component-description"},[n("VideoInfo",{attrs:{initialState:this.initialState}}),this._v(" "),n("RecommendNew",{attrs:{recommendnew:this.recommendnew}})],1)},staticRenderFns:[]};var z=i("VU/8")(j,P,!1,function(t){i("Qft4")},null,null).exports,F={name:"Reply",props:{reply:{type:Object,default:function(){return{}}}},data:function(){return{}},filters:{slice:function(t){return s()(t).slice(0,100)},getAttribute:function(){return c.b.apply(void 0,arguments)}}},V={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"component-reply"},[t._v("\r\n  "+t._s(t._f("slice")(t.reply))),i("br"),t._v("\r\n  Reply "),i("br"),t._v("\r\n  Reply "),i("br"),t._v("\r\n  Reply "),i("br"),t._v("\r\n  Reply "),i("br")])},staticRenderFns:[]};var D={name:"Video",components:{SlotScroll:h,Description:z,Reply:i("VU/8")(F,V,!1,function(t){i("o7hS")},null,null).exports,StickyScroll:S.a,TitleNav:l.a,ProportionImg:g,Progress:b},data:function(){return{titles:["简介","评论"],nav:k.a,message:"",inputting:!1}},created:function(){this.getVideoPage(this.av),this.getRecommendnew(this.av),this.getReply(this.av)},computed:a()({},Object(r.c)(["initialState"]),Object(r.e)(["recommendnew","reply"]),Object(r.e)("navState",["nav_enable","nav_nowIndex","nav_cursorWidth","nav_positionSync","nav_titles","nav_style","nav_change"]),{av:function(){return this.$route.params.av.slice(2)},infoPic:function(){return Object(c.b)(this.initialState,"reduxAsyncConnect.videoInfo.pic")},infoTitle:function(){return Object(c.b)(this.initialState,"reduxAsyncConnect.videoInfo.title")},proportion:function(){return 56.25},infoDuration:function(){var t=Object(c.b)(this.initialState,"reduxAsyncConnect.videoInfo.duration");return(t=t||"00:00").length>5&&/^00/.test(t)&&(t=t.slice(3)),t},videoTime:function(){var t=0;return this.infoDuration.split(":").forEach(function(n){t=60*t+parseInt(n)}),t},videoTimeStr:function(){return this.playDuration+"/"+this.infoDuration},playDuration:function(){var t=this.infoDuration.replace(/\d/g,0),n=this.time2str(this.playTime);return n=t.slice(0,t.length-n.length)+n},playTime:function(){return.2*this.videoTime},playProportion:function(){return this.playTime/this.videoTime*100}}),filters:{slice:function(t){return s()(t).slice(0,100)},getAttribute:function(){return c.b.apply(void 0,arguments)}},methods:a()({},Object(r.d)("navState",["set_nav_state"]),Object(r.b)(["getVideoPage","getRecommendnew","getReply"]),{time2str:function(t){var n="",i=(t=parseInt(t))%60;return n=(i<10?"0":"")+i,n=((i=(t=parseInt(t/60))%60)<10?"0":"")+i+":"+n,(t=parseInt(t/60))&&(n=t+":"+n),n},danmuKeypress:function(t){"Enter"==t.key&&(this.message="",t.srcElement.blur())}})},M={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"component-video"},[i("StickyScroll",{scopedSlots:t._u([{key:"sticky",fn:function(){return[i("div",{staticClass:"video-page-title-nav"},[t.nav_enable?i("TitleNav",{attrs:{nowIndex:t.nav_nowIndex,cursorWidth:t.nav_cursorWidth,positionSync:t.nav_positionSync,titles:t.nav_titles,navStyle:t.nav_style,navChange:t.nav_change}}):t._e()],1)]},proxy:!0}])},[t._v(" "),[i("div",{staticClass:"video-container"},[i("ProportionImg",{attrs:{imgSrc:t.infoPic,imgAlt:t.infoTitle,proportion:t.proportion}},[i("div",{staticClass:"video-header"},[i("div",{staticClass:"lift-icon",on:{click:function(n){return t.$router.go(-1)}}},[i("i",{staticClass:"iconfont icon-fanhui"})]),t._v(" "),i("div",{staticClass:"right-icon"},[i("i",{staticClass:"iconfont icon-lingting"}),t._v(" "),i("i",{staticClass:"iconfont icon-touping"}),t._v(" "),i("i",{staticClass:"iconfont icon-gengduo"})])]),t._v(" "),i("div",{staticClass:"video-footer"},[i("div",{staticClass:"video-bofang"},[i("i",{staticClass:"iconfont icon-bofang"})]),t._v(" "),i("div",{staticClass:"video-progress"},[i("Progress",{attrs:{percentage:t.playProportion}})],1),t._v(" "),i("div",{staticClass:"video-time"},[t._v(t._s(t.videoTimeStr))]),t._v(" "),i("div",{staticClass:"video-quanping"},[i("i",{staticClass:"iconfont icon-quanping"})])]),t._v(" "),i("div",{staticClass:"video-masker"})]),t._v(" "),i("div",{staticClass:"danmu"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],class:{"have-value":t.message},attrs:{type:"text",placeholder:"发个友善的弹幕见证当下"},domProps:{value:t.message},on:{focus:function(n){t.inputting=!0},blur:function(n){t.inputting=!1},keypress:t.danmuKeypress,input:function(n){n.target.composing||(t.message=n.target.value)}}})])],1),t._v(" "),i("div",{staticClass:"video-slot-scroll"},[i("SlotScroll",{attrs:{titles:t.titles,nav:t.nav,navCursorWidth:40,navStyle:"video-page-nav",_dummyNavPropsSync:t.set_nav_state}},[i("Description",{attrs:{initialState:t.initialState,recommendnew:t.recommendnew}}),t._v(" "),i("Reply",{attrs:{reply:t.reply}})],1),t._v(" "),t.inputting?i("div",{staticClass:"inputting-masker"}):t._e()],1)]],2)],1)},staticRenderFns:[]};var W=i("VU/8")(D,M,!1,function(t){i("ZrCC")},null,null);n.default=W.exports},WAMQ:function(t,n,i){"use strict";var e=i("GQaK"),s={name:"StickyScroll",data:function(){return{}},mounted:function(){var t=this;this._interval=setInterval(function(){t.$refs["sticky-scroll-scroll-container"].innerHTML.length>100&&(clearInterval(t._interval),t.scroll=new e.a(t.$refs["sticky-scroll-scroll-container"],{click:!0,bounce:!1,bindToWrapper:!0,probeType:3}),t.scroll.on("scroll",function(n){n.x;var i=n.y;t.stickyTopRefresh(i)}),t.stickyTopRefresh(0))},10)},methods:{stickyTopRefresh:function(t){var n=this.$refs["sticky-scroll-sticky"],i=n.children[0].offsetTop;n.style.top=i+t>0?t+"px":-i+"px"}}},o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"component-sticky-scroll"},[n("div",{ref:"sticky-scroll-scroll-container",staticClass:"sticky-scroll-scroll-container"},[n("div",{staticClass:"sticky-scroll-scroll"},[this._t("default")],2)]),this._v(" "),n("div",{ref:"sticky-scroll-sticky",staticClass:"sticky-scroll-sticky"},[this._t("sticky")],2)])},staticRenderFns:[]};var a=i("VU/8")(s,o,!1,function(t){i("qgXx")},null,null);n.a=a.exports},ZrCC:function(t,n){},o7hS:function(t,n){},qbby:function(t,n){},qgXx:function(t,n){},tTGZ:function(t,n){},tmym:function(t,n){},wgQo:function(t,n){}});
//# sourceMappingURL=0.588bc4da5b0d2b0cf342.js.map