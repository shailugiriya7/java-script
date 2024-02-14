document.querySelector("#container").addEventListener("click", (e) => {
    if (e.target.tagName==="DIV") {
        console.log(e.target.id)
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
  
});

document.querySelector("#container").addEventListener("click", (e) => {
    if (e.target.classList.contains("Box")) {
        console.log(e.target.id);
        e.target.remove();
    }
});

