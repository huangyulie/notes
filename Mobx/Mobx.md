# 介绍

一个可以和React良好配合的集中状态管理工具

<1>简单

编写无模板的极简代码

<2>轻松实现最优渲染

依赖自动追踪最小渲染优化

<3>架构自由

可移植，可测试

# 使用

```js
npm i mobx mobx-react-lite
```

```js
实现步骤
1.定义数据状态(state)
2.数据响应式处理
3.定义action函数(修改数据)
4.实例化并导出实例

import { makeAutoObservable } from "mobx";

class CounterStore {
    // 定义数据
    count = 0;
    constructor(){
        // 响应式处理
        makeAutoObservable(this);
    }
    addCount = ()=>{
        // 定义action函数
        this.count++;
    }
}
const counterStore = new CounterStore();
//实例化并且导出
export default counterStore;

//倒入中间件 App.js中
import {observer} from 'mobx-react-lite'
export default observer(App);

//使用
import counterStore from "./store/counter";
{counterStore.count}
<button onClick={counterStore.addCount}>点级</button>
```

# Mobx-computed

```js
//实现步骤
<1>声明一个存在的数据
<2>定义get计算属性
<3>在makeAutoObservable方法中标记

list = [1,2,3,4,5,6]

get filterList(){
    return this.list.filter(item=>item>2)
}
```

# Mobx模块化

<1>拆分Count和List模块,每个模块定义自己独立的state/actions

<2>在store/index.js中导入拆分之后的模块，进行模块组合

<3>使用React的useContext机制导出useStore方法，供业务组件统一使用

```js
//组合子模块index.js中
import ListStore from "./list.Store";
import CounterStore from "./counter.Store";
import React from "react";

//封装
class RootStore{
    constructor(){
        // 对子模块进行实例化操作
        // 将来实例化根store的时候
        // 根store有两个属性counterStore
        // 格子对应的值，就是我们导入的子模块的
        this.counterStore = CounterStore;
        this.listStore = ListStore;
    }
}

// 实例化store注入context
const rootStore = new RootStore();
// 使用react conntext机制 完成统一方法封装
// Provider value={传递的数据}
// 查找机制:useContext 优先从Provider value 找,如果找不到就会找
// createContext方法传递过来的默认参数
const context = React.createContext(rootStore);

//导出useStore方法，共组件通过调用该方法使用根实例
const useStore = ()=>{
    return React.useContext(context);
}

export default useStore;

//使用
const RootStore = useStore();
  console.log(RootStore);
```

# 总结

<1>初始化mobx的过程是什么样的

声明数据-》响应式处理-定义action函数-实例化导出

<2>mobx如何配合react，需要依赖什么包

mobx-react-lite作为连接包，导出observe方法，包裹组件(只能和函数组件配合)

<3>模块化解决了什么问题

维护性问题

<4>如何实现mobx的模块化？

按照功能拆分store模块，根模块中组合子模块，利用context机制依赖注入

