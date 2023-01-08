'use strict'

const nums = [[1, 1, 0], [1, 0, 1], [1, 0, 1], [0, 1, 1]];
let counter = 0;

for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums[i].length; j++) {
    if (nums[i][j] === 0) {
      counter++;
    }
  }
};

console.log('Zero count is:', counter);

/* 
Given a two-dimensional array:
const nums = [
  [1, 1, 0],
  [1, 0, 1],
  [1, 0, 1],
  [0, 1, 1],
];
Write a program to count the number of zeros in this array.
*/