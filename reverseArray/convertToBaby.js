/** Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, 
 * returns a new array with each string in the array prepended with 'baby '. */

const convertToBaby = (animals) => {
  let newArray = [];
  for (let i = 0; i < animals.length; i++) {
    newArray.push(`baby ${animals[i]}`);
  }
  return newArray;
};

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

console.log(convertToBaby(animals)); 