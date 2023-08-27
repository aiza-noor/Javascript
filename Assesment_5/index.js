console.log('Assesment_5')

/*Q 1) What is a callback function?
 A callBck function is a function which allow a function to call another function.*/

 /*Q 2) Name any one default javascript async function.
 1. setTimeOut() 
 2. setInterval()*/
 
 /*Q 3) If you call an async function inside a console.log. and the async function has no await statement in it.
 What would be the result of this console.log and vice versa?
 Having async function but no awaits inside a console.log() will give a promise indefined.
 having async function and using awaits in console.log() will give a promise pending.*/

 //Q 4) Make an api call using a promise and handle error as well.
 fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then(response => {
    if(!response.ok){
        throw error ('Network is failed.')
    }
    return response.json();
 })
 .then(data => {
    console.log(data);
 })
 .catch(error => {
    console.log(error);
 })
 // Q5) Make an API call using Async/Await and handle errors as well.
 async function callApi() {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const result = await res.json();
        console.log(result);
    }catch(error){
        console.log(error);
    }
 }
 callApi();
