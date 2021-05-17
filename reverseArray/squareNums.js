
const numbers = [2, 7, 9, 171, 52, 33, 14];
const squareNums = (array) => {
    return array.map(ele => Math.pow(ele, 2)
    );
};
 
console.log(squareNums(numbers));