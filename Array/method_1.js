const myArray=[10,20,30,40,50,60]

console.log(myArray.join()) // join convert to value string format
console.log(myArray)

const newArray= new Array(10,20,30,40,50,60)
console.log(newArray)
console.log(newArray[2])
newArray.push("shailu") // last value add 

console.log(newArray)
newArray.pop() // last value remove
console.log(newArray)

newArray.unshift("hello") //value add zero index
console.log(newArray)

newArray.shift() // value remove zero index
console.log(newArray)

console.log(newArray.includes(20))
console.log(newArray.indexOf(3)); // output is = -1 beacause 3 not existing  index 
console.log(newArray.indexOf(10));

 // slice
const N1Array=[1,2,3,4,5,6,7]
console.log(N1Array)
const SliceArray=N1Array.slice(1,4) // means 1 to 4 => 4th element not include
console.log(` slice array ${SliceArray}`)


// splice => orignal array value totaly change  and new aaray return 

const SpliceArray=N1Array.splice(1,4) // means 1 to 4 element delete
console.log(SpliceArray) 
console.log(N1Array) // output is 1 6 7

const number=[10,20,30,40,50,60]
console.log(`include  ${number.includes(10)}`)
console.log(`index ${number.indexOf(20)}`)

