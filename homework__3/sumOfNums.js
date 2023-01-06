'use strict'

const arr = [];
let result = 0;
let input;

while (input !== 'stop') {
  input = prompt('Enter a number, to sum enter a stop');
  input = input.toLowerCase();
  if ((input !== 'stop')) {
    arr.push(parseInt(input))
  } else {
    for (i = 0; i < arr.length; i++) {
      result = result + arr[i];
    }
    if (isNaN(result)) {
      console.log('Your input was containing not a numeric value')
    } else {
      console.log(result)
    }
  };
};

/* 
Write a program that will constantly ask user to enter a number (via prompt) and when the user enters stop instead of a number, alert the sum of all numbers they entered.
*/