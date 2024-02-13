const parent=document.querySelector(".parent")



console.log(parent)
console.log(parent.children);
console.log(parent.children[2].innerHTML)

for (let i = 0; i<parent.children.length; i++) {
  console.log(parent.children[i].innerHTML)
    }

    parent.children[3].style.color="red"
    console.log(parent.firstElementChild)
    console.log(parent.lastElementChild)

    const Home=document.querySelector(".Navbar")
    console.log(Home);
    console.log(Home.parentElement)
    console.log(Home.nextElementSibling)

    console.log("NODES", parent.childNodes) 
    // 0 =>text
    // 1=> div 
    // 2=>text 
    // included line break  number 