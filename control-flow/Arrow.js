// this key word

const user={
    username:"virendra",
    email:"viru@gmail.com",
    welcomemsg:function(){
        console.log(` user ${this.username} and email ${this.email}`)
    }
}
user.welcomemsg();

// console.log(this) //  node js {} object 
// console.log(this) // browser  global object

function userOne(){
    console.log(this)  //   global object
}
userOne()

function usertwo(){
    let username="ravindra"
    console.log(this.username) // undefined
}
usertwo()

 // arrow functions

const userthree=(num)=>{
   return num*num*num
}
console.log(userthree(10))

const useFour=()=>{
    let name="hello"
    console.log(this.name)
}
useFour()
