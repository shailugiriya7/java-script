function getdata(dataId,nextdata){
    setTimeout(() => {
        if (nextdata) {
            console.log("data....",dataId)
          nextdata()
            
        }
    }, 2000);
}
getdata(125,()=>{
    getdata(126,()=>{
        getdata(1256,()=>{
            getdata(128)
        })
    })
})


function getpatti(callback){
    setTimeout(() => {
        const patti="🌿"
        console.log("chai patti loaading...🌿")
        callback(patti)
    }, 2000);
}
function getSugar(patti,callback){
    setTimeout(() => {
         const sugar=patti+"..."
         console.log("sugar and patti loading...",sugar)
    }, 2000);
}

getpatti((patti)=>{
    getSugar(patti,(sugar)=>{
        console.log("patti and sugar aa gya hai",sugar)
    })
    console.log("patti aa gya hai",patti)

})
getSugar().then((data)=>{
    console.log("suagr",data)
    getpatti().then((data)=>{
        console.log("patti",data)
    })
    .catch((err)=>{
        console.log(err)
    })
})