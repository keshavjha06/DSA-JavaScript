function printFactors(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log(i + ' ');
      const pairFactor = Math.floor(n / i);
      if (i !== pairFactor) {
        console.log(pairFactor + ' ');
      }
    }
  }
}

const number = 36;
printFactors(number);
