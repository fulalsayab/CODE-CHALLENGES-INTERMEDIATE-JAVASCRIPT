/**
 * Write a function groceries() that takes an array of object literals
 * of grocery items. The function should return a string with each
 * item separated by a comma except the last two items should be separated
 * by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.
 */

const groceries = (array) => {
  if (array.length === 1) return array[0].item;
  const lastItem = array.pop();
  let result = array.map((ele) => ele.item).join(", ");
  result += ` and ${lastItem.item}`;
  array.push(lastItem);
  return result;
};

const f1 = groceries([
  { item: "Carrots" },
  { item: "Hummus" },
  { item: "Pesto" },
  { item: "Rigatoni" },
]);

const f2 = groceries([{ item: "Bread" }, { item: "Butter" }]);
const f3 = groceries([{ item: "Cheese Balls" }]);

console.log(f1);
console.log(f2);
console.log(f3);
