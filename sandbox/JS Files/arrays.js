console.log('Arrays page');

const names = ['Dan', 'Wes', 'Snickers', 'Random'];
console.log(names[names.length - 1]);

function digitize(n) {
  return Array.from(n.toString())
    .map(Number)
    .reverse();
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const slicedNumbers = numbers.slice(1, 6);
const newNumbers = [...numbers, 10];
newNumbers.unshift(0);

const cars = ['ferrari', 'aston martin', 'lamborghini', 'mclaren'];
const newCars = [...cars.slice(0, 2), 'bugatti', ...cars.slice(2)];

console.log(newCars);

const comments = [
  { text: 'Cool Beans', id: 1 },
  { text: 'So cool', id: 2 },
  { text: 'Very cool', id: 3 },
  { text: 'Not cool', id: 4 },
  { text: 'Super uncool', id: 5 },
];

function deleteComment(id, comments) {
  const commentIndex = comments.findIndex(comment => comment.id === id);
  return [
    ...comments.slice(0, commentIndex),
    ...comments.slice(commentIndex + 1),
  ];
}
