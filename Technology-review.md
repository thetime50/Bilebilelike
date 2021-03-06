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
## 开始
1. Vuex 的状态存储是响应式的
2. 需要通过提交 (commit) mutation改变状态
### state
```javascript
//state-value定义
const store = new Vuex.Store({
  state: {
    count: 0 //定义数据
  },
  mutations: {
    increment (state) {//定义操作数据的方法
      state.count++
    }
  }
})

//引用
//get
store.state.count
this.$store.state.count//要先在根组件中添加store
//set
store.commit('increment')

//在组件中引入state和映射/转换
import { mapState } from 'vuex'

export default {
  // ...
  computed: mapState({
    count: state => state.count,//会将state作为参数传入
    countAlias: 'count',//'count' 等同于 `state => state.count`
    countPlusLocalState (state) {
      return state.count + this.localCount//当前上下文的this，需要用常规函数
    }
  }),
  //
  computed: mapState([
    'count'//映射同名state数据
  ]),
  //
  computed: {
    localComputed () { },
    ...mapState({// 对象展开运算符将此对象混入到外部对象中
      // ...
    })
  }
}
```
### getter
state 中派生出的状态  
是响应式的
```javascript
const store = new Vuex.Store({
  state: {
    todos: [
      ,,,
    ]
  },
  getters: {//定义
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {//的一个参数state 第二个参数是getter自己
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {//传参 这时返回了一个还是被外部引用//这样是不会缓存的
      return state.todos.find(todo => todo.id === id)
    }
  }
})
//引用
this.$store.getters.doneTodosCount
this.$store.getters.getTodoById(2)
//mapGetters
//和mapState差不多
```
### mutation
```javascript
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {//定义
      state.count++
    },
    increment2 (state, n) {//传递参数(载荷) 一般这里是个对象从而能够传递多个属性
      state.count += n
    }
  }
})
//提交状态
store.commit('increment')
store.commit('increment2', 10)
store.commit({
  type: 'increment',
  amount: 10
})

//mapMutations
//都是类似的
```
为了实现响应式编码
1. 需要初始化所有属性
2. 添加属性需要使用Vue.set(obj, 'newProp', 123)  
或者替换对象state.obj = { ...state.obj, newProp: 123 }

使用常量替代 Mutation 事件类型方便linter代码检查
```javascript
// mutation-types.js
export const SOME_MUTATION = 'SOME_MUTATION'
// store.js
import Vuex from 'vuex'
import { SOME_MUTATION } from './mutation-types'

const store = new Vuex.Store({
  state: { ... },
  mutations: {
    [SOME_MUTATION] (state) {
    }
  }
})
```
**Mutation 必须是同步函数** vue-devtools才能够捕捉到数据变化

### action
- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。
```javascript
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {//定义
    increment (context) {//context类似一个store副本
      //context.state
      //context.getters
      context.commit('increment')
    }
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  }
})
//引用(分发)
store.dispatch('increment')
//mapActions
//还是一样的
```

store.dispatch返回promise 且能够处理action返回的promise
```javascript
store.dispatch('actionA').then(() => {
  // ...
})
//axtion 嵌套
actions: {
  // ...
  actionB ({ dispatch, commit }) {
    return dispatch('actionA').then(() => {
      commit('someOtherMutation')
    })
  }
}
最后，如果我们利用 async / await，我们可以如下组合 action：

//使用 async/await
actions: {
  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // 等待 actionA 完成
    commit('gotOtherData', await getOtherData())
  }
}
```
### module
```javascript
//store的数据可以通过module声明分割和嵌套
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}
const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

/*模块内的mutation getter参数是模块局部状态对象*/
const moduleA = {
  state: { count: 0 },
  mutations: {
    increment (state) {// 这里的 `state` 对象是模块的局部状态
      state.count++
    }
  },

  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  },
  actions: {//这里有state和rootState
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
  },
  getters: {
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  }
}
```
- 用module就会在模块内产生局部的state参数
- 但是action motation getter默认都在全局命名空间
- 使用属性namespace: true属性才会添加命名空间
- 外部引用使用 commit('account/isAdmin')
- 命名空间内的dispatch commit也是局部的 也就是命名空间内访问不用路径
```javascript
const store = new Vuex.Store({
  modules: {
    account: {
      namespaced: true,//在全局环境引用时需要添加路径
      state: { ... }, 
      getters: {
        isAdmin () { ... } // -> getters['account/isAdmin']
      },
      actions: {
        login () { ... } // -> dispatch('account/login')
      },
      mutations: {
        login () { ... } // -> commit('account/login')
      },

      // 嵌套模块
      modules: {// 继承父模块的命名空间
        myPage: {
          state: { ... },
          getters: {
            profile () { ... } // -> getters['account/profile']
          }
        },

        // 进一步嵌套命名空间
        posts: {
          namespaced: true,
          state: { ... },
          getters: {
            popular () { ... } // -> getters['account/posts/popular']
          }
        }
      }
    }
  }
})
```

