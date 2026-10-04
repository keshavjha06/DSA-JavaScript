function evenNumbersWithIf() {
  let output = '';
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      output += i + ' ';
    }
  }
  console.log(output);
}

// loop runs 50 times
function evenNumbersByStepOfTwo() {
  let output = '';
  for (let i = 2; i <= 100; i = i + 2) {
    output += i + ' ';
  }
  console.log(output);
}

// loop runs 100 times
function evenNumbersCheckingEach() {
  let output = '';
  for (let i = 1; i <= 100; i = i + 1) {
    if (i % 2 === 0) {
      output += i + ' ';
    }
  }
  console.log(output);
}

evenNumbersWithIf();
evenNumbersByStepOfTwo();
evenNumbersCheckingEach();
