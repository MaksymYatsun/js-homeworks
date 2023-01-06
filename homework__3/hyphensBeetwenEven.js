'use strict'

const nums = '025468182';
const arrTmp = [];

for (let i = 0; i < nums.length; i++) {
  if ((nums[i] % 2 === 0) && (nums[i - 1] % 2 === 0)) {
    arrTmp.push('-', nums[i])
  } else {
    arrTmp.push(nums[i])
  }
}

const numsWithHyphens = arrTmp.join('')

console.log(numsWithHyphens)

/* 
Given a string of numbers: 025468 create a new string that will have hyphens between each two even numbers: 0-254-6-8.
*/