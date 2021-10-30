# LESS

## 一、定义

less是一门css的预处理的语言，通过less可以编写更少的代码实现更强大的功能

例子：

```js
html{
    --color:red;
    --length:200px;
}
.a{
    height:var(--length);//调用
}
.b{
    width:calc(1000px/2);//可以自己进行计算函数
}
```

## 二、less语法

设置变量

@a:100px;

width:@a;

```js
.box1{
    &:hover{	
        background:red;
	}
}
```

