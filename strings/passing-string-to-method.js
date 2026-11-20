function change(str) {
  str = "Utkarsh";
}

const str = "Keshav";
console.log(str);
change(str); // won't change str: strings are passed by value
console.log(str);
