const div=document.createElement("div")
  div.className="main"
  div.id="myId" // math.floor(math.random()*10+1) zero nhi aayega ab 
div.setAttribute("title","generated title ")
div.style.color="yellow"
div.style.padding="10px"
// div.innerText="hello world !"
const Addtext=document.createTextNode("hello world")
 div.appendChild(Addtext)
 document.body.appendChild(div)

 
 const DivOne=document.body.appendChild(div)
 DivOne.style.backgroundColor="red"
 DivOne.innerHTML="kaise ho babu rangilaa"