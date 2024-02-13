function addition(a,b){
    return a*b;
}
const num=23;
const num1=23;
console.log(addition(num,num1));
const num2=145;
const num3=147;

setTimeout(() => {
    console.log(addition(num2,num3));
}, 2000);

function  square(num){
    return num*num;
}
let num4=58;
const result=square(num4)
console.log(result)


// arrow function

const value=(a,b,c)=>{
    console.log(a*b+c);
}
value(100,200,300)
value(154,230,458)
// +++++++++++++++++++++++++++++++callback+++++++++
function calculate(num1,num2,num3,mission){
    return mission(num1,num2,num3)
}

const add=calculate(120,230,122,(a,b,c)=>{
    console.log(a+b+c)
})
add;


function add(num1 ,num2){
    return num1+num2;
 }
 console.log(add(12,12));
 
 
 const Add=function(num1,num2){
    console.log(num1+num2);
 }
 Add(10,20)
 
 function squer(num){
    return num*num;
 }
 const resultOne=(squer(58));   // => variable
 console.log(resultOne) 
 
 
 function loginUser(username){
    if (!username)  {  // username=== undefined
        console.log("Please enter a username")
        return
    }
    return `${username} loged in`;
 }
 console.log(loginUser())  // undefined loginUser
 // console.log(loginUser("jhon"))
 
 
  // default parameters for login
 function User(username="sam"){
    return `${username} loged in`
 }
 // console.log(User())
 console.log(User("vishal")) // => argument "vishal"