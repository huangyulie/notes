let b ;

function ajax() {
    return new Promise((res)=>{
        setTimeout(() => {
            res('123123')
        }, 1000);
    })
    // let xhr = new XMLHttpRequest();
    // xhr.open("get", "https://netease-cloud-music-api-zeta-bice.vercel.app/top/playlist");
    // xhr.onreadystatechange = () => {
    //     if (xhr.readyState === 4) {
    //         if (xhr.status >= 200 || xhr.status < 400) {
    //             async(xhr.response);
    //         }
    //     }
    // }
    // xhr.send(null);
}

async function async(){
    b = await ajax();
    console.log(b);
    return '`12`1';
}
let a;
async().then((res)=>{});

console.log(b);