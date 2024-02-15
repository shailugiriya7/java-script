document.getElementById("yellow").onclick=function(){
    document.body.style.backgroundColor="yellow"
}
document.getElementById("crimson").onclick=function(){
    document.body.style.backgroundColor="crimson"
}

function clickHandler(color){
          
    return function(){
        document.body.style.backgroundColor=`${color}`
    }

}
document.getElementById("yellow").onclick=clickHandler("yellow")
document.getElementById("crimson").onclick=clickHandler("crimson")
document.getElementById("black").onclick=clickHandler("black")
document.getElementById("pink").onclick=clickHandler("pink")
document.getElementById("green").onclick=clickHandler("green")
