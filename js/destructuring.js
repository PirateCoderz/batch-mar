let arr = ['Ahmad' , 'Raza'];

// let first;
// let last;

// if (arr > 0) {
//   first = arr[0];
//   last=arr[1];
// }
let [first, last] = arr;


// console.log('First name: ' + first);

// console.log('Last name: ' + last);



let obj = {
  firstName: first,
  lastName: last
}

let {firstName , lastName} = obj

console.log('First name: ' + firstName);

console.log('Last name: ' + lastName);

// spread operator

let arr2 = [...arr, 'Mohamed', 'Hassan'];

// rest operator

let [first2, ...rest] = arr2;

console.log('First name: ' + first2);

console.log('Rest of the names: ' + rest);