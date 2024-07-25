// types of Datatypes

// 1. premitive      // rom - fixed
// 2. non-premitive  // rom - flexible


// 1 bit

// 8bit 1byte

// 32byte  always extra there

// 1032bytes 1kb // kilobytes

// 1000kb  1mb  // megabyte
// 1000mb 1gb  
// 1000gb 1tb

// for premitive datatypes memory allocation to variables is fixed
// boolean datatype 1byte               true/false
// number datatype  4byte / 8byte       1 / 2/ 2.353 / 5.22
// char datatype 1byte                  a/  2 / ! /         (characters donot exists in js so each character will be stored as a stirng)
// string datatype  32byte / 16byte      "a"  / "a2"  / "ahmad" / "k2" / "23423" / "asd3214sdf3@#ASE"
// etc


// for non-premitive datatypes memory allocation is not fixed. it is flexible.
// types of non-premitive datatypes 
// 1. arrays  2. objects  3. functions 


console.log(typeof a);  // for checking datatype of any variable
let arr = [1, 3, 5, 7, 9, 11, 13];
arr = ["sdfefsefse" ,"ahmad" , [123, 232] , [ ] ,"raza"];
console.log(typeof arr);
arr = [2, 4, 6, 8, 10];
arr[5] = 12;

console.log(arr[5])
arr.push(14);


arr = {
    "numbers": [2, 5, 8],
    "strings": ['apple', 'zain', 'guava'],
    bool : false,
}


arr = ['apple', 'zain', 'guava' ];

// when declaring any key in object, it is best practice to store key in double quotes.(but you can also skip double quotes in objects.)
console.log(arr.numbers)

console.log(arr);   //   ['apple', 'zain', 'guava' ];
arr.push(15);       
console.log(arr);   //   ['apple', 'zain', 'guava' , 15];
arr.pop();
arr.pop();
console.log(arr);   // ['apple', 'zain']

// delete arr[]