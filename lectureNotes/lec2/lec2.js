// Printing 
console.log("Hello wolrd ! ");

// error showing example
console.error("This is an error message ");

// warning showing example
console.warn("This is a warning message ! ");

// info showing example
console.info("This is an info message ! ");

// table showing example
const user = [
    {name : "Vijay" , age : 25 },
    {name : "Ajay" , age : 27 }
]

console.table(user);

// time showing example
console.time("Loop Time ");
for(let i =0 ; i<100000 ; i++){
    // some code 
}
console.timeEnd("Loop Time ");
// clear console
 console.clear();