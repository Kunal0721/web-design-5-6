let hero = document.getElementById("hero");
let btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    hero.innerHTML = "Hello galaxy";
    hero.style.color = "white";
    hero.style.backgroundColor = "black";
})