const demo = document.getElementById('demo');

// Loops
const persons = [
    {name: 'John', age: 30},
    {name: 'Mark', age: 25},
    {name: 'Jane', age: 28}
]
t = ""
person = {-}
for (let person of persons) {
    t += person
}
console.log(t);
let txt = "";
txt += "<h3>For Loop</h3>";
for (let i = 0; i < persons.length; i++) {
    txt += `${persons[i].name} is ${persons[i].age} years old <br>`
}

txt += "<h3>For Loop number</h3>";
for (let i = 0; i < 10; i++) {
    txt += `The number is ${i} <br>`
}

txt += "<h3>For In (Array of Object)</h3>";
for (let person in persons) {
    txt += `${persons[person].name} is ${persons[person].age} years old <br>`
}

txt += "<h3>For In (Object)</h3>";
const person = {name:"John", age:30, city:"New York"};
for (let prop in person) {
    txt += `${prop} : ${person[prop]} <br>`
}

txt += "<h3>Map</h3>";
const fruits = new Map([
    ["apple", 500],
    ["banana", 300],
    ["orange", 200]
])
for (let [key, value] of fruits) {
    txt += `${key} : ${value} <br>`
}
txt += "<h4>Map Keys</h4>";
for (let key of fruits.keys()) {
    txt += `${key} <br>`
}
txt += "<h4>Map Values</h4>";
for (let value of fruits.values()) {
    txt += `${value} <br>`
}
txt += "<h4>Map Entries</h4>";
for (let entry of fruits.entries()) {
    txt += `${entry} <br>`
}
txt += "<br>"
for (let entry of fruits) {
    txt += `Key : ${entry[0]} Val : ${entry[1]}<br>`
}
txt += "<h4>Map ForEach</h4>";
fruits.forEach((value, key) => {
    txt += `${key} : ${value} <br>`
})

console.log(fruits.has("apple"))
console.log(fruits.get("apple"))
fruits.set("durian", 80)
console.log(fruits)
fruits.delete("apple")
console.log(fruits)
console.log(fruits.size);

const ipk = new Map()
ipk.set("bio",{name: "John", age: 30})
ipk.set("Mark", 3.2)
ipk.set("Jane", 3.8)
ipk.set("Jane", 3.4)
console.log(ipk)

txt += "<h3>Set</h3>";
let set = new Set();
let john = {name: "John"};
let mark = {name: "Mark"};
let jane = {name: "Jane"};

set.add(john);
set.add(mark);
set.add(jane);
set.add(john);
console.log(set);

const setOfAlpha = new Set();
setOfAlpha.add("a");
setOfAlpha.add("b");
setOfAlpha.add("c");
setOfAlpha.add("d");
console.log(setOfAlpha);


txt += "<h3>Array & Object</h3>";
txt += "<h4>Filter</h4>";
// Array
const ages = [32, 33, 16, 40];
const checkAdult = (age) => {
    return age >= 18;
}
const result = ages.filter(checkAdult);

const check = checkAdult(20);
if (check){
    txt += "You are adult <br>"
}else{
    txt += "You are not adult <br>"
}

let employees = [
    { name: "Tony Stark", department: "IT" }, 
    { name: "Peter Parker", department: "Pizza Delivery" },
    { name: "Bruce Wayne", department: "IT" },
    { name: "Clark Kent", department: "Editing" },
]

txt += "<h4>Filter IT Dept</h4>";
// employees.filter((employee) => {
//     if (employee.department === "IT") {
//         txt += `${employee.name} <br>`
//     }
// })
const Component = (employee) => {
    return `<div>${employee.name}</div> <div>${employee.department}</div>`
}
const filterEmployees = (queryFilter) => {
    return employees.filter((employee) => {
        return employee.department.includes(queryFilter)
    })
} 
console.log(filterEmployees("Pizza"));
// txt += itEmployees.map((employee) => Component(employee)).join("");

txt += "<h4>Find</h4>";
let itEmployees = employees.find((employee) => {
    return employee.department === "IT"
})
console.log(itEmployees);

txt += "<h4>Sort</h4>";
let sortedName = employees.sort((a, b) => {
    if (a.name < b.name) {
        return -1
    }else{
        return 1
    }
})
console.log(sortedName);

demo.innerHTML = txt;