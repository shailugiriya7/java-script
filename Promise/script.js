const PromiseOne= new Promise((resolve,reject)=>{
    setTimeout(() => {
        let success=true
        if (!success==true) {
             resolve("successfully created account")
        } else{
            reject("Failed to create account")
        }
    }, 2000);
}) 
PromiseOne
.then((res)=>{
    console.log("yes",res)
})
.catch((err)=>{
    console.log("sorry",err)
})

// aysnc and try catch ()
// chainning 


const UserDetails=new Promise((resolve,reject)=>{
     setTimeout(() => {
         let success=true;
         if (success==true) {
             resolve({username:"shailu",email:"shailu@.com"})
         }
         else{
            reject("failed to create account")
         }
     }, 2000);
})
UserDetails.then((res)=>{
    console.log(res)
    return res.username
})
.then((username)=>{
    console.log(username)
})
.catch((err)=>{
    console.log("sorry",err)
})


async function deliver(){
    try {
         const response=await  UserDetails
         console.log("successfully delivered",response)
    } catch (error) {
        console.log('invalid user',error)
    }
}
deliver()