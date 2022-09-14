function Promise(event){
    this.promiseState = "pending";
    this.promiseResult = null;

    const res = (data)=>{
        this.promiseState = "fulfilled";
        this.promiseResult = data
    }
    const rej = (data)=>{
        this.promiseState = "rejected";
        this.promiseResult = data
    }

    try{
        event(res,rej);
    }catch(err){
        rej(err)
    }
}

Promise.prototype.then = ()=>{

}