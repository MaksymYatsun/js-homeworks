'use strict'

const nums = [801, 555, 31, 4, 738, 145, 473, 1000];
let biggestNum;

for (let i = 0; i < nums.length; i++) {
  biggestNum = nums[i];
  if (nums[i] > (nums[i + 1])) {
    biggestNum = nums[i + 1]
  }
}

console.log(biggestNum)

/* 
Given an array of numbers: [801, 555, 31, 4, 738, 145, 473]  console.log the biggest number of that array.
*/

