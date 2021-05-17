/** Different ways to reverse an array in javaScript */

//First: simple for..loop
// This way takes more memory and  basic
let sentence = ["sense.", "make", "all", "will", "This"];

const reverseArray = (array) => {
    // create a new empty array to hold the the reverse element of the given array
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray[i] = array[array.length - 1 - i];
    }
    return newArray;
};

console.log(reverseArray(sentence));

// Second: return the same array with reverse elements 
// we will use a temporary variable to hold the element and use for...loop to loop through the array
// this method takes less memory, and it complexicity  O(1)

const reverseArray2 = (array) => {
    //temporary variable
    let temp;
    for (let i = 0; i <( array.length - 1)/2; i++){
        temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
};
 
console.log(reverseArray2(sentence));

// Third: we will use unsift() build in method
// the time complexity is O(n)

sentence = ["sense.", "make", "all", "will", "This"];
const reverseArray3 = (array) => {
    let newArray = [];
    array.forEach(element => {
        newArray.unshift(element);
    });
    return newArray;
};
console.log(reverseArray3(sentence));

// Fourth: we will use push() build in method
// the time complexity is O(n)
sentence = ["sense.", "make", "all", "will", "This"];
const reverseArray4 = (array) => {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
};
console.log(reverseArray4(sentence));

