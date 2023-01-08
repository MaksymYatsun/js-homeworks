'use strict'

const nums = '025468182';
const tmpArr = [];

for (let i = 0; i < nums.length; i++) {
  if ((nums[i] % 2 === 0) && (nums[i - 1] % 2 === 0)) {
    tmpArr.push('-', nums[i])
  } else {
    tmpArr.push(nums[i])
  }
}

const numsWithHyphens = tmpArr.join('')

console.log(numsWithHyphens)

/* 
Given a string of numbers: 025468 create a new string that will have hyphens between each two even numbers: 0-254-6-8.
*/