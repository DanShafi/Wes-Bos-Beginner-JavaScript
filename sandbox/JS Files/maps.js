console.log('The Maps page');

const myMap = new Map();
myMap.set('name', 'Dan');
myMap.set(100, 'This is a number');
myMap.set('last', 'Shafi');

console.log(myMap);

const score = 100;
const prizes = new Map();
prizes.set(100, 'Bear');
prizes.set(200, 'Duck');
prizes.set(300, 'Fish');

console.log(`You win a ${prizes.get(score)}`);

const ul = document.querySelector('.prizes');
for (const [points, prize] of prizes) {
  const li = `<li>${points} - ${prize}</li>`;
  ul.insertAdjacentHTML('beforeend', li);
}

const JSONTest = {
  name: 'Jason',
  last: 'Test',
  language: 'txt',
};

JSON.stringify(JSONTest);
