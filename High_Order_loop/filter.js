
// +++++++++++++++++++++++filter++++++++++++++


const number=[1,2,3,4,5,6,7,8,9]
const numberresult=number.filter((items)=> items>4)
console.log(numberresult)

const numberresultOne=number.filter((items)=>{
    return items>6
})
console.log(numberresultOne)


// +++++++++++++++++++++++++++++++++++
const score=[10,20,30,40,50,60]

const scoreOne=[];

score.forEach((items)=>{
    if (items>20) {
        scoreOne.push(items)
    }
})
console.log(scoreOne)


let products = [
    { id: 1, name: 'Laptop', price: 1200, brand: 'Dell' },
    { id: 2, name: 'Smartphone', price: 800, brand: 'Apple' },
    { id: 3, name: 'Tablet', price: 500, brand: 'Samsung' },
    { id: 4, name: 'Smartwatch', price: 300, brand: 'Fitbit' },
    { id: 4, name: 'Smartwatch', price: 1000, brand: 'LG' },
    { id: 4, name: 'Smartwatch', price: 1200, brand: 'LG' }
];

const ProductResult=products.filter((items)=>{
         return items.price> 500  && items.brand === 'LG'
})
console.log(ProductResult)