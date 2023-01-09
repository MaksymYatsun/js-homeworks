'use strict'

let num = 1428;
let reversed = 0;

while (num > 0) {
  reversed *= 10
  reversed = reversed + (num % 10)
  num = num / 10
  num = Math.floor(num)
  console.log(reversed, num)
} 
