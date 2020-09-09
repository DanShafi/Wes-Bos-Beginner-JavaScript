const cardBtns = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleClick(e) {
  const button = e.currentTarget;
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const name = card.querySelector('h2').textContent;
  const desc = card.dataset.description;
  modalInner.innerHTML = `
  <img src="${imgSrc.replace('200', '500')}" alt=${name}"/>
  <p>${desc}</p>`;
  modalOuter.classList.add('open');
}

function closeModal() {
  modalOuter.classList.remove('open');
}

cardBtns.forEach(btn => {
  btn.addEventListener('click', handleClick);
});

modalOuter.addEventListener('click', function(e) {
  const isOutside = !e.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
