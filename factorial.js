/**
 * Write a function factorial() that takes a number as an argument and
 * returns the factorial of the number.
 */

const factorial = (number) => {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result = result * i;
  }
  return result;
};

console.log(factorial(8));

const factorial2 = (number) => {
  return Array.from({ length: number }, (item, index) => index + 1).reduce(
    (res, ele) => res * ele
  );
};

console.log(factorial2(8));
