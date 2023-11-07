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
        console.log(event) //eljárás hívás
        let currentElement = event.target;

        if(currentElement.style.backgroundColor === ""){
            currentElement.style.backgroundColor = "#ff0000";
            currentElement.textContent = currentElement.id;
        }
        else{
            currentElement.style.backgroundColor = "";
            currentElement.textContent = ""; //null
        }

        currentElement.style.display = "flex"
        currentElement.style.alignItems = "center";
        currentElement.style.justifyContent = "center";
        currentElement.textContent = currentElement.id;
        
        
        
    })
    
})

/*
boxes.forEach( szinez);

function szinez(element){
    element.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "red"
    })
}
*/


/*
boxes.forEach(element =>{
    element.addEventListener("click", hattarszinez); //callBack eljárás (függvény)
    function hattarszinez(event){
        event.target.style.backgroundColor = "red";
    }
})
*/
