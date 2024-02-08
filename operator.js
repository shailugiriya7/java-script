// nullish coalesing operator (??): null undefiend

let val1;
val1 = 10 ?? 12;
val1= null ?? 10;
val1= undefined ?? 15;
val1= null ?? 10 ?? 12;

console.log(val1);

// terninary operator

// conditon  ? ture :false

const iceTeaPrice=124;
iceTeaPrice <= 100 ? console.log("less than 100") : console.log("more than 100")