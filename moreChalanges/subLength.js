/**
 * Write a function subLength() that takes 2 parameters,
 * a string and a single character. The function should
 * search the string for the two occurrences of the
 * character and return the length between them including
 * the 2 characters. If there are less than 2 or more
 * than 2 occurrences of the character the function should return 0.
 */

const subLength = (str, ch) => {
  let firstIndex = -1;
  let secondIndex = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      if (firstIndex === -1) {
        firstIndex = i;
      } else if (secondIndex === -1) {
        secondIndex = i;
      } else {
        return 0;
      }
    }
  }
  return firstIndex !== -1 && secondIndex !== -1
    ? secondIndex - firstIndex + 1
    : 0;
};

console.log(subLength("Saturday", "a")); // returns 6
console.log(subLength("summer", "m")); // returns 2
console.log(subLength("digitize", "i")); // returns 0
console.log(subLength("cheesecake", "k")); // returns 0
