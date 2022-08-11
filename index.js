function fun(){
    console.log(this,"this");
}
Function.prototype.MyBind = function(){
    let arr = Array.from(arguments);
    let t = arr.shift();
    let that = this;
    return function(){
        let a = Symbol();
        t[a] = that;
        t[a]();
        delete t[a];
    }
}

let b = fun.MyBind({x:1});
b();
