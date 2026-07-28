let hero = document.getElementById("hero");
let btn = document.getElementById("btn");

let i = 0;
function simple() {
    if (i === 0) {
        hero.innerHTML = "Hello galaxy";
        hero.style.color = "white";
        hero.style.backgroundColor = "black";
        btn.innerHTML = "Off";
        i++;  // i = 1
    }
    else {
        hero.innerHTML = "Hello world";  
        hero.style.color = "black";
        hero.style.backgroundColor = "white";
        btn.innerHTML = "On";
        i--;  // i = 0
    }
}

let bulb = document.getElementById("bulb");

function bulbWork(){
    bulb.style.backgroundColor = "yellow";
    bulb.style.boxShadow = " -22px 3px 76px 38px rgba(243,242,59,0.75)";
    bulb.style.border = "none";

}