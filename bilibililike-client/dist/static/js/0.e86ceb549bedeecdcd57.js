webpackJsonp([0],{"61UI":function(t,e){},J8pA:function(t,e){},mMZF:function(t,e){},sly8:function(t,e){},zk75:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("3Zko"),s={name:"Vav",props:{nowIndex:{type:Number,default:0},cursorWidth:{type:Number,default:70},positionSync:{type:Number,default:0},routes:{type:Array,default:function(){return[]}}},data:function(){return{}},mounted:function(){},watch:{positionSync:function(t,e){this.items;for(var n=this.cursors,i=0;i<n.length;i++){var s=this.items[i].clientWidth,o=this.cursors[i].clientWidth;n[i].style.right=s*i+t*s+(s-o)/2+"px"}}},computed:{navlist:function(){return this.$refs.navlist},cursors:function(){return this.$refs.cursors},items:function(){return this.$refs.items}},methods:{tabClick:function(t){this.$router.replace(t.path)}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-nav"},[n("ul",{staticClass:"nav-list"},t._l(t.routes,function(e,i){return n("li",{key:i,ref:"items",refInFor:!0,staticClass:"item"},[n("div",{staticClass:"item-text",class:{active:t.nowIndex===i},on:{click:function(n){return t.tabClick(e)}}},[t._v("\r\n        "+t._s(e.text)+"\r\n      ")]),t._v(" "),n("div",{ref:"cursors",refInFor:!0,staticClass:"item-cursor",style:{width:t.cursorWidth+"%"}})])}),0)])},staticRenderFns:[]};var r=n("VU/8")(s,o,!1,function(t){n("J8pA")},null,null).exports,a=n("GQaK");function l(t,e){return new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)}function c(t,e){if(!l(t,e)){var n=t.className.split(" ");n.push(e),t.className=n.join(" ")}}var u=n("InnB"),d=u.a.setAttr2Def,h={scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:!0,threshold:.3,speed:400},bounce:!1,stopPropagation:!0,click:!0},f={autoPlay:!0,interval:4e3,showDot:!0},p={name:"Slide",props:{slideConf:{type:Object,default:function(){return{}}},scrollConf:{type:Object,default:function(){return{}}}},data:function(){return{slideConfDt:{},scrollConfDt:{},dots:[],currentPageIndex:0,pageWidth:0,_slideConfDef:f,_scrollConfDef:h}},created:function(){this.slideConfDt=d(this.slideConf,f),this.scrollConfDt=d(this.scrollConf,h)},mounted:function(){var t=this;this.update(),window.addEventListener("resize",function(){t.slide&&t.slide.enabled&&(clearTimeout(t.resizeTimer),t.resizeTimer=setTimeout(function(){t.slide.isInTransition?t._onScrollEnd():t.autoPlay&&t._play(),t.refresh()},60))})},watch:{autoPlay:function(){this.update()}},activated:function(){if(this.slide){this.slide.enable();var t=this.slide.getCurrentPage().pageX;this.slide.goToPage(t,0,0),this.currentPageIndex=t,this.autoPlay&&this._play()}},deactivated:function(){this.slide.disable(),clearTimeout(this.timer)},beforeDestroy:function(){this.slide.disable(),clearTimeout(this.timer)},computed:{loop:function(){return this.scrollConfDt.snap.loop},autoPlay:function(){return this.slideConfDt.autoPlay},interval:function(){return this.slideConfDt.interval},showDot:function(){return this.slideConfDt.showDot},length:function(){return this.slide&&this.loop?this.children.length-2:this.children.length}},methods:{update:function(){var t=this;this.slide&&this.slide.destroy(),this.$nextTick(function(){t.init()})},refresh:function(){this._setSlideWidth(),this.slide.refresh()},prev:function(){this.slide.prev()},next:function(){this.slide.next()},toPage:function(t,e,n){t!=this.currentPageIndex&&this.slide.goToPage(t,e,n)},init:function(){clearTimeout(this.timer),this.currentPageIndex=0,this._setSlideWidth(),this.showDot&&this._initDots(),this._initSlide(),this.autoPlay&&this._play()},_setSlideWidth:function(){this.children=this.$refs.slideGroup.children;var t=this.$refs.slide.clientWidth,e=0;this.pageWidth=t;for(var n=0;n<this.children.length;n++){var i=this.children[n];c(i,"slide-item"),i.style.width=t+"px",e+=t}this.loop&&!this.slide&&(e+=2*t),this.$refs.slideGroup.style.width=e+"px"},_initSlide:function(){var t=this;this.slide||(this.slide=new a.a(this.$refs.slide,this.scrollConfDt)),this.slide.on("scrollEnd",this._onScrollEnd),this.slide.on("touchEnd",function(){t.autoPlay&&t._play()}),this.slide.on("beforeScrollStart",function(){t.autoPlay&&clearTimeout(t.timer)})},_onScrollEnd:function(){var t=this.slide.getCurrentPage().pageX;this.currentPageIndex=t,this.autoPlay&&this._play()},_initDots:function(){this.dots=new Array(this.length)},_play:function(){var t=this;clearTimeout(this.timer),this.timer=setTimeout(function(){t.slide.next()},this.interval)}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"slide",staticClass:"component-slide"},[n("div",{ref:"slideGroup",staticClass:"slide-group"},[t._t("default")],2),t._v(" "),t.showDot?n("div",{staticClass:"dots"},t._l(t.dots,function(e,i){return n("span",{key:i,staticClass:"dot",class:{active:t.currentPageIndex===i}})}),0):t._e()])},staticRenderFns:[]};var v=n("VU/8")(p,m,!1,function(t){n("61UI")},null,null).exports,C=u.a.setAttr2Def,y={autoPlay:!1,showDot:!1},g={probeType:3,snap:{loop:!1,threshold:.3,speed:400}},_={name:"RouteScroll",components:{Slide:v},props:{routes:{type:Array,default:function(){return[]}},nav:{type:Object,default:function(){return r}},slideConf:{type:Object,default:function(){return{}}},scrollConf:{type:Object,default:function(){return{}}}},data:function(){return{positionSync:0,slideConfDt:{},scrollConfDt:{}}},created:function(){this.slideConfDt=C(this.slideConf,y),this.scrollConfDt=C(this.scrollConf,g)},mounted:function(){var t=this;this.$nextTick(function(){t.slideBS.on("scrollEnd",function(){var e=t.slide.currentPageIndex;e!=t.currentIndex&&t.$router.replace(t.routes[e].path)}),t.slideBS.on("scroll",function(e){var n=e.x;e.y;t.positionSync=n/t.slide.pageWidth}),t.slide.toPage(t.currentIndex,0,0)})},watch:{currentIndex:function(t,e){this.slide.toPage(t)}},computed:{routeComponents:function(){var t=this,e=[];return this.routes.forEach(function(n){var i=t.$router.getMatchedComponents(n.path);e.push(i[i.length-1])}),e},currentIndex:function(){var t=0;for(t=0;t<this.routes.length;t++)if(this.routes[t].path===this.$route.path)return t},afterComponents:function(){return this.routeComponents.slice(0,this.currentIndex)},beforComponents:function(){return this.routeComponents.slice(this.currentIndex+1)},slide:function(){return this.$refs.slide},slideBS:function(){return this.$refs.slide.slide}},methods:{}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-route-scroll"},[n("div",{staticClass:"nav"},[n(t.nav,{tag:"component",attrs:{nowIndex:t.currentIndex,positionSync:t.positionSync,routes:t.routes}})],1),t._v(" "),n("div",{staticClass:"slide"},[n("slide",{ref:"slide",attrs:{slideConf:t.slideConfDt,scrollConf:t.scrollConfDt}},[t._l(t.afterComponents,function(t,e){return n(t,{key:e,tag:"component"})}),t._v(" "),n("router-view",{key:t.currentIndex}),t._v(" "),t._l(t.beforComponents,function(e,i){return n(e,{key:i+t.currentIndex+1,tag:"component"})})],2)],1)])},staticRenderFns:[]};var P=n("VU/8")(_,x,!1,function(t){n("sly8")},null,null).exports,D=[{text:"直播",path:"/mainpage/zhibo"},{text:"推荐",path:"/mainpage/tuijian"},{text:"热门",path:"/mainpage/remen"},{text:"追番",path:"/mainpage/zhuifan"},{text:"影视",path:"/mainpage/yingshi"}],I={name:"MainPage",components:{HeaderTop:i.a,RouteScroll:P},data:function(){return{routes:D}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-page"},[e("header-top",{attrs:{"left-icon-type":"leftMenu"}},[[e("div",{staticClass:"heater-v-slot"},[e("router-link",{staticClass:"m-search",attrs:{to:{path:"/search",query:{page:"MainPage"}}}},[e("div",{staticClass:"search-back-div"},[e("i",{staticClass:"iconfont icon-sousuo"})])]),this._v(" "),e("router-link",{staticClass:"m-game",attrs:{to:"/game"}},[e("i",{staticClass:"iconfont icon-youxifull"})]),this._v(" "),e("router-link",{staticClass:"m-offline-cache",attrs:{to:"/offlinecache"}},[e("i",{staticClass:"iconfont icon-xiazai"})]),this._v(" "),e("router-link",{staticClass:"m-message",attrs:{to:"/message"}},[e("i",{staticClass:"iconfont icon-xiaoxi"})])],1)]],2),this._v(" "),e("route-scroll",{attrs:{routes:this.routes}})],1)},staticRenderFns:[]};var S=n("VU/8")(I,b,!1,function(t){n("mMZF")},null,null);e.default=S.exports}});
//# sourceMappingURL=0.e86ceb549bedeecdcd57.js.map