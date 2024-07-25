let num1 = "10";
let num2 = 10;

let condition = num1 === num2;
// console.log(typeof(num1));
num1 = true;
// console.log(typeof(num1));

// console.log(condition);

// conditional statements are also block of codes that will executed when condition is true

num1 = 10;
num2 = 10;
// if (add2(num1 , num2)) {
//     console.log("Answer is correct");
// }else {
//     console.log("Else is runing cuz if condition is false");
// }



function add2(x, y) {
    return x == y;    
}





let obj1 = {
    name : "ali",
    id : 1
}

let obj2 = {
    name : 'raza',
    id : 1
}

let obj3 = {};


// for single if else condition
if (compare(obj1, obj2)) {
    obj3 = {
        name : obj1.name + " " + obj2.name,
        id : obj1.id
    }
    console.log(obj3);
} else {
    console.log("id is not same");
}



function compare(m , n) {
    return m.id == n.id;
}



obj5 = {
    name : 'hamza',
    id : 2
}


obj6 = {
    name: 'hakim',
    id : 3
}


console.log(compare(obj5, obj6));

// create a array of objects and it always validate whether ids not be same 


let data = [
    {
        name : 'hamza',
        id : 2
    },
    {
        name: 'hamza',
        id : 3
    },
];


function compareid(d) {
    return d[0].id == d[1].id;
}

function compareName(e) {
    return e[0].name == e[1].name;
}

console.log("data before conditional changings");
console.log(data);
// for multiple if conditions in single conditionanl statement
if (compareid(data) && !compareName(data)) {
    data = [{
        name : data[0].name + " " + data[1].name,
        id : data[0].id
    }];
    // console.log(obj3);
}
else if(compareName(data)) {
    data = [data[0]];
}
else {
    console.log("id and name are not unique.");
}

console.log("data after conditional changings");
console.log(data);