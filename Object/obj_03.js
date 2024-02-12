// symbole defind


const mysym=Symbol("key1")
const mysym1=Symbol("key2")
// object defind
const details = {
    name: "shailesh",
    email: "shailu@gmail.com",
    logedin: "monday",

    // key syntax
  [mysym]:"key1",
  [mysym1]:"key2"
}
// other object defind
console.log(details.logedin);

console.log(details["name"]);
console.log(details.email);
console.log(details[mysym]);
console.log(details[mysym1]);
console.log(typeof details.mysym)  // undefined





//change element this

details.email="vishal@.com"
console.log(details.email)

// freeze element
Object.freeze(details)
details.email="bagatbilla@.com"
console.log(details)

details.greeting = function () {
    console.log("hello say");

}


details.greeting2=function(){
    console.log("hello,${this.name}");
}
console.log(details.greeting2());
console.log(details.greeting());
