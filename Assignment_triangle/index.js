console.log(`Q13:
- Create left triangle having length 5
- Create right triangle having length 5
- Create triangle having length 5
Hint: Use Loops and *
`)
function createLeftTriangle (length){
    for(let i=1; i<length; i++){
        let row = '';
        for (let j=1; j <= i; j++){
         row +='*';
        }
        console.log(row);
    }
}
createLeftTriangle(5)


function createRightTriangle(length){
    for (let i=1; i<=length; i++){
        let row = '';
        for (let j=1; j<= length; j++){
            if(j<= length - i){
                row+= ' ';
            }else{
                row+= '*';
            }
        }
        console.log(row);
    }
}
createRightTriangle(5)


function createTrinangle(length){
    for (let i=1; i< length; i++){
      let row = '';
      for (let j=1; j< length - i; j++){
        row+= ' ';
        }
      for (let k=1; k<= 2*i-1; k++){
        row+= '*';
        }
      console.log(row);
    } 
}

createTrinangle(5)