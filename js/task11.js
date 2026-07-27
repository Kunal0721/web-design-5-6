
add(6, 7, 11);

// let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];

// console.log(ar);
// for(let i=0; i<ar.length; i++){
//     console.log(ar[i]);
// }
// console.log("--------------------------------------")

// ar.forEach(a => console.log(a));

// console.log("-------------------------------------")

// ar.filter(a => a % 2 == 0).forEach(a => console.log(a));

// console.log('------------------------------------')

// ar.filter(a => a > 5).forEach(a => console.log(a));

// console.log('-------------------------------------------------')

// // splice : add, delete or update the value in any index of an array. 
// console.log(ar);
// ar.splice(3, 1); 
// console.log(ar);
// ar.splice(5, 2, "Hello world");
// console.log(ar);

// let s = "Hello world";

// console.log(s);
// console.log(s.toLowerCase());
// console.log(s.toUpperCase());

// let n = "Kunal ";
// console.log(n);
// console.log(n.length);
// n = n.trim();
// console.log(n.length);

// console.log(n.startsWith('Kun'));
// console.log(n.endsWith('raj'));

// let students = [
//     { name: "mohit", age: 19, rollno: 111, gender : "male", marks : [23, 88, 90]},
//     { name: "shivam", age: 19, rollno: 112 , gender : "male", marks : [10, 10, 10]},
//     { name: "shivani", age: 19, rollno: 113 , gender : "female", marks : [83, 68, 90]},
//     { name: "ritika", age: 19, rollno: 114  , gender : "female", marks : [98, 88, 90]},
//     { name: "kritika", age: 19, rollno: 115 , gender : "female", marks : [28, 58, 50]},
//     { name: "radhA", age: 19, rollno: 115 , gender : "female", marks : [28, 58, 50]},
// ]

// students.filter(a => a.name.toLowerCase().endsWith('a')).forEach(a => console.log(a));

function add( a,b, c){
    console.log(a+b);
}

// functions : 
//      1. check the number is even or odd. 
function check(a){
    console.log(a % 2 == 0 ? a + " even" : a+  " odd");
}

check(7);
check(71);
check(74);

//      2. check the student is eligible to vote or not. 
function vote(a){
    console.log(a >= 18 ? "eligible" : "not eligible");
}