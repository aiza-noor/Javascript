// Assignment week 4
function checkEvenArray(arr){
    try{
        if(arr.every(item => item % 2=== 0)){
            console.log('Even Array')
        }else{
            throw error('Not all numbers in the array are even')
        }
    }catch(error){
        console.log(error);
       
    }finally{
        let arr = [];
        console.log(arr);
    }

}
checkEvenArray([2,4,6,8,10]);

