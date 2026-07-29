let inp = document.getElementById("inp");
let result = document.getElementById("result");
function simple(){
    result.innerHTML = `Hello ${inp.value}`;
}

let fact = document.getElementById("fact");
let result2 = document.getElementById("result2");

function factorial(){
let f =1 ;
for(let i=1; i<= fact.value; i++){
    f *= i;
}
result2.innerHTML = `value : ${f}`;
}
