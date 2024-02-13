 // for of loop =>Array
const myArrary=[10,20,30,40,50,60]

for (const iterator of myArrary) {
     console.log(iterator)
}

const greeting="welcom message"

for (const greet of greeting) {
      console.log(`greeting ${greet}`)
}

// map (hold key and values) uniqe value 

const map=new Map()
map.set("in", "india")
map.set("usa","united state of america")
console.log(map)
for (const [key,value] of map) {
      console.log(key,':-',value)
}

const subject=["js","c++","python","javascript"]
for (const key in subject) {
  console.log(key)              // print key
  console.log(subject[key])
}