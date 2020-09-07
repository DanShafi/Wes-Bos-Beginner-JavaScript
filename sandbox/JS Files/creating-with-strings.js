const newWrapper = document.createElement('div');
newWrapper.classList.add('wrapper');
console.log(newWrapper);

const imgSrc = `https://picsum.photos/200`;
const newHTML = `
<div>
  <h2>This is cute</h2>
  <img src="${imgSrc}" />
</div>
  `;

// Turn a string into a DOM element

const myFragment = document.createRange().createContextualFragment(newHTML);
document.body.append(myFragment);
