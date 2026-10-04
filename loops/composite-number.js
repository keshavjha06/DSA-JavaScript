function checkPrimeOrComposite(n) {
  let isPrime = true;

  // 1 and n are obvious factors, so check 2 to n - 1 (or up to Math.sqrt(n))
  for (let i = 2; i <= n - 1; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (n === 1) {
    console.log('Neither Prime nor Composite');
  } else if (isPrime === false) {
    console.log('Composite Number');
  } else {
    console.log('Prime Number');
  }
}

const number = 21;
checkPrimeOrComposite(number);
