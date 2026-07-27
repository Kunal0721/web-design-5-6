// // function simple(){
// //     return 90
// // }

// // let a = simple();
// // console.log(a);
// // console.log(simple());
// // let b = Math.pow(2, 5);
// // console.log(b);

// let a = () => {
//     console.log("Hello world");
// }

// console.log(a);
// a();

// let sq = (a) => a*a;
// console.log(sq(4));

// let ar = [1, 2, 3, 5, 89, 19 ];
// ar.sort((a, b) => b - a);
// console.log(ar);

let hero = document.getElementById("hero");
function change(){
hero.innerHTML = "Hello galaxy";
hero.style.color = "white";
hero.style.backgroundColor = "black";
}