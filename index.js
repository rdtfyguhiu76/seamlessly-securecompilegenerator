function letterCombinations(digits) {
  if (digits.length === 0) return [];
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const result = [];
  backtrack("", digits);
  return result;
  function backtrack(combination, nextDigits) {
    if (nextDigits.length === 0) result.push(combination);
    else {
      const digit = nextDigits.substring(0, 1);
      const letters = map[digit];
      for (const letter of letters) {
        backtrack(combination + letter, nextDigits.substring(1));
      }
    }
  }
}
