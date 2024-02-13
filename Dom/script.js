const H2=document.querySelector("h2")
H2.style.backgroundColor="green"
document.querySelector("p")
document.querySelector("p:first-child")
document.querySelector("#loremOne")
document.querySelector(".hero")
document.querySelector("img")

const Ul=document.querySelector("ul")
Ul.style.backgroundColor="red"
Ul.style.width="100px"

const LI=document.querySelectorAll("li")

// return NodeList so ForEach

LI.forEach((Items)=>{
    Items.style.backgroundColor="green"
    
})

// class ke case me html collection milega  to html collection ko array mein convert then any method from array

const BOX=document.querySelectorAll(".Box")
const Coverted=Array.from(BOX)
console.log(Coverted)
Coverted.forEach((item)=>{
    item.style.color="red"
    item.width="50px"
})