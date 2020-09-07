console.log('This is hoisting');

sayHi();

function sayHi() {
  console.log('Will this work?');
}

let age;
console.log(age);
age = 10;
