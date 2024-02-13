// forEach => items index and array
// ForEach value return nhi karta hain


const subject=["java", "ruby","c++","python"]

subject.forEach((items)=>{
    console.log(items)
})

function printMe(value){
    console.log(value)
}
subject.forEach(printMe)

subject.forEach((items,index,arr)=>{
    console.log(items,index,arr)

})


// Array in object 

const coding=[
    {
    name:"satis",
    email:"satish@gmail.com"
},
{
    name:"gopal",
    email:"gopal@gmail.com"
}
]
coding.forEach((items)=>{
    console.log(items.email)
})
