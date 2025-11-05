const calc = require('./calc');

const num1 = 45 ;
const num2 = 10 ; 

console.log(`Addition of ${num1} and ${num2} is : ${calc.add(num1 , num2)}`);
console.log(`Substraction of ${num1} and ${num2} is : ${calc.substract(num1 , num2)}`);
console.log(`Multiplication of ${num1} and ${num2} is : ${calc.multiply(num1 , num2)}`);
console.log(`Division of ${num1} and ${num2} is : ${calc.divide(num1 , num2)}`);
