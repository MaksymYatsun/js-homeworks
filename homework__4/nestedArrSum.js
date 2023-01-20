'use strict'

function nestedArrSum(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      result += arr[i];
    }
    result += nestedArrSum(arr[i]);
  }

  return result;
}

console.log(nestedArrSum([1, 2, 3, [4, 5, [6, 7, 8, 9, [10]]]]))
console.log(nestedArrSum([[10], 10, 12, [34, 42], 8, [[0, 11]]]))

/*
5. Write a sum function that accepts an array of numbers and returns the sum of these numbers. 
There's a little catch - the given array can contain another array of numbers (there's no limit on nesting).
*/