# 技术回顾

[toc]

# 前台数据交互处理组件化
## vue
## vue-router
## vuex
## mint-ui
ui组件库：mint-ui
## better-scroll
滑动组件：better-scroll
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