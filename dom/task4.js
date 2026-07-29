let result = document.getElementById("result");

function append(a){
    result.value += a;
}
function calculate(){
    result.value = eval(result.value);
}

function clearing(){
    result.value = "";
}