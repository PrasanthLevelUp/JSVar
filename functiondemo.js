function simple(){
    console.log("simple");
}

simple()

let fun = function(){
    let name = "prasanth";
    console.log(`my name is ${name}`);
}

fun()

let fun1 = function(name){
    console.log(`my name is ${name}`);
}
fun1('niho')

let fun3 = function(number1, number2){
    let num3 = number1+number2
    return num3
}

console.log(fun3(2,5));
