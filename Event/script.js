// typeof,timestamp,defaultPrevanted,target,toElement
//  srcElement currentTarget,clientX,clientY,screenY
//  altkey,ctrlkey,shiftkey,keyCode
 // attachEvent()
// jquery- on 
// false by default

// event captureing mod top to bottom an bobling bottom to top

// method1
document.getElementById("box1").onclick=()=>{
    alert("hello box1")
} 

// method2
const Box1=document.getElementById("box1")

Box1.onclick=function(e){
    console.log("hello BOx1",e )
}
document.getElementById("box2").addEventListener("click",()=>{
    console.log("hello Box2 ")
},false)



// event propogation

document.getElementById("container").addEventListener("click",(e)=>{
    console.log("outer click")
     e.stopPropagation()
},false)
document.getElementById("box3").addEventListener("click",()=>{
    console.log("inner click")
},false)   // false value by default



document.getElementById("container").addEventListener("click",()=>{
    console.log("outer click")
},true)
document.getElementById("box3").addEventListener("click",()=>{
    console.log("inner click")
},true)

document.getElementById("google").addEventListener("click",(e)=>{
    e.preventDefault();
    e.stopPropagation()
    console.log("google click")
},false)
document.getElementById("box1").onclick=()=>{
    alert("hello box1")
}


