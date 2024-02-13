<<<<<<< HEAD
function add(num1 ,num2){
   return num1+num2;
}
console.log(add(12,12));
=======
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
const result=(squer(58));   // => variable
console.log(result) 


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
>>>>>>> e625fd4055e692376d8a120e96603dc396e36612