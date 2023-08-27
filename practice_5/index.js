//Question n0 1

/*const user = {
  name : 'John',
  Surname : 'Smith',

}
user.name = 'Pete';

console.log(user.name);
console.log(user);

delete user.name;
console.log (user);

//Question # 2
const obj= {}
console.log((obj));
//OR    // ISEMPTY 
if(!Object.keys(obj).length){
    console.log("object is empty");

}else console.log("object is not empty");

//Question # 3
let salaries ={
    John : 100,
    Ann : 160,
    Pete :130,

}
let sum = 0;
let salaries_arr= Object.values(salaries);
const sumValue = (salaries_arr) => {
    sum+=salaries_arr;
}
salaries_arr.forEach(sumValue)
console.log(sum);

//Question # 4
let menu = {
    width: 200,
    heigth: 300,
    title: "My menu"
};
 function multiplyNumeric(obj){
    for(let key in obj){
        if (typeof obj[key]=='number'){
            obj[key]*=2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);


//Question # 5 
const obj_1= {
num: 100,
sum: function (a, b){
    return a + b + this.num;
}
}*/
//console.log(obj_1.sum(10,10));

/*function fizzBuzz(n) {
    // Write your code here
for(let i=1; i<=n; i++){
   if(i%3===0 && i%5===0){
       console.log('FizzBuzz');
   }else if(i%3===0){
       console.log('Fizz')
   }else if(i%5===0){
       console.log('Buzz');
   }else {
     console.log(i);
   }  
}
}
fizzBuzz(15);*/
/*function fizzBuzz(n) {
    for(let i=1; i<=n; i++){
        if(i%3===0 && i%5===0){
            console.log ("FizzBuzz");
        }else if(i%3===0 && i%5!==0){
            console.log("Fizz"); 
        }else if (i%5===0 && i%3!==0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
fizzBuzz(15);*/

/*function findVowelSubstring(str, length) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowelCount = 0;
    let maxVowelSubstring = '';
    
    if (!str.includes(vowels.join(''))) {
      return 'Not found!';
    }
  
    for (let i = 0; i <= str.length - length; i++) {
      const substring = str.substr(i, length);
      let vowelCount = 0;
      
      for (let j = 0; j < substring.length; j++) {
        if (vowels.includes(substring[j])) {
          vowelCount++;
        }
      }
      
      if (vowelCount > maxVowelCount) {
        maxVowelCount = vowelCount;
        maxVowelSubstring = substring;
      }
    }
  
    return maxVowelSubstring;
  }

  console.log(findVowelSubstring('hello world', 3)); // Output: 'wor'
console.log(findVowelSubstring('programming', 4)); // Output: 'ogram'
console.log(findVowelSubstring('education', 5)); // Output: 'ucatio'
console.log(findVowelSubstring('xyz', 2)); // Output: 'Not found!'*/


function findVowelSubstring(s, k) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowelCount = 0;
    let maxVowelSubstring = '';
  
    if (!s.includes(vowels.join(''))) {
      return 'Not found!';
    }
  
    for (let i = 0; i <= s.length - k; i++) {
      const substring = s.substr(i, k);
      let vowelCount = 0;
  
      for (let j = 0; j < substring.length; j++) {
        if (vowels.includes(substring[j])) {
          vowelCount++;
        }
      }
  
      if (vowelCount > maxVowelCount) {
        maxVowelCount = vowelCount;
        maxVowelSubstring = substring;
      }
    }
  
    return maxVowelSubstring;
  }
  findVowelSubstring()
//console.log(findVowelSubstring('hello world', 3)); // Output: 'wor'
//console.log(findVowelSubstring('programming', 4)); // Output: 'ogram'
//console.log(findVowelSubstring('education', 5)); // Output: 'ucatio'
//console.log(findVowelSubstring('xyz', 2)); // Output: 'Not found!'


/*function findVowelSubstring(s, k) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowelCount = 0;
    let maxVowelSubstring = '';
  
    let vowelFound = false;
    for (let i = 0; i < s.length; i++) {
      if (vowels.includes(s[i])) {
        vowelFound = true;
        break;
      }
    }
  
    if (!vowelFound) {
      return 'Not found!';
    }
  
    for (let i = 0; i <= s.length - k; i++) {
      const substring = s.substr(i, k);
      let vowelCount = 0;
  
      for (let j = 0; j < substring.length; j++) {
        if (vowels.includes(substring[j])) {
          vowelCount++;
        }
      }
  
      if (vowelCount > maxVowelCount) {
        maxVowelCount = vowelCount;
        maxVowelSubstring = substring;
      }
    }
  
    return maxVowelSubstring;
}*/  


function findSubstring(s, k) {
    // Write your code here
    const vowels = ['a','e','i','o','u'];
    let maxVowelCount = 0 ;
    let maxVowelSubstring = '';
    
    let vowelFound = false;
    for(let i=0; i<=s.length; i++){
        if(vowels.includes(s[i])){
       vowelFound= true;
       break;
        }
    }
    if(!vowelFound){
        return 'Not found!';
    }
    for(let i=0; i<=s.length-k; i++){
        const substring = s.substr(i,k);
        let vowelCount = 0;
        
        for(let j=0; j<substring.length; j++){
            if(vowels.includes(substring[j].toLowerCase())){
               vowelCount++;
            }
        }
        if (vowelCount > maxVowelCount){
            maxVowelCount = vowelCount;
            maxVowelSubstring = substring;
        }
    }
   return maxVowelSubstring;
}
console.log(findVowelSubstring('hello world', 3)); // Output: 'wor'
console.log(findVowelSubstring('programming', 4)); // Output: 'ogram'
console.log(findVowelSubstring('education', 5)); // Output: 'ucatio'
console.log(findVowelSubstring('xyz', 2)); // Output: 'Not found!'