function greet(name, callback) {
  console.log('Hello ' + name);
  callback();
  console.log('Goodbye');
}
function askQuestion() {
  console.log('How are you today?');
  // prompt('How are you today?');
  return;
}

greet('Alice', askQuestion);
