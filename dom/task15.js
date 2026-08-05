let height_input = document.getElementById("height_input");
let height_result = document.getElementById("height_result");
let box = document.getElementById("box")
let color_input = document.getElementById("color_input")

height_input.addEventListener("input", function(){
    console.log(height_input.value)
    height_result.innerHTML = height_input.value;
    box.style.height = `${height_input.value}px`
})

color_input.addEventListener("input", function(){
    console.log(color_input.value)
    box.style.backgroundColor = color_input.value;
})

let simple = document.getElementById("simple")

simple.addEventListener("input", function(){
    console.log(simple.value)
})