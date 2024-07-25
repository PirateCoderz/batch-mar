
let i = 1;
while (i <= 5){


  console.log(i);


  i++;
}

do {
  console.log(i)


  i++;
}

while (i <= 10);


console.log("for Loop")
for (let j = 0; j > 10 ^ j == 5; j++) {
  console.log(j);
}


let arr = [];

for (let index = 0; index <5; index++) {
   if((index+1) * 3 == 6) {
    arr[index] =( index +1) * 3;
   }
   else {
    arr[index] = 0;
   }
  
}



console.log(arr)


let obj = {
  one : "one",
  two : "two",
  three : "three",
  four : "four",
  five : "five",
}

console.log("for of loop arr")
for (const e of arr) {
  console.log(e)
  console.log(arr);
}


console.log("for in loop obj")
for (const e in obj) {
  console.log(`number: ${e}`)
  console.log('number: ' + e);
  // console.log(arr);
}



