'use strict'

function filterByLength(arr, strLength = 5) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= strLength) {
      result.push(arr[i])
    }
  }

  return result;
}

console.log(filterByLength(['test', 'delegation', 'forward', 'bliss', 'hop'], 4));
console.log(filterByLength(['haste', 'hazelnut', 'hat', 'hacker', 'hiking']));

//Write a function that accepts an array of strings and an optional number (default value is 5). This function should return a new array containing strings with length <= the given number