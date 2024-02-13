
//  interw.....question //
function calculate(num1,num2,...number){
    console.log( `${num1} ${number}`)
}
calculate(12,25,25)


function calculate(...number){
    return number
}
console.log(calculate(45,12,36,45,45));





function findpercentage(name,...submarks){
let sum=0;
   for (const marks of submarks) {
        sum = sum+marks
   }
   let parcentage = (sum/submarks.length).toFixed(2)
   console.log(` ${name}'s percentage is ${parcentage}`)
   // return parcentage
}
// console.log(findpercentage(80,90,54,78,95,65,86))
findpercentage("hero" ,80,90,85,45,78,78,96)

