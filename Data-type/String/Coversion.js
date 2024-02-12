// Number, String, Boolean ,NaN

let score = "40"

let marksNumber = Number(score)
console.log(marksNumber);
console.log(typeof marksNumber);

let grade = "50"
let cardNumber=Number(grade);
console.log(cardNumber);
console.log(typeof cardNumber);

let shailesh="shailu"
let fullName=Number(shailesh);
console.log(fullName);
console.log(typeof fullName);


let fruit="apple"
let allFruit=fruit
allFruit="orange"

console.log(fruit);
console.log(allFruit);


const number=20;
const numveron1=String(number)
console.log(number)
console.log(typeof numveron1)

// number to string conversion
const numveron12=String(number)
console.log(typeof numveron12)

const name="jhonde"
console.log(name)
const nameCov=Number(name)
console.log( typeof nameCov)
console.log(nameCov) // output NaN

//NaN
const scoreOne=null
console.log(scoreOne)
const scoreOneCov= Number(scoreOne)
console.log(typeof scoreOneCov)
console.log(scoreOneCov) //output 0

// bolean value   to conversion

let scoreTwo=true;
console.log(scoreTwo)

let scoreTwoCov=Number(scoreTwo)
console.log(scoreTwoCov) // output 1 and false case: 0

// boolean value to conversion

let islogdIn=1;
let islogdInCov= Boolean(islogdIn)
console.log(islogdInCov);

// 1=> ture ; 0=> false
// ""=> false
// "shailu"=> ture
