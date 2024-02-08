for (let i = 1; i < 10; i++) {
    const element = i;
    console.log(element)
}

for (let i = 1; i < 10; i++) {
    if (i==5) {
        console.log("number five is best")
        // continue
    }
    console.log(i)
}
for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
        console.log(i + '*' + j + ' = ' + i * j);
    }
}

const myArray=["hero ", "rohan","raghav"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}
for (let i = 1; i < 20; i++) {
    if (i == 7 || i == 13) {
        console.log("hello 7 and 13");
        break;
    }
    console.log(i);
}
function x(){
    for (let i = 0; i < 10; i++) {
        function print(value){
            setTimeout(() => {
            
                console.log(value) 
                // console.log("please wait...")
            }, value*2000);

        }
        print(i)
    }
}
x()
