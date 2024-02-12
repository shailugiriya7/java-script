const myArray=[1,2,3,4,5,6,7,8]
myArray.reverse();
console.log(myArray);
// myArray.sort()
console.log(myArray)

 
const Arrayone=[12,13,14,15]
const ArrayTwo=[16,17,18,19]
const AddArray=Arrayone.concat(ArrayTwo);
console.log(AddArray)

const arrayOne= new Array(1,2,3,4)
console.log(arrayOne[1]) // 2

// push and pop ()
const arraytwo=[1,2,3,4]
arraytwo.push(5)
console.log(arraytwo)

const POP =arrayOne.pop()
console.log(POP)




//  spread oprater
const AddResult=[...Arrayone,...ArrayTwo];
console.log(AddResult)

//  flat 
const Arraythree=[10,20,30,[40,50],["shailu","hello"]]
const AddResultthree=Arraythree.flat(Infinity)
console.log(AddResultthree);

console.log(Array.isArray("shailu"))  // false 
console.log(Array.from("shailu"))  // converte array 
console.log(Array.from({name:"shailu"}));  // empty array return


const score1=100;
const score2=200;
const score3=300;
console.log(Array.of(score1,score2,score3))