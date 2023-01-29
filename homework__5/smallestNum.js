'use strict'

function min(arr, i = 0) {
  if (i === arr.length - 1) {
    return arr[i];
  }

  return Math.min(arr[i], min(arr, i + 1));
}

console.log(min([55, 19, 84, 15, 1, 17, 29, 7])); // 1

//3. Given an array of numbers, return the smallest number.