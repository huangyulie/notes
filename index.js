function demo(fn){
    let timer = null;
    return function(){
        if(!t){
            t = setTimeout(()=>{
                t = null
            },1000);
        }
    }
}