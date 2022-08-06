let arr = [1,2,3,4,5,[2,3,4,5,6,[4,3,21,3,5]],[123,123,421],312,4123];
// 第一种

function Reduce(arr){
    return arr.reduce((pre,item)=>{
        return pre.concat(Array.isArray(item)?Reduce(item):item);
    },[])
}

console.log(Reduce(arr));

// 第二种
console.log(arr.flat(Infinity));