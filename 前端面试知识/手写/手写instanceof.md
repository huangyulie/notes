function myInstanceof(left,right){
    let proto = Object.getPrototypeOf(left);
    let res = right.prototype;
    while(1){
        if(!proto)return false;
        if(proto === res)return true;
        else{
            proto = Object.getPrototypeOf(proto);
        }
    }
}

let a = {
    a:1
};

console.log(a instanceof Array);
console.log(myInstanceof(a,Array));
