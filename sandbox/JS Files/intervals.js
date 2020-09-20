console.log('This is the Intervals page');

function pageLoader() {
  console.log('Your page has loaded.');
}

// setTimeout(pageLoader, 1000);

// const setImmediateInterval = (funcToRun, ms) => {
//   funcToRun();
//   return setInterval(funcToRun, ms);
// };

// setImmediateInterval(pageLoader, 1000);
const destroy = () => {
  document.body.innerHTML = `<p>Mission failed: the page has been destroyed.`;
};

const clickEvent = window.addEventListener('click', function() {
  document.body.innerHTML = '<p>Well done, you have saved the day.</p>';
  clearTimeout(destroyTimer, startCountdown);
});

function startCountdown(seconds) {
  let counter = seconds;

  const interval = setInterval(() => {
    console.log(counter);
    document.body.innerHTML = `<p>Quick! Click to stop the page from self destructing. You have ${counter} seconds.</p>`;
    counter--;

    if (counter < 0 || clickEvent) {
      clearInterval(interval);
      destroy();
    }
  }, 1000);
  return counter;
}

startCountdown(5);

const destroyTimer = setTimeout(destroy, 5000);
