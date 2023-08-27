// solve mefirst 
//Simple Array Sum
//const arr =[1,2,3,4,5,6];
//let sum= 0;
//for (let i=0; i<=arr.length-1;i++){
  // sum += arr[i]
//}

//console.log(sum)

const arr = [1,2,3]; 
let sum = 0;
for (let i=0; i<=arr.length-1;i++){
    sum += arr[i]
}
console.log(sum)

//compare the Triplets
let arr1= [1,2,3];
let arr2= [3,2,1];

let alice=0;
let bob=0;
function compareTriplets(arr1,arr2){
    for(let i=0; i<arr1.length; i++){
        if(arr1[i]<arr2[i]) bob+=1;

        else if(arr1[i]>arr2[i]) alice+=1;
    }
    let array = [alice, bob];
    console.log(array);
}
compareTriplets(arr1, arr2)

let d1=[1,3,5], d2= [2,4,6];
function diagonalDifference(arr, n) {
let d1=0, d2=0, m= arr.length
 for(i=0; i<m; i++){
    for(j=0; j<m; j++){
      if(i===j){
      d1+=arr[i][j];  
    }
    if(i=== m-1-j){
       d2+=arr[i][j]; 
    } 
   }

}
return Math.abs(d1-d2);
}
diagonalDifference(arr, n)



