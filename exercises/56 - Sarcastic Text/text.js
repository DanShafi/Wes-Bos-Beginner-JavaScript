const textArea = document.querySelector('[name="text"');
const result = document.querySelector('.result');
const filterInputs = Array.from(document.querySelectorAll('[name="filter"]'));

const codewordLetters = {
  a: '01z',
  A: '002Z',
  b: '03y',
  B: '004Y',
  c: '05x',
  C: '006X',
  d: '07w',
  D: '008W',
  e: '09v',
  E: '010V',
  f: '11u',
  F: '012U',
};

function transformText(text) {
  const filter = filterInputs.find(input => input.checked).value;
  const mod = Array.from(text).map(filters[filter]);
  result.textContent = mod.join('');
}

const filters = {
  sarcastic(letter, index) {
    if (index % 2) {
      return letter.toUpperCase();
    }
    return letter.toLowerCase();
  },
  codeword(letter) {
    const codewordLetter = codewordLetters[letter];
    if (codewordLetter) return codewordLetter;
    return letter;
  },
};

textArea.addEventListener('input', e => transformText(e.target.value));
