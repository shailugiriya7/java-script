const myobj={
    js:"java script",
    cpp:"c++",
    Hist:"history"
}
for (const key in myobj) {
  console.log(` ${key} => ${myobj[key]}`)
//   console.log(myobj[key])
}