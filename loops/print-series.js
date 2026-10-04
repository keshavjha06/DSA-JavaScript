// print the series 99, 95, 91, 87 ... up to all terms which are positive
function printSeries(n) {
  for (let i = 99; i >= n; i = i - 4) {
    if (i > 0) {
      console.log(i + ' ');
    }
  }
}

const lowerLimit = 0;
printSeries(lowerLimit);
