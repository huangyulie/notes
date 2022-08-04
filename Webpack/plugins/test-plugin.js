class TestPlugin{
    constructor(){
        console.log('321123');
    }

    apply(compiler){
        console.log("adasdsa");
    }
}

module.exports = TestPlugin;