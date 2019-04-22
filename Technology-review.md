# 技术回顾

[toc]

# 前台数据交互处理组件化
## vue
### vue插件
#### Vue_extend
[Vue.extend构造器的延伸](https://www.w3cplus.com/vue/vue-extend.html)

Vue.extend()返回一个组件的构造器(Vue的子类构造函数)

```javascript
let baseExtend = Vue.extend(myContent)

//挂载组件
new baseExtend().$mount('#app')
let app = new baseExtend({ el: '#app' })
new baseExtend().$mount('custom-element')

//使用子类构造函数创建组件
var MyComponent = Vue.extend({ template: '一个自定义的组件!' }) // 使用`id:my-component`注册构造函数 
Vue.component('my-component', MyComponent)
//引用
<div v-component="my-component"></div>
<my-component></my-component>
```

**组件的ID必须包含一个连字符-**

#### 插件
[简单的例子实现vue插件](https://segmentfault.com/a/1190000012224638)  
这是一个集成生成构造和操作元素的插件(toast提示框)

[Vue.js插件开发](https://www.cnblogs.com/libin-1/p/6810746.html)  
插件注入 修改Vue构造器 修改Vue实例等

[插件 ---编写vue插件](https://blog.csdn.net/zgpeterliu/article/details/80509135)  
复用的loading+axios拦截器插件

[Vue.js 插件开发详解 ](https://www.cnblogs.com/linxin/p/6637904.html)  
又是toast,另一种创建消息提醒的方法

### 拖拽
clientY 距离窗口左上角的距离
pageY 距离文档左上角的距离(不受页面滚动影响)(非IE)
screenY 距离屏幕左上角的距离
layerY 找到它或它父级元素中最近具有定位的左上角距离
offsetY 相对于事件源元素的坐标(IE)

## vue-router
### router-link
router-link replace模式跳转 (不需要back记录路径)

&ltrouter-view>用keep-ailve包裹缓存路由组件

#### 路由传参
[Vue路由传参的几种方式](https://blog.csdn.net/zhouzuoluo/article/details/81259298)  
[编程式的导航](https://router.vuejs.org/zh/guide/essentials/navigation.html)  

```html
<script>
// /router/index.js
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/one',
      name: 'ChildOne',
      component: ChildOne,
      children:[
        {
          path:'/one/log/:para_a/.../:para_b',
          component:Log,
        },
      ],
    },
])

</script>

<!--  1. 通过动态路由匹配 -->
<!-- (匹配路径中对应的分段) -->
<!-- parent.vue -->
<router-link :to="{path: '/one/login/a/.../b'}">link</router-link>
<router-link to="/one/login/a/.../b">link</router-link>

<!-- 组件内通过this.$route.params.num引用参数 -->
<!-- template.vue -->
<script>
this.$route.params.para_a
</script>

<!-- 2. url中不显示 -->
<!-- 路由使用name命名 path中不提供变量标识 -->
<script>
// /router/index.js
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/one',
      name: 'ChildOne',
      component: ChildOne,
    },
])
</script>

<!-- 使用name-params跳转 -->
<router-link :to="{name:'Log',params:{num:666}}">link</router-link>

<!-- 和上面同样的方式引用参数，刷新后参数丢失 -->

<!-- 3. 使用query传参 -->
<!-- 普通的router配置 -->
<!-- url上会产生?key=vul -->
<router-link :to="{path:'/one/log',query:{num:123}}">显示登录页面</router-link>
<!-- 使用this.$route.query.num -->
<script>
this.$route.query.num
</script>

```

## vuex
## mint-ui
ui组件库：mint-ui
## better-scroll
滑动组件：better-scroll
[better-scroll zh](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/)
```js
startX//起始位置
startY
scrollX//允许滑动
scrollY
freeScroll
directionLockThreshold//方向锁定阈值
eventPassthrough//原生滚动
click//原生click
dblclick//生成双击事件
tap//tap 事件?
bounce//回弹
bounceTime
momentum//动量
momentumLimitTime//触发阈值
momentumLimitDistance
swipeTime
swipeBounceTime
deceleration
flickLimitTime//轻拂
flickLimitDistance
resizePolling//resize重计算延迟
probeType//scroll事件
preventDefault//阻止浏览器默认行为
preventDefaultException//默认行为白名单
HWCompositing//硬件加速
useTransition//CSS3 transition 动画(否则为requestAnimationFrame动画)
useTransform// CSS3 transform 做位移
bindToWrapper//false[default]:document事件 true:wrapper事件
disableMouse//屏蔽鼠标事件
disableTouch//屏蔽触摸事件
observeDOM//检测 scroller 内部 DOM自动 refresh (现在不用手动refresh了)
autoBlur//滚动时取消焦点
stopPropagation//阻止冒泡
//选项 / 高级
wheel//Picker 组件(滚动选择器)
snap//Slide 组件(滑动展示)
scrollbar//滚动条样式
pullDownRefresh//下拉刷新样式
pullUpLoad//上拉加载
mouseWheel//PC 滚轮操作
zoom//缩放
infinity//长列表滚动或者是无限滚动
//方法 / 通用
refresh//重新计算 better-scroll DOM变化是用
scrollTo//滚动到指定的位置
scrollBy//从当前位置偏移滚动
scrollToElement//滚动到指定的目标元素
stop//停止滚动
enable//使能
disable//禁用
destroy//销毁 better-scroll，解绑事件
on//事件监听
once//监听单次事件
off//移除事件
//方法 / 定制
goToPage//slide 组件滚动到指定页面
next//滚动到下一个页面
prev//滚动到上一个页面
getCurrentPage//获取当前页面的信息
wheelTo//picker 组件 滚动到指定选项
getSelectedIndex//当前选中的索引值
finishPullDown//下拉刷新数据后需要调用此方法
openPullDown//开启下拉刷新
closePullDown//关闭下拉刷新
autoPullDownRefresh//触发下拉刷新
finishPullUp//上拉加载数据后需要调用此方法
openPullUp//开启上拉加载
closePullUp//关闭上拉加载
zoomTo//放到指定的大小
//事件
beforeScrollStart
scrollStart
scroll
scrollCancel
scrollEnd
touchEnd
flick//轻拂
refresh//refresh调用后
destroy//destroy后
pullingDown
pullingUp
zoomStart
zoomEnd
//属性
x
y
maxScrollX
maxScrollY
movingDirectionX//当前滑动方向
movingDirectionY
directionX//整体滑动方向
directionY
enabled//is enabled
isInTransition//否处于Transition 动画过程中
isAnimating//否处于Animation 动画过程中
```
## vue-scroller
```javascript
//Scroller component attributes
onRefresh        //拉动刷新回调
onInfinite       //无限加载回调
refreshText	     //pull-to-refresh提示
noDataText       //no-more-data提示
width	           //捕捉模式
height	         //
snapping         //捕捉模式
snappingWidth    //对齐宽度
snappingHeight   //对齐高度
refreshLayerColor//pull-to-refresh文字颜色
loadingLayerColor//infinite-loading文字颜色
minContentHeight //scroll-content 最小高度
//Scroller vm instance methods
resize()               //调整滚动条内容的大小(不建议使用)
triggerPullToRefresh() //触发拖动刷新
finishPullToRefresh()  //停止拖动刷新
finishInfinite()       //停止无限加载
scrollTo()             //滚动到指定位置
scrollBy()             //滚动指定量
getPosition :Object    //当前位置
```
## Vonic UI
[Vonic UI zh](https://wangdahoo.github.io/vonic-documents/#/)
## vue-lazyload
懒加载：vue-lazyload
# 前后台交互
## axios
ajax请求：axios
## mockjs
mock数据:mockjs
## 接口测试：postman
接口测试：postman
# css预编译
## stylus
- [stylus-lang](http://stylus-lang.com)
- [stylus ch](https://www.zhangxinxu.com/jq/stylus/)
- [stylus的使用](https://www.jianshu.com/p/3aae14a82566)
- [stylus入门使用方法](https://segmentfault.com/a/1190000002712872#articleHeader9)
- [强大的css预编译stylus以及在vue中使用stylus](https://www.jianshu.com/p/8601ccf91225)
- [vue项目安装使用stylus步骤](https://www.jianshu.com/p/c02f5f94b77e)

```
npm install stylus --save//在项目上安装
npm install stylus-loader --save //编译
```
```
//编译.styl文件
//根目录目录下输入
stylus --compress css/    
//输出compiled css/style.css文件
//（带上--compress参数表示你生成压缩的CSS文件。）

//css目录下输入
stylus -w style.styl -o style.css
//-w 自动监视文件 -o 将编译后的CSS文件输出到指定文件中
```

- : ; , () 可选
- 选择器(Selectors)  
	,或者同一级缩进时的换号为选择器分组 (加,与属性区分)  
	选择器嵌套为后代选择器  
	使用&引用父级的选择器(与父级选择器组合而不是作为后代选择器)  

- 变量(Variables)  
	定义参数值或者一组参数名字可以包含$  
	用@attribute引用属性的值 冒泡搜索
	函数中用 attr: value unless @attr 设置默认值  
	函数中使用 (-n)修饰一元负号，避免和减法弄混
	unquote('')直接产生css
- 插值(Interpolation)  
	-webkit-{'border' + '-radius'}  
	字符串表达式合成为标识符 就像c里面宏定义的##和__
- 运算符(Operators)

```stylus
[] //下标 (1,'2')\[0]
! ~ + - //可以带单位
is defined
** * / %
+ -
... .. //1..2 //=>1 2 3 4 | 1...4 //1 2 3
<= >= < >
in
== is != is not isnt //不带单位的0 null 是false
is a
&& and || or
?:
= := ?= += -= *= /= %=
not
if unless
```
:= ?= a?=3相当于 a=a:a?3  
类型检查type()和is a  
用()加后缀或者unit(表达式,字符串 )  
颜色运算 rgb() rgba() hsl() hsla() 亮度% 色轮角度deg  
类似python的%格式化字符串

- 混合书写(Mixins)
	用函数的写法定义样式  
	arguments 引用可变参数  
	内部可用&引用父级选择器产生的选择器表达式  
- 方法(Functions)
	使用() 或者return标识返回
	fun1=fun2 函数别名
- 关键字参数(Keyword Arguments)
- 内置方法(Built-in Functions)
- 其余参数(Rest Params)
- 注释(Comments)
- 条件(Conditionals)
- 迭代(Iteration)
- @import
- @media
- @font-face
- @keyframes
- @extend
- url()
- CSS字面量(CSS Literal)
- CSS样式解析(CSS Style Syntax)
- 字符转码(Char Escaping)
- 可执行性(Executable)
- 错误报告(Error Reporting)
- 连接中间件(Connect Middleware)
- 自检API(Introspection API)

技术资源：各种技术栈，从前到后的各种技术实现，各种功能  
产品框架：不同的产品业务逻辑和技术实现方案  
一紧张起来就会在各种细枝末节的地方被拘束纠缠不清  