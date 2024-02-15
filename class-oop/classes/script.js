class User{
    constructor(username,email,password,){
        this.username=username
        this.email=email;
        this.password=password
    }
    enryptPaasowrd(){
        return `${this.password}qwert`
    }
    covertUpperCase(){
     return `${this.username.toUpperCase()}`
    }
}
const UserDetails=new User("purvi","purvi@gmail.com",125)
console.log(UserDetails.enryptPaasowrd());
console.log(UserDetails.covertUpperCase());

function UserOne(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password
}
UserOne.prototype.encryptPassword=function(){
    return `${this.password}scxy`
}
const fulldetails= new UserOne("sammy","sammy@gmail.com",15636633)
console.log(fulldetails.encryptPassword())