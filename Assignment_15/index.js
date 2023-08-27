/*Question no 1
Write an async function to call an api and log its response.*/

const  callApi = async() =>{
const res = await fetch('https://reqres.in/api/users?page=1');
//console.log(await res.json());
return res;
}
callApi()
/*Question no 2
Write an async function that fetches data from multiple APIs and returns the combined result. */

const api_1= 'https://reqres.in/api/users?page=1';
const api_2= 'https://reqres.in/api/users?page=2'
const fetchApiData = async()=>{
const response_1 = await fetch (api_1);
const result_1= await response_1.json();

const response_2 = await fetch(api_2);
const result_2 = await response_2.json();

const result_3 = result_1.data.concat(result_2.data);
console.log(result_3);

}
fetchApiData();

/*Question no 3
Write 3 async functions(2 child, 1 parent), use 1 to fetch 
data from api, 2nd to convert it to json and third to initiate the call. Handle errors in the parent only.*/

const fetchDataFromApi_1 = async()=>{
    const response = await fetch ('https://reqres.in/api/users?page=1');
    //console.log(await response.json());
    return response;
   
}
async function convertToJason (response) {
    return (await response.json());
    
}
const fetchData_1 = async() => {
    try{
        const apiData = await fetchDataFromApi_1();
        const jsonData = await convertToJason(apiData);
        console.log(jsonData);
    }catch(error){
    console.log('Error Occurred:' , error);
    }
}
fetchData_1();

/* Question no 4
Write 3 async functions(2 child, 1 parent), use 1 to fetch data from api, 2nd to convert it to json and third to initiate the call. 
Handle errors individually for each function.*/

const fetchDataFromApi = async()=>{
    try{
        const response = await fetch ('https://reqres.in/api/users?page=1');
        //console.log(await response.json());
        return response;
    }catch (error){
        console.log(error);
    }
    }
    async function convertToJason (response) {
        try{
            return (await response.json());
        }catch(error){
            console.log(error);
        }
    }
    const fetchData = async() => {
        try{
            const apiData = await fetchDataFromApi();
            const jsonData = await convertToJason(apiData);
            console.log(jsonData);
        }catch(error){
        console.log('Error Occurred:' , error);
        }
    }
    fetchData();

/* Question no 5
Create an async function that reads a file from the local filesystem and returns its contents.

Text file with data: ‘My name is your-name’*/
const fs = require ('fs').promises;
async function readFile() {
    try {
      const data = await fs.readFile('data.txt', 'utf8');
      
      console.log(data);
    } catch (error) {
      console.error('Got an error trying to read the file:' , error.mesaage);
    }
  }

readFile();

/* Question no 6
Implement an async function that reads a list of URLs from a file and fetches the contents of each URL concurrently.

Text file should contain comma separated links
https://reqres.in/api/users?page=1&per_page=3,
https://reqres.in/api/users?page=2&per_page=3,
https://reqres.in/api/users?page=3&per_page=3,*/


const fs = require('fs/promises');
const fetchUrlsfromFile = async() => {
    try{
        const data = await fs.readFile('urls.txt',  'utf8' )
        console.log(data);
        const urls = data.split(',');
        urls.map(async(value)=> {
            const res = await fetch(`${value}`)
            const result = await res.json();
           console.log('fetching data from file')
            console.log(result.data);
        })

    }catch(error){
        console.log(error);
    }

}
const callingApiFunc = async()=>{
    await fetchUrlsfromFile()

}
callingApiFunc();




    


