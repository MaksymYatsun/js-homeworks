'use strict'

function intervalSum(num) {
  if (num > 0) return num + intervalSum(num - 1);

  return num;
}

console.log(intervalSum(10)); // 55;
console.log(intervalSum(59)); // 1770;

//1. Given a number, return the sum of all numbers from 0 up to the number.