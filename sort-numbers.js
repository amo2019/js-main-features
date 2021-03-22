/**
 * sorting an array of numbers
 */

let numbers = [14, 2, 10, 6, 5, 6, 9, 10, 43];

let result = (function (arr) {
  let sortedArray = Array.from(new Set(numbers)).sort((a, b) => {
    return a - b;
  });
  console.log(sortedArray);
  return sortedArray;
})(numbers);

console.log(result);
