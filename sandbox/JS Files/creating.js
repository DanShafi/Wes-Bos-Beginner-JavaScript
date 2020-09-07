const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

const myParagraph = document.createElement('p');
myParagraph.innerText =
  'This is me including some text to my newly made paragraph';
myParagraph.classList.add('special');

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/300';
myImage.alt = 'nice image';

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

// Inserting a Heading to the Wrapper

const myHeading = document.createElement('h1');
myHeading.textContent = 'This is a JS-injected heading.';

myDiv.insertAdjacentElement('afterbegin', myHeading);

// Unordered List Task

const newList = document.createElement('ul');

const list1 = document.createElement('li');
list1.textContent = 'One';
const list2 = document.createElement('li');
list2.textContent = 'Two';
const list3 = document.createElement('li');
list3.textContent = 'Three';
const list4 = document.createElement('li');
list4.textContent = 'Four';

newList.innerHTML +=
  list1.outerHTML + list2.outerHTML + list3.outerHTML + list4.outerHTML;

document.body.appendChild(newList);
