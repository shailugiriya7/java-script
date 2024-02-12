let arr=['shailu','CSE',125,true,[1,2,3,4]] //  this multi-dimensional array
  
arr[0]="shailesh" // element change [0] value
console.log(arr[4][2]) // 3
console.log(arr.length) // lenght 5 

const Arraythree=[10,20,30,[40,50],["shailu","hello"]]
const AddResultthree=Arraythree.flat(Infinity)   // like this push method
console.log(AddResultthree);  

console.log([4,5,6,7])



// Array of for_loop

let countries=["india","france","usa","japan","south korea","russia"]

for (let i = 0; i < countries.length; i++) {
 
    console.log(`name of country : ${countries[i]}`)
}

let i=0
while(i < countries.length){
    console.log(`name of country : ${countries[i]}`)
    i++;
}

// for of loop

 for (const country of countries) {
    console.log(`name of country : ${country}`)
 }

 let str="my name is annu";
 let newArray=str.split(' '); // string convert array
 console.log(newArray)
 
 let newStr=newArray.join(' ') // array convert string
 console.log(newStr)
 

