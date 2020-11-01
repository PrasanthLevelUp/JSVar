const numbers = [5,8,2,3,9];


for(let i =0;i<numbers.length;i++){
    console.log(numbers[i]);
}
console.log("OF Method");

for(num of numbers){
    console.log(num);
}

console.log("IN Method");

const obj = {
name:"prasasnth",
age:24
};

for(val in obj){
    console.log(val);
}