**局部命名空间中访问父对象**
- 在getter中第3、4个参数会传入rootState rootGetter  
- 在action中会传入contex  
通过解构赋值{dispatch, commit, getters, rootGetters}取得对应的属性
- 在action中使用{root:true} 传入diapatch commint控制根节点访问
```javascript
modules: {
  foo: {
    namespaced: true,
    getters: {
      someGetter (state, getters, rootState, rootGetters) {
        getters.someOtherGetter // -> 'foo/someOtherGetter'
        rootGetters.someOtherGetter // -> 'someOtherGetter'
      },
      someOtherGetter: state => { ... }
    },

    actions: {
      someAction ({ dispatch, commit, getters, rootGetters }) {
        getters.someGetter // -> 'foo/someGetter'
        rootGetters.someGetter // -> 'someGetter'
        dispatch('someOtherAction') // -> 'foo/someOtherAction'
        dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'
        //`root` 属性以访问根 dispatch 或 commit
        commit('someMutation') // -> 'foo/someMutation'
        commit('someMutation', null, { root: true }) // -> 'someMutation'
      },
      someOtherAction (ctx, payload) { ... }
    }
  }
}
```
**局部命名空间中注册全局action**
具体action方法内使用root: true属性声明 定义handler方法
```javascript
modules: {
  foo: {
    namespaced: true,
    actions: {
      someAction: {
        root: true,
        handler (namespacedContext, payload) { ... } // -> 'someAction'
      }
    }
  }
}
```

**带命名空间的绑定函数**
mapState, mapGetters, mapActions 和 mapMutations
```javascript
//原始的绑定方法
computed: {
  ...mapState({
    a: state => state.some.nested.module.a,
    b: state => state.some.nested.module.b
  })
},
methods: {
  ...mapActions([
    'some/nested/module/foo', // -> this['some/nested/module/foo']()
    'some/nested/module/bar' // -> this['some/nested/module/bar']()
  ])
}

//给绑定函数传递上下文
computed: {
  ...mapState('some/nested/module', {
    a: state => state.a,
    b: state => state.b
  })
},
methods: {
  ...mapActions('some/nested/module', [
    'foo', // -> this.foo()
    'bar' // -> this.bar()
  ])
}

//createNamespacedHelpers 创建基于某个命名空间辅助函数
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')
export default {
  computed: {
    // 在 `some/nested/module` 中查找
    ...mapState({
      a: state => state.a,
      b: state => state.b
    })
  },
  methods: {
    // 在 `some/nested/module` 中查找
    ...mapActions([
      'foo',
      'bar'
    ])
  }
}
```

开发使用vuex的插件时提供参数让用户自定义命名空间

```javascript
//store 创建之后使用 store.registerModule注册添加模块
// 注册模块 `myModule`
store.registerModule('myModule', { ... })
// 注册嵌套模块 `nested/myModule`
store.registerModule(['nested', 'myModule'], { ... })//路径用数组传递

//用store.unregisterModule(moduleName) 卸载动态模块
/*创建 store 时声明的静态模块不能卸载*/

//使用preserveState: true属性将state归档保留state
//store.registerModule('a', module, { preserveState: true })
//(ssr引用store中已存在module的state，
//通过store.registerModule preserveState: true注册模块的action mutation getter方法并保留store种得state)
```

创建一个模块的多个实例  
在ssr中使用或者同一模块多次注册
```javascript
///使用一个函数来声明模块状态（仅 2.3.0+ 支持）：
const MyReusableModule = {
  state () {//类似vue中的data
    return {
      foo: 'bar'
    }
  },
  // mutation, action 和 getter 等等...
}
```

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