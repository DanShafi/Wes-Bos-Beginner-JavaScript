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
};

console.log(aboutMe.languages[0]);

const propertyToCheck = prompt('What property do you want to check?');
console.log(aboutMe[propertyToCheck]);
