function checkInteger(n) {
  // Math.trunc plays the role of Java's (int) cast
  if (n === Math.trunc(n)) {
    console.log('Is an Integer');
  } else {
    console.log('Not an integer');
  }
}

const number = 3.1415;
checkInteger(number);
