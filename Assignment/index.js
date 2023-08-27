//Question no 1 
let array = ['Jazz', 'Blues'];
array.push('Rock-n-Roll');
console.log(array);
array.splice(array.length-1/2,0, "Classics");
console.log(array);
array.shift();
console.log(array);
array.unshift("Rap", "Reggae");
console.log(array);

//Question no 2

function sumInput() {
  let aArray = [];
  let sum = 0;
  let Length = aArray.length;
  for (let i = 0; i < Length; i++) {
      sum += aArray[i];
     }
      return sum;
}
sumInput()
console.log(sumInput());

//Question no 3
function filterRange(arr1, a, b) {
  
  return arr1.filter(item => (a <= item && item <= b));
}

let arr1 = [5, 3, 8, 1];

let filtered = filterRange(arr1, 1, 4);

console.log( filtered ); 

console.log( arr1 ); 


//Question no 4

function filterRangeInPlace(arr_1, a, b) {

  for (let i = 0; i < arr_1.length; i++) {
    let val = arr_1[i];

    if (val < a || val > b) {
      arr_1.splice(i, 1);
      i--;
    }
  }

}

let arr_1 = [5, 3, 8, 1];

filterRangeInPlace(arr_1, 1, 4); 

console.log( arr_1 ); 

//Question no 5
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

console.log( names ); 



//question no 6
let John = { name: "John", surname: "Smith", id: 1 };
let Pete = { name: "Pete", surname: "Hunt", id: 2 };
let Mary = { name: "Mary", surname: "Key", id: 3 };

let Users = [ john, pete, mary ];

let UsersMapped =  Users.map(User => ({
  fullName: `${User.name} ${User.surname}`,
  id: User.id
}));

UsersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
console.log( UsersMapped[0].id ); 
console.log( UsersMapped[0].fullName );

//Question no 7

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let john1 = { name: "John", age: 25 };
let pete1 = { name: "Pete", age: 30 };
let mary1 = { name: "Mary", age: 29 };

let arr = [ john1, pete1, mary1 ];

console.log(getAverageAge(arr)); 

//Qustion no 8
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) );
