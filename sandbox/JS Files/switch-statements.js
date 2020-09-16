const turtle = document.querySelector('.turtle');
let x = 0;
let y = 0;
const speed = 25;
let flipped = false;
turtle.width = 200;

function handleKeyDown(e) {
  if (!e.key.includes('Arrow')) return;
  switch (e.key) {
    case 'ArrowUp':
      y -= 1;
      break;
    case 'ArrowDown':
      y += 1;
      break;
    case 'ArrowLeft':
      x -= 1;
      flipped = true;
      break;
    case 'ArrowRight':
      x += 1;
      flipped = false;
      break;
    default:
      console.log('That is not a valid move');
  }
  turtle.setAttribute(
    'style',
    `
    --rotate: ${flipped ? '180deg' : '0'};
    --x: ${x * speed}px; 
    --y: ${y * speed}px`
  );
}

window.addEventListener('keydown', handleKeyDown);
