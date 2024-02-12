const fbuser=new Object()// singalton object
console.log(fbuser)

const tinderUser={}
console.log(tinderUser) // non singalton obj

const user={
    username:"shailu",
    mob:457952,
    pwd:"jfh@123",

}
console.log(user.mob);
user.mob=8518
console.log(user.mob);

let details = {
    userone: {
        name: "vishal",
        mobile: 58187952,
        email: "kfh@gmail.com",
        userTwo: {
            name: "merry",
            mobile: 78965,
            email: "nmp@com",
        }
    }
}

// function call object++++++++++++++++++++++++++++++++++++++++++++++++++

const emp = {
    firstName: "saint",
    lastName: "merry",
    email: "ncmd@.com",

    fulldetails: function () {
        return `${this.firstName} ${this.lastName}`; // Corrected the template literal
    }
};

console.log(emp.fulldetails());

// sprade+++++++++++++++++++++++++

const score1={"a":1,"b":6};
const score2={"c":8, "d":10};

const score3={...score1,...score2};

console.log(score3);


// ++++++++++++++++++ function method+++++++++++++++++++++++++

let fulldetails = {
    firstName: "vinode",
    lastName: "merry",
    mobile: 78954,
    street: "south avenue",
    state: "colombia",
    Add: {
        address: "church gate USA"
    },

        sayhello: function () {
            return `My name is ${this.firstName} ${this.lastName}`;
        }
    
};

console.log(fulldetails.sayhello()); // Output: "My name is vinode merry"

// object destructure++++++++++++++++++++++++++++++++++++++++++++++++++++++

let score={
    sachin:78,
    virat:23,
    rohit:100,
};
const{ sachin,virat, rohit   }= score ;
console.log(sachin);
console.log(rohit);

// +++++renaming object+++++++
let name={
    fullname:"merry",

}
console.log(name.fullname);
name.fullname="saint";
console.log(name.fullname);


//++++++++++++++++Object  destructure ++++++++++

let subject={
    sub1:"java",
    sub2:"c++",
      allsub:{
        sub3:"js"

      }
};
const {sub1:subject1}=subject
// console.log(sub1)
console.log(subject1)