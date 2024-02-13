 // object in function

const fullname={
    name:"marry",
    email:"marry@gmail.com",
}
function getFullName(object){
    console.log(`username  is ${object.name} and email  ${object.email}`);
}
getFullName(fullname)
getFullName({name:"vishal", email:"vishal@gmail.com"})
  

// array in function

const myArray=[10,20,30,40]

function getArray(ArrayValue){
    return ArrayValue[2];
}
console.log(getArray(myArray))

console.log(getArray([10,40,50,60,80])) 