// function calculateBill(bill, tax) {
//   const total = bill * tax;
//   return Math.round(total / 3);
// }

// const totalBill = calculateBill(100, 1.2);

// const p = document.querySelector('p');
// p.innerHTML = `The bill per person today is £${totalBill}.`;

// function theDoctor(name) {
//   return `Dr. ${name}`;
// }

// function uppercase(name) {
//   return `Hey ${name}.`;
// }

// console.log(uppercase(theDoctor('Dan')));

// ANON Function
// function (firstName) {
//     return `Hey ${firstName}`;
// };

// FUNCTION EXPRESSION

// const greeting = function(firstName) {
//   return `Hey ${firstName}`;
// };

const inchToCM = inches => inches * 2.54;
const calculateBill = (bill, tax) => Math.round(bill * tax);

const add = (a, b = 3) => a + b;

const newBaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE - Immediately Invoked Function Expression

(function(name) {
  console.log(`Hello, this is an IIFE ${name}.`);
})('Dan');

// METHODS
const Dan = {
  name: 'Dan',
  sayHi() {
    console.log(`Hi there, ${this.name}`);
  },
};

// CALLBACK FUNCTION

function handleClick() {
  console.log('Click me');
}

const clickBtn = document.querySelector('.clickMe');
clickBtn.addEventListener('click', handleClick);

setTimeout(Dan.sayHi, 3000);
