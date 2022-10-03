## 手写
```JavaScript
function Student(name){
    this.name = name;
 }
 
 Student.prototype.back = function(){
   console.log(this.name);
 }
 
 function _new(fn,...args){
   if(!fn.hasOwnProperty("prototype")){
     throw new TypeError("不是构造函数");
   }
   let obj = Object.create(fn.prototype);
   let res = fn.apply(obj,args);
   if(res!==null && (typeof res === 'function' || typeof res === 'object')){
     return res;
   }
   return obj;
 }
 
 let s1 = _new(Student,"黄欲烈");
 console.log(s1);
```
