function isEven(element){
//     if(element%2===0){
// return true;
//     }
//     return false;
return element%2===0;

}

console.log(isEven(4));

var even = [3,4,8,10].every((e) => e%2 === 0);

console.log(even);