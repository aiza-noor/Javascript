// const fs = require ('fs/promises')

// const fetchData = async () =>{
//     try{
//         const res = await (await fetch('https://restcountries.com/v3.1/all')).json();
//         const data =(await fs.readFile('input.txt', {encoding:'utf8'})).split (',')
    
        
//        //console.log(data)
    
//        //console.log(await res)
    
//         //searching on Ist input
//         const searchingValue = data[0];
//         const searchingKey = searchingValue?(res.filter((x)=>x.continents.some((y)=>y.includes(searchingValue)))): res;
//         //searchingKey.forEach((value) => console.log(value.continents))
    
//         // //filtering on 2nd input
//         const filteringValue = data[1]
//         const existBorder = filteringValue? (searchingKey.filter((value)=> Object.keys(value).includes('borders'))): searchingValue;
//         const filteringKey = existBorder.filter((x)=> x.borders.some((y)=> y===(filteringValue)));
//         //filteringKey.forEach((value1)=> console.log(value1.name.common))
        
//         // return value as 3rd input 
//         const returningValue = data[2]
//         const returnKey = filteringKey.map((obj)=>obj[returningValue])
//         //returnKey.forEach((value2)=> console.log(value2))

//         //limiting the value 
//         const limitValue = data[3]
//         const limitInput = limitValue?(returnKey.slice(0,limitValue)):returnKey
//         //limitInput.forEach((value3)=>console.log(value3))
//         limitValue?limitInput.push({'totalcount': limitInput.length}): [];
//         limitInput.forEach((value)=> console.log(value))

//     }catch(error){
//         console.log(error)
//     }
// }
// fetchData() 


const fs = require ('fs/promises')
const fetchData = async()=>{
    try{
        const res = await(await fetch('https://restcountries.com/v3.1/all')).json();
        const data = (await fs.readFile('input.txt', 'utf8')).split(',')
        console.log(await res);
        //console.log(data);
        
        console.log('searching on 1st input')
        const searchingValue = data[0]
        const searchingKey = searchingValue? (res.filter((x)=> x.continents.some((y)=> y.includes(searchingValue)))): res;
        searchingKey.forEach((value)=> console.log(value.continents))

        console.log('filtering on 2nd input')
        const filteringValue = data[1]
        const existBorder = filteringValue? (searchingKey.filter((value)=> Object.keys(value).includes('borders'))):searchingKey;
        const filteringKey = existBorder.filter((x)=> x.borders.some((y)=> y === (filteringValue)))
        filteringKey.forEach ((value1)=> console.log(value1.name.common))

        console.log('return a resultant array')
        const returningValue = data[2]
        const returnKey = filteringKey.map((obj)=> obj[returningValue])
        returnKey.forEach((value2)=>console.log(value2))

        console.log('limiting the value')
        const limitValue = data[3]
        const limitInput = limitValue? (returnKey.slice(0,limitValue)): returnKey;
        limitValue? limitInput.push(['totalcount:',limitInput.length]): [];
        limitInput.forEach((value)=>console.log(value))

            
        

    
    }catch(error){
        console.log(error)
    }
}
fetchData()