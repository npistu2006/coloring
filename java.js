const contnent = document.querySelector(".contnent");

for(let i = 0; i < 64; i++){
    //template literal Altgr+7 - ${változó}
    contnent.innerHTML += `<div class="box" id="${i+1}"></div>`;
}

// NodeList-ként megkapjuk a .box-okat:
const boxes = document.querySelectorAll(".box");

//Végig megyünk az összes div-eken, és rájuk akasztunk egy esemény figyelőt:
boxes.forEach(element => {
    // Az esemény figyelő a click eseményre indul be: 
    element.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "red";
    })
})

