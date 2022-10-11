const arr = [1, 2, 3, 4, 12, 4, 5];

function map(arr, callback) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        res.push(callback(arr[i], i));
    }
    return res;
}

let data = map(arr, (item, index) => {
    console.log(item);
    return item * 10
})
console.log(data);