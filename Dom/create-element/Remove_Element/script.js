const body=document.querySelector("body")
body.style.backgroundColor="grey"
const div=document.createElement("div")
div.style.color="white"
const Addtext=document.createTextNode("hello world")
div.appendChild(Addtext)
document.body.appendChild(div)
const hero=document.body.appendChild(div)
hero.style.fontSize="40px"


// Create Element =>function
// methdo 1 
function addlang(langName){
    const LI=document.createElement("li")
    LI.innerHTML=`${langName}`
    const Subject=document.querySelector(".langauge")
    Subject.appendChild(LI)
    
}
addlang("python")
addlang("DSA")

// Method 2
function AddOptLanguage(langName){
   const LI= document.createElement("li")
   const Addtext=document.createTextNode(langName)
   LI.appendChild(Addtext)
   document.querySelector(".langauge").appendChild(LI)
}
AddOptLanguage("goLang")
AddOptLanguage("history")

// Edit
const secondlang= document.querySelector("li:nth-child(2")
// secondlang.innerHTML="hindi"
const NewLi= document.createElement("li")
NewLi.textContent="maths"
secondlang.replaceWith(NewLi)

// 
const firstLang=document.querySelector("li:nth-child(1)")
firstLang.outerHTML=`<li>geography</li>`

// remove

const lastlang=document.querySelector("li:last-child")
lastlang.remove()