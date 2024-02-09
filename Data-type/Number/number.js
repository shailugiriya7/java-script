//  Convert Number

let num=5;
let Newnum=Number("shailu")   //number convert
console.log( typeof Newnum)   // output number

let num1=10;
let Newnum1=Number(true) 
console.log( Newnum1) // output 1

let NewNum2=Number(false)
console.log(NewNum2) // output 0

console.log(10+2/3)   // 10.6666




// Number method
// toFixed(),parseFloat(),parseInt()

let x=255.3654;

console.log(x) // output 255.3654
let xNumber=x.toFixed(3)
console.log(xNumber) // output is 255.365 tofixed is range  255.365

console.log(parseFloat(x)) //output is actual value 255.3654
console.log(parseInt(x)) //output round of value exclude after decimal point =255