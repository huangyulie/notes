function debounce(fn,time){
    let timer = null;
    return function(){
        if(timer){
            clearTimeout(timer);
        }
        if(!timer){
            fn.call(this,arguments);
        }
        timer = setTimeout(()=>{
            timer = null;
        },time) 
    }
}