// Array Methods
// 1. Map ()
 const arr = [1, 2, 3, 4, 5, 6];
const mapped = arr.map(element => element +30);
console.log(mapped);

//2. filter()
const filtered = arr.filter(element => element ===2 || element ===4)
console.log(filtered);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function checkOdd(number) {
  if (number % 2 !== 0)
    return true;
  else
    return false;
}


let oddNumbers = numbers.filter(checkOdd);
console.log(oddNumbers);


//3. sort()
descend = arr.sort((a,b) => a > b ? -1 : 1);
console.log(descend);
const alphabet = ["f", "g","a", "b", "c"];
ascend = alphabet.sort((a, b) => a > b ? 1 : -1);
console.log(ascend);

// 4. forEach()
arr.forEach(element => {
    console.log(element);
});

//5. concat()
let arr1 = [1, 2, 3];
let arr2 = [2, 4, 6];
console.log(arr1.concat(arr2));

// 6. every()
greaterfive = arr.every(num => num > 5);
console.log(greaterfive);

lessernine = arr.every(num => num < 9);
console.log(lessernine);

// 7.some()
console.log(arr.some(num => num > 5));
console.log(arr.some(num => num < 0))

// 8. includes()
console.log(arr.includes(2));
console.log(arr.includes(7));

//9. join()
console.log(arr.join(''));

//10. reduce()
const reduced = arr.reduce((num,total) => num + total);
console.log(reduced);

//11. find()
arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const found = arr3.find(element => element > 7);
console.log(found);

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  let user = users.find(item => item.id === 2);
  
  console.log(user.name);

//12. findindex
let users1 = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
  ];
  
  console.log(users1.findIndex(user => user.name === "Pete"));
//13. findlastindex
  
  console.log(users1.findLastIndex(user => user.name == 'John')); 

//14. indexof
let languages = ["Java", "JavaScript", "Python", "JavaScript"];

let index = languages.indexOf("JavaScript");
console.log(index);

//15. lastindexof
let priceList = [10, 8, 2, 31, 10, 31, 65];
let lastIndex = priceList.lastIndexOf(31);

console.log(lastIndex); 

//16. fill
const fruits = ['Apple', 'Banana', 'Grape'];

// filling every element of the array with 'Cherry'
fruits.fill("Mango");

console.log(fruits);

// 17.flat()
let num1 = [1, 2, [3, 4, [5, 6, [7, 8]]]];

let flattenArray = num1.flat(2);

console.log(flattenArray);

// 18. flatMap
let num2 = [1, 2, 3, 4, 5];

const resultingArray = num2.flatMap((x) => [x ** 2]);

console.log(resultingArray);

//19. from()
let newArray = Array.from("javascript");

console.log(newArray);

//20. isArray()
let num3 = [1, 2, 3, 4];


console.log(Array.isArray(num3));

let text = "JavaScript";


console.log(Array.isArray(text));

//21. keys()

let Languages = ["JavaScript", "Java", "C++", "Python"];

let iterator = Languages.keys();
for (let key of iterator) {
  console.log(key);
}
//22.of()
let primeNumbers = Array.of(2, 3, 5, 7);

console.log(primeNumbers);

//23. pop()
let cities = ["Madrid", "New York", "Kathmandu", "Paris"];

let removedCity = cities.pop();

console.log(cities)         
console.log(removedCity);

//24. push()
let city = ["New York", "Madrid", "Kathmandu"];

city.push("London");

console.log(city);

//25. reverse()
let array = [1, 2, 3, 4, 5];

// reversing the numbers array
let reversedArray = array.reverse();

console.log(reversedArray);

//26. shift()
let languages_1 = ["English", "Java", "Python", "JavaScript"];


let first = languages_1.shift();
console.log(first);
console.log(languages_1);

//27. unshift()
languages_1.unshift("HTML");
console.log(languages_1)

//28. slice()
let arr4 = [2, 3, 5, 7, 11, 13, 17];
let newArray_1= arr4.slice(3, 6);
console.log(newArray_1);

//29. splice()
let Languages_1 = ["JavaScript", "Python", "Java", "Lua"];

let removed = Languages_1.splice(2, 2, "C", "C++");
console.log(removed); 
console.log(Languages_1); 

//30. toLocaleString (converst array into string )
let o = [1, "JavaScript", new Date()];

let stringFromArray = o.toLocaleString();

console.log(stringFromArray);

//31. toString()
let info = ["Terence", 28, "Kathmandu"];

let info_str = info.toString();

console.log(info_str); 

console.log(info);

//32. values()
let arrayWithHole = ["A", "B", , "C"];
let iteratorObject = arrayWithHole.values();
for (let value of iteratorObject) {
  console.log(value);
}