
const myNumber=[10,20,30,40,50,60,70,80,90]

const myNumberResult=myNumber.reduce((acc,curr)=>{
    console.log(` acc ${acc} and curr :${curr}` )
    return acc+curr
    
},0)
console.log(myNumberResult)