const newBtn = document.querySelector('.butts');
const secondBtn = document.querySelector('.cool');

function clickHandler() {
  console.log('This is a callback function');
}

newBtn.addEventListener('click', clickHandler);
secondBtn.addEventListener('click', clickHandler);

newBtn.removeEventListener('click', clickHandler);

const buyBtn = document.querySelectorAll('.buy');

buyBtn.forEach(item =>
  item.addEventListener('click', () => {
    console.log(event.target.dataset.price);
    if (event.target.dataset.price <= 300) {
      alert('You need to spend more for free shipping.');
    }
  })
);
