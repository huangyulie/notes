const obj = {
    x:1,
}

function fun(){
    console.log(this);
}

fun.call({obj});