function evenOddWithIfElse(n) {
  if (n % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}

function evenOddWithTernary(n) {
  // condition ? valueIfTrue : valueIfFalse
  console.log(n % 2 === 0 ? 'Even' : 'Odd');
}

const number = 8;
evenOddWithIfElse(number);
evenOddWithTernary(number);
