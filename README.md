#  Bilebilelike项目
*(2019-04-04 08:30)*  
[预览→](https://thetime50.github.io/Bilebilelike/)
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
在.styl文件中引入.css文件使用@import 'xxx.css' 和 @import url('xxx.css')都是可以的，  
但是如果在.styl文件在引入.styl文件只能@import 'xxx.css'，如果加了url会提示Unknown word

在.styl文件中使用相对路径引入.styl文件，则相对路径的当前位置即路径字符串文件所在的目录(就是普通的相对路径)  
在.styl文件中使用相对路径引入.css文件，相对路径的当前位置会变成使用.styl的页面所在目录  
还不知道.styl文件中如何使用绝对路径引入.css，

考虑改用JS选择引入样式文件，而不是使用stylus实现选择引入  
一些辅助工具语法不够严谨，工具嵌套的时候容易出问题(下回试试cass)


现在优先打通业务逻辑vuex ajax mock 以及懒加载和应用滑动库  
包括：
- 主页面和(顶部和底部菜单 左侧菜单 视频推荐刷新)
- 登录页面
- 个人信息页面
- 侧边栏
