'use strict'

const nums = [801, 555, 31, 4, 738, 145, 1000, 473];
let biggestNum = nums[0];

for (let i = 0; i < nums.length; i++) {
  if (biggestNum < nums[i]) {
    biggestNum = nums[i]
  }
}

console.log(biggestNum)

/* 
Given an array of numbers: [801, 555, 31, 4, 738, 145, 473]  console.log the biggest number of that array.
*/

