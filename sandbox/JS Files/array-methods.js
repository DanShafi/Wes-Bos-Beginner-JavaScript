console.log('Array Methods page');

const toppings = [
  'Mushrooms ',
  'Tomatoes',
  'Eggs',
  'Chili',
  'Lettuce',
  'Avocado',
  'Chiles',
  'Bacon',
  'Pickles',
  'Onions',
  'Cheese',
];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

/*
  Static Methods
*/

// Array.of();

console.log(Array.of('a', 'b', 'c'));

// Make a function that creates a range from x to y with Array.from();

function createRange(start, end) {
  const range = Array.from({ length: end - start + 1 }, function(_item, index) {
    return index + start;
  });
  return range;
}

// Check if the last array you created is really an array with Array.isArray();
myRange = createRange(3, 7);
console.log(Array.isArray(myRange));

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()

console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats));

Object.entries(meats).forEach(entry => {
  const [key, value] = entry;
  console.log(key, value);
});

/*
  Instance Methods
*/

// Display all bun types with " or " - use join()

buns.join('-');

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a string

const foodString = 'hot dogs,hamburgers,sausages,corn';
console.log(foodString.split(','));

// take the last item off toppings with pop()

const lastItem = toppings.pop();
console.log(lastItem);

// add it back with push()
toppings.push(lastItem);

// take the first item off toppings with shift()

const firstItem = toppings.shift();
// add it back in with unshift()
toppings.unshift(firstItem);
// Do the last four,but immutable (with spreads and new variables)

let newToppings = toppings.slice(0, toppings.length - 1);
newToppings = [...newToppings, toppings[toppings.length - 1]];

// Make a copy of the toppings array with slice()

const copyOfToppings = toppings.slice(0);
toppings[0] = 'Sweetcorn';

// Make a copy of the toppings array with a spread

const toppings2 = [...toppings];

// take out items 3 to 5 of your new toppings array with splice()

toppings2.splice(3, 5);

// find the index of Avocado with indexOf() / lastIndexOf()

const avoIndex = toppings.indexOf('Avocado');

// Check if hot sauce is in the toppings with includes()

const checkHotSauce = toppings.includes('Hot Sauce');

// add it if it's not

toppings.push('Hot Sauce');

// flip those toppings around with reverse()

toppings.reverse();

/*
  Callback Methods
*/

// find the first rating that talks about a burger with find()

const findBurger = feedback.find(e => e.comment.includes('burg'));

// find all ratings that are above 2 with filter()

const goodReviews = feedback.filter(rating => rating > 2);
console.log(goodReviews);

// find all ratings that talk about a burger with filter()
// Remove the one star rating however you like!

// check if there is at least 5 of one type of meat with some()
// make sure we have at least 3 of every meat with every()
// sort the toppings alphabetically with sort()
// sort the order totals from most expensive to least with .sort()
// Sort the prices with sort()

/*
  Looping Methods (next)
*/
