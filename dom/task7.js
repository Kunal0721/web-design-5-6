let display = document.getElementById("display");
let a;
let i = 0;
let seconds = 0, mins = 0;
function start(){
    clearInterval(a);
    a = setInterval(()=>{
        seconds++;
        if(seconds === 60){
            mins++;
            seconds = 0;
        }
        display.innerHTML = mins + " : " + seconds;
    }, 100)
}

function stop(){
    clearInterval(a);
}

function reset(){
    i = 0;
    clearInterval(a);
    display.innerHTML = 0;
}