// DOM Challenges

// Make a DIV

const newDiv = document.createElement('div');
newDiv.classList.add('wrapper');
document.body.appendChild(newDiv);

// Make an Unordered List

const newList = document.createElement('ul');

const list1 = document.createElement('li');
list1.textContent = 'One';
const list2 = document.createElement('li');
list2.textContent = 'Two';
const list3 = document.createElement('li');
list3.textContent = 'Three';

newList.innerHTML += list1.outerHTML + list2.outerHTML + list3.outerHTML;
newDiv.insertAdjacentElement('beforeend', newList);

// Add an Image

const newImg = document.createElement('img');
newImg.src = 'https://picsum.photos/200';
newImg.width = '250';
newImg.classList.add('cute');
newImg.alt = 'cute puppy';

// HTML with Strings

const HTMLDiv = `<div class="myDiv">
                    <p>This is a test</p>
                    <p>This is a second test</p>
                </div>`;

newList.insertAdjacentHTML('beforebegin', HTMLDiv);

const removeDiv = document.querySelector('.myDiv');
removeDiv.firstElementChild.remove();
removeDiv.firstElementChild.classList.add('warning');

// Function-based HTML

function generatePlayercard(name, age, height) {
  return `<div class="playerCard>
            <h2>${name} - ${age}</h2>
            <p>They are ${height} and ${age} years old. 
            In Dog years, this person would be ${age * 7}. 
            That would be a tall dog!<p>
          </div>`;
}

// Make Cards Task

const newCards = document.createElement('div');
newCards.classList.add('cards');

let playerCards = generatePlayercard('Dan', 27, 183);
playerCards += generatePlayercard('Adam', 30, 176);
playerCards += generatePlayercard('Scott', 29, 159);
playerCards += generatePlayercard('Wes', 35, 166);

newCards.innerHTML = playerCards;
newDiv.insertAdjacentElement('beforebegin', newCards);
