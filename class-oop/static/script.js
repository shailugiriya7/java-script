class User{
    constructor(username){
        this.username=username
    }
    usercall(){
        console.log(`user name ${this.username}`)
    }
   static creatId(){         // static constructor not useing , used static
        return `qwer123`
    }
}
const Student=new User("shailu")
console.log(Student.creatId());


class Coder extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const helloCoder=new Coder("vikrant0","vk123@.com")

console.log(helloCoder.creatId());

// this code static mainly