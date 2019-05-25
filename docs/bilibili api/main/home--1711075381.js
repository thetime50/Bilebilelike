webpackJsonp([18, 0], {
	1: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 t.__esModule = !0;
		 var i = r(25)
			, o = n(i);
		 t.default = function() {
			  function e(e, t) {
					for (var r = 0; r < t.length; r++) {
						 var n = t[r];
						 n.enumerable = n.enumerable || !1,
						 n.configurable = !0,
						 "value"in n && (n.writable = !0),
						 (0,
						 o.default)(e, n.key, n)
					}
			  }
			  return function(t, r, n) {
					return r && e(t.prototype, r),
					n && e(t, n),
					t
			  }
		 }()
	},
	11: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 function i(e) {
			  for (var t = location.search.replace(/^\?/, "").split("&"), r = {}, n = 0, i = t.length; n < i; n++) {
					var o = t[n].split("=");
					r[o[0]] = o[1]
			  }
			  return e ? r[e] || "" : r
		 }
		 function o(e) {
			  var t = {
					share_medium: "",
					share_source: "",
					bbid: "",
					ts: ""
			  }
				 , r = "";
			  for (var n in t) {
					var o = i(n);
					if (!o) {
						 r = "";
						 break
					}
					t[n] = o,
					r += "&" + n + "=" + o
			  }
			  var a = m.getCookie("buvid3");
			  return encodeURIComponent(btoa("pvid=" + a + "_" + e + "_" + (new Date).getTime() + "&ua=" + encodeURIComponent(window.navigator.userAgent) + "&isAutoOpen=false&bsource=" + window.bsource + r))
		 }
		 function a(e) {
			  var t = e.avid
				 , r = e.type
				 , n = e.extra;
			  return new f.default(function(e) {
					var i = /seo|Tencent_yyb|wechat|iqiyi_video_app|bdbox|qq|weibo|dianping/.test(window.bsource)
					  , o = /AliGenieCC-S1/.test(navigator.userAgent)
					  , a = m.getCookie("buvid3")
					  , s = encodeURIComponent(btoa("pvid=" + a + "_" + t + "_" + (new Date).getTime() + "&ua=" + encodeURIComponent(window.navigator.userAgent) + "&isAutoOpen=true&bsource=" + window.bsource));
					if (!i && !o)
						 switch (r) {
						 case "video":
							  window.reportMsgObj && window.reportObserver && (window.reportMsgObj.click = "video" + t + "AutoOpen",
							  window.reportObserver.forceCommit()),
							  setTimeout(function() {
									location.href = "bilibili://video/" + t + "?h5awaken=" + s + n,
									e()
							  }, 500);
							  break;
						 default:
							  setTimeout(function() {
									location.href = "bilibili://rank/rank",
									e()
							  }, 500)
						 }
			  }
			  )
		 }
		 function s(e) {
			  var t = e.type
				 , r = e.id
				 , n = e.extra
				 , i = void 0 === n ? "" : n;
			  switch (t) {
			  case "video":
					return "bilibili://video/" + r + "?h5awaken=" + o(r) + i;
			  case "tag":
					return "bilibili://tag/" + r;
			  case "playlist":
					return "bilibili://music/playlist/playpage/" + r;
			  case "index":
					return "bilibili://rank/rank";
			  case "audio":
					return "bilibili://music/detail/" + r + i;
			  case "audioMenu":
					return "bilibili://music/menu/detail/" + r + i;
			  case "space":
					return "bilibili://space/" + r;
			  case "new-channel":
					return "bilibili://pegasus/channel/" + r;
			  case "hot":
					return "bilibili://home?tab_name=热门";
			  default:
					return "bilibili://rank/rank"
			  }
		 }
		 function c(e) {
			  var t = e.type
				 , r = e.id
				 , n = e.extra
				 , i = void 0 === n ? "" : n;
			  return ["tag", "index"].indexOf(t) >= 0 ? "http://m.bilibili.com/index.html" : "channel" === t ? "http://m.bilibili.com/channel.html" : "video" === t ? "http://m.bilibili.com/video/av" + r + ".html?h5awaken=" + o(r) : "audio" === t ? "http://m.bilibili.com/audio/au" + r + ".html?h5awaken=" + o(r) : "new-channel" === t ? "http://m.bilibili.com/new-channel/" + r : r ? location.href + i : "http://m.bilibili.com/index.html"
		 }
		 function u(e) {
			  var t = "av" + e
				 , r = JSON.parse(window.abtest)
				 , n = r.hitGroup
				 , i = parseInt((new Date).getTime() / 1e3)
				 , o = m.getCookie("_uuid")
				 , a = b.getAbtestParam()
				 , s = "?abtest=" + (1 === a.copylink_abtest ? "E" : "C") + "&ts=" + i + "&expid=" + n + "&uuid=" + o;
			  return "FromUriOpen@bilibili://" + b.base64(t + s)
		 }
		 function l(e) {
			  var t = e.type
				 , r = e.id
				 , n = e.extra
				 , i = void 0 === n ? "" : n
				 , o = e.experience
				 , a = s({
					type: t,
					id: r,
					extra: i
			  })
				 , l = c({
					type: t,
					id: r,
					extra: i
			  });
			  if ("video" === t && b.textToClipboard(u(r)),
			  o && window.browser.version.android) {
					var d = void 0;
					"uc_browser_app" === window.bsource ? d = "http://dl.hdslb.com/mobile/latest/iBiliPlayer-html5_uc_browser_app.apk" : "qq" === window.bsource && (d = "http://dl.hdslb.com/mobile/latest/iBiliPlayer-html5_qq.apk"),
					m.openApp({
						 schema: a,
						 universalLink: l,
						 delayDownload: !0,
						 downloadUrl: d
					})
			  } else
					"bilibili-toutiao" === window.bsource ? m.openApp({
						 schema: a,
						 universalLink: l,
						 onlySchema: !0,
						 autoDownload: !1
					}) : m.openApp({
						 schema: a,
						 universalLink: l,
						 delayDownload: !0
					})
		 }
		 function d(e) {
			  var t = e.type
				 , r = e.id
				 , n = e.extra
				 , i = void 0 === n ? "" : n
				 , o = e.experience
				 , a = "" + s({
					type: t,
					id: r,
					extra: i
			  })
				 , l = c({
					type: t,
					id: r,
					extra: i
			  });
			  if ("video" === t && b.textToClipboard(u(r)),
			  o && window.browser.version.android) {
					var d = void 0;
					"uc_browser_app" === window.bsource ? d = "http://dl.hdslb.com/mobile/latest/iBiliPlayer-html5_uc_browser_app.apk" : "qq" === window.bsource && (d = "http://dl.hdslb.com/mobile/latest/iBiliPlayer-html5_qq.apk"),
					m.openApp({
						 schema: a,
						 universalLink: l,
						 directDownload: !0,
						 downloadUrl: d
					})
			  } else
					"bilibili-toutiao" === window.bsource ? m.openApp({
						 schema: a,
						 universalLink: l,
						 onlySchema: !0,
						 autoDownload: !1
					}) : m.openApp({
						 schema: a,
						 universalLink: l,
						 directDownload: !0
					})
		 }
		 function p(e) {
			  var t = e.type
				 , r = e.id
				 , n = e.extra
				 , i = void 0 === n ? "" : n
				 , o = e.experience
				 , a = "" + s({
					type: t,
					id: r,
					extra: i
			  })
				 , l = c({
					type: t,
					id: r,
					extra: i
			  });
			  if ("video" === t && b.textToClipboard(u(r)),
			  o && window.browser.version.android) {
					var d = void 0;
					"uc_browser_app" === window.bsource ? d = "http://dl.hdslb.com/mobile/latest/iBiliPlayer-html5_uc_browser_app.apk" : "qq" === window.bsource && (d = "http://dl.hdslb.com/mobile/latest/iBiliPlayer-html5_qq.apk"),
					m.openApp({
						 schema: a,
						 universalLink: l,
						 onlySchema: !0,
						 autoDownload: !1,
						 downloadUrl: d
					})
			  } else
					m.openApp({
						 schema: a,
						 universalLink: l,
						 onlySchema: !0,
						 autoDownload: !1
					})
		 }
		 var h = r(10)
			, f = n(h)
			, m = r(26)
			, b = r(6);
		 e.exports = {
			  openApp: l,
			  autoOpenApp: a,
			  judgeOverSea: m.judgeOverSea,
			  directOpenApp: d,
			  schemaOpenApp: p
		 }
	},
	12: function(e, t, r) {
		 "use strict";
		 function n(e, t, r) {
			  return !i(e.props, t) || !i(e.state, r)
		 }
		 var i = r(80);
		 e.exports = n
	},
	124: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 var i = r(2)
			, o = n(i)
			, a = r(3)
			, s = n(a)
			, c = r(1)
			, u = n(c)
			, l = r(5)
			, d = n(l)
			, p = r(4)
			, h = n(p)
			, f = r(0)
			, m = r(178)
			, b = r(6).convertToWan
			, v = r(23).default
			, y = r(9)
			, w = r(89)
			, g = function(e) {
			  function t() {
					return (0,
					s.default)(this, t),
					(0,
					d.default)(this, (t.__proto__ || (0,
					o.default)(t)).apply(this, arguments))
			  }
			  return (0,
			  h.default)(t, e),
			  (0,
			  u.default)(t, [{
					key: "componentDidMount",
					value: function() {}
			  }, {
					key: "clickVideo",
					value: function() {
						 window.reportMsgObj && window.reportObserver && (this.props.index ? window.reportMsgObj.click = "video_" + this.props.index : this.props.aid && (window.reportMsgObj.click = "video_" + this.props.aid),
						 window.reportObserver.forceCommit()),
						 this.props.originData && window.BiliCm && window.BiliCm.Base && "function" == typeof window.BiliCm.Base.sendShowData && window.BiliCm.Base.sendClickData(this.props.originData, "2806")
					}
			  }, {
					key: "render",
					value: function() {
						 var e = this.props.review && b(this.props.review, 1)
							, t = this.props.play && b(this.props.play, 1)
							, r = this.props.pic ? this.props.pic.replace("http:", "") : ""
							, n = y.webp(r, {
							  w: 320,
							  h: 200
						 });
						 return f.createElement("a", {
							  className: m.item,
							  onClick: this.clickVideo.bind(this),
							  href: this.props.aid ? "/video/av" + this.props.aid + ".html" : this.props.url
						 }, f.createElement("div", {
							  className: m.imgContainer
						 }, f.createElement("img", {
							  src: w,
							  className: m.tv,
							  alt: ""
						 }), f.createElement(v, {
							  once: !0,
							  height: 200,
							  offset: 500
						 }, f.createElement("img", {
							  src: n,
							  alt: this.props.aid ? this.props.title : "",
							  className: m.normal
						 })), f.createElement("div", {
							  className: m.info
						 }, t && f.createElement("div", {
							  className: m.playIcon
						 }, f.createElement("svg", {
							  className: m.icon,
							  "aria-hidden": "true"
						 }, f.createElement("use", {
							  xlinkHref: "#icon-bofangshu"
						 }))), t && f.createElement("div", {
							  className: m.play
						 }, f.createElement("p", null, t)), e && f.createElement("div", {
							  className: m.danmuIcon
						 }, f.createElement("svg", {
							  className: m.icon,
							  "aria-hidden": "true"
						 }, f.createElement("use", {
							  xlinkHref: "#icon-danmushu"
						 }))), e && f.createElement("div", {
							  className: m.view
						 }, f.createElement("p", null, e)))), f.createElement("div", {
							  className: m.title
						 }, f.createElement("p", null, this.props.title)))
					}
			  }]),
			  t
		 }(f.Component);
		 e.exports = g
	},
	125: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 var i = r(2)
			, o = n(i)
			, a = r(3)
			, s = n(a)
			, c = r(1)
			, u = n(c)
			, l = r(5)
			, d = n(l)
			, p = r(4)
			, h = n(p)
			, f = r(0)
			, m = r(127)
			, b = r(128)
			, v = r(129)
			, y = function(e) {
			  function t() {
					var e, r, n, i;
					(0,
					s.default)(this, t);
					for (var a = arguments.length, c = Array(a), u = 0; u < a; u++)
						 c[u] = arguments[u];
					return r = n = (0,
					d.default)(this, (e = t.__proto__ || (0,
					o.default)(t)).call.apply(e, [this].concat(c))),
					n.state = {
						 show: !1
					},
					n.close = function() {
						 window.reportMsgObj && window.reportObserver && (window.reportMsgObj.bottom_close = window.bsource || "default",
						 window.reportMsgObj.click = "bottom_close",
						 window.reportObserver.forceCommit()),
						 n.setState({
							  show: !1
						 }),
						 window.Cookies.set("close_flag", "true", {
							  expires: new Date((new Date).getTime() + 18e5)
						 })
					}
					,
					n.openApp = function() {
						 window.reportMsgObj && window.reportObserver && (window.reportMsgObj.bottom_open_app = window.bsource || "default",
						 window.reportMsgObj.click = "bottom_download",
						 window.reportObserver.forceCommit()),
						 n.props.openApp()
					}
					,
					i = r,
					(0,
					d.default)(n, i)
			  }
			  return (0,
			  h.default)(t, e),
			  (0,
			  u.default)(t, [{
					key: "componentDidMount",
					value: function() {
						 void 0 === window.Cookies.get("close_flag") && this.setState({
							  show: !0
						 })
					}
			  }, {
					key: "render",
					value: function() {
						 return this.state.show ? f.createElement("div", {
							  className: m.container
						 }, f.createElement("div", {
							  className: m.background
						 }), f.createElement("img", {
							  onClick: this.close,
							  className: m.close,
							  src: b,
							  alt: "close"
						 }), f.createElement("img", {
							  className: m.logo,
							  src: v,
							  alt: "logo"
						 }), f.createElement("div", {
							  className: m.content
						 }, f.createElement("div", {
							  className: m.title
						 }, "上bilibili客户端"), f.createElement("div", {
							  className: m.body
						 }, "高清视频 新番电影一览无余")), f.createElement("div", {
							  onClick: this.openApp,
							  className: m.downloadBtn
						 }, "立即体验")) : null
					}
			  }]),
			  t
		 }(f.Component);
		 e.exports = y
	},
	127: function(e, t) {
		 e.exports = {
			  container: "index__container__src-commonComponent-bottomOpenApp-",
			  background: "index__background__src-commonComponent-bottomOpenApp-",
			  close: "index__close__src-commonComponent-bottomOpenApp-",
			  logo: "index__logo__src-commonComponent-bottomOpenApp-",
			  content: "index__content__src-commonComponent-bottomOpenApp-",
			  title: "index__title__src-commonComponent-bottomOpenApp-",
			  body: "index__body__src-commonComponent-bottomOpenApp-",
			  downloadBtn: "index__downloadBtn__src-commonComponent-bottomOpenApp-"
		 }
	},
	128: function(e, t) {
		 e.exports = "//s1.hdslb.com/bfs/static/mult/images/ic_close_bottom.png"
	},
	129: function(e, t) {
		 e.exports = "//s1.hdslb.com/bfs/static/mult/images/logo_bottom.png"
	},
	13: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 t.__esModule = !0;
		 var i = r(10)
			, o = n(i);
		 t.default = function(e) {
			  return function() {
					var t = e.apply(this, arguments);
					return new o.default(function(e, r) {
						 function n(i, a) {
							  try {
									var s = t[i](a)
									  , c = s.value
							  } catch (u) {
									return void r(u)
							  }
							  if (!s.done)
									return o.default.resolve(c).then(function(e) {
										 n("next", e)
									}, function(e) {
										 n("throw", e)
									});
							  e(c)
						 }
						 return n("next")
					}
					)
			  }
		 }
	},
	14: function(e, t, r) {
		 e.exports = r(32)
	},
	148: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 function i(e) {
			  return e = {
					experiment: e.experiment,
					partitionList: e.partitionList
			  }
		 }
		 var o, a, s = r(2), c = n(s), u = r(3), l = n(u), d = r(1), p = n(d), h = r(5), f = n(h), m = r(4), b = n(m), v = r(0), y = r(442), w = r(64), g = r(349), _ = r(351), x = r(347), k = r(348), C = r(346), O = r(54), E = O.fetchHomeAdditionContent, A = r(11), T = A.openApp, S = r(75), M = S.asyncConnect, N = r(40), j = N.connect, q = r(125), D = (o = M([{
			  key: "additionalContent",
			  promise: function(e) {
					var t = e.req;
					return E({
						 req: t
					})
			  }
		 }]))(a = function(e) {
			  function t(e) {
					(0,
					l.default)(this, t);
					var r = (0,
					f.default)(this, (t.__proto__ || (0,
					c.default)(t)).call(this, e));
					return r.openAppHandler = function() {
						 var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
						 window.reportMsgObj && window.reportObserver && (window.reportMsgObj.click = e,
						 window.reportObserver.forceCommit()),
						 T({
							  id: 0,
							  type: "index"
						 })
					}
					,
					r.pureOpenAppHandler = function() {
						 T({
							  id: 0,
							  type: "index"
						 })
					}
					,
					r.state = {
						 pageNum: 1,
						 showAllPartition: !1,
						 userFace: "",
						 showTips: !1,
						 showLoc: "",
						 mid: "",
						 difShow: r.props.partitionList ? [r.props.partitionList[0][0]] : []
					},
					r
			  }
			  return (0,
			  b.default)(t, e),
			  (0,
			  p.default)(t, [{
					key: "shouldComponentUpdate",
					value: function(e, t) {
						 return this.state.difShow.length !== t.difShow.length || this.state.showAllPartition !== t.showAllPartition || this.state.showTips !== t.showTips
					}
			  }, {
					key: "clearDesc",
					value: function(e) {
						 var t = [];
						 for (var r in e) {
							  for (var n = 0; n < e[r].length; n++)
									delete e[r][n].abstract;
							  0 !== Number(r) && t.push(r)
						 }
						 for (var i = 0; i < t.length; i++) {
							  for (var o = !1, a = e[0], s = 0; s < a.length; s++)
									if (Number(a[s].tid) === Number(t[i])) {
										 o = !0;
										 break
									}
							  o || delete e[t[i]]
						 }
						 return e
					}
			  }, {
					key: "showAllPartition",
					value: function() {
						 this.setState({
							  showAllPartition: !0
						 })
					}
			  }, {
					key: "showScrollPartition",
					value: function() {
						 this.setState({
							  showAllPartition: !1
						 })
					}
			  }, {
					key: "componentWillMount",
					value: function() {}
			  }, {
					key: "componentDidMount",
					value: function() {
						 window.onunload = function() {
							  window.scrollTo(0, 0)
						 }
						 ;
						 var e = this;
						 $.ajax({
							  url: "//api.bilibili.com/x/web-interface/nav",
							  type: "get",
							  xhrFields: {
									withCredentials: !0
							  },
							  dataType: "json"
						 }).done(function(t) {
							  0 === t.code && (e.setState({
									mid: t.data.mid
							  }),
							  $.ajax({
									url: "//api.bilibili.com/x/member/security/status?jsonp=jsonp&mid=" + t.data.mid + "&uuid=" + Cookies.get("buvid3"),
									type: "get",
									xhrFields: {
										 withCredentials: !0
									},
									dataType: "json"
							  }).done(function(t) {
									0 === t.code && t.data && t.data.notify && (e.setState({
										 showTips: !0,
										 showLoc: t.data.log.location
									}),
									window.reportMsgObj.nonlocallogin_remindpc_show = 1,
									window.reportObserver.forceCommit())
							  }).fail(function() {}))
						 }),
						 window.addEventListener("touchmove", function() {
							  e.state.showAllPartition && e.showScrollPartition()
						 })
					}
			  }, {
					key: "componentDidUpdate",
					value: function() {}
			  }, {
					key: "clickToTop",
					value: function() {
						 document.body.scrollTop = 0
					}
			  }, {
					key: "render",
					value: function() {
						 return this.props.partitionList ? v.createElement("div", {
							  className: y.home
						 }, v.createElement(w, {
							  id: 0,
							  type: "index",
							  openAppHandler: this.openAppHandler.bind(this)
						 }), v.createElement(_, {
							  showAll: this.state.showAllPartition,
							  partitionList: this.props.partitionList,
							  showScrollPartition: this.showScrollPartition.bind(this)
						 }), v.createElement(g, {
							  showAll: this.state.showAllPartition,
							  partitionList: this.props.partitionList,
							  showAllPartition: this.showAllPartition.bind(this)
						 }), v.createElement("div", {
							  className: y.divider
						 }), this.state.showTips && v.createElement(x, {
							  mid: this.state.mid,
							  showTips: this.state.showTips,
							  showLoc: this.state.showLoc
						 }), v.createElement(k, null), v.createElement(C, {
							  additionalContent: this.props.additionalContent
						 }), v.createElement("div", {
							  className: y.law
						 }, v.createElement("p", null, "哔哩哔哩 沪ICP备13002172号-3"), v.createElement("p", null, "信息网络传播视听节目许可证：0910417")), v.createElement(q, {
							  openApp: this.pureOpenAppHandler
						 })) : null
					}
			  }]),
			  t
		 }(v.Component)) || a;
		 e.exports = j(i)(D)
	},
	16: function(e, t, r) {
		 e.exports = {
			  default: r(44),
			  __esModule: !0
		 }
	},
	168: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 var i = r(7)
			, o = n(i)
			, a = r(2)
			, s = n(a)
			, c = r(3)
			, u = n(c)
			, l = r(1)
			, d = n(l)
			, p = r(5)
			, h = n(p)
			, f = r(4)
			, m = n(f)
			, b = r(0)
			, v = function(e) {
			  function t() {
					return (0,
					u.default)(this, t),
					(0,
					h.default)(this, (t.__proto__ || (0,
					s.default)(t)).apply(this, arguments))
			  }
			  return (0,
			  m.default)(t, e),
			  (0,
			  d.default)(t, [{
					key: "render",
					value: function() {
						 return b.createElement("div", (0,
						 o.default)({}, this.props, {
							  className: (this.props.className ? this.props.className : "") + " report-scroll-module report-wrap-module"
						 }), this.props.children)
					}
			  }]),
			  t
		 }(b.Component);
		 e.exports = v
	},
	17: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return null !== e && "object" == typeof e
		 }
		 e.exports = n
	},
	178: function(e, t) {
		 e.exports = {
			  clearfix: "index__clearfix__src-commonComponent-Item-",
			  item: "index__item__src-commonComponent-Item-",
			  imgContainer: "index__imgContainer__src-commonComponent-Item-",
			  info: "index__info__src-commonComponent-Item-",
			  tv: "index__tv__src-commonComponent-Item-",
			  normal: "index__normal__src-commonComponent-Item-",
			  playIcon: "index__playIcon__src-commonComponent-Item-",
			  danmuIcon: "index__danmuIcon__src-commonComponent-Item-",
			  icon: "index__icon__src-commonComponent-Item-",
			  play: "index__play__src-commonComponent-Item-",
			  view: "index__view__src-commonComponent-Item-",
			  title: "index__title__src-commonComponent-Item-"
		 }
	},
	18: function(e, t) {
		 var r = {
			  utf8: {
					stringToBytes: function(e) {
						 return r.bin.stringToBytes(unescape(encodeURIComponent(e)))
					},
					bytesToString: function(e) {
						 return decodeURIComponent(escape(r.bin.bytesToString(e)))
					}
			  },
			  bin: {
					stringToBytes: function(e) {
						 for (var t = [], r = 0; r < e.length; r++)
							  t.push(255 & e.charCodeAt(r));
						 return t
					},
					bytesToString: function(e) {
						 for (var t = [], r = 0; r < e.length; r++)
							  t.push(String.fromCharCode(e[r]));
						 return t.join("")
					}
			  }
		 };
		 e.exports = r
	},
	19: function(e, t, r) {
		 !function() {
			  var t = r(46)
				 , n = r(18).utf8
				 , i = r(47)
				 , o = r(18).bin
				 , a = function(e, r) {
					e.constructor == String ? e = r && "binary" === r.encoding ? o.stringToBytes(e) : n.stringToBytes(e) : i(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
					for (var s = t.bytesToWords(e), c = 8 * e.length, u = 1732584193, l = -271733879, d = -1732584194, p = 271733878, h = 0; h < s.length; h++)
						 s[h] = 16711935 & (s[h] << 8 | s[h] >>> 24) | 4278255360 & (s[h] << 24 | s[h] >>> 8);
					s[c >>> 5] |= 128 << c % 32,
					s[14 + (c + 64 >>> 9 << 4)] = c;
					for (var f = a._ff, m = a._gg, b = a._hh, v = a._ii, h = 0; h < s.length; h += 16) {
						 var y = u
							, w = l
							, g = d
							, _ = p;
						 u = f(u, l, d, p, s[h + 0], 7, -680876936),
						 p = f(p, u, l, d, s[h + 1], 12, -389564586),
						 d = f(d, p, u, l, s[h + 2], 17, 606105819),
						 l = f(l, d, p, u, s[h + 3], 22, -1044525330),
						 u = f(u, l, d, p, s[h + 4], 7, -176418897),
						 p = f(p, u, l, d, s[h + 5], 12, 1200080426),
						 d = f(d, p, u, l, s[h + 6], 17, -1473231341),
						 l = f(l, d, p, u, s[h + 7], 22, -45705983),
						 u = f(u, l, d, p, s[h + 8], 7, 1770035416),
						 p = f(p, u, l, d, s[h + 9], 12, -1958414417),
						 d = f(d, p, u, l, s[h + 10], 17, -42063),
						 l = f(l, d, p, u, s[h + 11], 22, -1990404162),
						 u = f(u, l, d, p, s[h + 12], 7, 1804603682),
						 p = f(p, u, l, d, s[h + 13], 12, -40341101),
						 d = f(d, p, u, l, s[h + 14], 17, -1502002290),
						 l = f(l, d, p, u, s[h + 15], 22, 1236535329),
						 u = m(u, l, d, p, s[h + 1], 5, -165796510),
						 p = m(p, u, l, d, s[h + 6], 9, -1069501632),
						 d = m(d, p, u, l, s[h + 11], 14, 643717713),
						 l = m(l, d, p, u, s[h + 0], 20, -373897302),
						 u = m(u, l, d, p, s[h + 5], 5, -701558691),
						 p = m(p, u, l, d, s[h + 10], 9, 38016083),
						 d = m(d, p, u, l, s[h + 15], 14, -660478335),
						 l = m(l, d, p, u, s[h + 4], 20, -405537848),
						 u = m(u, l, d, p, s[h + 9], 5, 568446438),
						 p = m(p, u, l, d, s[h + 14], 9, -1019803690),
						 d = m(d, p, u, l, s[h + 3], 14, -187363961),
						 l = m(l, d, p, u, s[h + 8], 20, 1163531501),
						 u = m(u, l, d, p, s[h + 13], 5, -1444681467),
						 p = m(p, u, l, d, s[h + 2], 9, -51403784),
						 d = m(d, p, u, l, s[h + 7], 14, 1735328473),
						 l = m(l, d, p, u, s[h + 12], 20, -1926607734),
						 u = b(u, l, d, p, s[h + 5], 4, -378558),
						 p = b(p, u, l, d, s[h + 8], 11, -2022574463),
						 d = b(d, p, u, l, s[h + 11], 16, 1839030562),
						 l = b(l, d, p, u, s[h + 14], 23, -35309556),
						 u = b(u, l, d, p, s[h + 1], 4, -1530992060),
						 p = b(p, u, l, d, s[h + 4], 11, 1272893353),
						 d = b(d, p, u, l, s[h + 7], 16, -155497632),
						 l = b(l, d, p, u, s[h + 10], 23, -1094730640),
						 u = b(u, l, d, p, s[h + 13], 4, 681279174),
						 p = b(p, u, l, d, s[h + 0], 11, -358537222),
						 d = b(d, p, u, l, s[h + 3], 16, -722521979),
						 l = b(l, d, p, u, s[h + 6], 23, 76029189),
						 u = b(u, l, d, p, s[h + 9], 4, -640364487),
						 p = b(p, u, l, d, s[h + 12], 11, -421815835),
						 d = b(d, p, u, l, s[h + 15], 16, 530742520),
						 l = b(l, d, p, u, s[h + 2], 23, -995338651),
						 u = v(u, l, d, p, s[h + 0], 6, -198630844),
						 p = v(p, u, l, d, s[h + 7], 10, 1126891415),
						 d = v(d, p, u, l, s[h + 14], 15, -1416354905),
						 l = v(l, d, p, u, s[h + 5], 21, -57434055),
						 u = v(u, l, d, p, s[h + 12], 6, 1700485571),
						 p = v(p, u, l, d, s[h + 3], 10, -1894986606),
						 d = v(d, p, u, l, s[h + 10], 15, -1051523),
						 l = v(l, d, p, u, s[h + 1], 21, -2054922799),
						 u = v(u, l, d, p, s[h + 8], 6, 1873313359),
						 p = v(p, u, l, d, s[h + 15], 10, -30611744),
						 d = v(d, p, u, l, s[h + 6], 15, -1560198380),
						 l = v(l, d, p, u, s[h + 13], 21, 1309151649),
						 u = v(u, l, d, p, s[h + 4], 6, -145523070),
						 p = v(p, u, l, d, s[h + 11], 10, -1120210379),
						 d = v(d, p, u, l, s[h + 2], 15, 718787259),
						 l = v(l, d, p, u, s[h + 9], 21, -343485551),
						 u = u + y >>> 0,
						 l = l + w >>> 0,
						 d = d + g >>> 0,
						 p = p + _ >>> 0
					}
					return t.endian([u, l, d, p])
			  };
			  a._ff = function(e, t, r, n, i, o, a) {
					var s = e + (t & r | ~t & n) + (i >>> 0) + a;
					return (s << o | s >>> 32 - o) + t
			  }
			  ,
			  a._gg = function(e, t, r, n, i, o, a) {
					var s = e + (t & n | r & ~n) + (i >>> 0) + a;
					return (s << o | s >>> 32 - o) + t
			  }
			  ,
			  a._hh = function(e, t, r, n, i, o, a) {
					var s = e + (t ^ r ^ n) + (i >>> 0) + a;
					return (s << o | s >>> 32 - o) + t
			  }
			  ,
			  a._ii = function(e, t, r, n, i, o, a) {
					var s = e + (r ^ (t | ~n)) + (i >>> 0) + a;
					return (s << o | s >>> 32 - o) + t
			  }
			  ,
			  a._blocksize = 16,
			  a._digestsize = 16,
			  e.exports = function(e, r) {
					if (void 0 === e || null === e)
						 throw new Error("Illegal argument " + e);
					var n = t.wordsToBytes(a(e, r));
					return r && r.asBytes ? n : r && r.asString ? o.bytesToString(n) : t.bytesToHex(n)
			  }
		 }()
	},
	2: function(e, t, r) {
		 e.exports = {
			  default: r(28),
			  __esModule: !0
		 }
	},
	20: function(e, t, r) {
		 function n() {}
		 function i(e) {
			  if (!m(e))
					return e;
			  var t = [];
			  for (var r in e)
					o(t, r, e[r]);
			  return t.join("&")
		 }
		 function o(e, t, r) {
			  if (null != r)
					if (Array.isArray(r))
						 r.forEach(function(r) {
							  o(e, t, r)
						 });
					else if (m(r))
						 for (var n in r)
							  o(e, t + "[" + n + "]", r[n]);
					else
						 e.push(encodeURIComponent(t) + "=" + encodeURIComponent(r));
			  else
					null === r && e.push(encodeURIComponent(t))
		 }
		 function a(e) {
			  for (var t, r, n = {}, i = e.split("&"), o = 0, a = i.length; o < a; ++o)
					t = i[o],
					r = t.indexOf("="),
					-1 == r ? n[decodeURIComponent(t)] = "" : n[decodeURIComponent(t.slice(0, r))] = decodeURIComponent(t.slice(r + 1));
			  return n
		 }
		 function s(e) {
			  for (var t, r, n, i, o = e.split(/\r?\n/), a = {}, s = 0, c = o.length; s < c; ++s)
					r = o[s],
					-1 !== (t = r.indexOf(":")) && (n = r.slice(0, t).toLowerCase(),
					i = w(r.slice(t + 1)),
					a[n] = i);
			  return a
		 }
		 function c(e) {
			  return /[\/+]json($|[^-\w])/.test(e)
		 }
		 function u(e) {
			  this.req = e,
			  this.xhr = this.req.xhr,
			  this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null,
			  this.statusText = this.req.xhr.statusText;
			  var t = this.xhr.status;
			  1223 === t && (t = 204),
			  this._setStatusProperties(t),
			  this.header = this.headers = s(this.xhr.getAllResponseHeaders()),
			  this.header["content-type"] = this.xhr.getResponseHeader("content-type"),
			  this._setHeaderProperties(this.header),
			  null === this.text && e._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null
		 }
		 function l(e, t) {
			  var r = this;
			  this._query = this._query || [],
			  this.method = e,
			  this.url = t,
			  this.header = {},
			  this._header = {},
			  this.on("end", function() {
					var e = null
					  , t = null;
					try {
						 t = new u(r)
					} catch (i) {
						 return e = new Error("Parser is unable to parse the response"),
						 e.parse = !0,
						 e.original = i,
						 r.xhr ? (e.rawResponse = void 0 === r.xhr.responseType ? r.xhr.responseText : r.xhr.response,
						 e.status = r.xhr.status ? r.xhr.status : null,
						 e.statusCode = e.status) : (e.rawResponse = null,
						 e.status = null),
						 r.callback(e)
					}
					r.emit("response", t);
					var n;
					try {
						 r._isResponseOK(t) || (n = new Error(t.statusText || "Unsuccessful HTTP response"))
					} catch (o) {
						 n = o
					}
					n ? (n.original = e,
					n.response = t,
					n.status = t.status,
					r.callback(n, t)) : r.callback(null, t)
			  })
		 }
		 function d(e, t, r) {
			  var n = y("DELETE", e);
			  return "function" == typeof t && (r = t,
			  t = null),
			  t && n.send(t),
			  r && n.end(r),
			  n
		 }
		 var p;
		 p = "undefined" != typeof window ? window : "undefined" != typeof self ? self : this;
		 var h = r(31)
			, f = r(35)
			, m = r(17)
			, b = r(36)
			, v = r(34)
			, y = t = e.exports = function(e, r) {
			  return "function" == typeof r ? new t.Request("GET",e).end(r) : 1 == arguments.length ? new t.Request("GET",e) : new t.Request(e,r)
		 }
		 ;
		 t.Request = l,
		 y.getXHR = function() {
			  if (!(!p.XMLHttpRequest || p.location && "file:" == p.location.protocol && p.ActiveXObject))
					return new XMLHttpRequest;
			  try {
					return new ActiveXObject("Microsoft.XMLHTTP")
			  } catch (e) {}
			  try {
					return new ActiveXObject("Msxml2.XMLHTTP.6.0")
			  } catch (e) {}
			  try {
					return new ActiveXObject("Msxml2.XMLHTTP.3.0")
			  } catch (e) {}
			  try {
					return new ActiveXObject("Msxml2.XMLHTTP")
			  } catch (e) {}
			  throw Error("Browser-only version of superagent could not find XHR")
		 }
		 ;
		 var w = "".trim ? function(e) {
			  return e.trim()
		 }
		 : function(e) {
			  return e.replace(/(^\s*|\s*$)/g, "")
		 }
		 ;
		 y.serializeObject = i,
		 y.parseString = a,
		 y.types = {
			  html: "text/html",
			  json: "application/json",
			  xml: "text/xml",
			  urlencoded: "application/x-www-form-urlencoded",
			  form: "application/x-www-form-urlencoded",
			  "form-data": "application/x-www-form-urlencoded"
		 },
		 y.serialize = {
			  "application/x-www-form-urlencoded": i,
			  "application/json": JSON.stringify
		 },
		 y.parse = {
			  "application/x-www-form-urlencoded": a,
			  "application/json": JSON.parse
		 },
		 b(u.prototype),
		 u.prototype._parseBody = function(e) {
			  var t = y.parse[this.type];
			  return this.req._parser ? this.req._parser(this, e) : (!t && c(this.type) && (t = y.parse["application/json"]),
			  t && e && (e.length || e instanceof Object) ? t(e) : null)
		 }
		 ,
		 u.prototype.toError = function() {
			  var e = this.req
				 , t = e.method
				 , r = e.url
				 , n = "cannot " + t + " " + r + " (" + this.status + ")"
				 , i = new Error(n);
			  return i.status = this.status,
			  i.method = t,
			  i.url = r,
			  i
		 }
		 ,
		 y.Response = u,
		 h(l.prototype),
		 f(l.prototype),
		 l.prototype.type = function(e) {
			  return this.set("Content-Type", y.types[e] || e),
			  this
		 }
		 ,
		 l.prototype.accept = function(e) {
			  return this.set("Accept", y.types[e] || e),
			  this
		 }
		 ,
		 l.prototype.auth = function(e, t, r) {
			  1 === arguments.length && (t = ""),
			  "object" == typeof t && null !== t && (r = t,
			  t = ""),
			  r || (r = {
					type: "function" == typeof btoa ? "basic" : "auto"
			  });
			  var n = function(e) {
					if ("function" == typeof btoa)
						 return btoa(e);
					throw new Error("Cannot use basic auth, btoa is not a function")
			  };
			  return this._auth(e, t, r, n)
		 }
		 ,
		 l.prototype.query = function(e) {
			  return "string" != typeof e && (e = i(e)),
			  e && this._query.push(e),
			  this
		 }
		 ,
		 l.prototype.attach = function(e, t, r) {
			  if (t) {
					if (this._data)
						 throw Error("superagent can't mix .send() and .attach()");
					this._getFormData().append(e, t, r || t.name)
			  }
			  return this
		 }
		 ,
		 l.prototype._getFormData = function() {
			  return this._formData || (this._formData = new p.FormData),
			  this._formData
		 }
		 ,
		 l.prototype.callback = function(e, t) {
			  if (this._shouldRetry(e, t))
					return this._retry();
			  var r = this._callback;
			  this.clearTimeout(),
			  e && (this._maxRetries && (e.retries = this._retries - 1),
			  this.emit("error", e)),
			  r(e, t)
		 }
		 ,
		 l.prototype.crossDomainError = function() {
			  var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
			  e.crossDomain = !0,
			  e.status = this.status,
			  e.method = this.method,
			  e.url = this.url,
			  this.callback(e)
		 }
		 ,
		 l.prototype.buffer = l.prototype.ca = l.prototype.agent = function() {
			  return this
		 }
		 ,
		 l.prototype.pipe = l.prototype.write = function() {
			  throw Error("Streaming is not supported in browser version of superagent")
		 }
		 ,
		 l.prototype._isHost = function(e) {
			  return e && "object" == typeof e && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e)
		 }
		 ,
		 l.prototype.end = function(e) {
			  return this._endCalled,
			  this._endCalled = !0,
			  this._callback = e || n,
			  this._finalizeQueryString(),
			  this._end()
		 }
		 ,
		 l.prototype._end = function() {
			  var e = this
				 , t = this.xhr = y.getXHR()
				 , r = this._formData || this._data;
			  this._setTimeouts(),
			  t.onreadystatechange = function() {
					var r = t.readyState;
					if (r >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer),
					4 == r) {
						 var n;
						 try {
							  n = t.status
						 } catch (i) {
							  n = 0
						 }
						 if (!n) {
							  if (e.timedout || e._aborted)
									return;
							  return e.crossDomainError()
						 }
						 e.emit("end")
					}
			  }
			  ;
			  var n = function(t, r) {
					r.total > 0 && (r.percent = r.loaded / r.total * 100),
					r.direction = t,
					e.emit("progress", r)
			  };
			  if (this.hasListeners("progress"))
					try {
						 t.onprogress = n.bind(null, "download"),
						 t.upload && (t.upload.onprogress = n.bind(null, "upload"))
					} catch (s) {}
			  try {
					this.username && this.password ? t.open(this.method, this.url, !0, this.username, this.password) : t.open(this.method, this.url, !0)
			  } catch (u) {
					return this.callback(u)
			  }
			  if (this._withCredentials && (t.withCredentials = !0),
			  !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof r && !this._isHost(r)) {
					var i = this._header["content-type"]
					  , o = this._serializer || y.serialize[i ? i.split(";")[0] : ""];
					!o && c(i) && (o = y.serialize["application/json"]),
					o && (r = o(r))
			  }
			  for (var a in this.header)
					null != this.header[a] && this.header.hasOwnProperty(a) && t.setRequestHeader(a, this.header[a]);
			  return this._responseType && (t.responseType = this._responseType),
			  this.emit("request", this),
			  t.send(void 0 !== r ? r : null),
			  this
		 }
		 ,
		 y.agent = function() {
			  return new v
		 }
		 ,
		 ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(e) {
			  v.prototype[e.toLowerCase()] = function(t, r) {
					var n = new y.Request(e,t);
					return this._setDefaults(n),
					r && n.end(r),
					n
			  }
		 }),
		 v.prototype.del = v.prototype.delete,
		 y.get = function(e, t, r) {
			  var n = y("GET", e);
			  return "function" == typeof t && (r = t,
			  t = null),
			  t && n.query(t),
			  r && n.end(r),
			  n
		 }
		 ,
		 y.head = function(e, t, r) {
			  var n = y("HEAD", e);
			  return "function" == typeof t && (r = t,
			  t = null),
			  t && n.query(t),
			  r && n.end(r),
			  n
		 }
		 ,
		 y.options = function(e, t, r) {
			  var n = y("OPTIONS", e);
			  return "function" == typeof t && (r = t,
			  t = null),
			  t && n.send(t),
			  r && n.end(r),
			  n
		 }
		 ,
		 y.del = d,
		 y.delete = d,
		 y.patch = function(e, t, r) {
			  var n = y("PATCH", e);
			  return "function" == typeof t && (r = t,
			  t = null),
			  t && n.send(t),
			  r && n.end(r),
			  n
		 }
		 ,
		 y.post = function(e, t, r) {
			  var n = y("POST", e);
			  return "function" == typeof t && (r = t,
			  t = null),
			  t && n.send(t),
			  r && n.end(r),
			  n
		 }
		 ,
		 y.put = function(e, t, r) {
			  var n = y("PUT", e);
			  return "function" == typeof t && (r = t,
			  t = null),
			  t && n.send(t),
			  r && n.end(r),
			  n
		 }
	},
	21: function(e, t) {
		 e.exports = {
			  0: [{
					tid: 1,
					typename: "动画",
					abstract: ""
			  }, {
					tid: 13,
					typename: "番剧",
					abstract: ""
			  }, {
					tid: 167,
					typename: "国创",
					abstract: ""
			  }, {
					tid: 3,
					typename: "音乐",
					abstract: ""
			  }, {
					tid: 129,
					typename: "舞蹈",
					abstract: ""
			  }, {
					tid: 36,
					typename: "科技",
					abstract: ""
			  }, {
					tid: 188,
					typename: "数码",
					abstract: ""
			  }, {
					tid: 4,
					typename: "游戏",
					abstract: ""
			  }, {
					tid: 5,
					typename: "娱乐",
					abstract: ""
			  }, {
					tid: 119,
					typename: "鬼畜",
					abstract: ""
			  }, {
					tid: 23,
					typename: "电影",
					abstract: ""
			  }, {
					tid: 11,
					typename: "电视剧",
					abstract: ""
			  }, {
					tid: 177,
					typename: "纪录片",
					abstract: ""
			  }, {
					tid: 181,
					typename: "影视",
					abstract: ""
			  }, {
					tid: 155,
					typename: "时尚",
					abstract: ""
			  }, {
					tid: 160,
					typename: "生活",
					abstract: ""
			  }, {
					tid: 165,
					typename: "广告",
					abstract: ""
			  }],
			  1: [{
					tid: 24,
					typename: "MAD·AMV",
					abstract: "具有一定制作程度的动画或静画的二次创作视频"
			  }, {
					tid: 25,
					typename: "MMD·3D",
					abstract: "使用MMD（MikuMikuDance）和其他3D建模类软件制作的视频"
			  }, {
					tid: 47,
					typename: "短片·手书·配音",
					abstract: "追求创新并具有强烈特色的短片、手书（绘）及ACG相关配音"
			  }, {
					tid: 27,
					typename: "综合",
					abstract: "以动画及动画相关内容为素材，包括但不仅限于音频替换、杂谈、排行榜等内容"
			  }],
			  3: [{
					tid: 28,
					typename: "原创音乐",
					abstract: "个人或团队制作以音乐为主要原创因素的歌曲或纯音乐"
			  }, {
					tid: 31,
					typename: "翻唱",
					abstract: "一切非官方的人声再演绎歌曲作品"
			  }, {
					tid: 30,
					typename: "VOCALOID·UTAU",
					abstract: "以雅马哈Vocaloid和UTAU引擎为基础，包含其他调教引擎，运用各类音源进行的歌曲创作内容"
			  }, {
					tid: 194,
					typename: "电音",
					abstract: "以电子合成器、音乐软体等产生的电子声响制作的音乐。"
			  }, {
					tid: 59,
					typename: "演奏",
					abstract: "传统或非传统乐器及器材的演奏作品"
			  }, {
					tid: 29,
					typename: "MV",
					abstract: "三次元艺人的音乐作品和相关"
			  }, {
					tid: 54,
					typename: "音乐现场",
					abstract: "音乐实况表演视频。"
			  }, {
					tid: 130,
					typename: "音乐综合",
					abstract: "收录无法定义到其他音乐子分区的音乐视频。"
			  }],
			  4: [{
					tid: 17,
					typename: "单机游戏",
					abstract: "以所有平台（PC、主机、移动端）的单机或联机游戏为主的视频内容，包括游戏预告、CG、实况解说及相关的评测、杂谈与视频剪辑等"
			  }, {
					tid: 171,
					typename: "电子竞技",
					abstract: "具有高对抗性的电子竞技游戏项目，其相关的赛事、实况、攻略、解说、短剧等视频。"
			  }, {
					tid: 172,
					typename: "手机游戏",
					abstract: "以手机及平板设备为主要平台的游戏，其相关的实况、攻略、解说、短剧、演示等视频。"
			  }, {
					tid: 65,
					typename: "网络游戏",
					abstract: "由网络运营商运营的多人在线游戏，以及电子竞技的相关游戏内容。包括赛事、攻略、实况、解说等相关视频"
			  }, {
					tid: 173,
					typename: "桌游棋牌",
					abstract: "桌游、棋牌、卡牌对战等及其相关电子版游戏的实况、攻略、解说、演示等视频。"
			  }, {
					tid: 121,
					typename: "GMV",
					abstract: "由游戏素材制作的MV视频。以游戏内容或CG为主制作的，具有一定创作程度的MV类型的视频"
			  }, {
					tid: 136,
					typename: "音游",
					abstract: "各个平台上，通过配合音乐与节奏而进行的音乐类游戏视频"
			  }, {
					tid: 19,
					typename: "Mugen",
					abstract: "以Mugen引擎为平台制作、或与Mugen相关的游戏视频"
			  }],
			  5: [{
					tid: 71,
					typename: "综艺",
					abstract: "国内外有趣的综艺和综艺相关精彩剪辑"
			  }, {
					tid: 137,
					typename: "明星",
					abstract: "娱乐圈动态、明星资讯相关"
			  }, {
					tid: 131,
					typename: "Korea相关",
					abstract: "Korea相关音乐、舞蹈、综艺等视频"
			  }],
			  11: [{
					tid: 185,
					typename: "国产剧",
					abstract: ""
			  }, {
					tid: 187,
					typename: "海外剧",
					abstract: ""
			  }],
			  12: [{
					tid: 141,
					typename: "游戏集锦",
					abstract: ""
			  }, {
					tid: 139,
					typename: "实况解说",
					abstract: ""
			  }, {
					tid: 60,
					typename: "电子竞技",
					abstract: "以电子游戏为基础，具备一定竞技性的相关游戏内容。包括赛事、实况、解说及相关视频"
			  }],
			  13: [{
					tid: 33,
					typename: "连载动画",
					abstract: "当季连载的动画番剧"
			  }, {
					tid: 32,
					typename: "完结动画",
					abstract: "已完结的动画番剧合集"
			  }, {
					tid: 51,
					typename: "资讯",
					abstract: "动画番剧相关资讯视频"
			  }, {
					tid: 152,
					typename: "官方延伸",
					abstract: "动画番剧为主题的宣传节目、采访视频，及声优相关视频"
			  }],
			  15: [{
					tid: 113,
					typename: "其他",
					abstract: ""
			  }, {
					tid: 112,
					typename: "美剧",
					abstract: ""
			  }, {
					tid: 111,
					typename: "日剧",
					abstract: ""
			  }, {
					tid: 110,
					typename: "国产",
					abstract: ""
			  }],
			  17: [{
					tid: 66,
					typename: "游戏集锦",
					abstract: ""
			  }, {
					tid: 64,
					typename: "游戏杂谈",
					abstract: ""
			  }, {
					tid: 63,
					typename: "实况解说",
					abstract: ""
			  }, {
					tid: 61,
					typename: "预告资讯",
					abstract: ""
			  }],
			  21: [{
					tid: 143,
					typename: "COSPLAY",
					abstract: ""
			  }, {
					tid: 142,
					typename: "漫展",
					abstract: ""
			  }, {
					tid: 74,
					typename: "日常",
					abstract: ""
			  }, {
					tid: 72,
					typename: "运动",
					abstract: ""
			  }],
			  23: [{
					tid: 147,
					typename: "华语电影",
					abstract: ""
			  }, {
					tid: 145,
					typename: "欧美电影",
					abstract: ""
			  }, {
					tid: 146,
					typename: "日本电影",
					abstract: ""
			  }, {
					tid: 83,
					typename: "其他国家",
					abstract: ""
			  }],
			  25: [{
					tid: 46,
					typename: "其他",
					abstract: ""
			  }, {
					tid: 45,
					typename: "原创模型",
					abstract: ""
			  }, {
					tid: 44,
					typename: "剧情MMD",
					abstract: ""
			  }, {
					tid: 43,
					typename: "舞蹈MMD",
					abstract: ""
			  }],
			  27: [{
					tid: 53,
					typename: "其他",
					abstract: ""
			  }, {
					tid: 52,
					typename: "动漫杂谈",
					abstract: ""
			  }],
			  30: [{
					tid: 58,
					typename: "VOCALOID中文曲",
					abstract: ""
			  }, {
					tid: 57,
					typename: "UTAU",
					abstract: ""
			  }, {
					tid: 56,
					typename: "VOCALOID",
					abstract: ""
			  }],
			  32: [{
					tid: 151,
					typename: "OVA·OAD",
					abstract: ""
			  }, {
					tid: 150,
					typename: "TV动画",
					abstract: ""
			  }, {
					tid: 94,
					typename: "剧场版",
					abstract: ""
			  }],
			  33: [{
					tid: 149,
					typename: "OVA·OAD",
					abstract: ""
			  }, {
					tid: 148,
					typename: "TV动画",
					abstract: ""
			  }, {
					tid: 120,
					typename: "剧场版",
					abstract: ""
			  }],
			  34: [{
					tid: 90,
					typename: "其他",
					abstract: ""
			  }, {
					tid: 89,
					typename: "美剧",
					abstract: ""
			  }, {
					tid: 88,
					typename: "日剧",
					abstract: ""
			  }, {
					tid: 87,
					typename: "国产",
					abstract: ""
			  }],
			  36: [{
					tid: 124,
					typename: "趣味科普人文",
					abstract: "含有科普或人文性质的视频"
			  }, {
					tid: 122,
					typename: "野生技术协会",
					abstract: "展示一定改装/创作能力的视频"
			  }, {
					tid: 39,
					typename: "演讲•公开课",
					abstract: "演讲、教育课程相关的视频"
			  }, {
					tid: 96,
					typename: "星海",
					abstract: "军事相关视频"
			  }, {
					tid: 98,
					typename: "机械",
					abstract: "机械设备展示或制作视频"
			  }, {
					tid: 176,
					typename: "汽车",
					abstract: "汽车、摩托车、公交车以及竞赛用车等轮式交通工具相关"
			  }],
			  37: [{
					tid: 125,
					typename: "其他",
					abstract: ""
			  }, {
					tid: 102,
					typename: "NHK",
					abstract: ""
			  }, {
					tid: 101,
					typename: "国家地理",
					abstract: ""
			  }, {
					tid: 100,
					typename: "探索频道",
					abstract: ""
			  }, {
					tid: 99,
					typename: "BBC纪录片",
					abstract: ""
			  }],
			  39: [{
					tid: 104,
					typename: "公开课",
					abstract: ""
			  }, {
					tid: 103,
					typename: "演讲",
					abstract: ""
			  }],
			  47: [{
					tid: 50,
					typename: "手书",
					abstract: ""
			  }, {
					tid: 49,
					typename: "ACG配音",
					abstract: ""
			  }, {
					tid: 48,
					typename: "原创动画",
					abstract: ""
			  }],
			  65: [{
					tid: 140,
					typename: "游戏杂谈",
					abstract: ""
			  }, {
					tid: 70,
					typename: "游戏集锦",
					abstract: ""
			  }, {
					tid: 69,
					typename: "实况解说",
					abstract: ""
			  }, {
					tid: 68,
					typename: "电竞赛事",
					abstract: ""
			  }],
			  71: [{
					tid: 144,
					typename: "综艺剪辑",
					abstract: ""
			  }, {
					tid: 115,
					typename: "国外综艺",
					abstract: ""
			  }, {
					tid: 114,
					typename: "国内综艺",
					abstract: ""
			  }],
			  75: [{
					tid: 78,
					typename: "汪星人",
					abstract: ""
			  }, {
					tid: 77,
					typename: "喵星人",
					abstract: ""
			  }],
			  76: [{
					tid: 81,
					typename: "料理制作",
					abstract: ""
			  }, {
					tid: 80,
					typename: "美食视频",
					abstract: ""
			  }],
			  86: [{
					tid: 92,
					typename: "布袋戏",
					abstract: ""
			  }, {
					tid: 91,
					typename: "特摄",
					abstract: ""
			  }],
			  119: [{
					tid: 22,
					typename: "鬼畜调教",
					abstract: "使用素材在音频、画面上做一定处理，达到与BGM一定的同步感"
			  }, {
					tid: 26,
					typename: "音MAD",
					abstract: "使用素材音频进行一定的二次创作来达到还原原曲的非商业性质稿件"
			  }, {
					tid: 126,
					typename: "人力VOCALOID",
					abstract: "将人物或者角色的无伴奏素材进行人工调音，使其就像VOCALOID一样歌唱的技术"
			  }, {
					tid: 127,
					typename: "教程演示",
					abstract: "鬼畜相关的教程演示"
			  }],
			  122: [{
					tid: 123,
					typename: "手办模型",
					abstract: ""
			  }, {
					tid: 105,
					typename: "演示",
					abstract: ""
			  }, {
					tid: 40,
					typename: "技术宅",
					abstract: ""
			  }],
			  128: [{
					tid: 73,
					typename: "影视剪影",
					abstract: ""
			  }],
			  129: [{
					tid: 20,
					typename: "宅舞",
					abstract: "与ACG相关的翻跳、原创舞蹈"
			  }, {
					tid: 154,
					typename: "三次元舞蹈",
					abstract: "以三次元音乐作为BGM的舞蹈"
			  }, {
					tid: 156,
					typename: "舞蹈教程",
					abstract: "镜面慢速，动作分解，基础教程等具有教学意义的舞蹈视频"
			  }],
			  131: [{
					tid: 132,
					typename: "Korea音乐舞蹈",
					abstract: ""
			  }, {
					tid: 133,
					typename: "Korea综艺",
					abstract: ""
			  }],
			  155: [{
					tid: 157,
					typename: "美妆",
					abstract: "涵盖妆容、发型、美甲等教程，彩妆、护肤相关产品测评、分享等"
			  }, {
					tid: 158,
					typename: "服饰",
					abstract: "服饰风格、搭配技巧相关的展示和教程视频"
			  }, {
					tid: 164,
					typename: "健身",
					abstract: "器械、有氧、拉伸运动等，以达到强身健体、减肥瘦身、形体塑造目的"
			  }, {
					tid: 159,
					typename: "T台",
					abstract: "发布会走秀现场及模特相关时尚片、采访、后台花絮。"
			  }, {
					tid: 192,
					typename: "风尚标",
					abstract: "时尚明星专访、街拍、时尚购物相关知识科普。"
			  }],
			  160: [{
					tid: 138,
					typename: "搞笑",
					abstract: "搞笑的、轻松有趣的、具有独特笑点或娱乐精神的视频"
			  }, {
					tid: 21,
					typename: "日常",
					abstract: "漫展、cosplay、体育运动及其他一般日常向视频"
			  }, {
					tid: 76,
					typename: "美食圈",
					abstract: "美食鉴赏&料理制作教程"
			  }, {
					tid: 75,
					typename: "动物圈",
					abstract: "这里有各种萌萌哒动物哦~"
			  }, {
					tid: 161,
					typename: "手工",
					abstract: "简易手工艺品的diy制作视频，例如；折纸、手账、橡皮章等"
			  }, {
					tid: 162,
					typename: "绘画",
					abstract: "绘画爱好者们关于绘画技巧、绘图过程的分享交流场所"
			  }, {
					tid: 163,
					typename: "运动",
					abstract: "一般向运动项目以及惊险刺激的户外极限运动"
			  }, {
					tid: 174,
					typename: "其他",
					abstract: "对于分区归属不明的视频进行归纳整合的特定分区。"
			  }],
			  165: [{
					tid: 166,
					typename: "广告",
					abstract: ""
			  }],
			  167: [{
					tid: 153,
					typename: "国产动画",
					abstract: "我国出品的PGC动画"
			  }, {
					tid: 168,
					typename: "国产原创相关",
					abstract: ""
			  }, {
					tid: 169,
					typename: "布袋戏",
					abstract: ""
			  }, {
					tid: 170,
					typename: "资讯",
					abstract: ""
			  }],
			  177: [{
					tid: 37,
					typename: "人文·历史",
					abstract: ""
			  }, {
					tid: 178,
					typename: "科学·探索·自然",
					abstract: ""
			  }, {
					tid: 179,
					typename: "军事",
					abstract: ""
			  }, {
					tid: 180,
					typename: "社会·美食·旅行",
					abstract: ""
			  }],
			  181: [{
					tid: 182,
					typename: "影视杂谈",
					abstract: "影视评论、解说、吐槽、科普等"
			  }, {
					tid: 183,
					typename: "影视剪辑",
					abstract: "对影视素材进行剪辑再创作的视频"
			  }, {
					tid: 85,
					typename: "短片",
					abstract: "追求自我表达且具有特色的短片"
			  }, {
					tid: 184,
					typename: "预告·资讯",
					abstract: "影视类相关资讯，预告，花絮等视频"
			  }, {
					tid: 86,
					typename: "特摄",
					abstract: "特摄相关衍生视频"
			  }],
			  188: [{
					tid: 95,
					typename: "手机平板",
					abstract: "手机、平板电脑的开箱、测评、体验或者科普"
			  }, {
					tid: 189,
					typename: "电脑装机",
					abstract: "电脑、笔记本电脑的使用评测，以及装机的相关知识"
			  }, {
					tid: 190,
					typename: "摄影摄像",
					abstract: "摄影器材的开箱、体验、评测，以及对应装备的使用与拍摄教程"
			  }, {
					tid: 191,
					typename: "影音智能",
					abstract: "智能穿戴、影音设备或其他数码类外设内容"
			  }]
		 }
	},
	22: function(e, t, r) {
		 "use strict";
		 (function(t) {
			  function n(e) {
					return e && e.__esModule ? e : {
						 default: e
					}
			  }
			  function i(e) {
					for (var t in A) {
						 var r = !0
							, n = !1
							, i = void 0;
						 try {
							  for (var o, a = (0,
							  E.default)(A[t]); !(r = (o = a.next()).done); r = !0) {
									var s = o.value;
									if (Number(s.tid) === Number(e.tid))
										 return "0" !== t ? Number(t) : Number(e.tid)
							  }
						 } catch (c) {
							  n = !0,
							  i = c
						 } finally {
							  try {
									!r && a.return && a.return()
							  } finally {
									if (n)
										 throw i
							  }
						 }
					}
			  }
			  function o(e) {
					var t = function(t) {
						 var r = !0
							, n = !1
							, i = void 0;
						 try {
							  for (var o, a = (0,
							  E.default)(A[t]); !(r = (o = a.next()).done); r = !0) {
									var s = o.value;
									if (Number(s.tid) === Number(e.tid))
										 return "0" !== t ? {
											  v: A[0].find(function(e) {
													return Number(e.tid) === Number(t)
											  }).typename
										 } : {
											  v: s.typename
										 }
							  }
						 } catch (c) {
							  n = !0,
							  i = c
						 } finally {
							  try {
									!r && a.return && a.return()
							  } finally {
									if (n)
										 throw i
							  }
						 }
					};
					for (var r in A) {
						 var n = t(r);
						 if ("object" === (void 0 === n ? "undefined" : (0,
						 C.default)(n)))
							  return n.v
					}
			  }
			  function a(e, t) {
					return e ? e.replace(t || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp|#\d+);)?/g, function(e, t) {
						 return t ? e : {
							  "<": "&lt;",
							  "&": "&amp;",
							  '"': "&quot;",
							  ">": "&gt;",
							  "'": "&#39;"
						 }[e]
					}) : ""
			  }
			  function s(e) {
					return e ? e.replace(/(?:(&(amp|lt|quot|gt|#39|nbsp|#\d+);))?/g, function(e, t) {
						 return t ? {
							  "&lt;": "<",
							  "&amp;": "&",
							  "&quot;": '"',
							  "&gt;": ">",
							  "&#39;": "'"
						 }[t] : e
					}) : ""
			  }
			  function c(e, t, r) {
					var n = void 0
					  , i = void 0;
					if (t.query.bsource)
						 if (t.query.bsource instanceof Array) {
							  var o = !0
								 , a = !1
								 , s = void 0;
							  try {
									for (var c, u = (0,
									E.default)(t.query.bsource); !(o = (c = u.next()).done); o = !0) {
										 var l = c.value;
										 if (["iqiyi_video_app", "weibo"].indexOf(l) >= 0) {
											  i = l;
											  break
										 }
									}
							  } catch (p) {
									a = !0,
									s = p
							  } finally {
									try {
										 !o && u.return && u.return()
									} finally {
										 if (a)
											  throw s
									}
							  }
						 } else
							  i = t.query.bsource ? t.query.bsource.toLowerCase() : "";
					if (i)
						 n = i;
					else {
						 var d = t.headers.referrer;
						 d && (d.indexOf("baidu.com") >= 0 || d.indexOf("so.com") >= 0 || d.indexOf("sogou.com") >= 0 || d.indexOf("google.com") >= 0 || d.indexOf("sm.cn") >= 0) && (n = "seo"),
						 t.cookies.bsource ? n = t.cookies.bsource : r.QQLive ? n = "qqlive" : r.mqq ? n = "qq" : r.weibo ? n = "weibo" : r.MicroMessenger ? n = "wechat" : r.mbaidu ? n = "bdbox" : r.iqiyi ? n = "iqiyi_video_app" : r.qq ? n = "qqbrowser_app" : r.uc && (n = "uc_browser_app")
					}
					return n
			  }
			  function u(e) {
					return {
						 mobile: /AppleWebKit.*Mobile.*/i.test(e),
						 ios: /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(e),
						 android: /Android/i.test(e) || /Linux/i.test(e),
						 windowsphone: /Windows Phone/i.test(e),
						 iPhone: /iPhone/i.test(e),
						 iPad: /iPad/i.test(e),
						 webApp: !/Safari/i.test(e),
						 MicroMessenger: /MicroMessenger/i.test(e),
						 weibo: /Weibo/i.test(e),
						 uc: /UCBrowser/i.test(e),
						 qq: /MQQBrowser/i.test(e),
						 baidu: /Baidu/i.test(e),
						 mqq: /QQ\/([\d\.]+)/i.test(e),
						 mbaidu: /baiduboxapp/i.test(e),
						 iqiyi: /iqiyi/i.test(e),
						 QQLive: /QQLive/i.test(e),
						 Youku: /youku/i.test(e),
						 chrome: /CriOS/i.test(e),
						 CMDC: /CMDC/i.test(e)
					}
			  }
			  function l(e) {
					function t() {
						 for (var e = a.bsource, t = 0; t < e.length; t++) {
							  var r = e[t];
							  if (o === r)
									return !1
						 }
						 return !0
					}
					var r = e.req
					  , n = e.res
					  , i = u(r.useragent.source)
					  , o = c(r.url, r, i)
					  , a = {
						 bsource: ["iqiyi_video_app", "qqbrowser_app", "wechat", "qq", "bdts", "bdbox", "baidu_aladdin", "seo"]
					}
					  , s = t()
					  , l = r.cookies.purl_token ? r.cookies.purl_token : "";
					l || (l = "bilibili_" + Date.parse(String(new Date)) / 1e3,
					n.cookie("purl_token", l, {
						 domain: ".bilibili.com",
						 path: "/",
						 maxAge: 9e5,
						 httpOnly: !0
					}));
					var d = T(l)
					  , p = void 0
					  , h = S.parse(r.url).hash;
					return p = h && h.match(/page=([\d]*)/) && h.match(/page=([\d]*)/)[1] ? h.match(/page=([\d]*)/)[1] : 1,
					{
						 videoPlayUrl: "//api.bilibili.com/playurl?callback=callbackfunction&aid=" + r.params.id + "&page=" + p + "&platform=html5&quality=1&vtype=mp4&type=jsonp&token=" + d + (s ? "&is_preview=1" : ""),
						 token: d,
						 inBlockList: s
					}
			  }
			  function d(e) {
					var t = [];
					for (var r in e) {
						 for (var n = 0; n < e[r].length; n++)
							  delete e[r][n].abstract;
						 0 !== Number(r) && t.push(r)
					}
					for (var i = 0; i < t.length; i++) {
						 for (var o = !1, a = e[0], s = 0; s < a.length; s++)
							  if (Number(a[s].tid) === Number(t[i])) {
									o = !0;
									break
							  }
						 o || delete e[t[i]]
					}
			  }
			  function p(e) {
					for (var t = JSON.parse((0,
					x.default)(e)), r = 0; r < t[0].length; r++)
						 167 === t[0][r].tid && (t[0][r].tid = 168),
						 13 === t[0][r].tid && (t[0][r].tid = 33),
						 165 === t[0][r].tid && t[0].splice(r, 1);
					return t[0].splice(0, 0, {
						 tid: 0,
						 typename: "全站"
					}),
					t
			  }
			  function h(e, t) {
					for (var r = t[0], n = 0; n < r.length; n++)
						 if (Number(r[n].tid) === Number(e))
							  return r[n].typename;
					return ""
			  }
			  function f(e, t) {
					for (var r in t)
						 if (0 !== Number(r)) {
							  if (Number(e) === Number(r))
									return {
										 partitionId: e,
										 subPartitionId: 0,
										 pName: h(e, t),
										 subpName: ""
									};
							  for (var n = 0; n < t[r].length; n++)
									if (Number(e) === Number(t[r][n].tid))
										 return {
											  partitionId: r,
											  subPartitionId: t[r][n].tid,
											  pName: h(r, t),
											  subpName: t[r][n].typename
										 }
						 }
					return null
			  }
			  function m(e) {
					var t = "";
					for (var r in e)
						 t += r + "=" + e[r] + ";";
					return t
			  }
			  function b(e) {
					return new g.default(function(r) {
						 t.client.get(e, function(n, i) {
							  n ? (t.log({
									content: "redis error value: " + (0,
									x.default)(i),
									error: (0,
									x.default)(n),
									level: 3,
									redisKey: e
							  }),
							  r(null)) : r(i)
						 })
					}
					)
			  }
			  function v(e, t) {
					var r = void 0
					  , n = void 0
					  , i = e;
					switch (t && (i = t),
					e) {
					case "番剧":
					case "国创":
						 r = "哔哩哔哩" + i + "频道为您提供最新好看的动漫大全。最新已完结动漫排行榜推荐，好看的" + i + "内容，涵盖搞笑、推理、魔法、科幻、热血、少儿等动漫类型。",
						 n = "bilibili,哔哩哔哩动画,动漫,电影,在线动漫,高清电影";
						 break;
					case "动画":
						 r = "哔哩哔哩" + i + "频道提供高清动画片、高清动漫在线观看。经典动画片大全、热门好看的音乐动漫,各类动画动画相关高清视频，尽在哔哩哔哩弹幕视频网。",
						 n = i + ",bilibili,哔哩哔哩动画,音乐动漫,在线看动漫";
						 break;
					case "音乐":
						 r = "哔哩哔哩" + i + "频道，提供高清动漫音乐视频在线观看服务。汇聚了各类音乐，还有好听的" + i + "，最新动漫的OP/ED/OST，还有火爆的音乐现场与流行音乐MV，各类好听的二次元音乐尽在BILIBILI。",
						 n = i + ",bilibili,哔哩哔哩动画,音乐动漫,在线音乐";
						 break;
					case "舞蹈":
						 r = "哔哩哔哩" + i + "频道，拥有最新最热门的国内外精彩舞蹈视频，有最好看的" + i + "高清视频，更有舞蹈达人分享的在线舞蹈教学视频。",
						 n = i + ",bilibili,哔哩哔哩动画,舞蹈教学,在线舞蹈视频";
						 break;
					case "游戏":
						 r = "哔哩哔哩" + i + "频道,有热门" + i + "视频,全新的游戏资讯,丰富的CG大赏,权威的游戏视频攻略,华丽的达人技巧表演解说,单机,掌机,页游,网游,TVGAME,应有尽有。",
						 n = i + ",bilibili,哔哩哔哩动画,游戏攻略";
						 break;
					case "科技":
						 r = "哔哩哔哩科技" + i + "频道，是" + i + "视频分享和交流平台。内容包括国内外科普视频、热点科技话题、智能硬件评测视频,有趣的玩机视频和互联网科技大佬专访视频。",
						 n = i + ",bilibili,哔哩哔哩动画,纪录片,硬件测评";
						 break;
					case "生活":
						 r = "哔哩哔哩" + i + "视频频道，为您提供各类" + i + "视频集锦，日常生活的搞笑瞬间，精彩刺激的运动视频，甚至还有科技达人动手DIY的手工视频，哔哩哔哩是您观看休闲视频的绝佳网站。",
						 n = i + ",bilibili,哔哩哔哩动画";
						 break;
					case "鬼畜":
						 r = "在哔哩哔哩" + i + "频道，您能看到最好玩的高清" + i + "视频。有使用素材音频进行创作的音MAD，有使用人物素材进行调音演唱的人力Vocaloid，更有使用素材在音画上处理到与BGM同步的鬼畜调教视频。",
						 n = i + ",bilibili,哔哩哔哩鬼畜,鬼畜全明星";
						 break;
					case "娱乐":
						 r = "哔哩哔哩" + i + "频道，收集了各类" + i + "视频资源，类明星八卦爆料、综艺节目、游戏恶搞和明星访谈等。让您掌握第一手娱乐八卦资讯。",
						 n = i + ",bilibili,娱乐视频,高清综艺";
						 break;
					case "电影":
						 r = "哔哩哔哩" + i + "频道，提供当下最新、最火各类好看的高清电影大片在线观看服务。上万部电影高清在线,同步更新全国正版视频网站热映大片。哔哩哔哩客户端还提供下载离线观看服务。",
						 n = i + ",bilibili,高清电影,电影资讯,电影天堂";
						 break;
					case "电视剧":
						 r = "哔哩哔哩拥有高清" + i + "在线播放平台，给您提供丰富多彩的热门" + i + "视频，包含经典好看的完结剧集和电视剧相关台前幕后的精彩八卦资讯等。在bilibili还可以下载电视剧离线观看。",
						 n = i + ",bilibili,高清电视剧,热门电视剧";
						 break;
					case "时尚":
						 r = "在哔哩哔哩电影时尚频道" + t + "，您可以了解到如何制定健身计划，学习探讨化妆方法，当季热门流行服饰穿搭。同时有着最专业的时尚资讯，在哔哩哔哩您也可以成为时尚达人。",
						 n = i + ",bilibili,时尚穿搭,化妆教程，健身计划";
						 break;
					case "广告":
						 r = "哔哩哔哩视频网有各种精彩的广告创意视频，汇聚全球你不可不知的视频广告案例，包括各类商业产品广告，公益广告，各类组织的宣传广告等。需要创意的你，快来哔哩哔哩广告区吧！",
						 n = "广告,bilibili,创意广告，精彩广告，营销广告";
						 break;
					default:
						 r = "",
						 n = ""
					}
					return {
						 des: r,
						 keywords: n
					}
			  }
			  function y(e) {
					var t = new Date;
					t.setTime(1e3 * e);
					var r = t.getFullYear()
					  , n = t.getMonth() + 1;
					n = n < 10 ? "0" + n : n;
					var i = t.getDate();
					i = i < 10 ? "0" + i : i;
					var o = t.getHours();
					o = o < 10 ? "0" + o : o;
					var a = t.getMinutes()
					  , s = t.getSeconds();
					return a = a < 10 ? "0" + a : a,
					s = s < 10 ? "0" + s : s,
					r + "-" + n + "-" + i + "T" + o + ":" + a + ":" + s
			  }
			  var w = r(10)
				 , g = n(w)
				 , _ = r(16)
				 , x = n(_)
				 , k = r(68)
				 , C = n(k)
				 , O = r(39)
				 , E = n(O)
				 , A = r(21)
				 , T = r(19)
				 , S = r(52);
			  e.exports = {
					formatDateTime: y,
					getPartDescription: v,
					clearDesc: d,
					resetForRanking: p,
					getParName: h,
					checkPartitionInfo: f,
					changeCookieFormat: m,
					getInfoFromRedis: b,
					identifyBsource: c,
					getBrowserVersion: u,
					unhtml: a,
					findTopId: i,
					findTopType: o,
					getVideoPlayUrl: l,
					htmlBack: s
			  }
		 }
		 ).call(t, r(15))
	},
	23: function(e, t, r) {
		 "use strict";
		 (function(e) {
			  function n(e) {
					return e && e.__esModule ? e : {
						 default: e
					}
			  }
			  function i(e, t) {
					if (!(e instanceof t))
						 throw new TypeError("Cannot call a class as a function")
			  }
			  function o(e, t) {
					if (!e)
						 throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !t || "object" != typeof t && "function" != typeof t ? e : t
			  }
			  function a(e, t) {
					if ("function" != typeof t && null !== t)
						 throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						 constructor: {
							  value: e,
							  enumerable: !1,
							  writable: !0,
							  configurable: !0
						 }
					}),
					t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			  }
			  Object.defineProperty(t, "__esModule", {
					value: !0
			  }),
			  t.forceCheck = t.lazyload = void 0;
			  var s = function() {
					function e(e, t) {
						 for (var r = 0; r < t.length; r++) {
							  var n = t[r];
							  n.enumerable = n.enumerable || !1,
							  n.configurable = !0,
							  "value"in n && (n.writable = !0),
							  Object.defineProperty(e, n.key, n)
						 }
					}
					return function(t, r, n) {
						 return r && e(t.prototype, r),
						 n && e(t, n),
						 t
					}
			  }()
				 , c = r(0)
				 , u = n(c)
				 , l = r(84)
				 , d = n(l)
				 , p = r(41)
				 , h = n(p)
				 , f = r(71)
				 , m = r(72)
				 , b = n(m)
				 , v = r(70)
				 , y = n(v)
				 , w = r(73)
				 , g = n(w)
				 , _ = r(69)
				 , x = n(_)
				 , k = {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					width: 0,
					height: 0
			  }
				 , C = "data-lazyload-listened"
				 , O = []
				 , E = []
				 , A = !1;
			  try {
					var T = Object.defineProperty({}, "passive", {
						 get: function() {
							  A = !0
						 }
					});
					window.addEventListener("test", null, T)
			  } catch (B) {}
			  var S = !!A && {
					capture: !1,
					passive: !0
			  }
				 , M = function(e, t) {
					var r = d.default.findDOMNode(e)
					  , n = void 0
					  , i = void 0;
					try {
						 var o = t.getBoundingClientRect();
						 n = o.top,
						 i = o.height
					} catch (B) {
						 n = k.top,
						 i = k.height
					}
					var a = window.innerHeight || document.documentElement.clientHeight
					  , s = Math.max(n, 0)
					  , c = Math.min(a, n + i) - s
					  , u = void 0
					  , l = void 0;
					try {
						 var p = r.getBoundingClientRect();
						 u = p.top,
						 l = p.height
					} catch (B) {
						 u = k.top,
						 l = k.height
					}
					var h = u - s
					  , f = Array.isArray(e.props.offset) ? e.props.offset : [e.props.offset, e.props.offset];
					return h - f[0] <= c && h + l + f[1] >= 0
			  }
				 , N = function(e) {
					var t = d.default.findDOMNode(e);
					if (!(t.offsetWidth || t.offsetHeight || t.getClientRects().length))
						 return !1;
					var r = void 0
					  , n = void 0;
					try {
						 var i = t.getBoundingClientRect();
						 r = i.top,
						 n = i.height
					} catch (B) {
						 r = k.top,
						 n = k.height
					}
					var o = window.innerHeight || document.documentElement.clientHeight
					  , a = Array.isArray(e.props.offset) ? e.props.offset : [e.props.offset, e.props.offset];
					return r - a[0] <= o && r + n + a[1] >= 0
			  }
				 , j = function(e) {
					var t = d.default.findDOMNode(e);
					if (t) {
						 var r = (0,
						 b.default)(t);
						 (e.props.overflow && r !== t.ownerDocument && r !== document && r !== document.documentElement ? M(e, r) : N(e)) ? e.visible || (e.props.once && E.push(e),
						 e.visible = !0,
						 e.forceUpdate()) : e.props.once && e.visible || (e.visible = !1,
						 e.props.unmountIfInvisible && e.forceUpdate())
					}
			  }
				 , q = function() {
					E.forEach(function(e) {
						 var t = O.indexOf(e);
						 -1 !== t && O.splice(t, 1)
					}),
					E = []
			  }
				 , D = function() {
					for (var e = 0; e < O.length; ++e) {
						 var t = O[e];
						 j(t)
					}
					q()
			  }
				 , I = void 0
				 , P = null
				 , L = function(e) {
					function t(e) {
						 i(this, t);
						 var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
						 return r.visible = !1,
						 r
					}
					return a(t, e),
					s(t, [{
						 key: "componentDidMount",
						 value: function() {
							  var e = !1;
							  if (void 0 !== this.props.debounce && "throttle" === I ? e = !0 : "debounce" === I && void 0 === this.props.debounce && (e = !0),
							  e && ((0,
							  f.off)(window, "scroll", P, S),
							  (0,
							  f.off)(window, "resize", P, S),
							  P = null),
							  P || (void 0 !== this.props.debounce ? (P = (0,
							  y.default)(D, "number" == typeof this.props.debounce ? this.props.debounce : 300),
							  I = "debounce") : void 0 !== this.props.throttle ? (P = (0,
							  g.default)(D, "number" == typeof this.props.throttle ? this.props.throttle : 300),
							  I = "throttle") : P = D),
							  this.props.overflow) {
									var t = (0,
									b.default)(d.default.findDOMNode(this));
									if (t && "function" == typeof t.getAttribute) {
										 var r = +t.getAttribute(C) + 1;
										 1 === r && t.addEventListener("scroll", P, S),
										 t.setAttribute(C, r)
									}
							  } else if (0 === O.length || e) {
									var n = this.props
									  , i = n.scroll
									  , o = n.resize;
									i && (0,
									f.on)(window, "scroll", P, S),
									o && (0,
									f.on)(window, "resize", P, S)
							  }
							  O.push(this),
							  j(this)
						 }
					}, {
						 key: "shouldComponentUpdate",
						 value: function() {
							  return this.visible
						 }
					}, {
						 key: "componentWillUnmount",
						 value: function() {
							  if (this.props.overflow) {
									var e = (0,
									b.default)(d.default.findDOMNode(this));
									if (e && "function" == typeof e.getAttribute) {
										 var t = +e.getAttribute(C) - 1;
										 0 === t ? (e.removeEventListener("scroll", P, S),
										 e.removeAttribute(C)) : e.setAttribute(C, t)
									}
							  }
							  var r = O.indexOf(this);
							  -1 !== r && O.splice(r, 1),
							  0 === O.length && ((0,
							  f.off)(window, "resize", P, S),
							  (0,
							  f.off)(window, "scroll", P, S))
						 }
					}, {
						 key: "render",
						 value: function() {
							  return this.visible ? this.props.children : this.props.placeholder ? this.props.placeholder : u.default.createElement("div", {
									style: {
										 height: this.props.height
									},
									className: "lazyload-placeholder"
							  })
						 }
					}]),
					t
			  }(c.Component);
			  L.propTypes = {
					once: h.default.bool,
					height: h.default.oneOfType([h.default.number, h.default.string]),
					offset: h.default.oneOfType([h.default.number, h.default.arrayOf(h.default.number)]),
					overflow: h.default.bool,
					resize: h.default.bool,
					scroll: h.default.bool,
					children: h.default.node,
					throttle: h.default.oneOfType([h.default.number, h.default.bool]),
					debounce: h.default.oneOfType([h.default.number, h.default.bool]),
					placeholder: h.default.node,
					unmountIfInvisible: h.default.bool
			  },
			  L.defaultProps = {
					once: !1,
					offset: 0,
					overflow: !1,
					resize: !1,
					scroll: !0,
					unmountIfInvisible: !1
			  };
			  t.lazyload = x.default;
			  t.default = L,
			  t.forceCheck = D
		 }
		 ).call(t, r(95))
	},
	24: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 function i(e) {
			  return new a.default(function(t) {
					var r = "//www.bilibili.com/activity/subject/" + e + "?jsonp=jsonp&callback=videoActivityUrlCallback"
					  , n = document.createElement("script");
					n.src = r,
					window.videoActivityUrlCallback = function(e) {
						 0 === e.code && t(e.data)
					}
					,
					document.body.appendChild(n)
			  }
			  )
		 }
		 var o = r(10)
			, a = n(o)
			, s = r(14)
			, c = n(s)
			, u = r(13)
			, l = n(u)
			, d = function() {
			  var e = (0,
			  l.default)(c.default.mark(function t(e) {
					var r, n, i = e.avid;
					return c.default.wrap(function(e) {
						 for (; ; )
							  switch (e.prev = e.next) {
							  case 0:
									return r = C + "/x/v2/reply?type=1&sort=2&oid=" + i + "&pn=1&nohot=1",
									e.next = 3,
									k.get(r);
							  case 3:
									if (n = e.sent,
									0 !== n.body.code) {
										 e.next = 6;
										 break
									}
									return e.abrupt("return", n.body.data);
							  case 6:
							  case "end":
									return e.stop()
							  }
					}, t, this)
			  }));
			  return function(t) {
					return e.apply(this, arguments)
			  }
		 }()
			, p = function() {
			  var e = (0,
			  l.default)(c.default.mark(function t(e) {
					var r, n, i = e.tid;
					return c.default.wrap(function(e) {
						 for (; ; )
							  switch (e.prev = e.next) {
							  case 0:
									return r = "//" + C + "/x/web-interface/ranking/region?rid=" + i + "&day=7",
									e.next = 3,
									k.get(r);
							  case 3:
									if (n = e.sent,
									0 !== n.body.code) {
										 e.next = 6;
										 break
									}
									return e.abrupt("return", n.body.data);
							  case 6:
							  case "end":
									return e.stop()
							  }
					}, t, this)
			  }));
			  return function(t) {
					return e.apply(this, arguments)
			  }
		 }()
			, h = function() {
			  var e = (0,
			  l.default)(c.default.mark(function t() {
					var e, r;
					return c.default.wrap(function(t) {
						 for (; ; )
							  switch (t.prev = t.next) {
							  case 0:
									return e = "//" + C + "/x/report/click/now",
									t.next = 3,
									k.get(e).withCredentials();
							  case 3:
									if (r = t.sent,
									0 !== r.body.code) {
										 t.next = 6;
										 break
									}
									return t.abrupt("return", r.body.data);
							  case 6:
							  case "end":
									return t.stop()
							  }
					}, t, this)
			  }));
			  return function() {
					return e.apply(this, arguments)
			  }
		 }()
			, f = function() {
			  var e = (0,
			  l.default)(c.default.mark(function t(e) {
					var r, n;
					return c.default.wrap(function(t) {
						 for (; ; )
							  switch (t.prev = t.next) {
							  case 0:
									return r = "//" + C + "/x/report/click/h5",
									t.next = 3,
									k.post(r).type("form").send(e).withCredentials();
							  case 3:
									if (n = t.sent,
									0 !== n.body.code) {
										 t.next = 6;
										 break
									}
									return t.abrupt("return", n.body.data);
							  case 6:
							  case "end":
									return t.stop()
							  }
					}, t, this)
			  }));
			  return function(t) {
					return e.apply(this, arguments)
			  }
		 }()
			, m = function() {
			  var e = (0,
			  l.default)(c.default.mark(function t(e) {
					var r, n;
					return c.default.wrap(function(t) {
						 for (; ; )
							  switch (t.prev = t.next) {
							  case 0:
									return r = "//" + C + "/x/report/web/heartbeat",
									t.next = 3,
									k.post(r).type("form").send(e).withCredentials();
							  case 3:
									if (n = t.sent,
									0 !== n.body.code) {
										 t.next = 6;
										 break
									}
									return t.abrupt("return", n.body.data);
							  case 6:
							  case "end":
									return t.stop()
							  }
					}, t, this)
			  }));
			  return function(t) {
					return e.apply(this, arguments)
			  }
		 }()
			, b = function() {
			  var e = (0,
			  l.default)(c.default.mark(function t(e) {
					var r, n, i;
					return c.default.wrap(function(t) {
						 for (; ; )
							  switch (t.prev = t.next) {
							  case 0:
									return r = "//comment.bilibili.com/recommendnew," + e,
									t.next = 3,
									k.get(r);
							  case 3:
									if (n = t.sent,
									n.body || !n.text) {
										 t.next = 8;
										 break
									}
									if (i = JSON.parse(n.text),
									0 !== i.code) {
										 t.next = 8;
										 break
									}
									return t.abrupt("return", i.data);
							  case 8:
							  case "end":
									return t.stop()
							  }
					}, t, this)
			  }));
			  return function(t) {
					return e.apply(this, arguments)
			  }
		 }()
			, v = function() {
			  var e = (0,
			  l.default)(c.default.mark(function t() {
					var e, r;
					return c.default.wrap(function(t) {
						 for (; ; )
							  switch (t.prev = t.next) {
							  case 0:
									return e = "//" + C + "/x/web-interface/nav",
									t.next = 3,
									k.get(e).withCredentials();
							  case 3:
									if (r = t.sent,
									0 !== r.body.code) {
										 t.next = 6;
										 break
									}
									return t.abrupt("return", r.body.data);
							  case 6:
							  case "end":
									return t.stop()
							  }
					}, t, this)
			  }));
			  return function() {
					return e.apply(this, arguments)
			  }
		 }()
			, y = function() {
			  var e = (0,
			  l.default)(c.default.mark(function t(e) {
					var r, n, i = e.auid;
					return c.default.wrap(function(e) {
						 for (; ; )
							  switch (e.prev = e.next) {
							  case 0:
									return r = "//" + C + "/audio/music-service-c/h5/songs/" + i,
									e.next = 3,
									k.get(r).withCredentials();
							  case 3:
									if (n = e.sent,
									0 !== n.body.code) {
										 e.next = 6;
										 break
									}
									return e.abrupt("return", n.body.data);
							  case 6:
							  case "end":
									return e.stop()
							  }
					}, t, this)
			  }));
			  return function(t) {
					return e.apply(this, arguments)
			  }
		 }()
			, w = function() {
			  var e = (0,
			  l.default)(c.default.mark(function t(e) {
					var r, n, i = e.avid, o = e.cid;
					return c.default.wrap(function(e) {
						 for (; ; )
							  switch (e.prev = e.next) {
							  case 0:
									return r = "//" + C + "/x/player/playurl?cid=" + o + "&avid=" + i + "&platform=html5&otype=json&qn=16&type=mp4",
									e.next = 3,
									k.get(r).withCredentials();
							  case 3:
									if (n = e.sent,
									0 !== n.body.code) {
										 e.next = 6;
										 break
									}
									return e.abrupt("return", n.body.data);
							  case 6:
							  case "end":
									return e.stop()
							  }
					}, t, this)
			  }));
			  return function(t) {
					return e.apply(this, arguments)
			  }
		 }()
			, g = function() {
			  var e = (0,
			  l.default)(c.default.mark(function t(e) {
					var r, n, i = e.id, o = e.cnt_type;
					return c.default.wrap(function(e) {
						 for (; ; )
							  switch (e.prev = e.next) {
							  case 0:
									return r = "//" + C + "/medialist/gateway/statistics/count",
									e.next = 3,
									k.post(r).type("form").send({
										 rid: i,
										 r_type: 11,
										 cnt_type: o
									}).withCredentials();
							  case 3:
									if (n = e.sent,
									0 !== n.body.code) {
										 e.next = 6;
										 break
									}
									return e.abrupt("return", n.body.data);
							  case 6:
							  case "end":
									return e.stop()
							  }
					}, t, this)
			  }));
			  return function(t) {
					return e.apply(this, arguments)
			  }
		 }()
			, _ = function() {
			  var e = (0,
			  l.default)(c.default.mark(function t(e) {
					var r, n, i = e.id, o = e.pn;
					return c.default.wrap(function(e) {
						 for (; ; )
							  switch (e.prev = e.next) {
							  case 0:
									return r = "//" + C + "/medialist/gateway/base/detail?media_id=" + i + "&pn=" + o + "&ps=20",
									e.next = 3,
									k.get(r).withCredentials();
							  case 3:
									if (n = e.sent,
									0 !== n.body.code) {
										 e.next = 6;
										 break
									}
									return e.abrupt("return", n.body.data);
							  case 6:
							  case "end":
									return e.stop()
							  }
					}, t, this)
			  }));
			  return function(t) {
					return e.apply(this, arguments)
			  }
		 }()
			, x = function() {
			  var e = (0,
			  l.default)(c.default.mark(function t() {
					var e, r;
					return c.default.wrap(function(t) {
						 for (; ; )
							  switch (t.prev = t.next) {
							  case 0:
									return e = "//api.bilibili.com/x/web-interface/search/default",
									t.next = 3,
									k.get(e).withCredentials();
							  case 3:
									if (r = t.sent,
									0 !== r.body.code) {
										 t.next = 6;
										 break
									}
									return t.abrupt("return", r.body.data);
							  case 6:
							  case "end":
									return t.stop()
							  }
					}, t, this)
			  }));
			  return function() {
					return e.apply(this, arguments)
			  }
		 }()
			, k = r(20)
			, C = "//api.bilibili.com";
		 e.exports = {
			  fetchPlaylistMedias: _,
			  reportPlaylistNum: g,
			  fetchVideoPlayUrl: w,
			  fetchAudioPlayUrl: y,
			  fetchComment: d,
			  fetchCategoryFirstVideos: p,
			  clickNowReport: h,
			  clickH5Report: f,
			  reportWebHeartbeat: m,
			  getRecommendVideos: b,
			  getAccountImg: v,
			  fetchVideoActivityUrl: i,
			  fetchSearchDefaultWord: x
		 }
	},
	25: function(e, t, r) {
		 e.exports = {
			  default: r(27),
			  __esModule: !0
		 }
	},
	26: function(e, t, r) {
		 !function(t, r) {
			  e.exports = r()
		 }(0, function() {
			  "use strict";
			  function e(e, t) {
					if (!(e instanceof t))
						 throw new TypeError("Cannot call a class as a function")
			  }
			  function t() {
					var e = navigator.userAgent;
					return !(!/ OS \d/.test(e) || ~e.indexOf("CriOS") || e.indexOf("Mozilla") || !/Safari\/[\d\.]+$/.test(e))
			  }
			  function r() {
					var e = /os [\d._]*/gi
					  , t = navigator.appVersion.match(e);
					return t && (t = t.join(",").replace(/[^0-9|_.]/gi, ""),
					t = t.replace(/_[0-9]*/gi, "")),
					!(!(t && Number(t) >= 9) || window.browser.version.qq)
			  }
			  function n(e, t, r, n) {
					if (e && t)
						 if (n) {
							  if (r) {
									(new Date).getTime();
									setTimeout(function() {
										 document.hidden || (location.href = t)
									}, 2e3)
							  }
							  location.href = e
						 } else
							  r && setTimeout(function() {
									location.href = t
							  }, 500),
							  location.href = e
			  }
			  function i() {
					var e = new XMLHttpRequest;
					e.onreadystatechange = function(e) {
						 if (4 === this.readyState && 200 === this.status) {
							  var t = JSON.parse(this.response);
							  0 === t.code && t.data && t.data.country && "中国" !== t.data.country && (window.isOverSea = !0)
						 }
					}
					,
					e.onerror = function() {}
					,
					e.ontimeout = function() {}
					,
					e.open("GET", "//api.bilibili.com/x/web-interface/zone?jsonp=jsonp"),
					e.send()
			  }
			  function o(e) {
					e = e || {};
					var t = e
					  , i = t.schema
					  , o = t.universalLink
					  , a = t.autoDownload
					  , c = t.onlySchema
					  , u = t.directDownload
					  , l = t.isAbTest
					  , d = t.delayDownload
					  , p = t.downloadUrl;
					if (i = i || "bilibili://rank/rank",
					o = o || "http://m.bilibili.com/index.html",
					window.browser.version.BiliApp)
						 location.href = i;
					else {
						 !1 === a || a || (a = !0);
						 var h = p || s(i, u, l, d);
						 (h.indexOf(".apk") > 0 || h.indexOf("d.bilibili.com") > 0 || h.indexOf("app.qq.com") > 0) && window.reportMsgObj && window.reportObserver && (window.reportMsgObj.request_download = 1,
						 window.reportObserver.forceCommit()),
						 browser.version.android && browser.version.MicroMessenger ? location.href = h : browser.version.ios ? !r() || c || u ? n(i, h, a) : location.href = "http://d.bilibili.com/download_app.html?preUrl=" + encodeURIComponent(o) + "&schema=" + encodeURIComponent(i) : n(i, h, a, d)
					}
			  }
			  function a(e) {
					e = e || {};
					var t = e
					  , r = t.id
					  , n = t.type;
					if (!(["seo", "Tencent_yyb", "wechat", "iqiyi_video_app", "bdbox", "qq", "weibo", "dianping"].indexOf(window.bsource) >= 0))
						 switch (n) {
						 case "video":
							  window.reportMsgObj && window.reportObserver && (window.reportMsgObj.click = "video" + r + "AutoOpen",
							  window.reportObserver.forceCommit());
							  var i = b.getCookie("buvid3")
								 , o = encodeURIComponent(btoa("pvid=" + i + "_" + r + "_" + (new Date).getTime() + "&ua=" + encodeURIComponent(window.navigator.userAgent) + "&isAutoOpen=true&bsource=" + window.bsource));
							  location.href = "bilibili://video/" + r + "?h5awaken=" + o;
							  break;
						 case "article":
							  window.reportMsgObj && window.reportObserver && (window.reportMsgObj.click = "article" + r + "AutoOpen",
							  window.reportObserver.forceCommit()),
							  location.href = "bilibili://article/" + r;
							  break;
						 default:
							  location.href = "bilibili://rank/rank"
						 }
			  }
			  function s(e, t, r, n) {
					var i;
					return browser.version.MicroMessenger ? i = r ? "//a.app.qq.com/o/simple.jsp?pkgname=tv.danmaku.bili&ckey=CK1390582495291" : "app_bili" === window.bsource ? "//a.app.qq.com/o/simple.jsp?pkgname=tv.danmaku.bili&ckey=CK1389719810898" : browser.version.android ? "//a.app.qq.com/o/simple.jsp?pkgname=tv.danmaku.bili&ckey=CK1385399615180&android_schema=" + encodeURIComponent(e) : "//a.app.qq.com/o/simple.jsp?pkgname=tv.danmaku.bili&ckey=CK1385399615180" : browser.version.android ? (i = window.isOverSea ? "//dl.hdslb.com/mobile/upload/iBiliPlayer-internation-bilibili.apk" : "bdts" === window.bsource ? "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_bdts.apk" : "baidu_aladdin" === window.bsource ? "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_baidu_aladdin.apk" : browser.version.weibo || window.WeiboJSBridge || window.WebViewJavascriptBridge || window.__WeiboJSBridge ? "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_weibo.apk" : browser.version.baidu || window.bd_searchbox_interface || window.bdbox_android_common ? "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_bdbox.apk" : (browser.version.uc || window.ucbrowser || window.ucapi) && document.referrer && document.referrer.indexOf("tv.uc.cn") >= 0 ? "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_uc_video.apk" : "QQLive" === window.bsource || "qqlive" === window.bsource ? "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_qqlive.apk" : window.bsource ? window.bsource.indexOf("seo") >= 0 ? "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_seo.apk" : "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_" + encodeURIComponent(window.bsource) + ".apk" : r ? "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_bilih5.apk" : "//dl.hdslb.com/mobile/latest/iBiliPlayer-bilih5.apk",
					browser.version.qq && (i = "https:" + i),
					t || n || (i = "http://d.bilibili.com/download_app.html?download_url=" + encodeURIComponent(i) + "&schema=" + encodeURIComponent(e))) : browser.version.ios ? (i = "https://itunes.apple.com/cn/app/bi-li-bi-li-dong-hua/id736536022",
					(browser.version.weibo || browser.version.chrome) && (i = "https://itunes.apple.com/cn/app/id736536022?mt=8#id1047562725"),
					t || (i = "http://d.bilibili.com/download_app.html?download_url=" + encodeURIComponent(i) + "&schema=" + encodeURIComponent(e))) : browser.version.windowsphone && (i = "https://www.windowsphone.com/zh-cn/store/purchase/validate?app=75620dee-4a7a-4dae-8677-0d930e05f57e&apptype=regular&offer=3869edb1-e34c-469a-af6e-2c8a7856cb61"),
					i
			  }
			  function c(e) {
					e = e || {};
					var t = e
					  , r = t.changeURL;
					m(),
					window.bsource || (window.bsource = b.identify(),
					window.bsource && b.setCookie("bsource", window.bsource)),
					r && b.changeURLform()
			  }
			  var u = function() {
					function e(e, t) {
						 for (var r = 0; r < t.length; r++) {
							  var n = t[r];
							  n.enumerable = n.enumerable || !1,
							  n.configurable = !0,
							  "value"in n && (n.writable = !0),
							  Object.defineProperty(e, n.key, n)
						 }
					}
					return function(t, r, n) {
						 return r && e(t.prototype, r),
						 n && e(t, n),
						 t
					}
			  }()
				 , l = function() {
					function t() {
						 e(this, t)
					}
					return u(t, [{
						 key: "setCookie",
						 value: function(e, t) {
							  var r = new Date;
							  r.setTime(r.getTime() + 3e5),
							  document.cookie = e + "=" + escape(t) + ";expires=" + r.toGMTString() + ";domain=.bilibili.com;path=/"
						 }
					}, {
						 key: "getCookie",
						 value: function(e) {
							  var t, r = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
							  return (t = document.cookie.match(r)) ? unescape(t[2]) : null
						 }
					}, {
						 key: "getURLlist",
						 value: function(e) {
							  var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)")
								 , r = window.location.search.substr(1).match(t);
							  return null != r ? unescape(r[2]) : null
						 }
					}, {
						 key: "set_param",
						 value: function(e, t) {
							  var r = location.search.substring(1)
								 , n = new RegExp("(^|&" + e + ")=[^&]*");
							  return n.test(r) ? "?" + (r = r.replace(n, "$1=" + t)) : "" == r ? "?" + e + "=" + t : "?" + r + "&" + e + "=" + t
						 }
					}, {
						 key: "changeURLform",
						 value: function() {
							  var e;
							  if (window.browser.version.iqiyi ? e = "iqiyi_video_app" : window.browser.version.weibo ? e = "weibo" : window.browser.version.QQLive && (e = "QQLive"),
							  e && !this.getURLlist("bsource")) {
									var t = this.set_param("bsource", e.toLowerCase());
									window.history && history.replaceState && history.replaceState(null, null, "//" + location.host + location.pathname + t + location.hash)
							  }
						 }
					}, {
						 key: "identify",
						 value: function() {
							  var e, t = this.getURLlist("bsource") ? this.getURLlist("bsource").toLowerCase() : "";
							  if (t)
									e = t;
							  else if (document.referrer && /(.)*((baike.so.com)|(m.so.com)|(m.image.so.com)|(m.video.so.com)|(www.so.com)|(\.baidu.com)|(\.google.com)|(\.sm.cn)|(m.soso.com)|(www.soso.com)|(\.sogou.com)|(\.bing.com))/.test(document.referrer)) {
									var r = document.referrer;
									/(.)*((baike.so.com)|(m.image.so.com)|(m.so.com)|(m.video.so.com)|(www.so.com))/.test(r) ? e = "seo_360" : /(.)*\.baidu.com/.test(r) ? e = "seo_baidu" : /(.)*\.google.com/.test(r) ? e = "seo_google" : /(.)*\.sm.cn/.test(r) ? e = "seo_sm" : /(.)*((m.soso.com)|(www.soso.com)|(\.sogou.com))/.test(r) ? e = "seo_sougo" : /(.)*\.bing.com/.test(r) && (e = "seo_bing")
							  } else
									this.getCookie("bsource") ? e = this.getCookie("bsource") : window.browser.version.baiduspider ? e = "baiduspider" : window.browser.version.QQLive ? e = "qqlive" : window.browser.version.mqq ? e = "qq" : window.browser.version.weibo ? e = "weibo" : window.browser.version.MicroMessenger ? e = "wechat" : window.browser.version.mbaidu ? e = "bdbox" : window.browser.version.iqiyi ? e = "iqiyi_video_app" : window.browser.version.qq ? e = "qqbrowser_app" : window.browser.version.uc ? e = "uc_browser_app" : window.browser.version.xiaomiqjs ? e = "xiaomiqjs" : window.browser.version.dianpin && (e = "dianping");
							  return e
						 }
					}]),
					t
			  }()
				 , d = Object.freeze({
					default: l,
					__moduleExports: l
			  })
				 , p = function() {
					window.browser = {
						 version: function() {
							  var e = navigator.userAgent;
							  navigator.appVersion;
							  return {
									mobile: /AppleWebKit.*Mobile.*/i.test(e),
									ios: /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(e),
									android: /Android/i.test(e) || /Linux/i.test(e),
									windowsphone: /Windows Phone/i.test(e),
									iPhone: /iPhone/i.test(e),
									iPad: /iPad/i.test(e),
									webApp: !/Safari/i.test(e),
									MicroMessenger: /MicroMessenger/i.test(e),
									weibo: /Weibo/i.test(e),
									uc: /UCBrowser/i.test(e),
									qq: /MQQBrowser/i.test(e),
									baidu: /Baidu/i.test(e),
									mqq: /QQ\/([\d\.]+)/i.test(e),
									mbaidu: /baiduboxapp/i.test(e),
									iqiyi: /iqiyi/i.test(e),
									QQLive: /QQLive/i.test(e),
									Safari: t(),
									Youku: /youku/i.test(e),
									chrome: /CriOS/i.test(e),
									CMDC: /CMDC/i.test(e),
									BiliApp: /BiliApp/i.test(e),
									xiaomiqjs: /MiuiQuickSearchBox/.test(e),
									baiduspider: /Baiduspider/.test(e),
									dianping: /dianping/.test(e)
							  }
						 }(),
						 language: (navigator.browserLanguage || navigator.language).toLowerCase()
					}
			  }
				 , h = Object.freeze({
					default: p,
					__moduleExports: p
			  })
				 , f = d && l || d
				 , m = h && p || h
				 , b = new f;
			  return "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
					value: function(e, t) {
						 if (null == e)
							  throw new TypeError("Cannot convert undefined or null to object");
						 for (var r = Object(e), n = 1; n < arguments.length; n++) {
							  var i = arguments[n];
							  if (null != i)
									for (var o in i)
										 Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o])
						 }
						 return r
					},
					writable: !0,
					configurable: !0
			  }),
			  Object.assign(b, {
					openApp: o,
					judgeOverSea: i,
					init: c,
					autoOpen: a
			  })
		 })
	},
	27: function(e, t, r) {
		 r(29);
		 var n = r(8).Object;
		 e.exports = function(e, t, r) {
			  return n.defineProperty(e, t, r)
		 }
	},
	28: function(e, t, r) {
		 r(30),
		 e.exports = r(8).Object.getPrototypeOf
	},
	29: function(e, t, r) {
		 var n = r(42);
		 n(n.S + n.F * !r(61), "Object", {
			  defineProperty: r(55).f
		 })
	},
	30: function(e, t, r) {
		 var n = r(66)
			, i = r(76);
		 r(77)("getPrototypeOf", function() {
			  return function(e) {
					return i(n(e))
			  }
		 })
	},
	31: function(e, t, r) {
		 function n(e) {
			  if (e)
					return i(e)
		 }
		 function i(e) {
			  for (var t in n.prototype)
					e[t] = n.prototype[t];
			  return e
		 }
		 e.exports = n,
		 n.prototype.on = n.prototype.addEventListener = function(e, t) {
			  return this._callbacks = this._callbacks || {},
			  (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
			  this
		 }
		 ,
		 n.prototype.once = function(e, t) {
			  function r() {
					this.off(e, r),
					t.apply(this, arguments)
			  }
			  return r.fn = t,
			  this.on(e, r),
			  this
		 }
		 ,
		 n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(e, t) {
			  if (this._callbacks = this._callbacks || {},
			  0 == arguments.length)
					return this._callbacks = {},
					this;
			  var r = this._callbacks["$" + e];
			  if (!r)
					return this;
			  if (1 == arguments.length)
					return delete this._callbacks["$" + e],
					this;
			  for (var n, i = 0; i < r.length; i++)
					if ((n = r[i]) === t || n.fn === t) {
						 r.splice(i, 1);
						 break
					}
			  return this
		 }
		 ,
		 n.prototype.emit = function(e) {
			  this._callbacks = this._callbacks || {};
			  var t = [].slice.call(arguments, 1)
				 , r = this._callbacks["$" + e];
			  if (r) {
					r = r.slice(0);
					for (var n = 0, i = r.length; n < i; ++n)
						 r[n].apply(this, t)
			  }
			  return this
		 }
		 ,
		 n.prototype.listeners = function(e) {
			  return this._callbacks = this._callbacks || {},
			  this._callbacks["$" + e] || []
		 }
		 ,
		 n.prototype.hasListeners = function(e) {
			  return !!this.listeners(e).length
		 }
	},
	32: function(e, t, r) {
		 var n = function() {
			  return this
		 }() || Function("return this")()
			, i = n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0
			, o = i && n.regeneratorRuntime;
		 if (n.regeneratorRuntime = void 0,
		 e.exports = r(33),
		 i)
			  n.regeneratorRuntime = o;
		 else
			  try {
					delete n.regeneratorRuntime
			  } catch (a) {
					n.regeneratorRuntime = void 0
			  }
	},
	33: function(e, t) {
		 !function(t) {
			  "use strict";
			  function r(e, t, r, n) {
					var o = t && t.prototype instanceof i ? t : i
					  , a = Object.create(o.prototype)
					  , s = new h(n || []);
					return a._invoke = u(e, r, s),
					a
			  }
			  function n(e, t, r) {
					try {
						 return {
							  type: "normal",
							  arg: e.call(t, r)
						 }
					} catch (n) {
						 return {
							  type: "throw",
							  arg: n
						 }
					}
			  }
			  function i() {}
			  function o() {}
			  function a() {}
			  function s(e) {
					["next", "throw", "return"].forEach(function(t) {
						 e[t] = function(e) {
							  return this._invoke(t, e)
						 }
					})
			  }
			  function c(e) {
					function t(r, i, o, a) {
						 var s = n(e[r], e, i);
						 if ("throw" !== s.type) {
							  var c = s.arg
								 , u = c.value;
							  return u && "object" == typeof u && y.call(u, "__await") ? Promise.resolve(u.__await).then(function(e) {
									t("next", e, o, a)
							  }, function(e) {
									t("throw", e, o, a)
							  }) : Promise.resolve(u).then(function(e) {
									c.value = e,
									o(c)
							  }, a)
						 }
						 a(s.arg)
					}
					function r(e, r) {
						 function n() {
							  return new Promise(function(n, i) {
									t(e, r, n, i)
							  }
							  )
						 }
						 return i = i ? i.then(n, n) : n()
					}
					var i;
					this._invoke = r
			  }
			  function u(e, t, r) {
					var i = O;
					return function(o, a) {
						 if (i === A)
							  throw new Error("Generator is already running");
						 if (i === T) {
							  if ("throw" === o)
									throw a;
							  return m()
						 }
						 for (r.method = o,
						 r.arg = a; ; ) {
							  var s = r.delegate;
							  if (s) {
									var c = l(s, r);
									if (c) {
										 if (c === S)
											  continue;
										 return c
									}
							  }
							  if ("next" === r.method)
									r.sent = r._sent = r.arg;
							  else if ("throw" === r.method) {
									if (i === O)
										 throw i = T,
										 r.arg;
									r.dispatchException(r.arg)
							  } else
									"return" === r.method && r.abrupt("return", r.arg);
							  i = A;
							  var u = n(e, t, r);
							  if ("normal" === u.type) {
									if (i = r.done ? T : E,
									u.arg === S)
										 continue;
									return {
										 value: u.arg,
										 done: r.done
									}
							  }
							  "throw" === u.type && (i = T,
							  r.method = "throw",
							  r.arg = u.arg)
						 }
					}
			  }
			  function l(e, t) {
					var r = e.iterator[t.method];
					if (r === b) {
						 if (t.delegate = null,
						 "throw" === t.method) {
							  if (e.iterator.return && (t.method = "return",
							  t.arg = b,
							  l(e, t),
							  "throw" === t.method))
									return S;
							  t.method = "throw",
							  t.arg = new TypeError("The iterator does not provide a 'throw' method")
						 }
						 return S
					}
					var i = n(r, e.iterator, t.arg);
					if ("throw" === i.type)
						 return t.method = "throw",
						 t.arg = i.arg,
						 t.delegate = null,
						 S;
					var o = i.arg;
					return o ? o.done ? (t[e.resultName] = o.value,
					t.next = e.nextLoc,
					"return" !== t.method && (t.method = "next",
					t.arg = b),
					t.delegate = null,
					S) : o : (t.method = "throw",
					t.arg = new TypeError("iterator result is not an object"),
					t.delegate = null,
					S)
			  }
			  function d(e) {
					var t = {
						 tryLoc: e[0]
					};
					1 in e && (t.catchLoc = e[1]),
					2 in e && (t.finallyLoc = e[2],
					t.afterLoc = e[3]),
					this.tryEntries.push(t)
			  }
			  function p(e) {
					var t = e.completion || {};
					t.type = "normal",
					delete t.arg,
					e.completion = t
			  }
			  function h(e) {
					this.tryEntries = [{
						 tryLoc: "root"
					}],
					e.forEach(d, this),
					this.reset(!0)
			  }
			  function f(e) {
					if (e) {
						 var t = e[g];
						 if (t)
							  return t.call(e);
						 if ("function" == typeof e.next)
							  return e;
						 if (!isNaN(e.length)) {
							  var r = -1
								 , n = function i() {
									for (; ++r < e.length; )
										 if (y.call(e, r))
											  return i.value = e[r],
											  i.done = !1,
											  i;
									return i.value = b,
									i.done = !0,
									i
							  };
							  return n.next = n
						 }
					}
					return {
						 next: m
					}
			  }
			  function m() {
					return {
						 value: b,
						 done: !0
					}
			  }
			  var b, v = Object.prototype, y = v.hasOwnProperty, w = "function" == typeof Symbol ? Symbol : {}, g = w.iterator || "@@iterator", _ = w.asyncIterator || "@@asyncIterator", x = w.toStringTag || "@@toStringTag", k = "object" == typeof e, C = t.regeneratorRuntime;
			  if (C)
					return void (k && (e.exports = C));
			  C = t.regeneratorRuntime = k ? e.exports : {},
			  C.wrap = r;
			  var O = "suspendedStart"
				 , E = "suspendedYield"
				 , A = "executing"
				 , T = "completed"
				 , S = {}
				 , M = {};
			  M[g] = function() {
					return this
			  }
			  ;
			  var N = Object.getPrototypeOf
				 , j = N && N(N(f([])));
			  j && j !== v && y.call(j, g) && (M = j);
			  var q = a.prototype = i.prototype = Object.create(M);
			  o.prototype = q.constructor = a,
			  a.constructor = o,
			  a[x] = o.displayName = "GeneratorFunction",
			  C.isGeneratorFunction = function(e) {
					var t = "function" == typeof e && e.constructor;
					return !!t && (t === o || "GeneratorFunction" === (t.displayName || t.name))
			  }
			  ,
			  C.mark = function(e) {
					return Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : (e.__proto__ = a,
					x in e || (e[x] = "GeneratorFunction")),
					e.prototype = Object.create(q),
					e
			  }
			  ,
			  C.awrap = function(e) {
					return {
						 __await: e
					}
			  }
			  ,
			  s(c.prototype),
			  c.prototype[_] = function() {
					return this
			  }
			  ,
			  C.AsyncIterator = c,
			  C.async = function(e, t, n, i) {
					var o = new c(r(e, t, n, i));
					return C.isGeneratorFunction(t) ? o : o.next().then(function(e) {
						 return e.done ? e.value : o.next()
					})
			  }
			  ,
			  s(q),
			  q[x] = "Generator",
			  q[g] = function() {
					return this
			  }
			  ,
			  q.toString = function() {
					return "[object Generator]"
			  }
			  ,
			  C.keys = function(e) {
					var t = [];
					for (var r in e)
						 t.push(r);
					return t.reverse(),
					function n() {
						 for (; t.length; ) {
							  var r = t.pop();
							  if (r in e)
									return n.value = r,
									n.done = !1,
									n
						 }
						 return n.done = !0,
						 n
					}
			  }
			  ,
			  C.values = f,
			  h.prototype = {
					constructor: h,
					reset: function(e) {
						 if (this.prev = 0,
						 this.next = 0,
						 this.sent = this._sent = b,
						 this.done = !1,
						 this.delegate = null,
						 this.method = "next",
						 this.arg = b,
						 this.tryEntries.forEach(p),
						 !e)
							  for (var t in this)
									"t" === t.charAt(0) && y.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = b)
					},
					stop: function() {
						 this.done = !0;
						 var e = this.tryEntries[0]
							, t = e.completion;
						 if ("throw" === t.type)
							  throw t.arg;
						 return this.rval
					},
					dispatchException: function(e) {
						 function t(t, n) {
							  return o.type = "throw",
							  o.arg = e,
							  r.next = t,
							  n && (r.method = "next",
							  r.arg = b),
							  !!n
						 }
						 if (this.done)
							  throw e;
						 for (var r = this, n = this.tryEntries.length - 1; n >= 0; --n) {
							  var i = this.tryEntries[n]
								 , o = i.completion;
							  if ("root" === i.tryLoc)
									return t("end");
							  if (i.tryLoc <= this.prev) {
									var a = y.call(i, "catchLoc")
									  , s = y.call(i, "finallyLoc");
									if (a && s) {
										 if (this.prev < i.catchLoc)
											  return t(i.catchLoc, !0);
										 if (this.prev < i.finallyLoc)
											  return t(i.finallyLoc)
									} else if (a) {
										 if (this.prev < i.catchLoc)
											  return t(i.catchLoc, !0)
									} else {
										 if (!s)
											  throw new Error("try statement without catch or finally");
										 if (this.prev < i.finallyLoc)
											  return t(i.finallyLoc)
									}
							  }
						 }
					},
					abrupt: function(e, t) {
						 for (var r = this.tryEntries.length - 1; r >= 0; --r) {
							  var n = this.tryEntries[r];
							  if (n.tryLoc <= this.prev && y.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
									var i = n;
									break
							  }
						 }
						 i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
						 var o = i ? i.completion : {};
						 return o.type = e,
						 o.arg = t,
						 i ? (this.method = "next",
						 this.next = i.finallyLoc,
						 S) : this.complete(o)
					},
					complete: function(e, t) {
						 if ("throw" === e.type)
							  throw e.arg;
						 return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
						 this.method = "return",
						 this.next = "end") : "normal" === e.type && t && (this.next = t),
						 S
					},
					finish: function(e) {
						 for (var t = this.tryEntries.length - 1; t >= 0; --t) {
							  var r = this.tryEntries[t];
							  if (r.finallyLoc === e)
									return this.complete(r.completion, r.afterLoc),
									p(r),
									S
						 }
					},
					catch: function(e) {
						 for (var t = this.tryEntries.length - 1; t >= 0; --t) {
							  var r = this.tryEntries[t];
							  if (r.tryLoc === e) {
									var n = r.completion;
									if ("throw" === n.type) {
										 var i = n.arg;
										 p(r)
									}
									return i
							  }
						 }
						 throw new Error("illegal catch attempt")
					},
					delegateYield: function(e, t, r) {
						 return this.delegate = {
							  iterator: f(e),
							  resultName: t,
							  nextLoc: r
						 },
						 "next" === this.method && (this.arg = b),
						 S
					}
			  }
		 }(function() {
			  return this
		 }() || Function("return this")())
	},
	34: function(e, t) {
		 function r() {
			  this._defaults = []
		 }
		 ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(e) {
			  r.prototype[e] = function() {
					return this._defaults.push({
						 fn: e,
						 arguments: arguments
					}),
					this
			  }
		 }),
		 r.prototype._setDefaults = function(e) {
			  this._defaults.forEach(function(t) {
					e[t.fn].apply(e, t.arguments)
			  })
		 }
		 ,
		 e.exports = r
	},
	346: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 var i = r(2)
			, o = n(i)
			, a = r(3)
			, s = n(a)
			, c = r(1)
			, u = n(c)
			, l = r(5)
			, d = n(l)
			, p = r(4)
			, h = n(p)
			, f = r(0)
			, m = r(444)
			, b = r(124)
			, v = r(6)
			, y = v.throttleV2
			, w = r(168)
			, g = function(e) {
			  function t(e) {
					(0,
					s.default)(this, t);
					var r = (0,
					d.default)(this, (t.__proto__ || (0,
					o.default)(t)).call(this, e));
					return r.state = {
						 hot: [],
						 total: 100,
						 step: 20,
						 currentNum: 0,
						 shouldUpdate: !0
					},
					r
			  }
			  return (0,
			  h.default)(t, e),
			  (0,
			  u.default)(t, [{
					key: "componentDidUpdate",
					value: function() {}
			  }, {
					key: "loadMore",
					value: function() {
						 this.state.currentNum + this.state.step <= this.state.hot.length ? (this.setState({
							  currentNum: this.state.currentNum + this.state.step
						 }),
						 this.forceUpdate()) : this.setState({
							  currentNum: this.state.hot.length
						 })
					}
			  }, {
					key: "fetchData",
					value: function() {
						 var e = this
							, t = this
							, r = 0;
						 window.sessionStorage && (r = window.sessionStorage.getItem("lastReid") || 0,
						 166 === Number(r) ? r = 0 : 167 === Number(r) && (r = 168)),
						 $.get("//api.bilibili.com/x/web-interface/ranking?rid=" + r + "&day=3&jsonp=jsonp", function(r) {
							  r && 0 === r.code && r.data && function() {
									var n = r.data.list
									  , i = n.length < e.state.total ? n.length : e.state.total
									  , o = i >= 20 ? 20 : i
									  , a = [];
									if (e.props.additionalContent && e.props.additionalContent.length > 0)
										 for (var s = 0; s < e.props.additionalContent.length; s++) {
											  var c = e.props.additionalContent[s];
											  if (window.BiliCm && window.BiliCm.Base && "function" == typeof window.BiliCm.Base.sendShowData && window.BiliCm.Base.sendShowData(c, "2806"),
											  c.url.match(/^bilibili:\/\/video\/(\d*)$/)) {
													var u = /^bilibili:\/\/video\/(\d*)$/.exec(c.url)
													  , l = void 0;
													u && (l = u[1]),
													a.push({
														 aid: l,
														 title: c.name,
														 pic: c.pic,
														 originData: c
													})
											  } else
													a.push({
														 url: c.url,
														 title: c.name,
														 pic: c.pic,
														 index: s,
														 originData: c
													})
										 }
									for (var d = function(e) {
										 if (!a.find(function(t) {
											  if (t.originData && t.originData.archive && t.originData.archive.aid)
													return Number(t.originData.archive.aid) === Number(n[e].aid)
										 })) {
											  var t = {};
											  t.aid = n[e].aid,
											  t.title = n[e].title,
											  t.pic = n[e].pic,
											  t.play = n[e].play,
											  t.review = n[e].video_review,
											  a.push(t)
										 }
									}, p = 0; p < n.length; p++)
										 d(p);
									t.setState({
										 hot: a,
										 currentNum: o,
										 total: i
									}),
									t.handler = y(function() {
										 $(window).scrollTop() + $(window).height() > $(document).height() - 800 * window.devicePixelRatio && (t.loadMore(),
										 t.state.currentNum === t.state.total && window.removeEventListener("scroll", t.handler, !1))
									}, 200, 400),
									window.addEventListener("scroll", t.handler, !1)
							  }()
						 })
					}
			  }, {
					key: "componentDidMount",
					value: function() {
						 this.fetchData()
					}
			  }, {
					key: "render",
					value: function() {
						 var e = [];
						 if (this.state.hot.length > 0 && this.state.currentNum > 0 && this.state.total >= this.state.currentNum)
							  for (var t = 0; t < this.state.currentNum; t++) {
									var r = this.state.hot[t];
									e.push(f.createElement(w, {
										 id: "video_" + t,
										 key: "hot" + t
									}, f.createElement(b, r)))
							  }
						 else
							  for (var n = 0; n < 20; n++)
									e.push(f.createElement(b, {
										 aid: "",
										 key: "hot" + n,
										 title: "加载中...",
										 pic: "",
										 play: "--",
										 review: "--"
									}));
						 return f.createElement("div", {
							  className: m.rankingFlow,
							  id: "rankingFlowNormal"
						 }, f.createElement("div", {
							  className: m.content
						 }, e))
					}
			  }]),
			  t
		 }(f.Component);
		 e.exports = g
	},
	347: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 var i = r(2)
			, o = n(i)
			, a = r(3)
			, s = n(a)
			, c = r(1)
			, u = n(c)
			, l = r(5)
			, d = n(l)
			, p = r(4)
			, h = n(p)
			, f = r(0)
			, m = r(445)
			, b = r(12)
			, v = r(574)
			, y = r(543)
			, w = function(e) {
			  function t() {
					return (0,
					s.default)(this, t),
					(0,
					d.default)(this, (t.__proto__ || (0,
					o.default)(t)).apply(this, arguments))
			  }
			  return (0,
			  h.default)(t, e),
			  (0,
			  u.default)(t, [{
					key: "shouldComponentUpdate",
					value: function(e, t) {
						 return b(this, e, t)
					}
			  }, {
					key: "closeHandler",
					value: function() {
						 var e = document.getElementById("reminder");
						 e.setAttribute("style", "height: 0px"),
						 e.style.border = "none";
						 var t = this;
						 $.ajax({
							  url: "//api.bilibili.com/x/member/security/close",
							  type: "POST",
							  data: {
									mid: t.props.mid,
									uuid: Cookies.get("buvid3"),
									jsonp: "jsonp"
							  },
							  xhrFields: {
									withCredentials: !0
							  },
							  dataType: "json"
						 }).done(function(e) {
							  0 === e.code && (window.reportMsgObj.nonlocallogin_remindpc_close = 1,
							  window.reportObserver.forceCommit())
						 }).fail(function() {})
					}
			  }, {
					key: "render",
					value: function() {
						 var e = this.props.showTips ? m.reminder + " " + m.show : m.reminder;
						 return f.createElement("div", {
							  className: e,
							  id: "reminder"
						 }, f.createElement("div", {
							  className: m.re
						 }), f.createElement("div", {
							  className: m.tipsIcon
						 }, f.createElement("img", {
							  src: v,
							  alt: ""
						 })), f.createElement("div", {
							  className: m.content
						 }, f.createElement("p", null, "您的账号最近在“ ", f.createElement("span", {
							  className: m.location
						 }, this.props.showLoc), " ”发生登陆行为，如非本人操作，请修改密码并绑定手机")), f.createElement("div", {
							  className: m.closeIcon,
							  onClick: this.closeHandler.bind(this)
						 }, f.createElement("img", {
							  src: y,
							  alt: ""
						 })), f.createElement("div", {
							  className: m.clear
						 }))
					}
			  }]),
			  t
		 }(f.Component);
		 e.exports = w
	},
	348: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 var i = r(2)
			, o = n(i)
			, a = r(3)
			, s = n(a)
			, c = r(1)
			, u = n(c)
			, l = r(5)
			, d = n(l)
			, p = r(4)
			, h = n(p)
			, f = r(0)
			, m = r(446)
			, b = r(9)
			, v = r(6).addClass
			, y = r(6).removeClass
			, w = function(e) {
			  function t() {
					var e, r, n, i;
					(0,
					s.default)(this, t);
					for (var a = arguments.length, c = Array(a), u = 0; u < a; u++)
						 c[u] = arguments[u];
					return r = n = (0,
					d.default)(this, (e = t.__proto__ || (0,
					o.default)(t)).call.apply(e, [this].concat(c))),
					n.state = {
						 sliders: []
					},
					i = r,
					(0,
					d.default)(n, i)
			  }
			  return (0,
			  h.default)(t, e),
			  (0,
			  u.default)(t, [{
					key: "shouldComponentUpdate",
					value: function(e, t) {
						 return this.state.sliders.length !== t.sliders.length
					}
			  }, {
					key: "loadImageOver",
					value: function() {
						 window.performance && window.performance.timing && (window.performance.timing.firstscreenfinish = (new Date).getTime())
					}
			  }, {
					key: "loadImageOver1",
					value: function() {}
			  }, {
					key: "checkInView",
					value: function(e) {
						 if (e) {
							  var t = e.getBoundingClientRect();
							  return t.top + e.offsetHeight < window.innerHeight && t.bottom >= 0
						 }
					}
			  }, {
					key: "componentDidMount",
					value: function() {
						 var e = this
							, t = this;
						 $.get("//api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=7&id=1695", function(r) {
							  if (0 === r.code) {
									var n = r.data;
									e.info = n;
									for (var i = [], o = 0; o < n.length; o++) {
										 var a = n[o].url.replace("http:", "")
											, s = n[o].pic.replace("http:", "")
											, c = b.webp(s, {
											  w: 480,
											  h: 300
										 });
										 i.push({
											  url: a,
											  image: c,
											  alt: n[o].name
										 })
									}
									t.setState({
										 sliders: i
									}),
									window.BiliCm && window.BiliCm.Base && "function" == typeof window.BiliCm.Base.sendShowData && window.BiliCm.Base.sendShowData(n[0], "1695"),
									window.mySwipe = new Swipe(document.getElementById("slider"),{
										 startSlide: 0,
										 speed: 400,
										 auto: 3e3,
										 continuous: !0,
										 disableScroll: !1,
										 stopPropagation: !1,
										 callback: function(e, r) {
											  y(document.querySelector(".swipe-btn-list a.on"), "on"),
											  2 === t.state.sliders.length && e > 1 ? v(document.querySelector(".swipe-btn-list a:nth-child(" + (e - 1) + ")"), "on") : v(document.querySelector(".swipe-btn-list a:nth-child(" + (e + 1) + ")"), "on")
										 },
										 transitionEnd: function(e, r) {
											  window.BiliCm && window.BiliCm.Base && "function" == typeof window.BiliCm.Base.sendShowData && t.checkInView(r) && window.BiliCm.Base.sendShowData(n[e], "1695")
										 }
									})
							  }
						 })
					}
			  }, {
					key: "componentDidUpdate",
					value: function() {}
			  }, {
					key: "clickSlide",
					value: function(e) {
						 window.reportMsgObj && window.reportObserver && e && (window.reportMsgObj.click = "slide_" + e,
						 window.reportObserver.forceCommit()),
						 window.BiliCm && window.BiliCm.Base && "function" == typeof window.BiliCm.Base.sendShowData && this.info.length > 0 && this.info[e] && window.BiliCm.Base.sendClickData(this.info[e], "1695")
					}
			  }, {
					key: "render",
					value: function() {
						 for (var e = [], t = [], r = 0; r < this.state.sliders.length; r++)
							  e.push(f.createElement("a", {
									href: this.state.sliders[r].url,
									onClick: this.clickSlide.bind(this, r),
									key: "slide" + r
							  }, f.createElement("img", {
									src: this.state.sliders[r].image,
									"data-index": r,
									alt: this.state.sliders[r].alt,
									onLoad: 0 === r ? this.loadImageOver.bind(this) : this.loadImageOver1.bind(this)
							  }))),
							  this.state.sliders.length > 1 && t.push(f.createElement("a", {
									className: 0 === r ? "on" : "off",
									key: "sss" + r
							  }));
						 return f.createElement("div", {
							  className: m.banner
						 }, f.createElement("div", {
							  className: "swipe",
							  id: "slider"
						 }, f.createElement("div", {
							  className: "swipe-wrap"
						 }, e), f.createElement("div", {
							  className: "swipe-btn-wrapper"
						 }, f.createElement("div", {
							  className: "swipe-btn-list"
						 }, t))))
					}
			  }]),
			  t
		 }(f.Component);
		 e.exports = w
	},
	349: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 var i = r(2)
			, o = n(i)
			, a = r(3)
			, s = n(a)
			, c = r(1)
			, u = n(c)
			, l = r(5)
			, d = n(l)
			, p = r(4)
			, h = n(p)
			, f = r(0)
			, m = r(447)
			, b = r(350)
			, v = function(e) {
			  function t() {
					return (0,
					s.default)(this, t),
					(0,
					d.default)(this, (t.__proto__ || (0,
					o.default)(t)).apply(this, arguments))
			  }
			  return (0,
			  h.default)(t, e),
			  (0,
			  u.default)(t, [{
					key: "clickShowUp",
					value: function() {
						 window.reportMsgObj && window.reportObserver && (window.reportMsgObj.click = "showUpBtn",
						 window.reportObserver.forceCommit()),
						 this.props.showAllPartition()
					}
			  }, {
					key: "shouldComponentUpdate",
					value: function() {
						 return !1
					}
			  }, {
					key: "render",
					value: function() {
						 var e = this.props.partitionList
							, t = [];
						 t.push(f.createElement(b, {
							  key: 1e3,
							  content: "首页",
							  link: "/index.html"
						 }));
						 for (var r = 0; r < e[0].length; r++)
							  t.push(f.createElement(b, {
									key: r,
									tid: e[0][r].tid,
									content: e[0][r].typename
							  }));
						 t.push(f.createElement(b, {
							  key: 1003,
							  content: "直播",
							  link: "//live.bilibili.com/h5/"
						 })),
						 t.push(f.createElement(b, {
							  key: 1004,
							  content: "相簿",
							  link: "//h.bilibili.com/ywh/h5/home"
						 })),
						 t.push(f.createElement("div", {
							  key: 1001,
							  className: m.clear
						 }));
						 var n = f.createElement("div", {
							  className: m.scrollContainer,
							  id: "scrollZone"
						 }, t);
						 return f.createElement("div", {
							  className: m.partBox
						 }, f.createElement("div", {
							  className: m.pagesContainer
						 }, n), f.createElement("div", {
							  className: m.switchContainer,
							  onClick: this.clickShowUp.bind(this)
						 }, f.createElement("svg", {
							  className: m.icon,
							  "aria-hidden": "true"
						 }, f.createElement("use", {
							  xlinkHref: "#icon-xialaxiao"
						 }))))
					}
			  }]),
			  t
		 }(f.Component);
		 e.exports = v
	},
	35: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  if (e)
					return i(e)
		 }
		 function i(e) {
			  for (var t in n.prototype)
					e[t] = n.prototype[t];
			  return e
		 }
		 var o = r(17);
		 e.exports = n,
		 n.prototype.clearTimeout = function() {
			  return clearTimeout(this._timer),
			  clearTimeout(this._responseTimeoutTimer),
			  delete this._timer,
			  delete this._responseTimeoutTimer,
			  this
		 }
		 ,
		 n.prototype.parse = function(e) {
			  return this._parser = e,
			  this
		 }
		 ,
		 n.prototype.responseType = function(e) {
			  return this._responseType = e,
			  this
		 }
		 ,
		 n.prototype.serialize = function(e) {
			  return this._serializer = e,
			  this
		 }
		 ,
		 n.prototype.timeout = function(e) {
			  if (!e || "object" != typeof e)
					return this._timeout = e,
					this._responseTimeout = 0,
					this;
			  for (var t in e)
					switch (t) {
					case "deadline":
						 this._timeout = e.deadline;
						 break;
					case "response":
						 this._responseTimeout = e.response
					}
			  return this
		 }
		 ,
		 n.prototype.retry = function(e, t) {
			  return 0 !== arguments.length && !0 !== e || (e = 1),
			  e <= 0 && (e = 0),
			  this._maxRetries = e,
			  this._retries = 0,
			  this._retryCallback = t,
			  this
		 }
		 ;
		 var a = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
		 n.prototype._shouldRetry = function(e, t) {
			  if (!this._maxRetries || this._retries++ >= this._maxRetries)
					return !1;
			  if (this._retryCallback)
					try {
						 var r = this._retryCallback(e, t);
						 if (!0 === r)
							  return !0;
						 if (!1 === r)
							  return !1
					} catch (n) {}
			  if (t && t.status && t.status >= 500 && 501 != t.status)
					return !0;
			  if (e) {
					if (e.code && ~a.indexOf(e.code))
						 return !0;
					if (e.timeout && "ECONNABORTED" == e.code)
						 return !0;
					if (e.crossDomain)
						 return !0
			  }
			  return !1
		 }
		 ,
		 n.prototype._retry = function() {
			  return this.clearTimeout(),
			  this.req && (this.req = null,
			  this.req = this.request()),
			  this._aborted = !1,
			  this.timedout = !1,
			  this._end()
		 }
		 ,
		 n.prototype.then = function(e, t) {
			  if (!this._fullfilledPromise) {
					var r = this;
					this._endCalled,
					this._fullfilledPromise = new Promise(function(e, t) {
						 r.end(function(r, n) {
							  r ? t(r) : e(n)
						 })
					}
					)
			  }
			  return this._fullfilledPromise.then(e, t)
		 }
		 ,
		 n.prototype.catch = function(e) {
			  return this.then(void 0, e)
		 }
		 ,
		 n.prototype.use = function(e) {
			  return e(this),
			  this
		 }
		 ,
		 n.prototype.ok = function(e) {
			  if ("function" != typeof e)
					throw Error("Callback required");
			  return this._okCallback = e,
			  this
		 }
		 ,
		 n.prototype._isResponseOK = function(e) {
			  return !!e && (this._okCallback ? this._okCallback(e) : e.status >= 200 && e.status < 300)
		 }
		 ,
		 n.prototype.get = function(e) {
			  return this._header[e.toLowerCase()]
		 }
		 ,
		 n.prototype.getHeader = n.prototype.get,
		 n.prototype.set = function(e, t) {
			  if (o(e)) {
					for (var r in e)
						 this.set(r, e[r]);
					return this
			  }
			  return this._header[e.toLowerCase()] = t,
			  this.header[e] = t,
			  this
		 }
		 ,
		 n.prototype.unset = function(e) {
			  return delete this._header[e.toLowerCase()],
			  delete this.header[e],
			  this
		 }
		 ,
		 n.prototype.field = function(e, t) {
			  if (null === e || void 0 === e)
					throw new Error(".field(name, val) name can not be empty");
			  if (this._data,
			  o(e)) {
					for (var r in e)
						 this.field(r, e[r]);
					return this
			  }
			  if (Array.isArray(t)) {
					for (var n in t)
						 this.field(e, t[n]);
					return this
			  }
			  if (null === t || void 0 === t)
					throw new Error(".field(name, val) val can not be empty");
			  return "boolean" == typeof t && (t = "" + t),
			  this._getFormData().append(e, t),
			  this
		 }
		 ,
		 n.prototype.abort = function() {
			  return this._aborted ? this : (this._aborted = !0,
			  this.xhr && this.xhr.abort(),
			  this.req && this.req.abort(),
			  this.clearTimeout(),
			  this.emit("abort"),
			  this)
		 }
		 ,
		 n.prototype._auth = function(e, t, r, n) {
			  switch (r.type) {
			  case "basic":
					this.set("Authorization", "Basic " + n(e + ":" + t));
					break;
			  case "auto":
					this.username = e,
					this.password = t;
					break;
			  case "bearer":
					this.set("Authorization", "Bearer " + e)
			  }
			  return this
		 }
		 ,
		 n.prototype.withCredentials = function(e) {
			  return void 0 == e && (e = !0),
			  this._withCredentials = e,
			  this
		 }
		 ,
		 n.prototype.redirects = function(e) {
			  return this._maxRedirects = e,
			  this
		 }
		 ,
		 n.prototype.maxResponseSize = function(e) {
			  if ("number" != typeof e)
					throw TypeError("Invalid argument");
			  return this._maxResponseSize = e,
			  this
		 }
		 ,
		 n.prototype.toJSON = function() {
			  return {
					method: this.method,
					url: this.url,
					data: this._data,
					headers: this._header
			  }
		 }
		 ,
		 n.prototype.send = function(e) {
			  var t = o(e)
				 , r = this._header["content-type"];
			  if (this._formData,
			  t && !this._data)
					Array.isArray(e) ? this._data = [] : this._isHost(e) || (this._data = {});
			  else if (e && this._data && this._isHost(this._data))
					throw Error("Can't merge these send calls");
			  if (t && o(this._data))
					for (var n in e)
						 this._data[n] = e[n];
			  else
					"string" == typeof e ? (r || this.type("form"),
					r = this._header["content-type"],
					this._data = "application/x-www-form-urlencoded" == r ? this._data ? this._data + "&" + e : e : (this._data || "") + e) : this._data = e;
			  return !t || this._isHost(e) ? this : (r || this.type("json"),
			  this)
		 }
		 ,
		 n.prototype.sortQuery = function(e) {
			  return this._sort = void 0 === e || e,
			  this
		 }
		 ,
		 n.prototype._finalizeQueryString = function() {
			  var e = this._query.join("&");
			  if (e && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + e),
			  this._query.length = 0,
			  this._sort) {
					var t = this.url.indexOf("?");
					if (t >= 0) {
						 var r = this.url.substring(t + 1).split("&");
						 "function" == typeof this._sort ? r.sort(this._sort) : r.sort(),
						 this.url = this.url.substring(0, t) + "?" + r.join("&")
					}
			  }
		 }
		 ,
		 n.prototype._appendQueryString = function() {}
		 ,
		 n.prototype._timeoutError = function(e, t, r) {
			  if (!this._aborted) {
					var n = new Error(e + t + "ms exceeded");
					n.timeout = t,
					n.code = "ECONNABORTED",
					n.errno = r,
					this.timedout = !0,
					this.abort(),
					this.callback(n)
			  }
		 }
		 ,
		 n.prototype._setTimeouts = function() {
			  var e = this;
			  this._timeout && !this._timer && (this._timer = setTimeout(function() {
					e._timeoutError("Timeout of ", e._timeout, "ETIME")
			  }, this._timeout)),
			  this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() {
					e._timeoutError("Response timeout of ", e._responseTimeout, "ETIMEDOUT")
			  }, this._responseTimeout))
		 }
	},
	350: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 var i = r(2)
			, o = n(i)
			, a = r(3)
			, s = n(a)
			, c = r(1)
			, u = n(c)
			, l = r(5)
			, d = n(l)
			, p = r(4)
			, h = n(p)
			, f = r(0)
			, m = r(12)
			, b = r(448)
			, v = function(e) {
			  function t() {
					var e, r, n, i;
					(0,
					s.default)(this, t);
					for (var a = arguments.length, c = Array(a), u = 0; u < a; u++)
						 c[u] = arguments[u];
					return r = n = (0,
					d.default)(this, (e = t.__proto__ || (0,
					o.default)(t)).call.apply(e, [this].concat(c))),
					n.state = {},
					i = r,
					(0,
					d.default)(n, i)
			  }
			  return (0,
			  h.default)(t, e),
			  (0,
			  u.default)(t, [{
					key: "shouldComponentUpdate",
					value: function(e, t) {
						 return m(this, e, t)
					}
			  }, {
					key: "clickP",
					value: function() {
						 window.reportMsgObj && window.reportObserver && this.props.tid && (window.reportMsgObj.click = "partition_" + this.props.tid,
						 window.reportObserver.forceCommit())
					}
			  }, {
					key: "render",
					value: function() {
						 var e = "";
						 return 3 === this.props.content.length && (e = b.big),
						 this.props.link ? f.createElement("a", {
							  className: ("首页" === this.props.content ? b.curTab : b.tab) + " " + e,
							  href: this.props.link
						 }, f.createElement("p", null, this.props.content)) : f.createElement("a", {
							  className: b.tab + " " + e,
							  onClick: this.clickP.bind(this),
							  href: "/channel/" + (this.props.tid || "") + ".html"
						 }, f.createElement("p", null, this.props.content))
					}
			  }]),
			  t
		 }(f.Component);
		 e.exports = v
	},
	351: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 var i = r(2)
			, o = n(i)
			, a = r(3)
			, s = n(a)
			, c = r(1)
			, u = n(c)
			, l = r(5)
			, d = n(l)
			, p = r(4)
			, h = n(p)
			, f = r(0)
			, m = r(449)
			, b = r(352)
			, v = (r(6).rem2px,
		 function(e) {
			  function t() {
					return (0,
					s.default)(this, t),
					(0,
					d.default)(this, (t.__proto__ || (0,
					o.default)(t)).apply(this, arguments))
			  }
			  return (0,
			  h.default)(t, e),
			  (0,
			  u.default)(t, [{
					key: "shouldComponentUpdate",
					value: function(e) {
						 return e.showAll !== this.props.showAll
					}
			  }, {
					key: "componentDidMount",
					value: function() {}
			  }, {
					key: "componentDidUpdate",
					value: function() {}
			  }, {
					key: "doNothing",
					value: function() {}
			  }, {
					key: "clickShowScroll",
					value: function() {
						 this.props.showScrollPartition()
					}
			  }, {
					key: "render",
					value: function() {
						 var e = this.props.partitionList
							, t = (parseInt((e[0].length + 3) / 6),
						 6 - (e[0].length + 3) % 6)
							, r = [];
						 r.push(f.createElement(b, {
							  key: 1e3,
							  tid: 0,
							  content: "首页",
							  link: "/index.html"
						 }));
						 for (var n = 0; n < e[0].length; n++)
							  r.push(f.createElement(b, {
									key: n,
									tid: e[0][n].tid,
									content: e[0][n].typename
							  }));
						 if (r.push(f.createElement(b, {
							  key: 999,
							  tid: 999,
							  content: "直播",
							  link: "//live.bilibili.com/h5/"
						 })),
						 r.push(f.createElement(b, {
							  key: 998,
							  tid: 998,
							  content: "相簿",
							  link: "//h.bilibili.com/ywh/h5/home"
						 })),
						 t <= 5)
							  for (var i = 0; i < t; i++)
									r.push(f.createElement(b, {
										 key: 1001 + i,
										 tid: 1111 + i,
										 content: "测试",
										 clickMe: this.doNothing.bind(this)
									}));
						 var o = this.props.showAll ? m.show : "";
						 return f.createElement("div", {
							  className: m.partBox + " " + o
						 }, f.createElement("div", {
							  className: m.pagesContainer,
							  id: "scrollZoneAll"
						 }, r), f.createElement("div", {
							  className: m.switchContainer,
							  onClick: this.clickShowScroll.bind(this)
						 }, f.createElement("svg", {
							  className: m.icon,
							  "aria-hidden": "true"
						 }, f.createElement("use", {
							  xlinkHref: "#icon-shouqixiao"
						 }))))
					}
			  }]),
			  t
		 }(f.Component));
		 e.exports = v
	},
	352: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 var i = r(2)
			, o = n(i)
			, a = r(3)
			, s = n(a)
			, c = r(1)
			, u = n(c)
			, l = r(5)
			, d = n(l)
			, p = r(4)
			, h = n(p)
			, f = r(0)
			, m = r(450)
			, b = function(e) {
			  function t() {
					return (0,
					s.default)(this, t),
					(0,
					d.default)(this, (t.__proto__ || (0,
					o.default)(t)).apply(this, arguments))
			  }
			  return (0,
			  h.default)(t, e),
			  (0,
			  u.default)(t, [{
					key: "clickFinal",
					value: function(e) {
						 this.props.tid >= 1111 && e.preventDefault(),
						 window.reportMsgObj && window.reportObserver && (window.reportMsgObj.click = "partition_" + this.props.tid,
						 window.reportObserver.forceCommit())
					}
			  }, {
					key: "render",
					value: function() {
						 var e = ""
							, t = "";
						 return 3 === this.props.content.length && (e = m.big),
						 this.props.tid >= 1111 && (t = m.test),
						 this.props.link ? f.createElement("a", {
							  className: ("首页" === this.props.content ? m.curTab : m.tab) + " " + e,
							  href: this.props.link
						 }, f.createElement("p", null, this.props.content)) : f.createElement("a", {
							  className: m.tab + " " + e + " " + t,
							  href: "/channel/" + this.props.tid + ".html",
							  onClick: this.clickFinal.bind(this)
						 }, f.createElement("p", null, this.props.content))
					}
			  }]),
			  t
		 }(f.Component);
		 e.exports = b
	},
	36: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  if (e)
					return i(e)
		 }
		 function i(e) {
			  for (var t in n.prototype)
					e[t] = n.prototype[t];
			  return e
		 }
		 var o = r(37);
		 e.exports = n,
		 n.prototype.get = function(e) {
			  return this.header[e.toLowerCase()]
		 }
		 ,
		 n.prototype._setHeaderProperties = function(e) {
			  var t = e["content-type"] || "";
			  this.type = o.type(t);
			  var r = o.params(t);
			  for (var n in r)
					this[n] = r[n];
			  this.links = {};
			  try {
					e.link && (this.links = o.parseLinks(e.link))
			  } catch (i) {}
		 }
		 ,
		 n.prototype._setStatusProperties = function(e) {
			  var t = e / 100 | 0;
			  this.status = this.statusCode = e,
			  this.statusType = t,
			  this.info = 1 == t,
			  this.ok = 2 == t,
			  this.redirect = 3 == t,
			  this.clientError = 4 == t,
			  this.serverError = 5 == t,
			  this.error = (4 == t || 5 == t) && this.toError(),
			  this.accepted = 202 == e,
			  this.noContent = 204 == e,
			  this.badRequest = 400 == e,
			  this.unauthorized = 401 == e,
			  this.notAcceptable = 406 == e,
			  this.forbidden = 403 == e,
			  this.notFound = 404 == e
		 }
	},
	37: function(e, t, r) {
		 "use strict";
		 t.type = function(e) {
			  return e.split(/ *; */).shift()
		 }
		 ,
		 t.params = function(e) {
			  return e.split(/ *; */).reduce(function(e, t) {
					var r = t.split(/ *= */)
					  , n = r.shift()
					  , i = r.shift();
					return n && i && (e[n] = i),
					e
			  }, {})
		 }
		 ,
		 t.parseLinks = function(e) {
			  return e.split(/ *, */).reduce(function(e, t) {
					var r = t.split(/ *; */)
					  , n = r[0].slice(1, -1);
					return e[r[1].split(/ *= */)[1].slice(1, -1)] = n,
					e
			  }, {})
		 }
		 ,
		 t.cleanHeader = function(e, t) {
			  return delete e["content-type"],
			  delete e["content-length"],
			  delete e["transfer-encoding"],
			  delete e.host,
			  t && (delete e.authorization,
			  delete e.cookie),
			  e
		 }
	},
	38: function(e, t) {
		 e.exports = function(e) {
			  return e.webpackPolyfill || (e.deprecate = function() {}
			  ,
			  e.paths = [],
			  e.children || (e.children = []),
			  Object.defineProperty(e, "loaded", {
					enumerable: !0,
					get: function() {
						 return e.l
					}
			  }),
			  Object.defineProperty(e, "id", {
					enumerable: !0,
					get: function() {
						 return e.i
					}
			  }),
			  e.webpackPolyfill = 1),
			  e
		 }
	},
	39: function(e, t, r) {
		 e.exports = {
			  default: r(43),
			  __esModule: !0
		 }
	},
	43: function(e, t, r) {
		 r(79),
		 r(74),
		 e.exports = r(45)
	},
	44: function(e, t, r) {
		 var n = r(8)
			, i = n.JSON || (n.JSON = {
			  stringify: JSON.stringify
		 });
		 e.exports = function(e) {
			  return i.stringify.apply(i, arguments)
		 }
	},
	442: function(e, t) {
		 e.exports = {
			  home: "index__home__src-home-",
			  divider: "index__divider__src-home-",
			  law: "index__law__src-home-",
			  toTop: "index__toTop__src-home-"
		 }
	},
	444: function(e, t) {
		 e.exports = {
			  clearfix: "index__clearfix__src-home-rankingFlowNormal-",
			  rankingFlow: "index__rankingFlow__src-home-rankingFlowNormal-",
			  title: "index__title__src-home-rankingFlowNormal-",
			  content: "index__content__src-home-rankingFlowNormal-",
			  icon1: "index__icon1__src-home-rankingFlowNormal-",
			  icon: "index__icon__src-home-rankingFlowNormal-"
		 }
	},
	445: function(e, t) {
		 e.exports = {
			  reminder: "index__reminder__src-home-reminder-",
			  re: "index__re__src-home-reminder-",
			  tipsIcon: "index__tipsIcon__src-home-reminder-",
			  location: "index__location__src-home-reminder-",
			  closeIcon: "index__closeIcon__src-home-reminder-",
			  clear: "index__clear__src-home-reminder-",
			  show: "index__show__src-home-reminder-"
		 }
	},
	446: function(e, t) {
		 e.exports = {
			  banner: "index__banner__src-home-slider-"
		 }
	},
	447: function(e, t) {
		 e.exports = {
			  partBox: "index__partBox__src-home-zone-",
			  pagesContainer: "index__pagesContainer__src-home-zone-",
			  scrollContainer: "index__scrollContainer__src-home-zone-",
			  switchContainer: "index__switchContainer__src-home-zone-",
			  icon: "index__icon__src-home-zone-"
		 }
	},
	448: function(e, t) {
		 e.exports = {
			  curTab: "index__curTab__src-home-zone-tab-",
			  tab: "index__tab__src-home-zone-tab-",
			  big: "index__big__src-home-zone-tab-"
		 }
	},
	449: function(e, t) {
		 e.exports = {
			  partBox: "index__partBox__src-home-zoneAll-",
			  pagesContainer: "index__pagesContainer__src-home-zoneAll-",
			  switchContainer: "index__switchContainer__src-home-zoneAll-",
			  icon: "index__icon__src-home-zoneAll-",
			  show: "index__show__src-home-zoneAll-"
		 }
	},
	45: function(e, t, r) {
		 var n = r(60)
			, i = r(78);
		 e.exports = r(8).getIterator = function(e) {
			  var t = i(e);
			  if ("function" != typeof t)
					throw TypeError(e + " is not iterable!");
			  return n(t.call(e))
		 }
	},
	450: function(e, t) {
		 e.exports = {
			  curTab: "index__curTab__src-home-zoneAll-tab-",
			  tab: "index__tab__src-home-zoneAll-tab-",
			  big: "index__big__src-home-zoneAll-tab-",
			  test: "index__test__src-home-zoneAll-tab-"
		 }
	},
	46: function(e, t) {
		 !function() {
			  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
				 , r = {
					rotl: function(e, t) {
						 return e << t | e >>> 32 - t
					},
					rotr: function(e, t) {
						 return e << 32 - t | e >>> t
					},
					endian: function(e) {
						 if (e.constructor == Number)
							  return 16711935 & r.rotl(e, 8) | 4278255360 & r.rotl(e, 24);
						 for (var t = 0; t < e.length; t++)
							  e[t] = r.endian(e[t]);
						 return e
					},
					randomBytes: function(e) {
						 for (var t = []; e > 0; e--)
							  t.push(Math.floor(256 * Math.random()));
						 return t
					},
					bytesToWords: function(e) {
						 for (var t = [], r = 0, n = 0; r < e.length; r++,
						 n += 8)
							  t[n >>> 5] |= e[r] << 24 - n % 32;
						 return t
					},
					wordsToBytes: function(e) {
						 for (var t = [], r = 0; r < 32 * e.length; r += 8)
							  t.push(e[r >>> 5] >>> 24 - r % 32 & 255);
						 return t
					},
					bytesToHex: function(e) {
						 for (var t = [], r = 0; r < e.length; r++)
							  t.push((e[r] >>> 4).toString(16)),
							  t.push((15 & e[r]).toString(16));
						 return t.join("")
					},
					hexToBytes: function(e) {
						 for (var t = [], r = 0; r < e.length; r += 2)
							  t.push(parseInt(e.substr(r, 2), 16));
						 return t
					},
					bytesToBase64: function(e) {
						 for (var r = [], n = 0; n < e.length; n += 3)
							  for (var i = e[n] << 16 | e[n + 1] << 8 | e[n + 2], o = 0; o < 4; o++)
									8 * n + 6 * o <= 8 * e.length ? r.push(t.charAt(i >>> 6 * (3 - o) & 63)) : r.push("=");
						 return r.join("")
					},
					base64ToBytes: function(e) {
						 e = e.replace(/[^A-Z0-9+\/]/gi, "");
						 for (var r = [], n = 0, i = 0; n < e.length; i = ++n % 4)
							  0 != i && r.push((t.indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(n)) >>> 6 - 2 * i);
						 return r
					}
			  };
			  e.exports = r
		 }()
	},
	47: function(e, t) {
		 function r(e) {
			  return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
		 }
		 function n(e) {
			  return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0))
		 }
		 /*!
* Determine if an object is a Buffer
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/
		 e.exports = function(e) {
			  return null != e && (r(e) || n(e) || !!e._isBuffer)
		 }
	},
	48: function(e, t, r) {
		 (function(e, n) {
			  var i;
			  !function(o) {
					function a(e) {
						 throw new RangeError(j[e])
					}
					function s(e, t) {
						 for (var r = e.length, n = []; r--; )
							  n[r] = t(e[r]);
						 return n
					}
					function c(e, t) {
						 var r = e.split("@")
							, n = "";
						 return r.length > 1 && (n = r[0] + "@",
						 e = r[1]),
						 e = e.replace(N, "."),
						 n + s(e.split("."), t).join(".")
					}
					function u(e) {
						 for (var t, r, n = [], i = 0, o = e.length; i < o; )
							  t = e.charCodeAt(i++),
							  t >= 55296 && t <= 56319 && i < o ? (r = e.charCodeAt(i++),
							  56320 == (64512 & r) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t),
							  i--)) : n.push(t);
						 return n
					}
					function l(e) {
						 return s(e, function(e) {
							  var t = "";
							  return e > 65535 && (e -= 65536,
							  t += I(e >>> 10 & 1023 | 55296),
							  e = 56320 | 1023 & e),
							  t += I(e)
						 }).join("")
					}
					function d(e) {
						 return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : _
					}
					function p(e, t) {
						 return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
					}
					function h(e, t, r) {
						 var n = 0;
						 for (e = r ? D(e / O) : e >> 1,
						 e += D(e / t); e > q * k >> 1; n += _)
							  e = D(e / q);
						 return D(n + (q + 1) * e / (e + C))
					}
					function f(e) {
						 var t, r, n, i, o, s, c, u, p, f, m = [], b = e.length, v = 0, y = A, w = E;
						 for (r = e.lastIndexOf(T),
						 r < 0 && (r = 0),
						 n = 0; n < r; ++n)
							  e.charCodeAt(n) >= 128 && a("not-basic"),
							  m.push(e.charCodeAt(n));
						 for (i = r > 0 ? r + 1 : 0; i < b; ) {
							  for (o = v,
							  s = 1,
							  c = _; i >= b && a("invalid-input"),
							  u = d(e.charCodeAt(i++)),
							  (u >= _ || u > D((g - v) / s)) && a("overflow"),
							  v += u * s,
							  p = c <= w ? x : c >= w + k ? k : c - w,
							  !(u < p); c += _)
									f = _ - p,
									s > D(g / f) && a("overflow"),
									s *= f;
							  t = m.length + 1,
							  w = h(v - o, t, 0 == o),
							  D(v / t) > g - y && a("overflow"),
							  y += D(v / t),
							  v %= t,
							  m.splice(v++, 0, y)
						 }
						 return l(m)
					}
					function m(e) {
						 var t, r, n, i, o, s, c, l, d, f, m, b, v, y, w, C = [];
						 for (e = u(e),
						 b = e.length,
						 t = A,
						 r = 0,
						 o = E,
						 s = 0; s < b; ++s)
							  (m = e[s]) < 128 && C.push(I(m));
						 for (n = i = C.length,
						 i && C.push(T); n < b; ) {
							  for (c = g,
							  s = 0; s < b; ++s)
									(m = e[s]) >= t && m < c && (c = m);
							  for (v = n + 1,
							  c - t > D((g - r) / v) && a("overflow"),
							  r += (c - t) * v,
							  t = c,
							  s = 0; s < b; ++s)
									if (m = e[s],
									m < t && ++r > g && a("overflow"),
									m == t) {
										 for (l = r,
										 d = _; f = d <= o ? x : d >= o + k ? k : d - o,
										 !(l < f); d += _)
											  w = l - f,
											  y = _ - f,
											  C.push(I(p(f + w % y, 0))),
											  l = D(w / y);
										 C.push(I(p(l, 0))),
										 o = h(r, v, n == i),
										 r = 0,
										 ++n
									}
							  ++r,
							  ++t
						 }
						 return C.join("")
					}
					function b(e) {
						 return c(e, function(e) {
							  return S.test(e) ? f(e.slice(4).toLowerCase()) : e
						 })
					}
					function v(e) {
						 return c(e, function(e) {
							  return M.test(e) ? "xn--" + m(e) : e
						 })
					}
					var y = ("object" == typeof t && t && t.nodeType,
					"object" == typeof e && e && e.nodeType,
					"object" == typeof n && n);
					y.global !== y && y.window !== y && y.self;
					var w, g = 2147483647, _ = 36, x = 1, k = 26, C = 38, O = 700, E = 72, A = 128, T = "-", S = /^xn--/, M = /[^\x20-\x7E]/, N = /[\x2E\u3002\uFF0E\uFF61]/g, j = {
						 overflow: "Overflow: input needs wider integers to process",
						 "not-basic": "Illegal input >= 0x80 (not a basic code point)",
						 "invalid-input": "Invalid input"
					}, q = _ - x, D = Math.floor, I = String.fromCharCode;
					w = {
						 version: "1.4.1",
						 ucs2: {
							  decode: u,
							  encode: l
						 },
						 decode: f,
						 encode: m,
						 toASCII: v,
						 toUnicode: b
					},
					void 0 !== (i = function() {
						 return w
					}
					.call(t, r, t, e)) && (e.exports = i)
			  }()
		 }
		 ).call(t, r(38)(e), r(15))
	},
	49: function(e, t, r) {
		 "use strict";
		 function n(e, t) {
			  return Object.prototype.hasOwnProperty.call(e, t)
		 }
		 e.exports = function(e, t, r, o) {
			  t = t || "&",
			  r = r || "=";
			  var a = {};
			  if ("string" != typeof e || 0 === e.length)
					return a;
			  var s = /\+/g;
			  e = e.split(t);
			  var c = 1e3;
			  o && "number" == typeof o.maxKeys && (c = o.maxKeys);
			  var u = e.length;
			  c > 0 && u > c && (u = c);
			  for (var l = 0; l < u; ++l) {
					var d, p, h, f, m = e[l].replace(s, "%20"), b = m.indexOf(r);
					b >= 0 ? (d = m.substr(0, b),
					p = m.substr(b + 1)) : (d = m,
					p = ""),
					h = decodeURIComponent(d),
					f = decodeURIComponent(p),
					n(a, h) ? i(a[h]) ? a[h].push(f) : a[h] = [a[h], f] : a[h] = f
			  }
			  return a
		 }
		 ;
		 var i = Array.isArray || function(e) {
			  return "[object Array]" === Object.prototype.toString.call(e)
		 }
	},
	50: function(e, t, r) {
		 "use strict";
		 function n(e, t) {
			  if (e.map)
					return e.map(t);
			  for (var r = [], n = 0; n < e.length; n++)
					r.push(t(e[n], n));
			  return r
		 }
		 var i = function(e) {
			  switch (typeof e) {
			  case "string":
					return e;
			  case "boolean":
					return e ? "true" : "false";
			  case "number":
					return isFinite(e) ? e : "";
			  default:
					return ""
			  }
		 };
		 e.exports = function(e, t, r, s) {
			  return t = t || "&",
			  r = r || "=",
			  null === e && (e = void 0),
			  "object" == typeof e ? n(a(e), function(a) {
					var s = encodeURIComponent(i(a)) + r;
					return o(e[a]) ? n(e[a], function(e) {
						 return s + encodeURIComponent(i(e))
					}).join(t) : s + encodeURIComponent(i(e[a]))
			  }).join(t) : s ? encodeURIComponent(i(s)) + r + encodeURIComponent(i(e)) : ""
		 }
		 ;
		 var o = Array.isArray || function(e) {
			  return "[object Array]" === Object.prototype.toString.call(e)
		 }
			, a = Object.keys || function(e) {
			  var t = [];
			  for (var r in e)
					Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
			  return t
		 }
	},
	51: function(e, t, r) {
		 "use strict";
		 t.decode = t.parse = r(49),
		 t.encode = t.stringify = r(50)
	},
	52: function(e, t, r) {
		 "use strict";
		 function n() {
			  this.protocol = null,
			  this.slashes = null,
			  this.auth = null,
			  this.host = null,
			  this.port = null,
			  this.hostname = null,
			  this.hash = null,
			  this.search = null,
			  this.query = null,
			  this.pathname = null,
			  this.path = null,
			  this.href = null
		 }
		 function i(e, t, r) {
			  if (e && u.isObject(e) && e instanceof n)
					return e;
			  var i = new n;
			  return i.parse(e, t, r),
			  i
		 }
		 function o(e) {
			  return u.isString(e) && (e = i(e)),
			  e instanceof n ? e.format() : n.prototype.format.call(e)
		 }
		 function a(e, t) {
			  return i(e, !1, !0).resolve(t)
		 }
		 function s(e, t) {
			  return e ? i(e, !1, !0).resolveObject(t) : t
		 }
		 var c = r(48)
			, u = r(53);
		 t.parse = i,
		 t.resolve = a,
		 t.resolveObject = s,
		 t.format = o,
		 t.Url = n;
		 var l = /^([a-z0-9.+-]+:)/i
			, d = /:[0-9]*$/
			, p = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/
			, h = ["<", ">", '"', "`", " ", "\r", "\n", "\t"]
			, f = ["{", "}", "|", "\\", "^", "`"].concat(h)
			, m = ["'"].concat(f)
			, b = ["%", "/", "?", ";", "#"].concat(m)
			, v = ["/", "?", "#"]
			, y = /^[+a-z0-9A-Z_-]{0,63}$/
			, w = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
			, g = {
			  javascript: !0,
			  "javascript:": !0
		 }
			, _ = {
			  javascript: !0,
			  "javascript:": !0
		 }
			, x = {
			  http: !0,
			  https: !0,
			  ftp: !0,
			  gopher: !0,
			  file: !0,
			  "http:": !0,
			  "https:": !0,
			  "ftp:": !0,
			  "gopher:": !0,
			  "file:": !0
		 }
			, k = r(51);
		 n.prototype.parse = function(e, t, r) {
			  if (!u.isString(e))
					throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
			  var n = e.indexOf("?")
				 , i = -1 !== n && n < e.indexOf("#") ? "?" : "#"
				 , o = e.split(i)
				 , a = /\\/g;
			  o[0] = o[0].replace(a, "/"),
			  e = o.join(i);
			  var s = e;
			  if (s = s.trim(),
			  !r && 1 === e.split("#").length) {
					var d = p.exec(s);
					if (d)
						 return this.path = s,
						 this.href = s,
						 this.pathname = d[1],
						 d[2] ? (this.search = d[2],
						 this.query = t ? k.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "",
						 this.query = {}),
						 this
			  }
			  var h = l.exec(s);
			  if (h) {
					h = h[0];
					var f = h.toLowerCase();
					this.protocol = f,
					s = s.substr(h.length)
			  }
			  if (r || h || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
					var C = "//" === s.substr(0, 2);
					!C || h && _[h] || (s = s.substr(2),
					this.slashes = !0)
			  }
			  if (!_[h] && (C || h && !x[h])) {
					for (var O = -1, E = 0; E < v.length; E++) {
						 var A = s.indexOf(v[E]);
						 -1 !== A && (-1 === O || A < O) && (O = A)
					}
					var T, S;
					S = -1 === O ? s.lastIndexOf("@") : s.lastIndexOf("@", O),
					-1 !== S && (T = s.slice(0, S),
					s = s.slice(S + 1),
					this.auth = decodeURIComponent(T)),
					O = -1;
					for (var E = 0; E < b.length; E++) {
						 var A = s.indexOf(b[E]);
						 -1 !== A && (-1 === O || A < O) && (O = A)
					}
					-1 === O && (O = s.length),
					this.host = s.slice(0, O),
					s = s.slice(O),
					this.parseHost(),
					this.hostname = this.hostname || "";
					var M = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
					if (!M)
						 for (var N = this.hostname.split(/\./), E = 0, j = N.length; E < j; E++) {
							  var q = N[E];
							  if (q && !q.match(y)) {
									for (var D = "", I = 0, P = q.length; I < P; I++)
										 q.charCodeAt(I) > 127 ? D += "x" : D += q[I];
									if (!D.match(y)) {
										 var L = N.slice(0, E)
											, B = N.slice(E + 1)
											, R = q.match(w);
										 R && (L.push(R[1]),
										 B.unshift(R[2])),
										 B.length && (s = "/" + B.join(".") + s),
										 this.hostname = L.join(".");
										 break
									}
							  }
						 }
					this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(),
					M || (this.hostname = c.toASCII(this.hostname));
					var U = this.port ? ":" + this.port : ""
					  , z = this.hostname || "";
					this.host = z + U,
					this.href += this.host,
					M && (this.hostname = this.hostname.substr(1, this.hostname.length - 2),
					"/" !== s[0] && (s = "/" + s))
			  }
			  if (!g[f])
					for (var E = 0, j = m.length; E < j; E++) {
						 var F = m[E];
						 if (-1 !== s.indexOf(F)) {
							  var H = encodeURIComponent(F);
							  H === F && (H = escape(F)),
							  s = s.split(F).join(H)
						 }
					}
			  var V = s.indexOf("#");
			  -1 !== V && (this.hash = s.substr(V),
			  s = s.slice(0, V));
			  var Q = s.indexOf("?");
			  if (-1 !== Q ? (this.search = s.substr(Q),
			  this.query = s.substr(Q + 1),
			  t && (this.query = k.parse(this.query)),
			  s = s.slice(0, Q)) : t && (this.search = "",
			  this.query = {}),
			  s && (this.pathname = s),
			  x[f] && this.hostname && !this.pathname && (this.pathname = "/"),
			  this.pathname || this.search) {
					var U = this.pathname || ""
					  , $ = this.search || "";
					this.path = U + $
			  }
			  return this.href = this.format(),
			  this
		 }
		 ,
		 n.prototype.format = function() {
			  var e = this.auth || "";
			  e && (e = encodeURIComponent(e),
			  e = e.replace(/%3A/i, ":"),
			  e += "@");
			  var t = this.protocol || ""
				 , r = this.pathname || ""
				 , n = this.hash || ""
				 , i = !1
				 , o = "";
			  this.host ? i = e + this.host : this.hostname && (i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"),
			  this.port && (i += ":" + this.port)),
			  this.query && u.isObject(this.query) && Object.keys(this.query).length && (o = k.stringify(this.query));
			  var a = this.search || o && "?" + o || "";
			  return t && ":" !== t.substr(-1) && (t += ":"),
			  this.slashes || (!t || x[t]) && !1 !== i ? (i = "//" + (i || ""),
			  r && "/" !== r.charAt(0) && (r = "/" + r)) : i || (i = ""),
			  n && "#" !== n.charAt(0) && (n = "#" + n),
			  a && "?" !== a.charAt(0) && (a = "?" + a),
			  r = r.replace(/[?#]/g, function(e) {
					return encodeURIComponent(e)
			  }),
			  a = a.replace("#", "%23"),
			  t + i + r + a + n
		 }
		 ,
		 n.prototype.resolve = function(e) {
			  return this.resolveObject(i(e, !1, !0)).format()
		 }
		 ,
		 n.prototype.resolveObject = function(e) {
			  if (u.isString(e)) {
					var t = new n;
					t.parse(e, !1, !0),
					e = t
			  }
			  for (var r = new n, i = Object.keys(this), o = 0; o < i.length; o++) {
					var a = i[o];
					r[a] = this[a]
			  }
			  if (r.hash = e.hash,
			  "" === e.href)
					return r.href = r.format(),
					r;
			  if (e.slashes && !e.protocol) {
					for (var s = Object.keys(e), c = 0; c < s.length; c++) {
						 var l = s[c];
						 "protocol" !== l && (r[l] = e[l])
					}
					return x[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"),
					r.href = r.format(),
					r
			  }
			  if (e.protocol && e.protocol !== r.protocol) {
					if (!x[e.protocol]) {
						 for (var d = Object.keys(e), p = 0; p < d.length; p++) {
							  var h = d[p];
							  r[h] = e[h]
						 }
						 return r.href = r.format(),
						 r
					}
					if (r.protocol = e.protocol,
					e.host || _[e.protocol])
						 r.pathname = e.pathname;
					else {
						 for (var f = (e.pathname || "").split("/"); f.length && !(e.host = f.shift()); )
							  ;
						 e.host || (e.host = ""),
						 e.hostname || (e.hostname = ""),
						 "" !== f[0] && f.unshift(""),
						 f.length < 2 && f.unshift(""),
						 r.pathname = f.join("/")
					}
					if (r.search = e.search,
					r.query = e.query,
					r.host = e.host || "",
					r.auth = e.auth,
					r.hostname = e.hostname || e.host,
					r.port = e.port,
					r.pathname || r.search) {
						 var m = r.pathname || ""
							, b = r.search || "";
						 r.path = m + b
					}
					return r.slashes = r.slashes || e.slashes,
					r.href = r.format(),
					r
			  }
			  var v = r.pathname && "/" === r.pathname.charAt(0)
				 , y = e.host || e.pathname && "/" === e.pathname.charAt(0)
				 , w = y || v || r.host && e.pathname
				 , g = w
				 , k = r.pathname && r.pathname.split("/") || []
				 , f = e.pathname && e.pathname.split("/") || []
				 , C = r.protocol && !x[r.protocol];
			  if (C && (r.hostname = "",
			  r.port = null,
			  r.host && ("" === k[0] ? k[0] = r.host : k.unshift(r.host)),
			  r.host = "",
			  e.protocol && (e.hostname = null,
			  e.port = null,
			  e.host && ("" === f[0] ? f[0] = e.host : f.unshift(e.host)),
			  e.host = null),
			  w = w && ("" === f[0] || "" === k[0])),
			  y)
					r.host = e.host || "" === e.host ? e.host : r.host,
					r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname,
					r.search = e.search,
					r.query = e.query,
					k = f;
			  else if (f.length)
					k || (k = []),
					k.pop(),
					k = k.concat(f),
					r.search = e.search,
					r.query = e.query;
			  else if (!u.isNullOrUndefined(e.search)) {
					if (C) {
						 r.hostname = r.host = k.shift();
						 var O = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
						 O && (r.auth = O.shift(),
						 r.host = r.hostname = O.shift())
					}
					return r.search = e.search,
					r.query = e.query,
					u.isNull(r.pathname) && u.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
					r.href = r.format(),
					r
			  }
			  if (!k.length)
					return r.pathname = null,
					r.search ? r.path = "/" + r.search : r.path = null,
					r.href = r.format(),
					r;
			  for (var E = k.slice(-1)[0], A = (r.host || e.host || k.length > 1) && ("." === E || ".." === E) || "" === E, T = 0, S = k.length; S >= 0; S--)
					E = k[S],
					"." === E ? k.splice(S, 1) : ".." === E ? (k.splice(S, 1),
					T++) : T && (k.splice(S, 1),
					T--);
			  if (!w && !g)
					for (; T--; T)
						 k.unshift("..");
			  !w || "" === k[0] || k[0] && "/" === k[0].charAt(0) || k.unshift(""),
			  A && "/" !== k.join("/").substr(-1) && k.push("");
			  var M = "" === k[0] || k[0] && "/" === k[0].charAt(0);
			  if (C) {
					r.hostname = r.host = M ? "" : k.length ? k.shift() : "";
					var O = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@");
					O && (r.auth = O.shift(),
					r.host = r.hostname = O.shift())
			  }
			  return w = w || r.host && k.length,
			  w && !M && k.unshift(""),
			  k.length ? r.pathname = k.join("/") : (r.pathname = null,
			  r.path = null),
			  u.isNull(r.pathname) && u.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
			  r.auth = e.auth || r.auth,
			  r.slashes = r.slashes || e.slashes,
			  r.href = r.format(),
			  r
		 }
		 ,
		 n.prototype.parseHost = function() {
			  var e = this.host
				 , t = d.exec(e);
			  t && (t = t[0],
			  ":" !== t && (this.port = t.substr(1)),
			  e = e.substr(0, e.length - t.length)),
			  e && (this.hostname = e)
		 }
	},
	53: function(e, t, r) {
		 "use strict";
		 e.exports = {
			  isString: function(e) {
					return "string" == typeof e
			  },
			  isObject: function(e) {
					return "object" == typeof e && null !== e
			  },
			  isNull: function(e) {
					return null === e
			  },
			  isNullOrUndefined: function(e) {
					return null == e
			  }
		 }
	},
	54: function(e, t, r) {
		 "use strict";
		 (function(t) {
			  function n(e) {
					return e && e.__esModule ? e : {
						 default: e
					}
			  }
			  function i() {
					return "experiment"
			  }
			  function o() {
					return 1
			  }
			  function a() {
					return "experience"
			  }
			  function s(e) {
					var r = e.e
					  , n = e.url;
					t.log && t.log({
						 content: "api error " + n,
						 error: (0,
						 d.default)(r),
						 level: 3
					})
			  }
			  var c = r(7)
				 , u = n(c)
				 , l = r(16)
				 , d = n(l)
				 , p = r(14)
				 , h = n(p)
				 , f = r(13)
				 , m = n(f)
				 , b = function() {
					var e = (0,
					m.default)(h.default.mark(function t(e) {
						 var r, n, i = e.req;
						 return h.default.wrap(function(e) {
							  for (; ; )
									switch (e.prev = e.next) {
									case 0:
										 if (r = V(i.useragent.source),
										 n = Q(i.url, i, r),
										 !(["bdts"].indexOf(n) >= 0)) {
											  e.next = 6;
											  break
										 }
										 return e.abrupt("return", "home_second_test_normal");
									case 6:
										 return e.abrupt("return", "home_second_test");
									case 7:
									case "end":
										 return e.stop()
									}
						 }, t, this)
					}));
					return function(t) {
						 return e.apply(this, arguments)
					}
			  }()
				 , v = function() {
					var e = (0,
					m.default)(h.default.mark(function t(e) {
						 var r, n = e.req, s = e.res;
						 return h.default.wrap(function(e) {
							  for (; ; )
									switch (e.prev = e.next) {
									case 0:
										 return r = void 0,
										 n.cookies.pos ? r = Number(n.cookies.pos) : (r = Number((100 * Math.random()).toFixed()) % 100,
										 s.set("set-cookie", "pos=" + r + "; Max-Age=94608000; Domain=bilibili.com; Path=/")),
										 e.abrupt("return", {
											  normal: i(),
											  newOpenApp: o(),
											  videoHlv: "1",
											  showOperationZone: a()
										 });
									case 3:
									case "end":
										 return e.stop()
									}
						 }, t, this)
					}));
					return function(t) {
						 return e.apply(this, arguments)
					}
			  }()
				 , y = function() {
					var e = (0,
					m.default)(h.default.mark(function t() {
						 return h.default.wrap(function(e) {
							  for (; ; )
									switch (e.prev = e.next) {
									case 0:
										 return e.abrupt("return", $);
									case 1:
									case "end":
										 return e.stop()
									}
						 }, t, this)
					}));
					return function() {
						 return e.apply(this, arguments)
					}
			  }()
				 , w = function() {
					var e = (0,
					m.default)(h.default.mark(function t(e) {
						 var r, n, i, o = e.id, a = e.req;
						 return h.default.wrap(function(e) {
							  for (; ; )
									switch (e.prev = e.next) {
									case 0:
										 return r = Y + "/x/playlist/info?pid=" + o,
										 e.prev = 1,
										 n = void 0,
										 a ? (n = L.get(r),
										 a.headers["x-real-ip"] && n.set("x-backend-bili-real-ip", a.headers["x-real-ip"])) : n = L.get(r),
										 e.next = 6,
										 n;
									case 6:
										 if (i = e.sent,
										 0 !== i.body.code) {
											  e.next = 9;
											  break
										 }
										 return e.abrupt("return", i.body.data);
									case 9:
										 s({
											  e: i.body,
											  url: r
										 }),
										 e.next = 15;
										 break;
									case 12:
										 e.prev = 12,
										 e.t0 = e.catch(1),
										 s({
											  e: e.t0,
											  url: r
										 });
									case 15:
										 return e.abrupt("return", null);
									case 16:
									case "end":
										 return e.stop()
									}
						 }, t, this, [[1, 12]])
					}));
					return function(t) {
						 return e.apply(this, arguments)
					}
			  }()
				 , g = function() {
					var e = (0,
					m.default)(h.default.mark(function t() {
						 var e;
						 return h.default.wrap(function(t) {
							  for (; ; )
									switch (t.prev = t.next) {
									case 0:
										 return t.next = 2,
										 L.get("//api.bilibili.com/x/web-interface/zone?jsonp=jsonp");
									case 2:
										 if (e = t.sent,
										 0 !== e.body.code) {
											  t.next = 5;
											  break
										 }
										 return t.abrupt("return", e.body.data);
									case 5:
										 return t.abrupt("return", null);
									case 6:
									case "end":
										 return t.stop()
									}
						 }, t, this)
					}));
					return function() {
						 return e.apply(this, arguments)
					}
			  }()
				 , _ = function() {
					var e = (0,
					m.default)(h.default.mark(function t(e) {
						 var r, n, i, o, a = e.req, c = e.res, u = e.id;
						 return h.default.wrap(function(e) {
							  for (; ; )
									switch (e.prev = e.next) {
									case 0:
										 return r = void 0,
										 r = Y + "/x/web-goblin/channel?id=" + u,
										 e.prev = 2,
										 n = L.get(r).withCredentials(),
										 a && (a.headers["x-real-ip"] && n.set("x-backend-bili-real-ip", a.headers["x-real-ip"]),
										 a.cookies.buvidq ? n.set("Cookie", F({
											  buvid3: a.cookies.buvidq
										 })) : (i = G(),
										 n.set("Cookie", "buvid3=" + i + "infoc"),
										 c && c.set("set-cookie", "buvidq=" + i + "infoc; Max-Age=300; Domain=bilibili.com; Path=/"))),
										 e.next = 7,
										 n;
									case 7:
										 if (o = e.sent,
										 0 !== o.body.code) {
											  e.next = 10;
											  break
										 }
										 return e.abrupt("return", o.body.data);
									case 10:
										 s({
											  e: o.body,
											  url: r
										 }),
										 e.next = 16;
										 break;
									case 13:
										 e.prev = 13,
										 e.t0 = e.catch(2),
										 s({
											  e: e.t0,
											  url: r
										 });
									case 16:
										 return e.abrupt("return", null);
									case 17:
									case "end":
										 return e.stop()
									}
						 }, t, this, [[2, 13]])
					}));
					return function(t) {
						 return e.apply(this, arguments)
					}
			  }()
				 , x = function() {
					var e = (0,
					m.default)(h.default.mark(function t(e) {
						 var r, n, i, o = e.req;
						 return h.default.wrap(function(e) {
							  for (; ; )
									switch (e.prev = e.next) {
									case 0:
										 return r = void 0,
										 r = Y + "/x/web-show/res/loc?&pf=7&id=2806",
										 e.prev = 2,
										 n = L.get(r),
										 o && o.headers["x-real-ip"] && n.set("x-backend-bili-real-ip", o.headers["x-real-ip"]),
										 e.next = 7,
										 n;
									case 7:
										 if (i = e.sent,
										 0 !== i.body.code) {
											  e.next = 10;
											  break
										 }
										 return e.abrupt("return", i.body.data);
									case 10:
										 s({
											  e: i.body,
											  url: r
										 }),
										 e.next = 16;
										 break;
									case 13:
										 e.prev = 13,
										 e.t0 = e.catch(2),
										 s({
											  e: e.t0,
											  url: r
										 });
									case 16:
										 return e.abrupt("return", null);
									case 17:
									case "end":
										 return e.stop()
									}
						 }, t, this, [[2, 13]])
					}));
					return function(t) {
						 return e.apply(this, arguments)
					}
			  }()
				 , k = function() {
					var e = (0,
					m.default)(h.default.mark(function t(e) {
						 var r, n, i = e.auid;
						 return h.default.wrap(function(e) {
							  for (; ; )
									switch (e.prev = e.next) {
									case 0:
										 if (!i || /^(\d)+$/.test(String(i))) {
											  e.next = 2;
											  break
										 }
										 return e.abrupt("return", null);
									case 2:
										 return r = Y + "/audio/music-service-c/web/song/info/h5?sid=" + i,
										 e.prev = 3,
										 e.next = 6,
										 L.get(r);
									case 6:
										 if (n = e.sent,
										 0 !== n.body.code) {
											  e.next = 9;
											  break
										 }
										 return e.abrupt("return", n.body.data);
									case 9:
										 s({
											  e: n.body,
											  url: r
										 }),
										 e.next = 15;
										 break;
									case 12:
										 e.prev = 12,
										 e.t0 = e.catch(3),
										 s({
											  e: e.t0,
											  url: r
										 });
									case 15:
										 return e.abrupt("return", null);
									case 16:
									case "end":
										 return e.stop()
									}
						 }, t, this, [[3, 12]])
					}));
					return function(t) {
						 return e.apply(this, arguments)
					}
			  }()
				 , C = function() {
					var e = (0,
					m.default)(h.default.mark(function t(e) {
						 var r, n, i, o = e.auid;
						 return h.default.wrap(function(e) {
							  for (; ; )
									switch (e.prev = e.next) {
									case 0:
										 if (!o || /^(\d)+$/.test(String(o))) {
											  e.next = 2;
											  break
										 }
										 return e.abrupt("return", null);
									case 2:
										 return r = void 0,
										 J && (r = J()),
										 n = X + "/audio/music-service-c/h5/songs/" + o + (r ? "?" + r : ""),
										 e.prev = 5,
										 e.next = 8,
										 L.get(n);
									case 8:
										 if (i = e.sent,
										 0 !== i.body.code) {
											  e.next = 11;
											  break
										 }
										 return e.abrupt("return", i.body.data);
									case 11:
										 s({
											  e: i.body,
											  url: n
										 }),
										 e.next = 17;
										 break;
									case 14:
										 e.prev = 14,
										 e.t0 = e.catch(5),
										 s({
											  e: e.t0,
											  url: n
										 });
									case 17:
										 return e.abrupt("return", null);
									case 18:
									case "end":
										 return e.stop()
									}
						 }, t, this, [[5, 14]])
					}));
					return function(t) {
						 return e.apply(this, arguments)
					}
			  }()
				 , O = function() {
					var e = (0,
					m.default)(h.default.mark(function t(e) {
						 var r, n, i, o = e.mid;
						 return h.default.wrap(function(e) {
							  for (; ; )
									switch (e.prev = e.next) {
									case 0:
										 return r = void 0,
										 J && (r = J()),
										 n = X + "/audio/music-service-c/h5/menus/" + o + (r ? "?" + r : ""),
										 e.prev = 3,
										 e.next = 6,
										 L.get(n);
									case 6:
										 if (i = e.sent,
										 0 !== i.body.code) {
											  e.next = 9;
											  break
										 }
										 return e.abrupt("return", i.body.data);
									case 9:
										 s({
											  e: i.body,
											  url: n
										 }),
										 e.next = 15;
										 break;
									case 12:
										 e.prev = 12,
										 e.t0 = e.catch(3),
										 s({
											  e: e.t0,
											  url: n
										 });
									case 15:
										 return e.abrupt("return", null);
									case 16:
									case "end":
										 return e.stop()
									}
						 }, t, this, [[3, 12]])
					}));
					return function(t) {
						 return e.apply(this, arguments)
					}
			  }()
				 , E = function() {
					var e = (0,
					m.default)(h.default.mark(function t() {
						 var e, r;
						 return h.default.wrap(function(t) {
							  for (; ; )
									switch (t.prev = t.next) {
									case 0:
										 return e = X + "/x/space/myinfo",
										 t.next = 3,
										 L.get(e).withCredentials();
									case 3:
										 if (r = t.sent,
										 0 !== r.body.code) {
											  t.next = 6;
											  break
										 }
										 return t.abrupt("return", (0,
										 u.default)({}, r.body.data, {
											  level_info: r.body.data.level_exp
										 }));
									case 6:
										 return t.abrupt("return", null);
									case 7:
									case "end":
										 return t.stop()
									}
						 }, t, this)
					}));
					return function() {
						 return e.apply(this, arguments)
					}
			  }()
				 , A = function() {
					var e = (0,
					m.default)(h.default.mark(function r(e) {
						 var n, i, o, a, c, u = e.mid, l = e.req;
						 return h.default.wrap(function(e) {
							  for (; ; )
									switch (e.prev = e.next) {
									case 0:
										 if (n = void 0,
										 J && (n = J({
											  query: "mid=" + u
										 })),
										 i = void 0,
										 i = K ? Y + "/x/space/acc/info?mid=" + u : X + "/x/internal/space/acc/info?mid=" + u + (n ? "&" + n : ""),
										 e.prev = 4,
										 o = void 0,
										 !t.client || !t.client.connected) {
											  e.next = 12;
											  break
										 }
										 return e.next = 9,
										 H("userSpace" + u);
									case 9:
										 if (!(o = e.sent)) {
											  e.next = 12;
											  break
										 }
										 return e.abrupt("return", JSON.parse(o).data);
									case 12:
										 if (o) {
											  e.next = 23;
											  break
										 }
										 return a = L.get(i),
										 l && l.headers["x-real-ip"] && a.set("x-backend-bili-real-ip", l.headers["x-real-ip"]),
										 e.next = 17,
										 a;
									case 17:
										 if (c = e.sent,
										 0 !== c.body.code) {
											  e.next = 22;
											  break
										 }
										 return o = (0,
										 d.default)(c.body),
										 t.client && t.client.connected && (t.client.set("userSpace" + u, o),
										 t.client.expire("userSpace" + u, 3600)),
										 e.abrupt("return", c.body.data);
									case 22:
										 s({
											  e: c.body,
											  url: i
										 });
									case 23:
										 e.next = 28;
										 break;
									case 25:
										 e.prev = 25,
										 e.t0 = e.catch(4),
										 s({
											  e: e.t0,
											  url: i
										 });
									case 28:
										 return e.abrupt("return", null);
									case 29:
									case "end":
										 return e.stop()
									}
						 }, r, this, [[4, 25]])
					}));
					return function(t) {
						 return e.apply(this, arguments)
					}
			  }()
				 , T = function() {
					var e = (0,
					m.default)(h.default.mark(function t() {
						 var e, r, n;
						 return h.default.wrap(function(t) {
							  for (; ; )
									switch (t.prev = t.next) {
									case 0:
										 return e = Y + "/x/web-interface/nav",
										 t.prev = 1,
										 r = L.get(e).withCredentials(),
										 t.next = 5,
										 r;
									case 5:
										 if (n = t.sent,
										 0 !== n.body.code) {
											  t.next = 8;
											  break
										 }
										 return t.abrupt("return", n.body.data);
									case 8:
										 t.next = 13;
										 break;
									case 10:
										 t.prev = 10,
										 t.t0 = t.catch(1),
										 s({
											  e: t.t0,
											  url: e
										 });
									case 13:
										 return t.abrupt("return", null);
									case 14:
									case "end":
										 return t.stop()
									}
						 }, t, this, [[1, 10]])
					}));
					return function() {
						 return e.apply(this, arguments)
					}
			  }()
				 , S = function() {
					var e = (0,
					m.default)(h.default.mark(function r(e) {
						 var n, i, o, a, c, u = e.tagId, l = e.req;
						 return h.default.wrap(function(e) {
							  for (; ; )
									switch (e.prev = e.next) {
									case 0:
										 if (n = void 0,
										 J && (n = J({
											  query: "tag_id=" + u
										 })),
										 i = void 0,
										 i = K ? X + "/x/tag/info?tag_id=" + u : X + "/x/internal/tag/info?tag_id=" + u + (n ? "&" + n : ""),
										 e.prev = 4,
										 o = void 0,
										 !t.client || !t.client.connected) {
											  e.next = 12;
											  break
										 }
										 return e.next = 9,
										 H("tagInfo" + u);
									case 9:
										 if (!(o = e.sent)) {
											  e.next = 12;
											  break
										 }
										 return e.abrupt("return", JSON.parse(o).data);
									case 12:
										 if (o) {
											  e.next = 23;
											  break
										 }
										 return a = L.get(i),
										 l && l.headers["x-real-ip"] && a.set("x-backend-bili-real-ip", l.headers["x-real-ip"]),
										 e.next = 17,
										 a;
									case 17:
										 if (c = e.sent,
										 0 !== c.body.code) {
											  e.next = 22;
											  break
										 }
										 return o = (0,
										 d.default)(c.body),
										 t.client && t.client.connected && (t.client.set("tagInfo" + u, o),
										 t.client.expire("tagInfo" + u, 600)),
										 e.abrupt("return", c.body.data);
									case 22:
										 s({
											  e: c.body,
											  url: i
										 });
									case 23:
										 e.next = 28;
										 break;
									case 25:
										 e.prev = 25,
										 e.t0 = e.catch(4),
										 s({
											  e: e.t0,
											  url: i
										 });
									case 28:
										 return e.abrupt("return", null);
									case 29:
									case "end":
										 return e.stop()
									}
						 }, r, this, [[4, 25]])
					}));
					return function(t) {
						 return e.apply(this, arguments)
					}
			  }()
				 , M = function() {
					var e = (0,
					m.default)(h.default.mark(function r(e) {
						 var n, i, o, a, c, u = e.tagId, l = e.req;
						 return h.default.wrap(function(e) {
							  for (; ; )
									switch (e.prev = e.next) {
									case 0:
										 if (n = void 0,
										 J && (n = J({
											  query: "tag_id=" + u
										 })),
										 i = void 0,
										 i = K ? X + "/x/tag/change/similar?tag_id=" + u : X + "/x/internal/tag/change/similar?tag_id=" + u + (n ? "&" + n : ""),
										 e.prev = 4,
										 o = void 0,
										 !t.client || !t.client.connected) {
											  e.next = 12;
											  break
										 }
										 return e.next = 9,
										 H("tagSimilar" + u);
									case 9:
										 if (!(o = e.sent)) {
											  e.next = 12;
											  break
										 }
										 return e.abrupt("return", JSON.parse(o).data);
									case 12:
										 if (o) {
											  e.next = 23;
											  break
										 }
										 return a = L.get(i),
										 l && l.headers["x-real-ip"] && a.set("x-backend-bili-real-ip", l.headers["x-real-ip"]),
										 e.next = 17,
										 a;
									case 17:
										 if (c = e.sent,
										 0 !== c.body.code) {
											  e.next = 22;
											  break
										 }
										 return o = (0,
										 d.default)(c.body),
										 t.client && t.client.connected && (t.client.set("tagSimilar" + u, o),
										 t.client.expire("tagSimilar" + u, 600)),
										 e.abrupt("return", c.body.data);
									case 22:
										 s({
											  e: c.body,
											  url: i
										 });
									case 23:
										 e.next = 28;
										 break;
									case 25:
										 e.prev = 25,
										 e.t0 = e.catch(4),
										 s({
											  e: e.t0,
											  url: i
										 });
									case 28:
										 return e.abrupt("return", null);
									case 29:
									case "end":
										 return e.stop()
									}
						 }, r, this, [[4, 25]])
					}));
					return function(t) {
						 return e.apply(this, arguments)
					}
			  }()
				 , N = function() {
					var e = (0,
					m.default)(h.default.mark(function r(e) {
						 var n, i, o, a, c, u = e.tagId, l = e.req;
						 return h.default.wrap(function(e) {
							  for (; ; )
									switch (e.prev = e.next) {
									case 0:
										 if (n = void 0,
										 J && (n = J({
											  query: "tid=" + u + "&pn=1&ps=20"
										 })),
										 i = void 0,
										 i = K ? X + "/x/web-interface/tag/top?tid=" + u + "&pn=1&ps=20" : X + "/x/internal/web-interface/tag/top?tid=" + u + "&pn=1&ps=20" + (n ? "&" + n : ""),
										 e.prev = 4,
										 o = void 0,
										 !t.client || !t.client.connected) {
											  e.next = 12;
											  break
										 }
										 return e.next = 9,
										 H("tagVideos" + u);
									case 9:
										 if (!(o = e.sent)) {
											  e.next = 12;
											  break
										 }
										 return e.abrupt("return", JSON.parse(o).data);
									case 12:
										 if (o) {
											  e.next = 23;
											  break
										 }
										 return a = L.get(i),
										 l && l.headers["x-real-ip"] && a.set("x-backend-bili-real-ip", l.headers["x-real-ip"]),
										 e.next = 17,
										 a;
									case 17:
										 if (c = e.sent,
										 0 !== c.body.code) {
											  e.next = 22;
											  break
										 }
										 return o = (0,
										 d.default)(c.body),
										 t.client && t.client.connected && (t.client.set("tagVideos" + u, o),
										 t.client.expire("tagVideos" + u, 600)),
										 e.abrupt("return", c.body.data);
									case 22:
										 s({
											  e: c.body,
											  url: i
										 });
									case 23:
										 e.next = 28;
										 break;
									case 25:
										 e.prev = 25,
										 e.t0 = e.catch(4),
										 s({
											  e: e.t0,
											  url: i
										 });
									case 28:
										 return e.abrupt("return", null);
									case 29:
									case "end":
										 return e.stop()
									}
						 }, r, this, [[4, 25]])
					}));
					return function(t) {
						 return e.apply(this, arguments)
					}
			  }()
				 , j = function() {
					var e = (0,
					m.default)(h.default.mark(function r(e) {
						 var n, i, o, a, c, u = e.aid, l = e.cookies, p = e.req;
						 return h.default.wrap(function(e) {
							  for (; ; )
									switch (e.prev = e.next) {
									case 0:
										 if (n = void 0,
										 J && (n = J({
											  query: "aid=" + u
										 })),
										 i = void 0,
										 i = K ? X + "/x/web-interface/view?aid=" + u : X + "/x/internal/web-interface/view?aid=" + u + (n ? "&" + n : ""),
										 e.prev = 4,
										 o = void 0,
										 !t.client || !t.client.connected) {
											  e.next = 12;
											  break
										 }
										 return e.next = 9,
										 H("videoInfo" + u);
									case 9:
										 if (!(o = e.sent)) {
											  e.next = 12;
											  break
										 }
										 return e.abrupt("return", JSON.parse(o).data);
									case 12:
										 if (o) {
											  e.next = 24;
											  break
										 }
										 return a = L.get(i),
										 l && (l = F(l),
										 a.set("Cookie", l)),
										 p && p.headers["x-real-ip"] && a.set("x-backend-bili-real-ip", p.headers["x-real-ip"]),
										 e.next = 18,
										 a.withCredentials();
									case 18:
										 if (c = e.sent,
										 0 !== c.body.code) {
											  e.next = 23;
											  break
										 }
										 return o = (0,
										 d.default)(c.body),
										 t.client && t.client.connected && !c.body.data.no_cache && (t.client.set("videoInfo" + u, o),
										 t.client.expire("videoInfo" + u, 600)),
										 e.abrupt("return", c.body.data);
									case 23:
										 s({
											  e: c.body,
											  url: i
										 });
									case 24:
										 e.next = 29;
										 break;
									case 26:
										 e.prev = 26,
										 e.t0 = e.catch(4),
										 s({
											  e: e.t0,
											  url: i
										 });
									case 29:
										 return e.abrupt("return", null);
									case 30:
									case "end":
										 return e.stop()
									}
						 }, r, this, [[4, 26]])
					}));
					return function(t) {
						 return e.apply(this, arguments)
					}
			  }()
				 , q = function() {
					var e = (0,
					m.default)(h.default.mark(function r(e) {
						 var n, i, o, a, c, u = e.aid, l = e.req;
						 return h.default.wrap(function(e) {
							  for (; ; )
									switch (e.prev = e.next) {
									case 0:
										 if (n = void 0,
										 J && (n = J({
											  query: "aid=" + u
										 })),
										 i = void 0,
										 i = K ? X + "/x/tag/archive/tags?aid=" + u : X + "/x/internal/tag/archive/tags?aid=" + u + (n ? "&" + n : ""),
										 e.prev = 4,
										 o = void 0,
										 !t.client || !t.client.connected) {
											  e.next = 12;
											  break
										 }
										 return e.next = 9,
										 H("videoTag" + u);
									case 9:
										 if (!(o = e.sent)) {
											  e.next = 12;
											  break
										 }
										 return e.abrupt("return", JSON.parse(o).data);
									case 12:
										 if (o) {
											  e.next = 23;
											  break
										 }
										 return a = L.get(i),
										 l && l.headers["x-real-ip"] && a.set("x-backend-bili-real-ip", l.headers["x-real-ip"]),
										 e.next = 17,
										 a.withCredentials();
									case 17:
										 if (c = e.sent,
										 0 !== c.body.code) {
											  e.next = 22;
											  break
										 }
										 return o = (0,
										 d.default)(c.body),
										 t.client && t.client.connected && (t.client.set("videoTag" + u, o),
										 t.client.expire("videoTag" + u, 600)),
										 e.abrupt("return", c.body.data);
									case 22:
										 s({
											  e: c.body,
											  url: i
										 });
									case 23:
										 e.next = 28;
										 break;
									case 25:
										 e.prev = 25,
										 e.t0 = e.catch(4),
										 s({
											  e: e.t0,
											  url: i
										 });
									case 28:
										 return e.abrupt("return", null);
									case 29:
									case "end":
										 return e.stop()
									}
						 }, r, this, [[4, 25]])
					}));
					return function(t) {
						 return e.apply(this, arguments)
					}
			  }()
				 , D = function() {
					var e = (0,
					m.default)(h.default.mark(function t(e) {
						 var r, n, i, o, a = e.cid, c = e.aid, u = e.req;
						 return h.default.wrap(function(e) {
							  for (; ; )
									switch (e.prev = e.next) {
									case 0:
										 return r = void 0,
										 J && (r = J({
											  query: "cid=" + a + "&avid=" + c + "&platform=html5&otype=json&qn=16&type=mp4&html5=1"
										 })),
										 n = void 0,
										 n = K ? X + "/x/player/playurl?cid=" + a + "&avid=" + c + "&platform=html5&otype=json&qn=16&type=mp4&html5=1" : X + "/x/internal/player/playurl?cid=" + a + "&avid=" + c + "&platform=html5&otype=json&qn=16&type=mp4&html5=1" + (r ? "&" + r : ""),
										 e.prev = 4,
										 i = L.get(n),
										 u && u.headers["x-real-ip"] && i.set("x-backend-bili-real-ip", u.headers["x-real-ip"]),
										 e.next = 9,
										 i.withCredentials();
									case 9:
										 if (o = e.sent,
										 0 !== o.body.code) {
											  e.next = 12;
											  break
										 }
										 return e.abrupt("return", o.body.data);
									case 12:
										 s({
											  e: o.body,
											  url: n
										 }),
										 e.next = 18;
										 break;
									case 15:
										 e.prev = 15,
										 e.t0 = e.catch(4),
										 s({
											  e: e.t0,
											  url: n
										 });
									case 18:
										 return e.abrupt("return", null);
									case 19:
									case "end":
										 return e.stop()
									}
						 }, t, this, [[4, 15]])
					}));
					return function(t) {
						 return e.apply(this, arguments)
					}
			  }()
				 , I = function() {
					var e = (0,
					m.default)(h.default.mark(function t(e) {
						 var r, n, i, o = e.id, a = e.req;
						 return h.default.wrap(function(e) {
							  for (; ; )
									switch (e.prev = e.next) {
									case 0:
										 return r = Y + "/medialist/gateway/base/info?media_id=" + o,
										 e.prev = 1,
										 n = L.get(r),
										 a && n.set("x-backend-bili-real-ip", a.headers["x-real-ip"]),
										 e.next = 6,
										 n;
									case 6:
										 if (i = e.sent,
										 0 !== i.body.code) {
											  e.next = 9;
											  break
										 }
										 return e.abrupt("return", i.body.data);
									case 9:
										 s({
											  e: i.body,
											  url: r
										 }),
										 e.next = 15;
										 break;
									case 12:
										 e.prev = 12,
										 e.t0 = e.catch(1),
										 s({
											  e: e.t0,
											  url: r
										 });
									case 15:
										 return e.abrupt("return", null);
									case 16:
									case "end":
										 return e.stop()
									}
						 }, t, this, [[1, 12]])
					}));
					return function(t) {
						 return e.apply(this, arguments)
					}
			  }()
				 , P = function() {
					var e = (0,
					m.default)(h.default.mark(function t(e) {
						 var r, n, i, o = e.id, a = e.req;
						 return h.default.wrap(function(e) {
							  for (; ; )
									switch (e.prev = e.next) {
									case 0:
										 return r = Y + "/medialist/gateway/base/detail?media_id=" + o + "&pn=1&ps=20",
										 e.prev = 1,
										 n = L.get(r),
										 a && n.set("x-backend-bili-real-ip", a.headers["x-real-ip"]),
										 e.next = 6,
										 n;
									case 6:
										 if (i = e.sent,
										 0 !== i.body.code) {
											  e.next = 9;
											  break
										 }
										 return e.abrupt("return", i.body.data);
									case 9:
										 s({
											  e: i.body,
											  url: r
										 }),
										 e.next = 15;
										 break;
									case 12:
										 e.prev = 12,
										 e.t0 = e.catch(1),
										 s({
											  e: e.t0,
											  url: r
										 });
									case 15:
										 return e.abrupt("return", null);
									case 16:
									case "end":
										 return e.stop()
									}
						 }, t, this, [[1, 12]])
					}));
					return function(t) {
						 return e.apply(this, arguments)
					}
			  }()
				 , L = r(20)
				 , B = r(22)
				 , R = B.clearDesc
				 , U = B.resetForRanking
				 , z = B.checkPartitionInfo
				 , F = B.changeCookieFormat
				 , H = B.getInfoFromRedis
				 , V = B.getBrowserVersion
				 , Q = B.identifyBsource
				 , $ = r(21)
				 , G = r(59)
				 , W = r(19);
			  R($);
			  var J = void 0
				 , K = "undefined" != typeof window
				 , X = void 0
				 , Y = void 0;
			  K ? (Y = "//api.bilibili.com",
			  X = "//api.bilibili.com") : (Y = "http://api.bilibili.com",
			  X = "http://api.bilibili.co",
			  J = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
					  , r = e.query
					  , n = Date.parse(String(new Date)) / 1e3;
					r = (r ? r + "&" : "") + "appkey=" + t.appKey + "&ts=" + n,
					r = r.split("&").sort().join("&").replace(/('|!|\(|\))/g, function(e) {
						 return escape(e)
					}).replace(/\*/g, "%2A");
					var i = W(r + t.appSecret).toLocaleLowerCase();
					return "appkey=" + t.appKey + "&ts=" + n + "&sign=" + i
			  }
			  ),
			  e.exports = {
					fetchPlayListDetail: P,
					fetchNewPlayListInfo: I,
					fetchSelfInfo: E,
					fetchVideoTags: q,
					clearDesc: R,
					fetchPartitionList: y,
					fetchAudioInfo: C,
					fetchAudioListInfo: O,
					checkPartitionInfo: z,
					resetForRanking: U,
					fetchUserInfo: A,
					checkUserLogin: T,
					fetchTagInfo: S,
					fetchTagSimilar: M,
					fetchTagVideos: N,
					fetchVideoInfo: j,
					fetchPlayListInfo: w,
					checkABtestStrategy: v,
					indexABtestStrategy: b,
					fetchAudioRelativeList: k,
					fetchUserArea: g,
					fetchHomeAdditionContent: x,
					fetchNewChannelInfo: _,
					fetchVideoPlayUrl: D
			  }
		 }
		 ).call(t, r(15))
	},
	543: function(e, t) {
		 e.exports = "//s1.hdslb.com/bfs/static/mult/images/close1.png"
	},
	57: function(e, t) {
		 function r(e, t) {
			  var r = t || 0
				 , i = n;
			  return [i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]]].join("")
		 }
		 for (var n = [], i = 0; i < 256; ++i)
			  n[i] = (i + 256).toString(16).substr(1);
		 e.exports = r
	},
	574: function(e, t) {
		 e.exports = "//s1.hdslb.com/bfs/static/mult/images/remind.png"
	},
	58: function(e, t) {
		 var r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
		 if (r) {
			  var n = new Uint8Array(16);
			  e.exports = function() {
					return r(n),
					n
			  }
		 } else {
			  var i = new Array(16);
			  e.exports = function() {
					for (var e, t = 0; t < 16; t++)
						 0 == (3 & t) && (e = 4294967296 * Math.random()),
						 i[t] = e >>> ((3 & t) << 3) & 255;
					return i
			  }
		 }
	},
	59: function(e, t, r) {
		 function n(e, t, r) {
			  var n = t && r || 0;
			  "string" == typeof e && (t = "binary" === e ? new Array(16) : null,
			  e = null),
			  e = e || {};
			  var a = e.random || (e.rng || i)();
			  if (a[6] = 15 & a[6] | 64,
			  a[8] = 63 & a[8] | 128,
			  t)
					for (var s = 0; s < 16; ++s)
						 t[n + s] = a[s];
			  return t || o(a)
		 }
		 var i = r(58)
			, o = r(57);
		 e.exports = n
	},
	6: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  var t = void 0;
			  return e = Math.floor(e),
			  t = ("0" + e % 60).slice(-2),
			  t = Math.floor(e / 60) + ":" + t,
			  t.length < 5 && (t = "0" + t),
			  t
		 }
		 function i(e) {
			  var t = e.toString(2);
			  return 1 === t.length ? {
					needLoginToPlay: !1,
					needPaymentToPlay: !1,
					disable: "1" === t[0]
			  } : 2 === t.length ? {
					needLoginToPlay: !1,
					needPaymentToPlay: "1" === t[0],
					disable: "1" === t[1]
			  } : 3 === t.length ? {
					needLoginToPlay: "1" === t[0],
					needPaymentToPlay: "1" === t[1],
					disable: "1" === t[2]
			  } : void 0
		 }
		 function o(e) {
			  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
			  return isNaN(Number(e)) ? "--" : (e = Number(e),
			  e >= 1e4 ? (e / 1e4).toFixed(t) + "万" : e)
		 }
		 function a(e, t) {
			  e && !s(e, t) && (e.className += " " + t)
		 }
		 function s(e, t) {
			  return !(!e || -1 === e.className.split(" ").indexOf(t))
		 }
		 function c(e, t) {
			  if (e) {
					var r = t.split(" ")
					  , n = e.className.split(" ");
					e.className = n.filter(function(e) {
						 return r.indexOf(e) < 0
					}).join(" ")
			  }
		 }
		 function u(e, t, r) {
			  var n = null
				 , i = void 0;
			  return function() {
					var o = this
					  , a = arguments
					  , s = +new Date;
					clearTimeout(n),
					i || (i = s),
					s - i >= r ? (e.apply(o, a),
					i = s) : n = setTimeout(function() {
						 e.apply(o, a)
					}, t)
			  }
		 }
		 function l() {
			  !function() {
					var e = 0;
					window.requestAnimationFrame || (window.requestAnimationFrame = function(t, r) {
						 var n = (new Date).getTime()
							, i = Math.max(0, 16.7 - (n - e))
							, o = window.setTimeout(function() {
							  t(n + i)
						 }, i);
						 return e = n + i,
						 o
					}
					),
					window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
						 clearTimeout(e)
					}
					)
			  }();
			  var e = void 0;
			  window.cancelAnimationFrame(e),
			  e = window.requestAnimationFrame(function t() {
					var r = document.body.scrollTop || document.documentElement.scrollTop;
					r > 0 ? (document.body.scrollTop > 0 ? document.body.scrollTop = r - 150 > 0 ? r - 150 : 0 : document.documentElement.scrollTop && (document.documentElement.scrollTop = r - 150 > 0 ? r - 150 : 0),
					e = window.requestAnimationFrame(t)) : window.cancelAnimationFrame(e)
			  })
		 }
		 function d(e) {
			  var t = e % 60
				 , r = parseInt(e / 60)
				 , n = parseInt(r / 60) < 10 ? "0" + parseInt(r / 60) : parseInt(r / 60);
			  r = r % 60 < 10 ? "0" + r % 60 : r % 60;
			  var t = t < 10 ? "0" + parseInt(t) : t;
			  return n + ":" + r + ":" + t
		 }
		 function p(e) {
			  if (isNaN(Number(e)))
					return "--";
			  var t = void 0
				 , r = (new Date).getTime() / 1e3
				 , n = r - e
				 , i = n / 60
				 , o = i / 60;
			  return e = new Date(1e3 * Number(e)),
			  i < 60 ? (t = i.toFixed(0),
			  0 == t ? "刚刚" : t + "分钟前") : o < 24 ? (t = o.toFixed(0)) + "小时前" : 24 === o ? "昨天" : e.getDate() < (new Date).getDate() && e.getMonth() === (new Date).getMonth() ? e.getMonth() + 1 + "-" + e.getDate() : e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()
		 }
		 function h(e) {
			  if (isNaN(Number(e)))
					return "--";
			  var t = void 0
				 , r = (new Date).getTime() / 1e3
				 , n = r - e
				 , i = n / 60
				 , o = i / 60
				 , a = new Date;
			  a.setHours(0),
			  a.setMinutes(0),
			  a.setSeconds(0),
			  a.setMilliseconds(0);
			  var s = 864e5
				 , c = Date.parse(new Date(a - s));
			  if (a.setMonth(0, 1),
			  i < 60)
					return t = Math.floor(i),
					0 === t ? "刚刚" : t + "分钟前";
			  if (o < 24)
					return (t = Math.floor(o)) + "小时前";
			  if (1e3 * e > c)
					return "昨天";
			  if (1e3 * e > Date.parse(a)) {
					return new Date(1e3 * e).getMonth() + 1 + "-" + new Date(1e3 * e).getDate()
			  }
			  var u = new Date(1e3 * e).getMonth() + 1
				 , l = new Date(1e3 * e).getDate();
			  return new Date(1e3 * e).getFullYear() + "-" + u + "-" + l
		 }
		 function f(e) {
			  return (320 * e / 750 / 20 * Number(document.documentElement.style.fontSize.replace(/px/, ""))).toFixed(0)
		 }
		 function m() {
			  var e = localStorage.getItem("ABTEST_INFO");
			  if (e) {
					var t = JSON.parse(e).vars
					  , r = {};
					return t.forEach(function(e) {
						 r[e.name] = e.value
					}),
					r
			  }
			  return {}
		 }
		 function b(e) {
			  var t = navigator.userAgent
				 , r = t.indexOf("Android") > -1 || t.indexOf("Adr") > -1
				 , n = !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
			  if (r || !r && !n) {
					var i = document.createElement("input");
					document.body.appendChild(i),
					i.setAttribute("value", e),
					i.select(),
					document.execCommand("copy"),
					document.body.removeChild(i)
			  }
			  if (n) {
					var i = document.createElement("input")
					  , o = document.createRange();
					document.body.appendChild(i),
					i.setAttribute("value", e),
					o.selectNode(i),
					window.getSelection().removeAllRanges(),
					window.getSelection().addRange(o),
					document.execCommand("copy"),
					document.body.removeChild(i)
			  }
		 }
		 function v(e) {
			  var t = "";
			  e = e.replace(/\r\n/g, "\n");
			  for (var r = 0; r < e.length; r++) {
					var n = e.charCodeAt(r);
					n < 128 ? t += String.fromCharCode(n) : n > 127 && n < 2048 ? (t += String.fromCharCode(n >> 6 | 192),
					t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224),
					t += String.fromCharCode(n >> 6 & 63 | 128),
					t += String.fromCharCode(63 & n | 128))
			  }
			  return t
		 }
		 function m() {
			  var e = localStorage.getItem("ABTEST_INFO");
			  if (e) {
					var t = JSON.parse(e).vars
					  , r = {};
					return t.forEach(function(e) {
						 r[e.name] = e.value
					}),
					r
			  }
			  return {}
		 }
		 function y(e) {
			  var t, r, n, i, o, a, s, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", u = "", l = 0;
			  for (e = v(e); l < e.length; )
					t = e.charCodeAt(l++),
					r = e.charCodeAt(l++),
					n = e.charCodeAt(l++),
					i = t >> 2,
					o = (3 & t) << 4 | r >> 4,
					a = (15 & r) << 2 | n >> 6,
					s = 63 & n,
					isNaN(r) ? a = s = 64 : isNaN(n) && (s = 64),
					u = u + c.charAt(i) + c.charAt(o) + c.charAt(a) + c.charAt(s);
			  return u
		 }
		 e.exports = {
			  mediaAttr: i,
			  fmSeconds: n,
			  convertToWan: o,
			  convertToTime: h,
			  rem2px: f,
			  convertToNowTime: p,
			  changeTime: d,
			  throttleV2: u,
			  clickToTop: l,
			  addClass: a,
			  hasClass: s,
			  removeClass: c,
			  getAbtestParam: m,
			  textToClipboard: b,
			  base64: y
		 }
	},
	62: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 function i(e, t) {
			  var r = {};
			  for (var n in e)
					t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
			  return r
		 }
		 Object.defineProperty(t, "__esModule", {
			  value: !0
		 });
		 var o = r(7)
			, a = n(o)
			, s = r(0)
			, c = n(s);
		 t.default = function(e) {
			  var t = (e.styles,
			  i(e, ["styles"]));
			  return c.default.createElement("svg", (0,
			  a.default)({
					"data-name": "\\u56FE\\u5C42 1",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 80 80"
			  }, t), c.default.createElement("title", null, "default avatar"), c.default.createElement("path", {
					fill: "#e7e7e7",
					d: "M0 0h80v80H0z"
			  }), c.default.createElement("path", {
					d: "M45.78 57.73h2.29a73.4 73.4 0 0 1 4.23 9.5 57.14 57.14 0 0 1 2.62 10.5 50.58 50.58 0 0 1-29.86 0 57.14 57.14 0 0 1 2.62-10.5 73.4 73.4 0 0 1 4.23-9.5h2.29l2.67 7.21 2.41-7.21h1.42l2.41 7.21zM31.72 18.51l4.87 4.87a1.8 1.8 0 0 1 0 2.55 1.8 1.8 0 0 1-2.55 0l-4.87-4.87a1.8 1.8 0 0 1 0-2.55 1.8 1.8 0 0 1 2.55 0zM48.57 18.51a1.8 1.8 0 0 1 2.55 0 1.8 1.8 0 0 1 0 2.55l-4.87 4.87a1.8 1.8 0 0 1-2.55 0 1.8 1.8 0 0 1 0-2.55z",
					fill: "#ccc"
			  }), c.default.createElement("path", {
					"data-name": "Combined-Shape",
					d: "M24.2 24.22h31.6a7.2 7.2 0 0 1 7.2 7.2v20.12a7.2 7.2 0 0 1-7.2 7.2H24.2a7.2 7.2 0 0 1-7.2-7.2V31.42a7.2 7.2 0 0 1 7.2-7.2zm1 4a4.24 4.24 0 0 0-4.2 4.29v17.94a4.24 4.24 0 0 0 4.21 4.27h29.5A4.24 4.24 0 0 0 59 50.45V32.51a4.24 4.24 0 0 0-4.21-4.27z",
					fill: "#ccc"
			  }), c.default.createElement("path", {
					"data-name": "Combined-Shape",
					d: "M25.88 29.84h28.24a3.22 3.22 0 0 1 3.22 3.21v16.86a3.22 3.22 0 0 1-3.22 3.21H25.88a3.22 3.22 0 0 1-3.22-3.21V33.05a3.22 3.22 0 0 1 3.22-3.21zm0 .8a2.42 2.42 0 0 0-2.42 2.41v16.86a2.42 2.42 0 0 0 2.42 2.41h28.24a2.42 2.42 0 0 0 2.42-2.41V33.05a2.42 2.42 0 0 0-2.42-2.41z",
					fill: "#ccc"
			  }), c.default.createElement("path", {
					"data-name": "Combined-Shape",
					d: "M26.73 40.1l7-3.1a1.81 1.81 0 1 1 1.48 3.3l-7 3.1a1.81 1.81 0 1 1-1.48-3.3zM53.27 40.1a1.81 1.81 0 1 1-1.48 3.3l-7-3.1a1.81 1.81 0 1 1 1.48-3.3zM37.58 47.9c-1 0-1.9-.7-2.7-2a.8.8 0 0 1 .26-1.11.81.81 0 0 1 1.11.26c.54.86 1 1.23 1.33 1.23s.79-.37 1.33-1.23a.81.81 0 0 1 1.37 0c.54.86 1 1.23 1.33 1.23s.79-.37 1.33-1.23a.81.81 0 0 1 1.11-.26.8.8 0 0 1 .26 1.11c-.8 1.28-1.69 2-2.7 2a2.71 2.71 0 0 1-2-1.06 2.71 2.71 0 0 1-2.03 1.06z",
					fill: "#ccc"
			  }))
		 }
		 ,
		 e.exports = t.default
	},
	63: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 function i(e, t) {
			  var r = {};
			  for (var n in e)
					t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
			  return r
		 }
		 Object.defineProperty(t, "__esModule", {
			  value: !0
		 });
		 var o = r(7)
			, a = n(o)
			, s = r(0)
			, c = n(s);
		 t.default = function(e) {
			  var t = e.styles
				 , r = void 0 === t ? {} : t
				 , n = i(e, ["styles"]);
			  return c.default.createElement("svg", (0,
			  a.default)({
					"data-name": "\\u56FE\\u5C42 1",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 62 28"
			  }, n), c.default.createElement("defs", null), c.default.createElement("title", null, "logo_bilibili"), c.default.createElement("g", {
					id: "Page-1"
			  }, c.default.createElement("g", {
					id: "Artboard"
			  }, c.default.createElement("g", {
					id: "logo_bilibili",
					"data-name": "logo bilibili"
			  }, c.default.createElement("path", {
					id: "Shape",
					className: r["cls-1"] || "cls-1",
					d: "M57.45 25a7 7 0 0 1-.74 0c-.47-.05-.94 0-1.4-.06-.3 0-.29 0-.32-.3-.07-.88-.16-1.75-.24-2.63l-.21-2.31c-.07-.77-.15-1.41-.23-2.11s-.14-1.33-.21-2q-.14-1.25-.29-2.5l-.27-2.22Q53.29 9.21 53 7.5c-.18-1.21-.39-2.42-.61-3.62 0-.22 0-.22.18-.26a14.07 14.07 0 0 1 2.63-.25h.27a.24.24 0 0 1 .18.08.25.25 0 0 1 .06.19c0 .62.07 1.24.12 1.87.07 1 .16 2 .23 3 0 .65.09 1.31.14 2l.24 3.15c0 .64.09 1.29.14 1.94l.24 2.82c0 .6.09 1.2.15 1.8l.24 2.66c.13.73.18 1.42.24 2.12z"
			  }), c.default.createElement("path", {
					"data-name": "Shape",
					className: r["cls-1"] || "cls-1",
					d: "M23.74 3.39h.51c.19 0 .29.08.3.32.07 1.1.13 2.19.21 3.28s.17 2.36.26 3.54.17 2.17.25 3.25.2 2.38.3 3.57l.21 2.73c.07.91.16 1.69.23 2.53l.2 2.18c0 .23 0 .24-.25.24-.66 0-1.32-.09-2-.07-.15 0-.19-.06-.22-.21-.05-.31 0-.62-.08-.93-.09-.8-.14-1.64-.22-2.47s-.15-1.49-.23-2.24-.14-1.37-.21-2.05-.15-1.34-.23-2-.14-1.24-.22-1.85c-.11-.91-.22-1.81-.34-2.72S22 8.8 21.88 8q-.24-1.69-.55-3.37c0-.25-.09-.51-.15-.76s0-.2.15-.22c.39 0 .78-.13 1.17-.17a6.83 6.83 0 0 1 1.24-.06z"
			  }), c.default.createElement("path", {
					id: "Shape-3",
					"data-name": "Shape",
					className: r["cls-1"] || "cls-1",
					d: "M51.39 14.31c.74 0 .76 0 .88.67s.25 1.63.35 2.45.21 1.75.3 2.62c.08.7.14 1.41.21 2.12s.16 1.47.23 2.22c0 .42.09.83.13 1.25 0 .12 0 .19-.14.2l-.76.09-1.4.14c-.24 0-.26 0-.3-.22l-1.22-6.23c-.27-1.39-.53-2.77-.8-4.14 0-.19-.07-.38-.1-.57a.16.16 0 0 1 0-.14.16.16 0 0 1 .12-.07 14.3 14.3 0 0 1 2.5-.39z"
			  }), c.default.createElement("path", {
					id: "Shape-4",
					"data-name": "Shape",
					className: r["cls-1"] || "cls-1",
					d: "M20.13 14.31c.8 0 .79 0 .92.71.19 1.11.32 2.22.44 3.33s.25 2.15.36 3.23c.08.74.14 1.47.21 2.22.05.52.12 1 .17 1.57a.94.94 0 0 0 0 .19c0 .26 0 .28-.25.3l-1.47.14-.55.06c-.24 0-.24 0-.29-.22-.17-.83-.33-1.66-.49-2.5l-1.18-6c-.16-.8-.29-1.61-.44-2.41 0-.15 0-.21.15-.25a14.56 14.56 0 0 1 2.43-.39z"
			  }), c.default.createElement("path", {
					id: "Shape-5",
					"data-name": "Shape",
					className: r["cls-1"] || "cls-1",
					d: "M30.64 22.7v3.36a.82.82 0 0 0 0 .1c0 .16 0 .24-.21.23h-2.07c-.26 0-.25 0-.27-.26l-.24-2.54c-.08-.85-.14-1.56-.21-2.34s-.16-1.6-.23-2.41c-.05-.54-.1-1.07-.14-1.61l-.18-2.09c0-.29 0-.34.29-.37a14.82 14.82 0 0 1 2.3-.07 3.18 3.18 0 0 1 .57.09c.23.06.26.09.27.33 0 .48.05 1 .06 1.45s0 1.08 0 1.61c.05 1.55.04 3.04.06 4.52z"
			  }), c.default.createElement("path", {
					id: "Shape-6",
					"data-name": "Shape",
					className: r["cls-1"] || "cls-1",
					d: "M61.84 22.85v3.35c0 .14-.05.19-.19.19h-1a10 10 0 0 0-1.12 0c-.25 0-.25 0-.27-.23-.1-1.11-.21-2.2-.31-3.3l-.27-3c-.09-1-.2-2.1-.3-3.14 0-.52-.09-1.05-.13-1.57 0-.23 0-.28.27-.28.46 0 .91-.1 1.37-.09a8.11 8.11 0 0 1 1.37.07c.38.07.41.09.43.5.07 1.19 0 2.39.09 3.58s.02 2.51.06 3.92z"
			  }), c.default.createElement("path", {
					id: "Shape-7",
					"data-name": "Shape",
					className: r["cls-1"] || "cls-1",
					d: "M50.62 8.54a4.62 4.62 0 0 1 .68.06.23.23 0 0 1 .21.23c.06.68.13 1.37.2 2.05s.12 1.11.17 1.66c0 .35 0 .36-.31.38l-.92.06c-.2 0-.27 0-.3-.24-.12-1-.25-2-.38-3.07 0-.28-.07-.57-.12-.86a.21.21 0 0 1 .19-.28z"
			  }), c.default.createElement("path", {
					id: "Shape-8",
					"data-name": "Shape",
					className: r["cls-1"] || "cls-1",
					d: "M19.46 8.54a3.7 3.7 0 0 1 .63 0 .21.21 0 0 1 .19.21c0 .32.08.64.11 1q.15 1.47.27 3c0 .21 0 .22-.19.23l-1.08.02c-.21 0-.24 0-.27-.23l-.27-2.17c-.09-.72-.1-1.18-.19-1.79 0-.16 0-.21.16-.24a4 4 0 0 1 .64 0z"
			  }), c.default.createElement("path", {
					id: "Shape-9",
					"data-name": "Shape",
					className: r["cls-1"] || "cls-1",
					d: "M30.43 11.25v1.87c0 .28 0 .28-.27.28a9.08 9.08 0 0 1-1-.05c-.22 0-.22 0-.23-.25 0-.76 0-1.52-.06-2.28V9.28c0-.28 0-.28.26-.28a7.06 7.06 0 0 1 1.14.07c.23 0 .24 0 .24.28v1.9z"
			  }), c.default.createElement("path", {
					id: "Shape-10",
					"data-name": "Shape",
					className: r["cls-1"] || "cls-1",
					d: "M61.65 11.27v1.87c0 .26 0 .28-.27.26s-.7 0-1 0c-.17 0-.22-.09-.21-.24V13L60 9.44v-.19C60 9 60 9 60.29 9s.68 0 1 .05.34.09.34.41q.02.91.02 1.81z"
			  }), c.default.createElement("path", {
					id: "Shape-11",
					"data-name": "Shape",
					className: r["cls-1"] || "cls-1",
					d: "M18.61 12.73c0 .34 0 .34-.32.42l-.68.16c-.23 0-.23 0-.27-.17l-.69-3.83c0-.28 0-.28.23-.33l1-.16c.21 0 .23 0 .27.2.08.45.16.91.22 1.36.09.72.17 1.45.26 2.17a.68.68 0 0 1-.02.18z"
			  }), c.default.createElement("path", {
					id: "Shape-12",
					"data-name": "Shape",
					className: r["cls-1"] || "cls-1",
					d: "M47.86 9l1.28-.21c.15 0 .2.07.22.21.07.5.16 1 .22 1.49.09.72.21 1.44.23 2.18v.22a.18.18 0 0 1 0 .14.18.18 0 0 1-.12.06l-.87.2c-.14 0-.19 0-.21-.16-.09-.51-.19-1-.27-1.52l-.44-2.5a.89.89 0 0 1-.04-.11z"
			  }), c.default.createElement("path", {
					id: "Shape-13",
					"data-name": "Shape",
					className: r["cls-1"] || "cls-1",
					d: "M28.32 12a9.73 9.73 0 0 1 0 1.22c0 .12-.05.2-.19.21l-.86.07c-.14 0-.18 0-.2-.18-.06-.39-.05-.79-.09-1.19-.07-.75-.1-1.5-.15-2.25v-.55a.13.13 0 0 1 0-.12.13.13 0 0 1 .12 0c.37 0 .74-.08 1.11-.07.22 0 .24 0 .25.24v.45c-.03.67-.01 1.43.01 2.17z"
			  }), c.default.createElement("path", {
					id: "Shape-14",
					"data-name": "Shape",
					className: r["cls-1"] || "cls-1",
					d: "M59.53 11.52v1.55c0 .28 0 .29-.29.32l-.76.07c-.14 0-.21 0-.22-.19 0-.69-.09-1.37-.13-2.06S58 10.08 58 9.51v-.19c0-.11 0-.18.16-.19.36 0 .72-.08 1.08-.07s.22 0 .24.24c.05.7.05 1.48.05 2.22z"
			  }), c.default.createElement("path", {
					id: "Shape-15",
					"data-name": "Shape",
					className: r["cls-1"] || "cls-1",
					d: "M17.54 20.75a3.69 3.69 0 0 0-.47-.44 8.21 8.21 0 0 0-1.62-1 18.27 18.27 0 0 0-3.59-1.21 18.68 18.68 0 0 0-4.3-.52 10.55 10.55 0 0 0-1.4.11c-.24 0-.25 0-.27-.19-.1-1.07-.22-2.14-.31-3.21s-.19-2.15-.25-3.29c-.08-1.39-.16-2.77-.19-4.16V2.09a2.54 2.54 0 0 1 0-.35V.42c0-.17 0-.21-.21-.17a3.67 3.67 0 0 0-.73.22L.43 2.08c-.13.06-.18.11-.15.26.24 1.12.46 2.23.65 3.36q.36 2.06.67 4.13c.13.83.25 1.68.36 2.52s.23 1.75.34 2.62.19 1.58.27 2.37.2 1.7.3 2.56.14 1.46.21 2.18c.1 1 .21 2 .3 3s.14 1.74.21 2.6c0 .24.05.28.29.28H5.85a28.93 28.93 0 0 0 3.75-.46 17.26 17.26 0 0 0 4.91-1.68A9 9 0 0 0 17 24a3.59 3.59 0 0 0 .91-1.56 1.73 1.73 0 0 0-.37-1.69zm-8.78 4.52c-.21-1.58-.43-3.15-.65-4.78a44 44 0 0 1 4.63 1.71 27.84 27.84 0 0 1-4 3.07z"
			  }), c.default.createElement("path", {
					id: "Shape-16",
					"data-name": "Shape",
					className: r["cls-1"] || "cls-1",
					d: "M48.52 20.5a7 7 0 0 0-1.3-.88A16.07 16.07 0 0 0 44 18.36a19.59 19.59 0 0 0-5.07-.75 10 10 0 0 0-1.46.11c-.27 0-.29 0-.32-.24-.06-.5-.11-1-.16-1.51-.09-.92-.18-1.84-.25-2.77-.1-1.28-.19-2.55-.26-3.83 0-1-.1-1.94-.09-2.9v-.61q-.06-1.21 0-2.42c0-1 0-2 .09-3 0-.18 0-.21-.2-.19a2.25 2.25 0 0 0-.55.16c-1.37.5-2.67 1.12-4 1.64a.19.19 0 0 0-.14.28 1.75 1.75 0 0 1 0 .19c.3 1.43.57 2.86.8 4.31.16 1 .33 2 .49 3 .12.78.22 1.57.33 2.36s.19 1.47.27 2.22.2 1.58.29 2.36.15 1.3.22 1.94.16 1.39.23 2.08.14 1.48.21 2.22.16 1.61.23 2.41.13 1.52.19 2.28c0 .17.1.22.25.22h.76a12 12 0 0 0 1.82-.07c1-.09 2-.24 3.06-.42A17.36 17.36 0 0 0 46 25.64a8.24 8.24 0 0 0 2.26-1.75 3.49 3.49 0 0 0 .82-1.57 1.74 1.74 0 0 0-.56-1.82zm-4.66 1.86a5.19 5.19 0 0 1-.5.44c-1 .83-2.13 1.61-3.21 2.39a.18.18 0 0 1-.17.05l-.63-4.7a.4.4 0 0 1 .34 0c1.19.37 2.35.83 3.51 1.28l.64.28c.1.06.12.12 0 .21z"
			  })))))
		 }
		 ,
		 e.exports = t.default
	},
	64: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 var i = r(2)
			, o = n(i)
			, a = r(3)
			, s = n(a)
			, c = r(1)
			, u = n(c)
			, l = r(5)
			, d = n(l)
			, p = r(4)
			, h = n(p)
			, f = r(0)
			, m = r(65)
			, b = r(63)
			, v = r(62)
			, y = r(12)
			, w = r(9)
			, g = r(11)
			, _ = g.directOpenApp
			, x = r(24)
			, k = x.getAccountImg
			, C = x.fetchSearchDefaultWord
			, O = function(e) {
			  function t() {
					var e, r, n, i;
					(0,
					s.default)(this, t);
					for (var a = arguments.length, c = Array(a), u = 0; u < a; u++)
						 c[u] = arguments[u];
					return r = n = (0,
					d.default)(this, (e = t.__proto__ || (0,
					o.default)(t)).call.apply(e, [this].concat(c))),
					n.state = {
						 userFace: "",
						 defaultWord: "",
						 isAndroidWechat: !1
					},
					n.logoUpload = function() {
						 window.reportMsgObj && window.reportObserver && (window.reportMsgObj.home = window.bsource || "default",
						 window.reportMsgObj.click = "home",
						 window.reportObserver.forceCommit())
					}
					,
					n.searchUpload = function() {
						 window.reportMsgObj && window.reportObserver && (window.reportMsgObj.search = window.bsource || "default",
						 window.reportMsgObj.click = "search",
						 window.reportObserver.forceCommit())
					}
					,
					n.zoneUpload = function() {
						 window.reportMsgObj && window.reportObserver && (window.reportMsgObj.myzone = window.bsource || "default",
						 window.reportMsgObj.click = "myzone",
						 window.reportObserver.forceCommit())
					}
					,
					i = r,
					(0,
					d.default)(n, i)
			  }
			  return (0,
			  h.default)(t, e),
			  (0,
			  u.default)(t, [{
					key: "shouldComponentUpdate",
					value: function(e, t) {
						 return y(this, e, t)
					}
			  }, {
					key: "openApp",
					value: function() {
						 window.reportMsgObj && (window.reportMsgObj.topDownload = window.bsource || "default",
						 window.reportMsgObj.click = "topDownload",
						 window.reportObserver.forceCommit()),
						 _({
							  id: this.props.id || 0,
							  type: this.props.type || "index",
							  experience: "experience" === this.props.hlvStrategy
						 })
					}
			  }, {
					key: "componentDidMount",
					value: function() {
						 var e = this
							, t = this;
						 window.localStorage && window.localStorage.userImg ? this.setState({
							  userFace: window.localStorage.userImg
						 }) : k().then(function(e) {
							  if (e) {
									var r = e.face.replace("http:", "")
									  , n = w.webp(r, {
										 w: 53,
										 h: 53
									});
									window.localStorage && (window.localStorage.userImg = n),
									t.setState({
										 userFace: n
									})
							  }
						 }),
						 C().then(function(t) {
							  e.setState({
									defaultWord: t.show_name
							  })
						 }),
						 this.setState({
							  isAndroidWechat: this.checkWxInAndroid()
						 })
					}
			  }, {
					key: "checkWxInAndroid",
					value: function() {
						 var e = navigator.userAgent
							, t = /Android/i.test(e) || /Linux/i.test(e)
							, r = /MicroMessenger/i.test(e);
						 return t && r
					}
			  }, {
					key: "render",
					value: function() {
						 var e = f.createElement("a", {
							  className: m.searchBar,
							  href: "/search.html",
							  onClick: this.searchUpload,
							  name: "search"
						 }, f.createElement("svg", {
							  className: m.icon,
							  "aria-hidden": "true"
						 }, f.createElement("use", {
							  xlinkHref: "#icon-sousuo"
						 })), f.createElement("span", null, this.state.defaultWord))
							, t = this.state.isAndroidWechat
							, r = t ? f.createElement("a", {
							  className: m.openAppBtn,
							  href: "//dl.hdslb.com/mobile/latest/iBiliPlayer-html5_wechat.apk"
						 }, f.createElement("p", null, "下载 App")) : f.createElement("div", {
							  className: m.openAppBtn,
							  onClick: this.openApp.bind(this)
						 }, f.createElement("p", null, "下载 App"));
						 return f.createElement("div", {
							  className: m.topArea,
							  ref: "topArea"
						 }, f.createElement("a", {
							  className: m.logo,
							  href: "/index.html",
							  onClick: this.logoUpload
						 }, f.createElement(b, {
							  fill: "#de698c"
						 })), e, f.createElement("a", {
							  className: m.mySpace,
							  name: "space",
							  ref: "userImg",
							  href: "/space",
							  onClick: this.zoneUpload
						 }, f.createElement(v, null), this.state.userFace ? f.createElement("img", {
							  src: this.state.userFace,
							  alt: ""
						 }) : ""), r)
					}
			  }]),
			  t
		 }(f.Component);
		 e.exports = O
	},
	65: function(e, t) {
		 e.exports = {
			  topArea: "index__topArea__src-commonComponent-topArea-",
			  logo: "index__logo__src-commonComponent-topArea-",
			  searchIcon: "index__searchIcon__src-commonComponent-topArea-",
			  icon: "index__icon__src-commonComponent-topArea-",
			  searchBar: "index__searchBar__src-commonComponent-topArea-",
			  mySpace: "index__mySpace__src-commonComponent-topArea-",
			  openAppBtn: "index__openAppBtn__src-commonComponent-topArea-"
		 }
	},
	69: function(e, t, r) {
		 "use strict";
		 function n(e) {
			  return e && e.__esModule ? e : {
					default: e
			  }
		 }
		 function i(e, t) {
			  if (!(e instanceof t))
					throw new TypeError("Cannot call a class as a function")
		 }
		 function o(e, t) {
			  if (!e)
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			  return !t || "object" != typeof t && "function" != typeof t ? e : t
		 }
		 function a(e, t) {
			  if ("function" != typeof t && null !== t)
					throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			  e.prototype = Object.create(t && t.prototype, {
					constructor: {
						 value: e,
						 enumerable: !1,
						 writable: !0,
						 configurable: !0
					}
			  }),
			  t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		 }
		 Object.defineProperty(t, "__esModule", {
			  value: !0
		 });
		 var s = function() {
			  function e(e, t) {
					for (var r = 0; r < t.length; r++) {
						 var n = t[r];
						 n.enumerable = n.enumerable || !1,
						 n.configurable = !0,
						 "value"in n && (n.writable = !0),
						 Object.defineProperty(e, n.key, n)
					}
			  }
			  return function(t, r, n) {
					return r && e(t.prototype, r),
					n && e(t, n),
					t
			  }
		 }()
			, c = r(0)
			, u = n(c)
			, l = r(23)
			, d = n(l)
			, p = function(e) {
			  return e.displayName || e.name || "Component"
		 };
		 t.default = function() {
			  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			  return function(t) {
					return function(r) {
						 function n() {
							  i(this, n);
							  var e = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
							  return e.displayName = "LazyLoad" + p(t),
							  e
						 }
						 return a(n, r),
						 s(n, [{
							  key: "render",
							  value: function() {
									return u.default.createElement(d.default, e, u.default.createElement(t, this.props))
							  }
						 }]),
						 n
					}(c.Component)
			  }
		 }
	},
	70: function(e, t, r) {
		 "use strict";
		 function n(e, t, r) {
			  var n = void 0
				 , i = void 0
				 , o = void 0
				 , a = void 0
				 , s = void 0
				 , c = function u() {
					var c = +new Date - a;
					c < t && c >= 0 ? n = setTimeout(u, t - c) : (n = null,
					r || (s = e.apply(o, i),
					n || (o = null,
					i = null)))
			  };
			  return function() {
					o = this,
					i = arguments,
					a = +new Date;
					var u = r && !n;
					return n || (n = setTimeout(c, t)),
					u && (s = e.apply(o, i),
					o = null,
					i = null),
					s
			  }
		 }
		 Object.defineProperty(t, "__esModule", {
			  value: !0
		 }),
		 t.default = n
	},
	71: function(e, t, r) {
		 "use strict";
		 function n(e, t, r, n) {
			  n = n || !1,
			  e.addEventListener ? e.addEventListener(t, r, n) : e.attachEvent && e.attachEvent("on" + t, function(t) {
					r.call(e, t || window.event)
			  })
		 }
		 function i(e, t, r, n) {
			  n = n || !1,
			  e.removeEventListener ? e.removeEventListener(t, r, n) : e.detachEvent && e.detachEvent("on" + t, r)
		 }
		 Object.defineProperty(t, "__esModule", {
			  value: !0
		 }),
		 t.on = n,
		 t.off = i
	},
	72: function(e, t, r) {
		 "use strict";
		 Object.defineProperty(t, "__esModule", {
			  value: !0
		 }),
		 t.default = function(e) {
			  if (!e)
					return document.documentElement;
			  for (var t = "absolute" === e.style.position, r = /(scroll|auto)/, n = e; n; ) {
					if (!n.parentNode)
						 return e.ownerDocument || document.documentElement;
					var i = window.getComputedStyle(n)
					  , o = i.position
					  , a = i.overflow
					  , s = i["overflow-x"]
					  , c = i["overflow-y"];
					if ("static" === o && t)
						 n = n.parentNode;
					else {
						 if (r.test(a) && r.test(s) && r.test(c))
							  return n;
						 n = n.parentNode
					}
			  }
			  return e.ownerDocument || e.documentElement || document.documentElement
		 }
	},
	73: function(e, t, r) {
		 "use strict";
		 function n(e, t, r) {
			  t || (t = 250);
			  var n, i;
			  return function() {
					var o = r || this
					  , a = +new Date
					  , s = arguments;
					n && a < n + t ? (clearTimeout(i),
					i = setTimeout(function() {
						 n = a,
						 e.apply(o, s)
					}, t)) : (n = a,
					e.apply(o, s))
			  }
		 }
		 Object.defineProperty(t, "__esModule", {
			  value: !0
		 }),
		 t.default = n
	},
	789: function(e, t, r) {
		 e.exports = r(148)
	},
	89: function(e, t) {
		 e.exports = "//s1.hdslb.com/bfs/static/mult/images/tv.png"
	},
	9: function(e, t, r) {
		 "use strict";
		 function n() {
			  try {
					return 0 == document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
			  } catch (e) {
					return !1
			  }
		 }
		 function i(e) {
			  function t(e) {
					var t = /\/\d+?_\d+?\/bfs/
					  , r = e.replace(t, "/bfs");
					if (!t.test(e))
						 return !1;
					var n = /\/(\d+?)_(\d+?)\/bfs\/\w+?\/.+?(\.\w{3,4})/;
					n.exec(e);
					return r + "_" + RegExp.$1 + "x" + RegExp.$2 + RegExp.$3
			  }
			  void 0 === c && (c = n());
			  var r = t(e);
			  e = r || e;
			  var i = ""
				 , o = e.match(/_(\d+)x(\d+)./)
				 , u = -1 != e.indexOf("/bfs/")
				 , l = -1 != e.indexOf(".gif")
				 , d = (e.indexOf(".webp"),
			  arguments[1] || {})
				 , p = {
					w: d.w,
					h: d.h,
					p: d.p,
					e: d.e,
					c: d.c,
					rc: d.rc,
					a: d.a,
					bl: d.bl,
					q: d.q
			  };
			  if (!c || !u || l)
					return a(e, p.w, p.h);
			  null === o ? i = e : (i = e.split("_")[0],
			  void 0 === p.w && (p.w = o[1]),
			  void 0 === p.h && (p.h = o[2]));
			  var h = "";
			  for (var f in p)
					void 0 !== p[f] && (h += p[f] + f + "_");
			  return i = i + "@" + h.substring(0, h.length - 1) + ".webp",
			  s(i)
		 }
		 function o(e) {
			  function t(e) {
					var t = /\/\d+?_\d+?\/bfs/
					  , r = e.replace(t, "/bfs");
					if (!t.test(e))
						 return !1;
					var n = /\/(\d+?)_(\d+?)\/bfs\/\w+?\/.+?(\.\w{3,4})/;
					n.exec(e);
					return r + "_" + RegExp.$1 + "x" + RegExp.$2 + RegExp.$3
			  }
			  void 0 === c && (c = n());
			  var r = t(e);
			  e = r || e;
			  var i = ""
				 , o = e.match(/_(\d+)x(\d+)./)
				 , u = -1 != e.indexOf("/bfs/")
				 , l = -1 != e.indexOf(".gif")
				 , d = (e.indexOf(".webp"),
			  arguments[1] || {})
				 , p = {
					w: d.w,
					h: d.h,
					p: d.p,
					e: d.e,
					c: d.c,
					rc: d.rc,
					a: d.a,
					bl: d.bl,
					q: d.q
			  };
			  if (!c || !u || l)
					return a(e, p.w, p.h);
			  null === o ? i = e : (i = e.split("_")[0],
			  void 0 === p.w && (p.w = o[1]),
			  void 0 === p.h && (p.h = o[2]));
			  var h = "";
			  for (var f in p)
					void 0 !== p[f] && (h += p[f] + f + "_");
			  return i = i + "@" + h.substring(0, h.length - 1) + ".jpg",
			  s(i)
		 }
		 function a(e, t, r) {
			  if ("string" != typeof e)
					return s(e);
			  if (void 0 === t)
					return s(e);
			  var n, i, o, a, c = e.split("?");
			  return r = r || t,
			  n = {
					midfix: "/" + t + "_" + r,
					suffix: "_" + t + "x" + r
			  },
			  i = {
					cdn: /^http.+i[0-2]\.hdslb\.com\//,
					bfs: /^http.+i\d\.hdslb\.com\/bfs\//,
					group1: /^http.+i\d\.hdslb\.com\/group1\//,
					other: /(^http.+i\d\.hdslb\.com)(\/.+)/
			  },
			  o = {
					bfs: /_\d+x\d+\./,
					other: /\/\d+_\d+\//
			  },
			  i.cdn.test(c[0]) ? o.bfs.test(c[0]) || o.other.test(c[0]) ? s(e) : (i.bfs.test(c[0]) || i.group1.test(c[0]) ? (c[0] += n.suffix + c[0].slice(c[0].lastIndexOf(".")),
			  e = c.join("?")) : (a = i.other.exec(c[0])) && (c[0] = a[1] + n.midfix + a[2],
			  e = c.join("?")),
			  s(e)) : s(e)
		 }
		 function s(e) {
			  return e ? e.replace(/^http:/, "") : ""
		 }
		 var c;
		 e.exports = {
			  webp: i,
			  toJpg: o,
			  thumbnail: a,
			  trimHttp: s
		 }
	},
	92: function(e, t) {
		 e.exports = function() {
			  var e = [];
			  return e.toString = function() {
					for (var e = [], t = 0; t < this.length; t++) {
						 var r = this[t];
						 r[2] ? e.push("@media " + r[2] + "{" + r[1] + "}") : e.push(r[1])
					}
					return e.join("")
			  }
			  ,
			  e.i = function(t, r) {
					"string" == typeof t && (t = [[null, t, ""]]);
					for (var n = {}, i = 0; i < this.length; i++) {
						 var o = this[i][0];
						 "number" == typeof o && (n[o] = !0)
					}
					for (i = 0; i < t.length; i++) {
						 var a = t[i];
						 "number" == typeof a[0] && n[a[0]] || (r && !a[2] ? a[2] = r : r && (a[2] = "(" + a[2] + ") and (" + r + ")"),
						 e.push(a))
					}
			  }
			  ,
			  e
		 }
	}
}, [789]);
