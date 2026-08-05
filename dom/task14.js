let simple = document.getElementById("simple")
let result = document.getElementById("result");
let box = document.getElementById("box") 

simple.addEventListener("input", function(){
    result.innerHTML = simple.value;
    box.style.width = `${simple.value}px`
    box.style.height = `${simple.value}px`
    console.log(simple.value)
})

let rotate = document.getElementById("rotate")
let rotate_result = document.getElementById("rotate_result")

rotate.addEventListener("input", function(){
    rotate_result.innerHTML = rotate.value;
    box.style.transform = `rotate(${rotate.value}deg)`
})