function User(username,password,IsLogedIn,phone){
    this.username=username;
    this.password=password;
    this.IsLogedIn=IsLogedIn
    this.phone= phone
    return this
}

const UserOne = new User("john","john@123",true,5874581);
console.log(UserOne)

const UserTWo = new User("sammy","sammy#123",false)
console.log(UserTWo.constructor) //  output function User