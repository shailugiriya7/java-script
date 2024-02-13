const myNums = [10, 20, 30, 40, 50, 60, 70]

const myNumsResult = myNums.map((items) => {
    return items + 10
})
console.log(myNumsResult)


// map channing

const myNumsResultTwo = myNums
    .map((items) => items + 10)
    .map((items) => items + 10)
    .map((items) => items + 100)
    .filter((items)=>items >150)
console.log(myNumsResultTwo)