webpackJsonp([0],{Ifh1:function(t,e){},PxIW:function(t,e){},mMZF:function(t,e){},zk75:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("3Zko"),r={name:"Vav",props:{nowIndex:{type:Number,default:0},cursorWidth:{type:Number,default:70},positionSync:{type:Number,default:0},routes:{type:Array,default:function(){return[]}}},data:function(){return{}},mounted:function(){var t=this;this.$nextTick(function(){t._positionSync(t.positionSync)})},watch:{positionSync:function(t,e){this._positionSync(t)}},computed:{navlist:function(){return this.$refs.navlist},cursors:function(){return this.$refs.cursors},items:function(){return this.$refs.items}},methods:{tabClick:function(t){this.$router.replace(t.path)},_positionSync:function(t){this.items;for(var e=this.cursors,n=0;n<e.length;n++){var s=this.items[n].clientWidth,r=this.cursors[n].clientWidth;e[n].style.right=s*n+t*s+(s-r)/2+"px"}}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-nav"},[n("ul",{staticClass:"nav-list"},t._l(t.routes,function(e,s){return n("li",{key:s,ref:"items",refInFor:!0,staticClass:"item"},[n("div",{staticClass:"item-text",class:{active:t.nowIndex===s},on:{click:function(n){return t.tabClick(e)}}},[t._v("\r\n        "+t._s(e.text)+"\r\n      ")]),t._v(" "),n("div",{ref:"cursors",refInFor:!0,staticClass:"item-cursor",style:{width:t.cursorWidth+"%"}})])}),0)])},staticRenderFns:[]};var o=n("VU/8")(r,i,!1,function(t){n("PxIW")},null,null).exports,a=n("abJV"),c=n("InnB").a.setAttr2Def,u={autoPlay:!1,showDot:!1},l={name:"RouteScroll",components:{Slide:a.a},props:{routes:{type:Array,default:function(){return[]}},nav:{type:Object,default:function(){return o}},slideConf:{type:Object,default:function(){return{}}},scrollConf:{type:Object,default:function(){return{}}}},data:function(){return{positionSync:0,slideConfDt:{},scrollConfDt:{}}},created:function(){this.slideConfDt=c(this.slideConf,u),this.scrollConfDt=c(this.scrollConf,{probeType:3,stopPropagation:!1,snap:{loop:!1,threshold:.3,speed:400}})},mounted:function(){var t=this;this.$nextTick(function(){t.slideBS.on("scrollEnd",function(){var e=t.slide.currentPageIndex;e!=t.currentIndex&&t.$router.replace(t.routes[e].path)}),t.slideBS.on("scroll",function(e){var n=e.x;e.y;t.positionSync=n/t.slide.pageWidth}),t.slide.toPage(t.currentIndex,0,0),t._triggerRouteChange(t.$route.path,"")})},watch:{currentIndex:function(t,e){this.slide.toPage(t)},"$route.path":function(t,e){this._triggerRouteChange(t,e)}},computed:{routeComponents:function(){var t=this,e=[];return this.routes.forEach(function(n){var s=t.$router.getMatchedComponents(n.path);e.push(s[s.length-1])}),e},currentIndex:function(){var t=0;for(t=0;t<this.routes.length;t++)if(this.routes[t].path===this.$route.path)return t},afterComponents:function(){return this.routeComponents.slice(0,this.currentIndex)},beforeComponents:function(){return this.routeComponents.slice(this.currentIndex+1)},slide:function(){return this.$refs.slide},slideBS:function(){return this.$refs.slide.slide}},methods:{_triggerRouteChange:function(t,e){var n=-1,s=-1;if(this.routes.forEach(function(r,i){var o;o=r.path,new RegExp("^"+e+"\\b").test(o)&&(n=i),function(e){return new RegExp("^"+t+"\\b").test(e)}(r.path)&&(s=i)}),n>=0){var r=this.slide.$children[n].routeChange;r&&r({type:"leave ",before:t,after:e})}if(s>=0){var i=this.slide.$children[s].routeChange;i&&i({type:"enter",before:t,after:e})}}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-route-scroll"},[n("div",{staticClass:"nav"},[n(t.nav,{tag:"component",attrs:{nowIndex:t.currentIndex,positionSync:t.positionSync,routes:t.routes}})],1),t._v(" "),n("div",{staticClass:"route-scroll-slide"},[n("slide",{ref:"slide",attrs:{slideConf:t.slideConfDt,scrollConf:t.scrollConfDt}},[t._l(t.afterComponents,function(t,e){return n(t,{key:e,tag:"component"})}),t._v(" "),n("router-view",{key:t.currentIndex}),t._v(" "),t._l(t.beforeComponents,function(e,s){return n(e,{key:s+t.currentIndex+1,tag:"component"})})],2)],1)])},staticRenderFns:[]};var h=n("VU/8")(l,f,!1,function(t){n("Ifh1")},null,null).exports,d=[{text:"直播",path:"/mainpage/zhibo"},{text:"推荐",path:"/mainpage/tuijian"},{text:"热门",path:"/mainpage/remen"},{text:"追番",path:"/mainpage/zhuifan"},{text:"影视",path:"/mainpage/yingshi"}],p={name:"MainPage",components:{HeaderTop:s.a,RouteScroll:h},data:function(){return{routes:d}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-page"},[e("header-top",{attrs:{"left-icon-type":"leftMenu"}},[[e("div",{staticClass:"heater-v-slot"},[e("router-link",{staticClass:"m-search",attrs:{to:{path:"/search",query:{page:"MainPage"}}}},[e("div",{staticClass:"search-back-div"},[e("i",{staticClass:"iconfont icon-sousuo"})])]),this._v(" "),e("router-link",{staticClass:"m-game",attrs:{to:"/game"}},[e("i",{staticClass:"iconfont icon-youxifull"})]),this._v(" "),e("router-link",{staticClass:"m-offline-cache",attrs:{to:"/offlinecache"}},[e("i",{staticClass:"iconfont icon-xiazai"})]),this._v(" "),e("router-link",{staticClass:"m-message",attrs:{to:"/message"}},[e("i",{staticClass:"iconfont icon-xiaoxi"})])],1)]],2),this._v(" "),e("route-scroll",{attrs:{routes:this.routes}})],1)},staticRenderFns:[]};var v=n("VU/8")(p,m,!1,function(t){n("mMZF")},null,null);e.default=v.exports}});
//# sourceMappingURL=0.94d717a3d72cef27f2b2.js.map