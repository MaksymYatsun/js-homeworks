'use strict'

let input = prompt('Input').toLowerCase();
let result = 0;

while (input !== 'stop') {
  const number = parseInt(input);
  if (!isNaN(number)) {
    result += number;
  }
  input = prompt('Input', '').toLowerCase();
}

console.log(result);

/* 
Write a program that will constantly ask user to enter a number (via prompt) and when the user enters stop instead of a number, alert the sum of all numbers they entered.
*/