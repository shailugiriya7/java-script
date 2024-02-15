 
// jokes API

let url="https://api.chucknorris.io/jokes/random"
async function getJokes(){
    try {
        const response=await fetch(url)
        const data= await response.json()
        console.log(data)

        // value extract
        
        const result= data.value
      
        const id=data.created_at
        console.log(id)
        console.log(result)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
getJokes()