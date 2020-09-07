const p = document.querySelector('p');
console.log(p);

const heading = document.querySelector('h1');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  heading.innerText = `Hello, Dan`;
  button.innerText = 'Log Out';
});

const myPicture = document.querySelector('.picture');
myPicture.classList.remove('cool');
console.log(myPicture.classList);

function toggleRound() {
  myPicture.classList.toggle('round');
}

myPicture.addEventListener('mouseover', toggleRound);
myPicture.addEventListener('mouseout', toggleRound);

// Atttributes

myPicture.alt = 'picsum pic';
myPicture.dataset = 'test';

console.log(myPicture.dataset);
