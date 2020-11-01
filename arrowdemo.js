var even = function (element) {
    return element % 2 === 0;
}

console.log(even);

//arrow method
var even1 = (element) => element % 2 === 0;

console.log(even1);
console.log(even1);

//Using object concept arrow function
const lists = [{
    name: "Prasanth",
    status: true
}, {
    name: "Name",
    status: true
}, {
    name: "vb",
    status: false
}];

const currentstatus = lists.filter((li) => li.name === "Name")

console.log(currentstatus);