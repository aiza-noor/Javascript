// Question no 1 
function sayHello(){
    setTimeout(() => {console.log("Hello, World!")}, 2000);
}
sayHello()
// //Question no 2
function currentTime(){
    setInterval(() => {console.log('08:23:43')}, 1000)
}
currentTime()

// Question no 3
function multiply(a, b){
    c = a * b;
    return c;
}
function handleResult(c){
    setTimeout(() => {
        console.log("The result is :", c)
    }, 1000)
}
//multiply(5,10);
//handleResult(c);

// Question no 4

function countdown(number){
    return new Promise ((resolve, reject) => {
        let currentNumber = number;
        const interval = setInterval(() => {
            console.log(currentNumber);

            if(currentNumber === 1){
                clearInterval(interval)
                resolve();
            }
            currentNumber --;
        }, 1000);
    });
}
//countdown(5);
    

// Question no 5
function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then ((response) => {
        return response.json();
    }).then(data => {
        console.log(data)
    })
    .catch(error => {console.log(error)
    })
}
fetchData();

// Question no 6

function sum(arr) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let sum = arr.reduce((a,b) => a+b, 0);
        resolve(sum);
      }, 1000);
    }).then (x => {
        console.log("sum is :", x)
    })
}
sum(arr = [10,20,5,7,30]);
console.log(arr);

// Question no 7

function repeat(logmessage, times) {
    let count = 0;
   const interval = setInterval(() => {
        logmessage();
        count++
        if (count === times) {
            clearInterval(interval);
        }
    
    }, 500);
}
function printData(){
    //console.log("Executing Fucntion...");
}
repeat(printData, 5);



// // Question no 8
function fetchRandomUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://randomuser.me/api/")
            .then(response => response.json())
            .then((data) => {
                const user = data.results[0];
                const firstName = user.name.first;
                const lastName = user.name.last;
                resolve({ firstName, lastName });
              });
        },1000);
    }).then(user =>{
       // console.log('First Name:', user.firstName);
       // console.log('Last Name:', user.lastName);
    }).catch(x => console.log(x));
}
fetchRandomUser();  
        
              
// Question no 9

function waitForCondition(condition, interval) {
    return new Promise((resolve, reject) => {
      const intervalId = setInterval(() => {
        if (condition()) {
          clearInterval(intervalId);
          resolve();
        }
      },interval);
    }).then(() => {
        console.log("conditionMet.Success!")
    }).catch(error => {
        console.error ("Error:", error)
    });
    
}
function isConditionMet(){
    return Math.random()< 100;

}
waitForCondition(isConditionMet, 1000)

// Question no 10
const urls = [
    "https://api.example.com/data1",
    "https://api.example.com/data2",
    "https://api.example.com/data3",
  ];
  function fetchMultipleUrls(urls) {
    let fetchPromises= urls.map((url) => {
      return new Promise((resolve, reject) => {
       setTimeout(() => {
          resolve(null);
        }, 3000);
        fetch(url)
        .then(response=> response.json()
        )
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.log(error)
    
        });
    }).then(results => {
        console.log("Results:" , results)
    })
  });
  return Promise.all(fetchPromises);

}

fetchMultipleUrls(urls);
  
    


  