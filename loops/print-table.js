function tableOf17ByStep() {
  let output = '';
  for (let i = 17; i < 170; i = i + 17) {
    output += i + ' ';
  }
  console.log(output);
}

function tableOf17ByMultiplying() {
  let output = '';
  for (let i = 1; i < 10; i++) {
    output += i * 17 + ' ';
  }
  console.log(output);
}

// numbers divisible by 3 that are odd
function oddMultiplesOfThree() {
  let output = '';
  for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 2 !== 0) {
      output += i + ' ';
    }
  }
  console.log(output);
}

function printCountdown(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}

const number = 10;
tableOf17ByStep();
tableOf17ByMultiplying();
oddMultiplesOfThree();
printCountdown(number);
