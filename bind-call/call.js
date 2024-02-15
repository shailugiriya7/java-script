function Setuser(username){
    this.username=username
    console.log(username)
}
function CreateUser(username,email,password){
     Setuser.call(this,username)
    this.email=email;
    this.password=password
}
const userDetails=new CreateUser("john","john@gmail.com",125478963)
console.log(userDetails)

for (const key in userDetails) {
    console.log(`${key} : ${userDetails[key]}`)
}