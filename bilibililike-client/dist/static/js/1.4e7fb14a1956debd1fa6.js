webpackJsonp([1],{"6eNu":function(t,e,n){"use strict";var s=n("Gu7T"),i=n.n(s),r={name:"TitleNav",props:{nowIndex:{type:Number,default:0},cursorWidth:{type:Number,default:70},positionSync:{type:Number,default:0},titles:{type:Array,default:function(){return[]}},navStyle:{type:String,default:""},navChange:{type:Function}},data:function(){return{cursors:[],items:[],listChange:!1}},mounted:function(){var t=this;this.$nextTick(function(){t.refsRefres(),t._positionSync(t.positionSync)})},watch:{positionSync:function(t,e){this._positionSync(t)},titles:function(t,e){this.listChange=!0}},computed:{},updated:function(){this.listChange&&(this.refsRefres(),this.listChange=!1)},methods:{tabClick:function(t){this.navChange&&this.navChange({index:t})},_positionSync:function(t){this.items;for(var e=this.cursors,n=0;n<e.length;n++){var s=this.items[n].clientWidth,i=this.cursors[n].clientWidth;e[n].style.right=s*n+t*s+(s-i)/2+"px"}},refsRefres:function(){this.cursors=this.$refs.cursors?[].concat(i()(this.$refs.cursors)):[],this.items=this.$refs.items?[].concat(i()(this.$refs.items)):[]}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-title-nav",class:[t.navStyle]},[n("ul",{staticClass:"nav-list"},t._l(t.titles,function(e,s){return n("li",{key:s,ref:"items",refInFor:!0,staticClass:"item"},[n("div",{staticClass:"item-text",class:{active:t.nowIndex===s},on:{click:function(e){return t.tabClick(s)}}},[t._v("\r\n        "+t._s(e)+"\r\n      ")]),t._v(" "),n("div",{ref:"cursors",refInFor:!0,staticClass:"item-cursor",style:{width:t.cursorWidth+"%"}})])}),0)])},staticRenderFns:[]};var a=n("VU/8")(r,o,!1,function(t){n("Jpap")},null,null);e.a=a.exports},Hv3U:function(t,e){},Jpap:function(t,e){},nUvy:function(t,e){},zk75:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("NYxO");var s=n("3Zko"),i=n("6eNu"),r=n("abJV"),o=n("InnB").a.setAttr2Def,a={autoPlay:!1,showDot:!1},c={name:"RouteScroll",components:{Slide:r.a},props:{routes:{type:Array,default:function(){return[]}},nav:{type:Object,default:function(){return i.a}},navCursorWidth:{type:Number,default:70},navStyle:{type:String,default:""},slideConf:{type:Object,default:function(){return{}}},scrollConf:{type:Object,default:function(){return{}}},_dummyNavPropsSync:{type:Function}},data:function(){return{positionSync:0,slideConfDt:{},scrollConfDt:{}}},created:function(){this.slideConfDt=o(this.slideConf,a),this.scrollConfDt=o(this.scrollConf,{probeType:3,stopPropagation:!1,click:!1,snap:{loop:!1,threshold:.3,speed:400}})},mounted:function(){var t=this;this.$nextTick(function(){t.slideBS.on("scrollEnd",function(){var e=t.slide.currentPageIndex;e!=t.currentIndex&&t.$router.replace(t.routes[e].path)}),t.slideBS.on("scroll",function(e){var n=e.x;e.y;t.positionSync=n/t.slide.pageWidth}),t.slide.toPage(t.currentIndex,0,0),t._triggerRouteChange(t.$route.path,"")})},watch:{currentIndex:function(t,e){this.slide.toPage(t)},"$route.path":function(t,e){this._triggerRouteChange(t,e)}},computed:{titles:function(){var t=[];return this.routes.forEach(function(e){t.push(e.text)}),t},routeComponents:function(){var t=this,e=[];return this.routes.forEach(function(n){var s=t.$router.getMatchedComponents(n.path);e.push(s[s.length-1])}),e},currentIndex:function(){var t=0;for(t=0;t<this.routes.length;t++)if(this.routes[t].path===this.$route.path)return t},afterComponents:function(){return this.routeComponents.slice(0,this.currentIndex)},beforeComponents:function(){return this.routeComponents.slice(this.currentIndex+1)},slide:function(){return this.$refs.slide},slideBS:function(){return this.$refs.slide.slide}},methods:{_triggerRouteChange:function(t,e){var n=-1,s=-1;if(this.routes.forEach(function(i,r){var o;o=i.path,new RegExp("^"+e+"\\b").test(o)&&(n=r),function(e){return new RegExp("^"+t+"\\b").test(e)}(i.path)&&(s=r)}),n>=0){var i=this.slide.$children[n].routeChange;i&&i({type:"leave ",before:t,after:e})}if(s>=0){var r=this.slide.$children[s].routeChange;r&&r({type:"enter",before:t,after:e})}},navChange:function(t){var e=t.index;this.$router.replace(this.routes[e].path)}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-route-scroll"},[n("div",{staticClass:"nav"},[n(t.nav,{tag:"component",attrs:{nowIndex:t.currentIndex,cursorWidth:t.navCursorWidth,positionSync:t.positionSync,titles:t.titles,navStyle:t.navStyle,navChange:t.navChange,_propsSync:t._dummyNavPropsSync}})],1),t._v(" "),n("div",{staticClass:"route-scroll-slide"},[n("slide",{ref:"slide",attrs:{slideConf:t.slideConfDt,scrollConf:t.scrollConfDt}},[t._l(t.afterComponents,function(t,e){return n(t,{key:e,tag:"component"})}),t._v(" "),n("router-view",{key:t.currentIndex}),t._v(" "),t._l(t.beforeComponents,function(e,s){return n(e,{key:s+t.currentIndex+1,tag:"component"})})],2)],1)])},staticRenderFns:[]};var l=n("VU/8")(c,u,!1,function(t){n("nUvy")},null,null).exports,f=[{text:"直播",path:"/mainpage/zhibo"},{text:"推荐",path:"/mainpage/tuijian"},{text:"热门",path:"/mainpage/remen"},{text:"追番",path:"/mainpage/zhuifan"},{text:"影视",path:"/mainpage/yingshi"}],h={name:"MainPage",components:{HeaderTop:s.a,RouteScroll:l},data:function(){return{routes:f}},computed:{},methods:{}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component-main-page"},[e("header-top",{attrs:{"left-icon-type":"leftMenu"}},[[e("div",{staticClass:"heater-v-slot"},[e("router-link",{staticClass:"m-search",attrs:{to:{path:"/search",query:{page:"MainPage"}}}},[e("div",{staticClass:"search-back-div"},[e("i",{staticClass:"iconfont icon-sousuo"})])]),this._v(" "),e("router-link",{staticClass:"m-game",attrs:{to:"/game"}},[e("i",{staticClass:"iconfont icon-youxifull"})]),this._v(" "),e("router-link",{staticClass:"m-offline-cache",attrs:{to:"/offlinecache"}},[e("i",{staticClass:"iconfont icon-xiazai"})]),this._v(" "),e("router-link",{staticClass:"m-message",attrs:{to:"/message"}},[e("i",{staticClass:"iconfont icon-xiaoxi"})])],1)]],2),this._v(" "),e("div",{staticClass:"route-scroll"},[e("route-scroll",{attrs:{routes:this.routes}})],1)],1)},staticRenderFns:[]};var d=n("VU/8")(h,p,!1,function(t){n("Hv3U")},null,null);e.default=d.exports}});
//# sourceMappingURL=1.4e7fb14a1956debd1fa6.js.map