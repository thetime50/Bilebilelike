#  Bilebilelike项目
*(2019-04-04 08:30)*  
[预览→](https://thetime50.github.io/Bilebilelike/)

![Bilibililike-qr.png](docs\imgs\Bilibililike-qr.png)

<!-- 
http://www.wwei.cn
https://thetime50.github.io/Bilebilelike
液态 205 15%  
#fc65fc #12d4ff #12d4ff #ffffff
 -->

## 说明
用于面试准备的作品，类似bilibile app的vue实现  
项目范围：app整体框架 关键页面 懒加载 模拟数据

*(因为赶时间先写项目，文档慢慢写)*

## 技术选型
- 前台数据交互处理组件化
	- vue全家桶：vue/vue-router/vuex
	- ui组件库：mint-ui
	- 滑动组件：better-scroll
	- 懒加载：vue-lazyload
- 前后台交互
	- ajax请求：vue-resource axios
	- mock数据:mockjs
	- 接口测试：postman
- 模块化
	- ES6 //todo
	- bable //todo
- 项目结构化/工程化
	- webpack
	- vuecli
	- eslint //检测语法规范
- css预编译
	- stylus


## 需求分析
### UI需求

1. 主页面(首页)


这里只做框架上的需求分析，子页面和组件的具体需求在实现页面的时候再详细分析

### 业务需求

### 项目素材
截图 安装包里找 网上素材 ICON 自己画

## 执行计划

## 项目日志
### 2019年4月9日
#### 样式文件引入问题
在.styl文件中引入.css文件使用@import 'xxx.css' 和 @import url('xxx.css')都是可以的，  
但是如果在.styl文件在引入.styl文件只能@import 'xxx.css'，如果加了url会提示Unknown word

在.styl文件中使用相对路径引入.styl文件，则相对路径的当前位置即路径字符串文件所在的目录(就是普通的相对路径)  
在.styl文件中使用相对路径引入.css文件，相对路径的当前位置会变成使用.styl的页面所在目录  
还不知道.styl文件中如何使用绝对路径引入.css，

考虑改用JS选择引入样式文件，而不是使用stylus实现选择引入  
一些辅助工具语法不够严谨，工具嵌套的时候容易出问题(下回试试cass)

#### 静态页面FootGuide显示
用server打开页面能够显示FootGuide  
静态build文件打开页面不显示FootGuide  
有渲染有icon没有显示？？  
1 dom中有FootGuide的元素    
2 css中有element.style{display:none}  
3 得知element.style为js添加的样式(其实原本是内联样式)  
4 FootGuide引用时有 v-show="$route.meta.showFooter"  
5 使用了mode: 'history'选项，静态文件没法路由，所以隐藏了组件  
6 路由屏蔽mode设置改为root#/path的形式，使用分段字符串来路由解决路径问题  

(总算是能够通过思考解决的问题，上回引入.styl的问题花的时间太多了)  
(一个很有意思的现象，使用mode: 'history'可以在页面内跳转到root/path,但是直接访问root/path是404)  
(似乎使用路径的形式会产生多次的页面重定向)  

- px 虚拟像素
- em 相对父级对象字体大小
- rem 相对根对象字体大小


现在优先打通业务逻辑vuex ajax mock 以及懒加载和应用滑动库  
包括：
- 主页面和(顶部和底部菜单 左侧菜单 视频推荐刷新)
- 登录页面
- 个人信息页面
- 侧边栏
