
# 个人app项目
用于个人练习react全家桶的项目搭建

## 技术栈：
react + react-router + redux + less + ES6/7 + webpack + fetch

## 运行
npm start (正常编译模式)
npm run build (打包)

## 演示地址
<a href="http://xcyn.github.io/production/React/index.html#/?_k=n56yj4">点击进入查看项目进度</a>

## 个人说明
本项目适合react项目搭建的初学者
如果觉得还行的话，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

## 关于react生命周期
### 构建期
1.getDefaultProps：组件在构建的时候设置自己的默认props（只调用一次）<br/>
2.getInitialState：组件在构建的时候设置自己的默认state（只调用一次）<br/>
3.componentWillMount：该方法在首次渲染之前调用，也是再 render 方法调用之前修改 state 的最后一次机会。（只调用一次）<br/>
4.render: 该方法会创建一个虚拟DOM，用来表示组件的输出。对于一个组件来讲，render方法是唯一一个必需的方法。render方法需要满足下面几点：<br/>
          只能通过 this.props 和 this.state 访问数据（不能修改）<br/>
          可以返回 null,false 或者任何React组件<br/>
          只能出现一个顶级组件，不能返回一组元素<br/>
          不能改变组件的状态<br/>
          不能修改DOM的输出<br/>
          render方法返回的结果并不是真正的DOM元素，而是一个虚拟的表现，类似于一个DOM tree的结构的对象。react之所以效率高，就是这个原因。<br/>
5.componentDidMount: 该方法被调用时，已经渲染出真实的 DOM，可以再该方法中通过 this.getDOMNode() 访问到真实的 DOM(推荐使用 ReactDOM.findDOMNode())。(只调用一次，常用，一般用于写http请求)
### 存在期
1.componentWillReceiveProps: 组件的 props 属性可以通过父组件来更改，这时，componentWillReceiveProps 将来被调用。可以在这个方法里更新 state,以触发 render 方法重新渲染组件. (常用)<br/>
2.shouldComponentUpdate: 如果你确定组件的 props 或者 state 的改变不需要重新渲染，可以通过在这个方法里通过返回 false 来阻止组件的重新渲染，返回 `false 则不会执行 render 以及后面的 componentWillUpdate，componentDidUpdate 方法。<br/>
3.componentWillUpdate: 这个方法和 componentWillMount 类似，在组件接收到了新的 props 或者 state 即将进行重新渲染前，componentWillUpdate(object nextProps, object nextState) 会被调用，注意不要在此方面里再去更新 props 或者 state。<br/>
4.componentDidUpdate: 这个方法和 componentDidMount 类似，在组件重新被渲染之后，componentDidUpdate(object prevProps, object prevState) 会被调用。可以在这里访问并修改 DOM。

## 关于react子父之间传值
1父传子: 一般来说就是通过在子组件的标签里挂载属性来把值传给子组件，子组件再通过this.props.属性来获取值<br/>
2.子传父：也是先通过把父组件里的函数传给子组件，子组件可以把子组件里的数据通过回调参数传给父组件。父组件就可以在自己的函数里做setState等操作。<br/>





