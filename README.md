## redux状态管理真得没有任何魔法
1. redux本身没有难度，很清晰
2. 第一个难点在于和react集成，也不是难，主要是很多人搞不清楚react-redux和redux的关系
3. 异步请求本身有些难点，主要是因为很多人搞不清楚ES6的语法，也不知道中间件的概念，或者更甚都不知道异步。

## 弄清楚基本概念 和react没有半毛钱关系 直接写在html都行
1. 文本对象action
2. 纯函数reducer
3. store来管理他们
	- dispatch发送action
	- action匹配reducer
	- reducer根据action和当前state返回新state
	- subscribe

## 集成到react
1. react-redux
2. 向组件提供state: Provider
3. 组件使用state(包括1.根据state决定props，2.提供dispatch发起action): connect(mapStateToProps, mapDispatchToProps)

## 中间件
1. 把中间件收集到数组中
2. 通过函数式编程嵌套执行中间件

## 异步
1. thunk 让dispacth接收函数参数 redux-thunk中间件很简单 发现action是函数就执行
2. saga 使用generator拦截action 保持了action的统一并且提供了一大堆好用的方法 