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
  // Fire off a custom event that will tell anyone else that the items have been updated.
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
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

// Saving items to localStorage

function mirrorToLocalStorage() {
  console.info('Saving items to localStoage');
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  console.info('Restoring from localStorage');
  const localStorageItems = JSON.parse(localStorage.getItem('items'));
  if (localStorageItems.length) {
    items.push(...localStorageItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

// Push the items into our state

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
restoreFromLocalStorage();
