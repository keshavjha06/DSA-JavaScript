function studentName(a) {
  if (a % 5 === 0 && a % 3 === 0) {
    return 'John';
  } else if (a % 3 === 0) {
    return 'Mary';
  } else if (a % 5 === 0) {
    return 'Michael';
  }
  return 'Keshav';
}

const number = 15;
console.log(studentName(number));
