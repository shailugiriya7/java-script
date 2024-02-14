

// SetTimeOut and ClearTimeOut
//setInterval and clearInterval

let stoped; // Declare stoped outside the function so that it's accessible globally

const changetext = function () {
    stoped = setTimeout(() => {
        console.log("hello");
        document.querySelector("h1").innerHTML = "hello, how are you?";
    }, 2000);
};

changetext();
const Clear=document.querySelector("#Clear")
Clear.addEventListener("click",()=>{
   clearTimeout(stoped)
})


const changeContentAndColor = function () {
    const body = document.body;
    const h2 = document.querySelector("h2");

    setInterval(() => {
        h2.innerHTML = "hello time interval..!";
        body.style.backgroundColor = "grey";
    }, 2000);
};

changeContentAndColor();
function Addcolor(){
    setInterval(() => {
        const body=document.querySelector("body")
        body.style.backgroundColor="crimson"
    }, 3000);
}
Addcolor()


// clearinterval

const clearId=setInterval(()=>{
    console.log(Date.now())
},2000)

clearInterval( clearId)





     