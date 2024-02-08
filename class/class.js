class User{
    constructor(username,password,email){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return `${this.password}123`
    }
    chnageUsername(){
        return`${this.username.toUpperCase()}`
    }
}
const UserDetails=new User("vishal","qwer","vishal@.com")
console.log(UserDetails.encryptPassword())
console.log(UserDetails.chnageUsername())



// without class

function Usertwo(username,password ,email){
    this.username=username;
    this.password=password;
    this.email=email;
}
Usertwo.prototype.encryptPassword=function(){
    return `${this.password}123`
}
Usertwo.prototype.chnageUsername=function(){
    return `${this.username.toUpperCase()}`
}

const tea=new Usertwo("vishal","qwert","vishal@.com")
console.log(tea)
console.log(tea.encryptPassword())
console.log(tea.chnageUsername());