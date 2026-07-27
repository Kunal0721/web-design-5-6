// let a = Number(prompt("Enter a value"));
// let b = Number(prompt("Enter b value"));
// let c = Number(prompt("Enter c value"));
let a, b, c;
if(confirm("Are you sure you want to enter a value")){
     a = Number(prompt("Enter a value"));
     if(!confirm("are you sure you want to enter a value : " +  a)){
        a = 0;
     }
}

if(confirm("Are you sure you want to enter b value")){
     b = Number(prompt("Enter b value"));   
}

if(confirm("Are you sure you want to enter c value")){
     c = Number(prompt("Enter c value"));
}


document.writeln(a + "x<sup>2</sup> + " + b + "x + "+ c + " = 0");
let d = b ** 2 - 4*a*c;
let xpos, xneg;

if(d >= 0){
    xpos = (-b + Math.sqrt(d)) / (2*a);
    xneg = (-b - Math.sqrt(d)) / (2*a);
    console.log("x + : ", xpos);
    document.writeln("<p> x+ : " + xpos + "</p>")
    document.writeln("<p> x- : " + xneg + "</p>")
    console.log("x - : ", xneg);
}
else{
    console.log("Imaginary roots..")
    document.writeln("<p> Imaginary roots.. </p>")
}

// h.w. : ladder if-else 