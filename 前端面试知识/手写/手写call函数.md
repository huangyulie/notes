```js
Function.prototype.Mycall = function(){
    // 输出arguments
    console.log(arguments);
    //转换为数组
    const args = Array.from(arguments);
    console.log(args);
    // 拿出第一项
    const t = args.shift();
    const self = this;
    // 改变this值
    t.fun = self;
    // console.log(args);
    const res = t.fun(...args);
    delete t.fun;
    return res;
}

function fun(a,b){
    console.log("a "+a);
    console.log("b "+b);
    console.log("this ",this);
    return 'hello';
}

let a = fun.call({x:10},4,5);
let b = fun.Mycall({x:10},4,5);
console.log(a);
```

