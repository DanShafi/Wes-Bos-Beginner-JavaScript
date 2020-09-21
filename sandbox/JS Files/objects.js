document.body.innerHTML = `<p>This is the objects page.</p>`;

const aboutMe = {
  name: 'Dan',
  age: 27,
  languages: ['javascript', 'react'],
  hobbies: {
    sports: 'football',
    reading: 'kindle',
    media: 'netflix',
  },
  sayHello(greeting = 'Hello') {
    return `${greeting} ${this.name}`;
  },
};

console.log(aboutMe.languages[0]);

// const propertyToCheck = prompt('What property do you want to check?');
// console.log(aboutMe[propertyToCheck]);

let name1 = 'Dan';
const name2 = 'Dan';

console.log(name1 === name2);

name1 = 'Bob';
name1 = name2;

const person1 = {
  name: 'Dan',
  last: 'Shafi',
};

const person2 = {
  name: 'Dan',
  last: 'Shafi',
};

// Objects are referenced by object name, not values.

// const person3 = { ...person1 };
const person3 = _.cloneDeep(person1);
person3.name = 'Bob';
person3.clothing = 100;
