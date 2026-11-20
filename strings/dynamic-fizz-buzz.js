function getOutput(str) {
  const tokens = str.split(/\s+/);
  const number = parseInt(tokens[tokens.length - 1]);
  let result = "";
  for (let i = 0; i < tokens.length - 1; i++) {
    const pair = tokens[i].split(":");
    const divisor = parseInt(pair[0]);
    const word = pair[1];
    if (number % divisor === 0) {
      result += word;
    }
  }

  if (result.length > 0) {
    return result;
  }
  return String(number);
}

const input = "3:fizz 5:buzz 1";
console.log(getOutput(input));
console.log(getOutput("3:fizz 7:buzz 9:whizz 315"));
