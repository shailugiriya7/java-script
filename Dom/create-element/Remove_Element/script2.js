function AddDays(weekName){
    const LI=document.createElement("li")
    LI.innerHTML=`${weekName}`
    const NewWeek=document.querySelector(".week")
          NewWeek.appendChild(LI)
    // document.querySelector(".")
}
AddDays("monday")

function addday(weekname){
    const LI=document.createElement("li")
    const ADD=document.createTextNode(weekname)
    LI.appendChild(ADD)
    document.querySelector(".week").appendChild(LI)
}
addday("wednesday")