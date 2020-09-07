console.log('This is closures');

function outer() {
  const outerVar = 'Hey, I am the outer Var!';
  function inner() {
    const innerVar = 'Hey, I am the inner Var!';
    console.log(innerVar);
    console.log(outerVar);
  }
  inner();
}
outer();

function createGreeting(greeting = '') {
  const myGreet = greeting;
  return function(name) {
    return `${myGreet} ${name}`;
  };
}

const greetingTest = createGreeting('Hi');

// Private Variables

function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `Your ${gameName} score is ${score}`;
  };
}

const footballGame = createGame('Football');
const hockeyGame = createGame('Hockey');
