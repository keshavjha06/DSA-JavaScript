const readline = require('readline/promises');

function checkFourDigit(n) {
  if (n > 999 && n < 10000) {
    console.log('4 Digit Number');
  } else {
    console.log('Not a 4 digit no.');
  }
}

function checkDivisibleBy5Or3(n) {
  if (n % 5 === 0 || n % 3 === 0) {
    console.log('Divisible by 5 or 3');
  } else {
    console.log('Not divisible by 5 or 3');
  }
}

/* const number = 1234;
checkFourDigit(number);
checkDivisibleBy5Or3(number); */

async function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const number = Number(await rl.question('Enter Number: '));
  rl.close();

  checkFourDigit(number);
  checkDivisibleBy5Or3(number);
}

main();
