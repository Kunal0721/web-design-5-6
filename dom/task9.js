let box = document.querySelectorAll(".box");
console.log(box);

document.getElementById("btn")
.addEventListener("click", function(){
  
    let i = Math.floor(Math.random() * box.length);

    box[i].style.color = "crimson";
    box[i].style.backgroundColor = "black";
  
})
