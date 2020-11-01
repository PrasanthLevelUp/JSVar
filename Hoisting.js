var name;
let test2;
console.log(name);
name = "Prasanth";

console.log(name);
test();
test2();

let test2 = function (){
    console.log("Niho");
    test();
}

function test(){
    console.log("Niho");
}