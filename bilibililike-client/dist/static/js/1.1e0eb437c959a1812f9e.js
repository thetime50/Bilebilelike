webpackJsonp([1],{"6eNu":function(t,n,e){"use strict";var s=e("Gu7T"),i=e.n(s),o={name:"TitleNav",props:{nowIndex:{type:Number,default:0},cursorWidth:{type:Number,default:70},positionSync:{type:Number,default:0},titles:{type:Array,default:function(){return[]}},navStyle:{type:String,default:""},navChange:{type:Function}},data:function(){return{cursors:[],items:[],listChange:!1}},mounted:function(){var t=this;this.$nextTick(function(){t.refsRefres(),t._positionSync(t.positionSync)})},watch:{positionSync:function(t,n){this._positionSync(t)},titles:function(t,n){this.listChange=!0}},computed:{},updated:function(){this.listChange&&(this.refsRefres(),this.listChange=!1)},methods:{tabClick:function(t){this.navChange&&this.navChange({index:t})},_positionSync:function(t){this.items;for(var n=this.cursors,e=0;e<n.length;e++){var s=this.items[e].clientWidth,i=this.cursors[e].clientWidth;n[e].style.right=s*e+t*s+(s-i)/2+"px"}},refsRefres:function(){this.cursors=this.$refs.cursors?[].concat(i()(this.$refs.cursors)):[],this.items=this.$refs.items?[].concat(i()(this.$refs.items)):[]}}},r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component-title-nav",class:[t.navStyle]},[e("ul",{staticClass:"nav-list"},t._l(t.titles,function(n,s){return e("li",{key:s,ref:"items",refInFor:!0,staticClass:"item"},[e("div",{staticClass:"item-text",class:{active:t.nowIndex===s},on:{click:function(n){return t.tabClick(s)}}},[t._v("\r\n        "+t._s(n)+"\r\n      ")]),t._v(" "),e("div",{ref:"cursors",refInFor:!0,staticClass:"item-cursor",style:{width:t.cursorWidth+"%"}})])}),0)])},staticRenderFns:[]};var a=e("VU/8")(o,r,!1,function(t){e("8Fnv")},null,null);n.a=a.exports},"84oH":function(t,n,e){"use strict";var s={name:"DummyNav",props:{nowIndex:{type:Number,default:0},cursorWidth:{type:Number,default:70},positionSync:{type:Number,default:0},titles:{type:Array,default:function(){return[]}},navStyle:{type:String,default:""},navChange:{type:Function,default:function(){return function(){}}},styles:{type:Object,default:function(){return{"component-dummy-nav":"component-title-nav"}}},_propsSync:{type:Function}},data:function(){return{}},mounted:function(){this._propsSync({nav_nowIndex:this.nowIndex,nav_cursorWidth:this.cursorWidth,nav_positionSync:this.positionSync,nav_titles:this.titles,nav_style:this.navStyle,nav_change:this.navChange}),this._propsSync({nav_enable:!0})},beforeDestroy:function(){this._propsSync({nav_enable:!1}),this._propsSync({nav_rou1s:[]})},watch:{nowIndex:function(t,n){this._propsSync({nav_nowIndex:t})},cursorWidth:function(t,n){this._propsSync({nav_cursorWidth:t})},positionSync:function(t,n){this._propsSync({nav_positionSync:t})},titles:function(t,n){this._propsSync({nav_titles:t})},navStyle:function(t,n){this._propsSync({nav_style:t})},navChange:function(t,n){this._propsSync({nav_change:t})}},computed:{},methods:{}},i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"component-dummy-nav",class:this.styles["component-dummy-nav"]},[n("ul",{staticClass:"nav-list",class:this.styles["nav-list"]},[n("li",{staticClass:"item",class:this.styles.item},[n("div",{staticClass:"item-text",class:this.styles["item-text"]}),this._v(" "),n("div",{staticClass:"item-cursor",class:this.styles["item-cursor"]})])])])},staticRenderFns:[]};var o=e("VU/8")(s,i,!1,function(t){e("tmym")},null,null);n.a=o.exports},"8Fnv":function(t,n){},P45n:function(t,n){},WAMQ:function(t,n,e){"use strict";var s=e("GQaK"),i={name:"StickyScroll",data:function(){return{}},mounted:function(){var t=this;this._interval=setInterval(function(){t.$refs["sticky-scroll-scroll-container"].innerHTML.length>100&&(clearInterval(t._interval),t.scroll=new s.a(t.$refs["sticky-scroll-scroll-container"],{click:!0,bounce:!1,bindToWrapper:!0,probeType:3}),t.scroll.on("scroll",function(n){n.x;var e=n.y;t.stickyTopRefresh(e)}),t.stickyTopRefresh(0))},10)},methods:{stickyTopRefresh:function(t){var n=this.$refs["sticky-scroll-sticky"],e=n.children[0].offsetTop;n.style.top=e+t>0?t+"px":-e+"px"}}},o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"component-sticky-scroll"},[n("div",{ref:"sticky-scroll-scroll-container",staticClass:"sticky-scroll-scroll-container"},[n("div",{staticClass:"sticky-scroll-scroll"},[this._t("default")],2)]),this._v(" "),n("div",{ref:"sticky-scroll-sticky",staticClass:"sticky-scroll-sticky"},[this._t("sticky")],2)])},staticRenderFns:[]};var r=e("VU/8")(i,o,!1,function(t){e("qgXx")},null,null);n.a=r.exports},nUvy:function(t,n){},qgXx:function(t,n){},tmym:function(t,n){},zk75:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("Dd8w"),i=e.n(s),o=e("NYxO"),r=e("3Zko"),a=e("6eNu"),c=e("abJV"),l=e("InnB").a.setAttr2Def,u={autoPlay:!1,showDot:!1},f={name:"RouteScroll",components:{Slide:c.a},props:{routes:{type:Array,default:function(){return[]}},nav:{type:Object,default:function(){return a.a}},navCursorWidth:{type:Number,default:70},navStyle:{type:String,default:""},slideConf:{type:Object,default:function(){return{}}},scrollConf:{type:Object,default:function(){return{}}},_dummyNavPropsSync:{type:Function}},data:function(){return{positionSync:0,slideConfDt:{},scrollConfDt:{}}},created:function(){this.slideConfDt=l(this.slideConf,u),this.scrollConfDt=l(this.scrollConf,{probeType:3,stopPropagation:!1,click:!1,snap:{loop:!1,threshold:.3,speed:400}})},mounted:function(){var t=this;this.$nextTick(function(){t.slideBS.on("scrollEnd",function(){var n=t.slide.currentPageIndex;n!=t.currentIndex&&t.$router.replace(t.routes[n].path)}),t.slideBS.on("scroll",function(n){var e=n.x;n.y;t.positionSync=e/t.slide.pageWidth}),t.slide.toPage(t.currentIndex,0,0),t._triggerRouteChange(t.$route.path,"")})},watch:{currentIndex:function(t,n){this.slide.toPage(t)},"$route.path":function(t,n){this._triggerRouteChange(t,n)}},computed:{titles:function(){var t=[];return this.routes.forEach(function(n){t.push(n.text)}),t},routeComponents:function(){var t=this,n=[];return this.routes.forEach(function(e){var s=t.$router.getMatchedComponents(e.path);n.push(s[s.length-1])}),n},currentIndex:function(){var t=0;for(t=0;t<this.routes.length;t++)if(this.routes[t].path===this.$route.path)return t},afterComponents:function(){return this.routeComponents.slice(0,this.currentIndex)},beforeComponents:function(){return this.routeComponents.slice(this.currentIndex+1)},slide:function(){return this.$refs.slide},slideBS:function(){return this.$refs.slide.slide}},methods:{_triggerRouteChange:function(t,n){var e=-1,s=-1;if(this.routes.forEach(function(i,o){var r;r=i.path,new RegExp("^"+n+"\\b").test(r)&&(e=o),function(n){return new RegExp("^"+t+"\\b").test(n)}(i.path)&&(s=o)}),e>=0){var i=this.slide.$children[e].routeChange;i&&i({type:"leave ",before:t,after:n})}if(s>=0){var o=this.slide.$children[s].routeChange;o&&o({type:"enter",before:t,after:n})}},navChange:function(t){var n=t.index;this.$router.replace(this.routes[n].path)}}},h={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component-route-scroll"},[e("div",{staticClass:"nav"},[e(t.nav,{tag:"component",attrs:{nowIndex:t.currentIndex,cursorWidth:t.navCursorWidth,positionSync:t.positionSync,titles:t.titles,navStyle:t.navStyle,navChange:t.navChange,_propsSync:t._dummyNavPropsSync}})],1),t._v(" "),e("div",{staticClass:"route-scroll-slide"},[e("slide",{ref:"slide",attrs:{slideConf:t.slideConfDt,scrollConf:t.scrollConfDt}},[t._l(t.afterComponents,function(t,n){return e(t,{key:n,tag:"component"})}),t._v(" "),e("router-view",{key:t.currentIndex}),t._v(" "),t._l(t.beforeComponents,function(n,s){return e(n,{key:s+t.currentIndex+1,tag:"component"})})],2)],1)])},staticRenderFns:[]};var p=e("VU/8")(f,h,!1,function(t){e("nUvy")},null,null).exports,d=e("84oH"),v=e("WAMQ"),y=[{text:"直播",path:"/mainpage/zhibo"},{text:"推荐",path:"/mainpage/tuijian"},{text:"热门",path:"/mainpage/remen"},{text:"追番",path:"/mainpage/zhuifan"},{text:"影视",path:"/mainpage/yingshi"}],m={name:"MainPage",components:{HeaderTop:r.a,RouteScroll:p,TitleNav:a.a,StickyScroll:v.a},data:function(){return{routes:y,nav:d.a}},computed:i()({},Object(o.e)("navState",["nav_enable","nav_nowIndex","nav_cursorWidth","nav_positionSync","nav_titles","nav_style","nav_change"])),methods:i()({},Object(o.d)("navState",["set_nav_state"]))},_={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"component-main-page"},[e("StickyScroll",{scopedSlots:t._u([{key:"sticky",fn:function(){return[e("div",{staticClass:"main-page-title-nav"},[t.nav_enable?e("TitleNav",{attrs:{nowIndex:t.nav_nowIndex,cursorWidth:t.nav_cursorWidth,positionSync:t.nav_positionSync,titles:t.nav_titles,navStyle:t.nav_style,navChange:t.nav_change}}):t._e()],1)]},proxy:!0}])},[t._v(" "),[e("header-top",{attrs:{"left-icon-type":"leftMenu"}},[[e("div",{staticClass:"heater-v-slot"},[e("router-link",{staticClass:"m-search",attrs:{to:{path:"/search",query:{page:"MainPage"}}}},[e("div",{staticClass:"search-back-div"},[e("i",{staticClass:"iconfont icon-sousuo"})])]),t._v(" "),e("router-link",{staticClass:"m-game",attrs:{to:"/game"}},[e("i",{staticClass:"iconfont icon-youxifull"})]),t._v(" "),e("router-link",{staticClass:"m-offline-cache",attrs:{to:"/offlinecache"}},[e("i",{staticClass:"iconfont icon-xiazai"})]),t._v(" "),e("router-link",{staticClass:"m-message",attrs:{to:"/message"}},[e("i",{staticClass:"iconfont icon-xiaoxi"})])],1)]],2),t._v(" "),e("route-scroll",{attrs:{routes:t.routes,nav:t.nav,_dummyNavPropsSync:t.set_nav_state}})]],2)],1)},staticRenderFns:[]};var C=e("VU/8")(m,_,!1,function(t){e("P45n")},null,null);n.default=C.exports}});
//# sourceMappingURL=1.1e0eb437c959a1812f9e.js.map