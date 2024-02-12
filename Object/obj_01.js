 // object literals


const regularuser = {
    username: "shailesh",
    fullname: {
        fname: "shailu",
        lname: "giriya",
        email: "somoneone@gmail.com",
        Address: {
            city: "jabalpur",
            state: "mp",
        }

    }
}
console.log(regularuser.fullname);
console.log(regularuser["fullname"]["fname"]) // name=> shailu

// two and more object connect and spread op

const obj1 = { 1: 'a', 3: 'b' };
const obj2 = { 2: 'q', m: '9' };

const obj3 = Object.assign({}, obj1, obj2); // optinal {} 
console.log(obj3)
console.log(obj1)

const objresult = {...obj1,...obj2};
console.log(objresult);

const users = [
    {
        id: "xyz",
        email: "abc@gmail.com",

    },
]
users[0].id


console.log(regularuser.fullname);
// output is aaray this mtd keys
console.log(Object.keys(regularuser.fullname))
// console.log(Object.length(regularuser))

// denote key value
console.log(Object.values(regularuser.fullname));
// check property
console.log(Object.hasOwnProperty('logdin'));



const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
};

// Destructuring assignment
const { firstName, lastName, age } = person;

console.log(firstName);
console.log(lastName);
console.log(age);

const company = {
    lname: "shailu",
    email: "abhk@gmail.com",
    price: 369,

}
const { lname, email, price } = company;
console.log(lname);
console.log(price);


const num1={a:10,b:20}
const num2={c:30,d:40}
const numResult=Object.assign({},num1,num2)
console.log(numResult)
console.log(numResult=== num1)