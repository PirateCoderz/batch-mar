let str = 'this is a string';

console.log(str.length)

console.log(str.charAt(5));


// task 1
// find no of i charachters in this string using string methods
let task1 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus aut unde quia eum harum labore minus vitae fugit tempore, quis laboriosam dolore magni ex beatae rem explicabo maxime quo voluptates est facilis dignissimos, quos quod nobis. Soluta temporibus debitis animi!'


let task = task1.toUpperCase();
console.log(task);

console.log(task1);



let first = "    Ahmad      ";
let second = '    Raza    ';

let trimmed = first.trim();
console.log(first)
console.log(trimmed)



// task 2
// remove spaces and concat to new variable (full)

// like 
// let full = 'Ahmad Raza';



let replacedStr = 'Please visit Microsoft! Microsoft Microsoft';

// let stored = 



function updated(data = replacedStr) {
   replacedStr = data.replace("Microsoft","W3Schools");
  console.log(data);
}


updated(replacedStr)
updated(replacedStr)
updated(replacedStr)
console.log(replacedStr);


let splittedstr = replacedStr.split(' ');
console.log(splittedstr);

console.log(replacedStr)



// task 3 "Apple, Banana, Kiwi"  'AppleBananaKiwi' remove spaces and qomas form this string using string methods.
// and then find a characters in string 
// also print no of characters after and before changing string
// do a method that will remove all (i & a) charachters from last string

// lowercase new string that donot have (i & a);
// add hyphens (-) before b & k
// hint:::: arr.join('-');