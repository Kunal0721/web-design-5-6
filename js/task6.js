// // //   1. check the number is positive, 
// // // 	negative or zero. 
// // let n = 0;
// // if( n > 0) console.log("number is positive")
// // else if(n < 0 ) console.log("number is negative")
// // else if(n == 0) console.log("number is zero");

// // //     2. find the max value in a, b and c. 
// // let a  = 10, b = 20, c = 56;
// // if( a > b && a > c) console.log("a is max")
// // else if(b > a && b > c) console.log("b is max")
// // else console.log("c is max")

// // //     3. find the min value in a, b and c. 
// // if(a < b && a < c) console.log("a is min")
// // else if(b < a && b <c) console.log(" b is min")
// // else console.log("c is min")

// //     4. check the triangle is equilateral, 
// // 	isoceles, scalene. 
// let a= 90, b = 60, c = 30;
// if(a == b && b == c && c == a  ) console.log("equilateral ")
// else if( a == b || b == c || c == a) console.log("Isoceles")
// else console.log("Scalene");

// let a = 10;
// switch(a){
//     case 1 : console.log("monday");
//     case 2 : console.log("Tuesday");
//     break;
//     case 3 : console.log("Wednesday")
//     break;
//     case 4 : console.log("Thursday")
//     break;
// }

let ch =  prompt("Enter the choice +, -, *, /, %");
let a = Number(prompt("Enter a value : "));
let b = Number(prompt("Enter b value : "));

switch(ch){
    case '+' :  console.log(a+b);
    break;
    case '-' :  console.log(a-b);
    break;
    case '*' :  console.log(a*b);
    break;
    case '/' :  console.log(a/b);
    break;
    case '%' :  console.log(a%b);
    break;
    
}


// h.w. -> nested if-else 