//console.log('practice_4');




/*(let courseInformation ={
    name: 'Web Dev',
    duration: 6,
    active: true,
}


const objKeys = Object.keys(courseInformation);
console.log(objKeys);

const objValues = Object.values(courseInformation);
console.log(objValues);

const objEntries = Object.entries(courseInformation);
console.log(objEntries);*/

// function print24(str){
//     // Get hours
//     var h1 = Number(str[1] - '0');
//     var h2 = Number(str[0] - '0');
//     var hh = (h2 * 10 + h1 % 10);
    
  
//     // If time is in "AM"
//     if (str[8] == 'A')
//     {
//         if (hh == 12)
//         {
//             console.log("00");
//             for (var i = 2; i <= 7; i++)
//                 //console.log(str[i]);
//         }
//         else
//         {
//             for (var i = 0; i <= 7; i++)
//                 //console.log(str[i]);
//         }
//     }
  
//     // If time is in "PM"
//     else
//     {
//         if (hh == 12)
//         {
//            // console.log("12");
//             for (var i = 2; i <= 7; i++)
//                 //console.log(str[i]);
//         }
//         else
//         {
//             hh = hh + 12;
//             console.log(hh);
//             for (var i = 2; i <= 7; i++)
//                 //console.log(str[i]);
//         }
  
//     }
   
// }
// print24(str) ;


// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = _.map(numbers, (num) => num * num);
// // Output: [1, 4, 9, 16, 25]


// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = _.filter(numbers, (num) => num % 2 === 0);
// // Output: [2, 4]


// const numbers = [1, 2, 3, 4, 5];
// const sum = _.reduce(numbers, (acc, num) => acc + num, 0);
// // Output: 15

const users = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
  ];
  const sortedUsers = _.sortBy(users, 'age');
  // Output: [{ name: 'Alice', age: 25 }, { name: 'John', age: 30 }, { name: 'Bob', age: 35 }

 function saveToServer(data) {
    // Simulate server request
    console.log(`Saving data: ${data}`);
  }
  
  const debouncedSave = _.debounce(saveToServer, 1000);
  debouncedSave('Data 1'); // Will execute after 1000ms if not called again
  debouncedSave('Data 2'); // Will cancel the previous call and execute after 1000ms from this call
  

  const sourceObject = { a: 1, b: { c: 2 } };
  const clonedObject = _.cloneDeep(sourceObject);
  sourceObject.b.c = 5;
  // clonedObject remains unchanged: { a: 1, b: { c: 2 } }
  


  const user = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
    address: '123 Main St',
  };
  const filteredUser = _.omit(user, ['age', 'address']);
  // Output: { name: 'John', email: 'john@example.com' }
  


  const numbers = [1, 2, 2, 3, 4, 4, 5];
  const uniqueNumbers = _.uniq(numbers);
  // Output: [1, 2, 3, 4, 5]
  


//   const object = {
//     a: [{ b: { c: 3 } }, { d: 4 }],
//   };
//   const other = {
//     a: [{ b: { c: 5 } }, { e: 6 }],
//     f: 7,
//   };
//   const mergedObject = _.merge(object, other);
//   // Output: { a: [{ b: { c: 5 } }, { d: 4 }, { e: 6 }], f: 7 }
  


  const object = { a: 1, b: { c: 2 } };
  const other = { a: 1, b: { c: 2 } };
  const isEqual = _.isEqual(object, other);
  // Output: true
  
  var foo = { a: "a property" };
  var bar = { b: 4, c: "an other property" }
  
  var result = _.assign({ a: "an old property" }, foo, bar);
  // result => { a: 'a property', b: 4, c: 'an other property' }


  function getRandomInteger() {
    return Math.round(Math.random() * 100);
}

var result = _.times(5, getRandomNumber);
// result => [64, 70, 29, 10, 23]



_.deburr("déjà vu");
// -> deja vu
_.deburr("Juan José");
// -> Juan Jose


var posts = [
    { id: "1abc", title: "First blog post", content: "..." },
    { id: "2abc", title: "Second blog post", content: "..." },
    // more blog posts
    { id: "34abc", title: "The blog post we want", content: "..." }
    // even more blog posts
];

posts = _.keyBy(posts, "id");

var post = posts["34abc"]
// post -> { id: "34abc", title: "The blog post we want", content: "..." }

var users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 28 },
    { name: "Bill", age: 65 },
    { name: "Emily", age: 17 },
    { name: "Jack", age: 30 }
]

var reducedUsers = _.reduce(users, function (result, user) {
    if(user.age >= 18 && user.age <= 59) {
        (result[user.age] || (result[user.age] = [])).push(user);
    }
  
    return result;
}, {});

// reducedUsers -> { 
//     28: [{ name: "Jane", age: 28 }], 
//     30: [{ name: "John", age: 30 }, { name: "Jack", age: 30 }] 



var sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];
var result = _.sortedUniq(sortedArray);
// -> [1, 2, 3, 5, 8]



