console.log('This works');

const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// Create an array to hold our state
const items = [];

// Create a submit handler

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  items.push(item);
  console.log(`There are now ${items.length} items in your state`);
  // Clear the form
  e.currentTarget.item.value = ' ';
  displayItems();
}

function displayItems() {
  const html = items
    .map(
      item =>
        `<li class="shopping-item">
        <input type="checkbox">
        <span class="itemName">${item.name}</span>
        <button aria-label="Remove ${item.name}">&times;</button></li>`
    )
    .join('');
  console.log(html);
  list.innerHTML = html;
}

// Push the items into our state

shoppingForm.addEventListener('submit', handleSubmit);
