// function : block of code , it runs only when it is called


// console.log(value);
// console.log(a);

// console.log(PI);
let a = "ali";
const PI = 3.14256;
let number = 5;

let z;  // initialization
z = 10; // declaration

let b = 15;  // initialization and declaration
var value = true;

// console.log(value);









// 1. function keyword
// 2. function name
// 3. parenthesis ()
// 4. function body {}   

// This is simple function
function ali () {
    console.log("function is running");
    console.log("Functionn is called");
    console.log("Function name is ali");

    let x = 10
    var c = 15;
    let sum = x + c;
    console.log(sum);
};
// ali();

// This is arrow function
let zain = () => {
    console.log("function is running");
    console.log("Functionn is called");
    console.log("Function name is zain");
}
// zain();



zain = 15;
// console.log(zain);



function print (data1 = "" , data2 = "10") {
    console.log(data1 + data2);
};


print(15);
print("Ahmad" , "Raza");
print();


const studentdata = (name , marks) => {
    console.log(name + " obtained " + marks + " marks.");
    // console.log("ahmad obtained 50 marks.");
};



// studentdata();
// studentdata();
// studentdata();
// studentdata();
// studentdata();
// studentdata();

// studentdata("ahmad" , 50);
// studentdata("hamza" , 40);
// studentdata("aleeza" , 40);
// studentdata("ZAIN" , 50);







// always use concept of DRY (Donot Repeat Yourself)




// console.log("ahmad obtained 50 marks.");
// console.log("hamza obtained 50 marks.");
// console.log("aleeza obtained 40 marks.");
// console.log("zain obtained 60 marks.");
// console.log("zain obtained 60 marks.");


function add2(num1, num2) {
    let sum = num1 + num2;
    // console.log("sum = " +sum);

    return sum;
    // return (num1 + num2);
}


function add3(one, two, three) {
    // let m = one  + two + three;
    // console.log("sum = " +sum);

    // return m;
    // return (one + two + three);
    let arr = [1, 3, 5, 7, 9, 11, 13];
arr = "sdfefsefse";
arr = [2, 4, 6, 8, 10];
arr = {
    numbers: [2, 5, 8],
    strings: ['apple', 'zain', 'guava'],
    bool : false,
    
}

console.log("before returning statement.");
return arr;
console.log("after returning statement.");
}
// only one item can be returned from a function

let num1 = 10;
let num2 = 15;
let num3 = 5;


let sum = add2(num1 , num2);
console.log(sum);

sum = add3(num1, num2, num3);

console.log(sum);


// create separate functions for division multiplication subtraction (for 2 numbers and for 3 numbers)
// create with printing inside function and also create all of them with returning and printing where funciton is called
//  10 / 2;
// 1. 5 * 15    2. 15 * 3 * 7
// 1. 10 - 7    2. 80 - 75 - 99
//one
function myfunction () {
    let a=10
    let b=2
    let div=10/2
    console.log(div);
} 
myfunction();
//two
function myfunction (){
    let a=5
    let b=15
    let mul=5*15
    console.log(mul);
}
myfunction();
//three
function myfunction (){
    let a=15
    let b=3
    let c=7
    let mul=15*3*7
    console.log(mul);
}
myfunction();
//four
function myfunction(){
    let a=10
    let b=7
    let sub=10-7
    console.log(sub);
}
myfunction();
//five
function myfunction(){
    let a=80
    let b=75
    let c=99
    let sub=80-75-99
    console.log(sub);
}
myfunction();

function add2(num1, num2) {
    let sum = num1 + num2;
    // console.log("sum = " +sum);
    return sum;
    // return (num1 + num2);
}
//one
function div(num1 , num2){
    let num1=10
    let num2=2
    let div=num1/num2;
    console.log(div);
    return div;
}
//two
function mul(num1 ,num2){
    let num1=5
    let num2=15
    let mul=num1/num2;
    console.log(mul);
    return mul;
}
//three
function div(num1 ,num2 ,num3){
    let num1=15
    let num2=3
    let num3=7
    let div=num1/num2;
    console.log(div);
    return div;
}
//four
function sub (num1,num2){
    let num1=10
    let num2=7
    let mul=10-7
    console.log(sub);
    return sub;
}
//five
function sub (num1,num2,num3){
    let num1=80
    let num2=75
    let num3=99
    let sub=80-75-99
    console.log(sub);
    return sub;
}
let mode = "black";
let color;
if(mode=="dark"){
    color = "black";
}
else if (mode == 'white') {
    color = 'white';
}

else{
    color="light";
}

