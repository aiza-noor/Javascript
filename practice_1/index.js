let message = 'hello world';

console.log(message);
// console.log(message);

message = 'I got admission in Web development';
// Alt + Shift + Down(Arrow)
let message2 = 'I got admission in Web development';

console.log(message);
console.log(message2);

let number1 = 5;

console.log(number1)

let number2 = 20
console.log(number2)

//Mthematical Calculation 

let a = 26;
let b = 2;

let add = a + b;
let sub = a - b + add; // a-b + (a + b)
let multi = a * b;
let div = a / b;
let modulus1 = a % b;
let modulus2 = 13 % b;
let modulus3 = 5 % 3;
console.log(add, sub, multi, div)

console.log(modulus1, modulus2, modulus3);

//Float Type Numbers
let floatN = 26.02;
let floatN2 = 2.343;

let addFloat = floatN + floatN2;
let subFloat = floatN - floatN2 + addFloat;  //a-b + (a + b)
let mutiFloat = floatN * floatN2;
let divFloat = floatN / floatN2;

console.log(addFloat, subFloat, mutiFloat, divFloat);

let number_1 = 10;
let string_1 = 'Hello';

let addNumAndString = string_1 + number_1 + 15;
let addNumAndString2 = number_1 + string_1  + 15;
let addNumAndString3 = number_1 + 15 + string_1 ;
let addNumAndString4 = number_1 + 15 + ' '+ string_1 ;

console.log (addNumAndString, addNumAndString2,
addNumAndString3, addNumAndString4);

//Template litterals;

let name = 'Aiza';
let age = 19;
let statement = `My name is ${name} and I am ${age} years old`;
let Statement1 = `${number_1 +15}  ${string_1}`;

console.log(statement);
//console.log(statement1);
