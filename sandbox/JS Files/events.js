const newBtn = document.querySelector('.butts');
const secondBtn = document.querySelector('.cool');

function clickHandler() {
  console.log('This is a callback function');
}

newBtn.addEventListener('click', clickHandler);
secondBtn.addEventListener('click', clickHandler);

newBtn.removeEventListener('click', clickHandler);

const buyBtn = document.querySelectorAll('.buy');
console.log(buyBtn);

buyBtn.forEach(item =>
  item.addEventListener('click', () => {
    console.log('this works');
  })
);
