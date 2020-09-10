function scrollToAccept() {
  const terms = document.querySelector('.terms-and-conditions');
  if (!terms) {
    // There isn't that item on the page.
  }
  terms.addEventListener('scroll', e => {
    console.log(e.currentTarget.scrollTop);
    console.log(e.currentTarget.scrollHeight);
  });
}

scrollToAccept();
