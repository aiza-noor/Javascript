console. log('practice_3');

function subtract (a,b){
    //console.log(a-b);
return a-b;
console.log('a-b');
}
const res = subtract (15,4);
console.log(res)
//console.log(subtract (15,4))

const subtraction_Arrow_Function = (a,b) =>{
    return a-b;
}

console.log(subtraction_Arrow_Function(108,45))

const subtraction = (a,b)  => a-b;

console.log(subtraction(100,45));

// function subtract(a,b) a-b;

let a = 5, b = 10;

/*if(a>b){
    result =a;
} else {
    result = b;
}*/
const result = a > b ? a : b;
console.log(result)

let value_1 = 5;
let value_2 = 10;

console.log(value_1 > value_2);
console.log(value_1 < value_2);

let valueString1 = 'Aiza';
let valueString_1 = 'Faizan';

console.log(valueString1.length);
console.log(valueString1 > valueString_1);
console.log(valueString1 < valueString_1);
console.log(valueString1 === valueString_1);

let valueNum = 34343;

console.log(valueNum.length);

let valueBol = true;
console.log(valueBol.length);

let StringValue = 'Aiza';

if (StringValue.length === 0) console.log('Empty String 1');
if (StringValue.length === '') console.log('Empty String 2');
if (StringValue.length) console.log('Non Empty String');
if (!StringValue.length) console.log('Empty String 3');

let initialValue;
console.log(initialValue)

initialValue = null;

console.log(initialValue)

const giveMyCourse_Typical_IfElse = (ai, wd, seo, cs, gd)  => {
    if (ai){
        return ai;
    } else if (wd){
        return wd;
    } else if (seo){
        return seo;
    } else if (cs){
        return cs;
    } else if (gd){
        return gd;
    } else {
        return 'Ghar Jao'
    }
}

const giveMyCourse = (ai, wd, seo, gd, cs) => 
  ai || wd || seo || gd || cs || 'Ghar Jao';
const response = 
  giveMyCourse_Typical_IfElse( '', null, null, null, '');
  console.log(response);



  const giveMyCourseModulesAND = (js, html, css, react, db, nodejs) => 
  js && html && css && react && db && nodejs && 'Pass';  

  //const giveMyCourseModulesCombinationOfAndOr = (js, html, css, react, db, nodejs) => 
  //js && (html || css || react) && db && nodejs && 'Pass';  

  const response_1 =  giveMyCourseModulesAND('JS', '', 'CSS', '', 'DB', 'NODEJS');
  
    console.log(response_1);