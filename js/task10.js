// let student = {
//     name : "Rohan", 
//     age : 18, 
//     rollno : 101
// };

// console.log(student);

// document.writeln("Name : " , student.name , student.age , student.rollno);

let students = [
    { name: "mohit", age: 19, rollno: 111, gender : "male", marks : [23, 88, 90]},
    { name: "shivam", age: 19, rollno: 112 , gender : "male", marks : [10, 10, 10]},
    { name: "shivani", age: 19, rollno: 113 , gender : "female", marks : [83, 68, 90]},
    { name: "ritika", age: 19, rollno: 114  , gender : "female", marks : [98, 88, 90]},
    { name: "kritika", age: 19, rollno: 115 , gender : "female", marks : [28, 58, 50]},
]

let maletotal = 0;
for(let i=0; i<students.length; i++){
    if(students[i].gender == "male") maletotal++;
}
let femaltotal = students.length - maletotal;
console.log(students);
// document.writeln(students[0].name);
document.writeln(`<div class="container my-5">`)
document.writeln(`<h1 class="my-2"> Total Students : ${students.length}, Male : ${maletotal}, Female : ${femaltotal} </h1>  `)
document.writeln(`</div>`)
document.writeln(`<div class="container">`);
document.writeln(`<div class="row">`)
students.forEach(a => {
    document.writeln(`
        <div class="col-3">
            <div class="card p-4 m-2" style="width: 18rem;">
            <h4 class="card-title ${a.gender === "male" ? "text-black" : "text-danger"}" > ${a.name.toUpperCase()} </h4>
            <h6 class="card-title ${(a.marks[0] + a.marks[1] + a.marks[2]) / 3 > 33 ? "text-success" : "text-danger"}" > 
            ${(a.marks[0] + a.marks[1] + a.marks[2]) / 3 > 33 ? "Passed" : "failed"}
            </h6>
           <div> Name : ${a.name}, Age : ${a.age}, Rollno : ${a.rollno} </div>
           </div>
        </div>`);
})
document.writeln(`</div>`)
document.writeln(`</div>`);
