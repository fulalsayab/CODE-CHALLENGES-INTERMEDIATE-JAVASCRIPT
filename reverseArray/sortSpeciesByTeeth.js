const speciesArray = [
  { speciesName: "shark", numTeeth: 50 },
  { speciesName: "dog", numTeeth: 42 },
  { speciesName: "alligator", numTeeth: 80 },
  { speciesName: "human", numTeeth: 32 },
];

// Write your code here:
const sortSpeciesByTeeth = (array) => {
  return array.sort((a, b) => {
    return a.numTeeth - b.numTeeth;
  });
};

console.log(sortSpeciesByTeeth(speciesArray));