let myName = 'Aiza';

//Checking variable type
const typeName = typeof(myName);

console.log(typeof myName);

console.log(myName, typeName);

myName = 5;
const typeName2 = typeof(myName)
console.log(myName, typeName2);

//Boolean data type
let lightStatus = false;
let lcdStatus = true;

console.log(lightStatus);
console.log(lcdStatus);

const typeStatus = typeof(lcdStatus);
console.log(typeof(lcdStatus));
console.log(typeStatus);

//Arrays
const arrayofNumbers = [1, 2, 3, 4, 6];
console.log(arrayofNumbers);

// Access value by index
console.log(arrayofNumbers[2]);
// lenght of Array
const lengthofArray = arrayofNumbers.length;
console.log(lengthofArray);

console.log(arrayofNumbers[lengthofArray-1]); // Get last index of array


//Array Manipulation

const numbersArray = [1, 2, 3, 4, 5];

//Add new value into array
numbersArray.push(75,65,3434);

console.log(numbersArray);

//remove last index value from array

numbersArray.pop();

const arrayofAllRounders = [
 1,
 "Aiza",
 true,
 [5,5,5,5]
];
console.log(arrayofAllRounders);

//objects

const first_object = {
  name: 'Aiza' ,
  rollNumber: 908,
  attendence: true,
};

/*scores: [5, 5, 10, 0],
course_score; {
 js : 10,
 html : 5,
}*/

first_object.name = 'Roshaan'; // changing object key name

console.log(first_object.name);

first_object.scores = [5,5,10,0]; // Add a new key/value pair to object

first_object.rollNumber = 761;

console.log(first_object);


first_object.course_score = {
  js: 10,
  html: 8,
}
delete first_object.attendence;

console.log(first_object);

const html = first_object.course_score.html; // accessing nested object value

console.log(html);

// Conditional Programming

let weather = 'sunny';

if (weather === 'rain') {
  console.log('umberalla is required');
} else{
  console.log('nothing is required');
}

// OR Operator 
if (weather === 'rain' | weather === 'sunny'){
  console.log('umberalla is required');
} else {
  console.log('nothing is required');
}

// AND Operator

let js = 5;
let css = 10;

if (js>=5 & css>=5) {
  console.log('pass');
} else {
  console.log('Fail');
}


if (js>=5 & css >=20) {
  console.log('pass');
} else {
  console.log('Fail');
}

// Difference between == & ===

let value = 10;

if (value == 5) console.log(true);
else console.log(false);

if (value === 10) console.log(true);
else console.log(false);

let value1= 509;
 if(value1 == '509') console.log(true);
 else console.log(false);

 // While loops
let weathercondition = 'rain';
let count = 0;
while (weathercondition = 'rain'){
  console.log('It is Raining outside');
  count+=1;
  console.log(count)
  if (count === 5){
   console.log(weathercondition = 'sunny');
    break;
  }
}

// Ternary operator ? (if-else shorthand)
(weather === 'rain' ? console.log('umberalla is required') : console.log('nothing is required'));
(weather === 'rain' | weather === 'sunny' ?  console.log('umberalla is required'):  console.log('nothing is required'));
 
// Nested While Loop


while(true){
  while (weathercondition === 'rain'){
    console.log('It is Raining Outside');
    count+=1;
    console,log(count)
    if(count === 5) {
      console.log(weathercondition);
      break;
    }
  }
  break;
}
 
// Array 

const arr = [1, 2, 3, 4, 5];
const arr1 = [];
for (let i=0; i<= arr.length; i++){
  const multiple = arr[i]*2;
  arr1.push(multiple)
}
console.log(arr1);

//Functions

// Non Parametrised Function
function add () {
  let a = 5;
  let b = 10;
  let c = a + b;
console.log(c);
}
//Calling a function
add();
 // Parametrised Function

 function addByParams (a, b){
  let c = a+b;
  return c;
 }
 const output_1 = addByParams();
 const output_2 = addByParams(10,20);

 console.log(output_1 , output_2)