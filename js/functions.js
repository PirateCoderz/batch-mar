function name(params = "") {
  console.log("first" + params)
}

let condition = 5;

function n() {

  let number = 0;
  // let condition = true;
  console.log(number);
  name(1);
  name(2);
  name();
  // if condition is true then code will run. otherwise it will not run and skipped
  while (condition == 4) {
    name(50);
    number++;
    let c = false;
    condition = c;
  }

  console.log(condition)
  console.log("After condition code");
  console.log(number)
  condition = false;
  do {
    name(10);
  }
  while (condition);
  condition = true;
}


name(20);
n();
console.log(condition);


let x = 5;
let y = "5";

x -= y;
console.log(x);

// -5   0 5 10

while (x === y) {
  console.log("Condition is true")
}

