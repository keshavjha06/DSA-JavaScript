function isBalanced(s) {
  const stack = [];

  for (const c of s) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    }

    if (c === ")" || c === "}" || c === "]") {
      // No matching opening bracket
      if (stack.length === 0) {
        return false;
      }
      const top = stack.pop();

      if ((top === "(" && c !== ")") || (top === "{" && c !== "}") || (top === "[" && c !== "]")) {
        return false;
      }
    }
  }

  // Leftover items are unmatched opening brackets
  return stack.length === 0;
}

const s = "(2+)[{4}]";
console.log(isBalanced(s));
