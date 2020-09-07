console.log('It works');

function go() {
  const hair = 'blonde';
  console.log(hair);
}

function isCool(name) {
  let cool;
  if (name === 'Dan') {
    cool = true;
  } else {
    return false;
  }
  return cool;
}

const favBrand = 'Obey';

function logBrand() {
  console.log(favBrand);
}

function changeBrand() {
  const favBrand = 'Supreme';
  logBrand();
}

changeBrand();
