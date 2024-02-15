class User {
    constructor(username, password, email) {
        this.username = username;
    }

    callMe() {    // this method 
        console.log(`Call me ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, password, email) {
        super(username);
        this.password = password;
        this.email = email;
    }

    callMeTeacher() {
        console.log(`Teacher name: ${this.username}`);
    }
}

const TeacherDetails = new Teacher("vaibhav", "qwe123", "vaibhav@.com");
TeacherDetails.callMeTeacher();
const Student=new User("js Student")
Student.callMe()
console.log(TeacherDetails===Student)
console.log(TeacherDetails instanceof Teacher)
console.log(Student instanceof User)
