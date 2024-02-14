// typeof,timestamp,defaultPrevanted,target,toElement
//  srcElement currentTarget,clientX,clientY,screenY
//  altkey,ctrlkey,shiftkey,keyCode

const Box1=document.getElementById("Box1")
Box1.onclick=function(e){
    console.log("hello BOx1",e )
}
document.getElementById("Box2").addEventListener("click",()=>{
    console.log("hello Box2 ")
})
// event propogation

document.getElementById("container").addEventListener("click",(e)=>{
    console.log("outer click")
     e.stopPropagation()
},false)
document.getElementById("Box3").addEventListener("click",()=>{
    console.log("inner click")
},false)   // false value by default
document.getElementById("container").addEventListener("click",()=>{
    console.log("outer click")
},true)
document.getElementById("Box3").addEventListener("click",()=>{
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


