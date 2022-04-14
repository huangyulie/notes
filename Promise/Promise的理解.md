# 一、Promise是什么

## 1.1 理解

### (1)抽象表达

Promise是一门新的技术(ES6规范)

Promise是JS中进行异步编程的新解决方案

### (2)具体表达

从语法上看:Promise是一个构造函数

从功能上看:Promise对象用来封装一个异步操作并可以获取其成功/失败的结果

## 1.2 为什么要使用

### (1)指定回调函数的方式更加灵活

旧的，必须在启动异步任务前指定

Promise:启动异步任务=>返回Promise对象=>给Promise对象绑定回调函数(甚至可以在异步任务结束后指定/多个)

### (2)支持链式调用，可以解决回调地狱问题

回调地狱是什么？

回调函数嵌套调用，外部回调函数异步执行的结果是嵌套的回调执行的条件

回调地狱的缺点

不便于阅读，不便于异常处理



# 二、Promise的初级代码

```js
function rand(m,n){
    return Math.ceil(Math.random()*(n-m+1)+m-1);
}
const btn = document.querySelector('#btn');
btn.addEventListener('click',function(){
    const p = new Promise((res,rej)=>{
        setTimeout(() => {
            let n = rand(1,100);
            if(n<=30){
                res();
            }else{
                rej();
            }
        }, 1000);
    });

    p.then(()=>{
        alert('我最牛逼')
    },()=>{
        alert('我是傻逼')
    })
})
```

```js
const fs = require('fs');

//回调形式
// fs.readFile('./resource/content.txt',(err,data)=>{
//     if(err) throw err;//如果出错就抛出
//     console.log(data.toString());
// });

//Promise形式
let p = new Promise((res,rej)=>{
    fs.readFile('./resource/content.txt',(err,data)=>{
        if(err){
            rej(err);
        }
            res(data);
    })
})

p.then(data=>console.log(data.toString()),err=>console.log(err));
```

```js
const btn = document.querySelector('#btn');
    btn.addEventListener('click',function(){
        const p = new Promise((res,rej)=>{
            const xhr = new XMLHttpRequest();
            xhr.open('GET','https://api.apiopen.top/getJoke');
            xhr.send();
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status>=200 && xhr.status<300){
                        res(xhr.response);
                    }else{
                        rej(xhr.status);
                    }
                }
            }
        })
        p.then(a=>console.log(a),b=>console.log(b))
    })
```

## //封装fs

```js
//原生
function mineReadFile(path){
    return new Promise((res,rej)=>{
        require('fs').readFile(path,(err,data)=>{
            if(err) rej(err);
            res(data);
        })
    })
}

mineReadFile('./resource/content.txt').then(n=>console.log(n.toString()),m=>console.log(m))
//util模块封装
const util = require('util');

const fs = require('fs');

let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./resource/content.txt').then(n=>console.log(n));
```

## //封装ajax

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
<script>
    function sendAjax(url){
        return new Promise((res,rej)=>{
            const xhr = new XMLHttpRequest();
            xhr.open('GET',url);
            xhr.send();
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status>=200 && xhr.status<300){
                        res(xhr.response);
                    }else{
                        rej(xhr.status);
                    }
                }
            }
        })
    }

    sendAjax('https://api.apiopen.top/getJoke').then((value)=>{console.log(value);});
</script>
</html>
```

