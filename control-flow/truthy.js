// falsy value
// false,0 ,-0, Bigint 0n,'' ,null, undefined,NaN

// truthy values
// [], "0",'false', " " ,  {}, function(){},

const userEmail=[];
if (userEmail.length==0) {
    console.log("array is empty")
    
}

const emptyObj={};
if (Object.keys(emptyObj).length==0) {
    console.log("object is array")
    
}