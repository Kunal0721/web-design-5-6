// let ar = [129, 23, 19, 23, "Hello", false, ["shivam", "raj", ["rohan", "om"]]];
//      //   0    1    2   3   4       5           6 
// console.log(ar[6]); // ["shivam", "raj", ["rohan", "om"]]
// console.log(ar[6][2]); // ["rohan", "om"]
// console.log(ar[6][2][1]);  // om
// console.log(ar);
// document.writeln(ar);
// console.log(ar[0]); //  0         1
// console.log(ar[6]) // ["shivam", "raj"]
// console.log(ar[6][1]);

// for(let i=0; i<ar.length ; i++){
//     console.log(ar[i]);  // 12 7 23 90 11
// }

// ar.forEach( a  => console.log(a));

// arrays methods  : 
let ar = [12, 7, 23, 90, 11];
console.log(ar);
// push : add the element at last. 
ar.push(10);
console.log(ar);

// pop : remove the element at last. 
ar.pop();
console.log(ar);

// unshift : add the element at first. 
ar.unshift(67);
console.log(ar);

// shift : remove the element at first. 
ar.shift();
console.log(ar);

let b = ar.slice(0, 3);
console.log(b);
console.log(ar);

// splice : we can add, remove, update at any given index. 
ar.splice(2, 1, 18, 90, 109);  // (pararm1, param2, param3) // param1 => working index
    // param2 : delete, param3 : add or update 
 console.log(ar);
 console.log('------------------------------------');

for(let i=0; i<ar.length; i++){
    if(ar[i] % 2 == 0){
        console.log(ar[i]);
    }
}

console.log('--------------------------------------')
ar.filter(a => a % 2 == 0).forEach(a => console.log(a));

console.log('-------------------------------------------')
ar.filter(a => a >= 20).forEach(a => console.log(a));
console.log("-------------------------------------------");

console.log(ar);

// for(let i=0; i<ar.length; i++){
//     for(let j=i+1; j<ar.length; j++){
//         if(ar[i] > ar[j]){
//             let temp = ar[i];
//             ar[i] = ar[j];
//             ar[j] = temp;
//         }
//     }
// }

ar.sort((a, b) => b - a);

console.log(ar);