// IIFE
//  also function expression
   // anonymous function and arrow function
//   also grouping op

(function(){
    console.log("hello world")
}) ();

(()=>
console.log("this arrow function iife")
)();

 console.log((1).toString) // grouping operator


//  hoisting
// not supported arrow function and anonymous function and also const and let

 welcome()
function welcome(){

    console.log("welcome to hoisting")
}

console.log(x) 
var x = 50; // output undefined



// IIFE
(function welcom(){
    console.log("hello world!")
}) ();
(function (){
    console.log("hello world!")
}) ();

(()=>{
    console.log("hello arrow function")
}) ()