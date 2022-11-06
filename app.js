document.querySelectorAll(".fa-star").forEach(star=>{
    star.addEventListener("click" , (event)=>{
        let parent = event.target.parentElement
        make0Stars(parent)
        let index = Number(event.target.dataset.rating)
        console.log("index =",index )
        createIstar(parent , index)
    })
})


function make0Stars(parent){
    parent.querySelectorAll(".fa-star").forEach(star=>{
        deactivateStar(star)

    })
}

function createIstar(parent , index){
    for (let i=1 ; i<=index ; i++){
        let currentStar = parent.children[i-1]
        activateStar(currentStar)
    }
}

function activateStar(starElem){
    starElem.classList.add("fa-solid")
    starElem.classList.remove("fa-regular")
}

function deactivateStar(starElem){
    starElem.classList.add("fa-regular")
    starElem.classList.remove("fa-solid")
}


