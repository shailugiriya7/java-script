
  // 
if (true) {
    let x=10;
    const y=20;
    var z=30;   
}
// console.log(x); // not defined
// console.log(y) // not defined
console.log(z) // 30

let x=300;
if (true) {
    let x=10;
    const y=20;
    var z=30;  
    console.log(x) 
}
console.log(x)
x="shailu"
console.log(x)


// scope level  nested function
function outer(){
    const username="window"
    function inner(){
        const email="window@.com"
        console.log(username)
    }
    inner()
    console.log(username)
}
outer()

if (true) {
    const name = "sammy";
    if (name === "sammy") {
        const email = "sammy@gmail";
        console.log(`${name} and email ${email}`);
    }
}
