'use strict'

const arr = [];
let result = 0;
let input;

while (input !== 'stop') {
  input = prompt("Input");
  input = input.toLowerCase();
  if (input !== 'stop') {
    result += parseInt(input);
  } else if (isNaN(result)) {
    console.log("You can add only numbers");
  } else {
    console.log(result)
  }
}

/* 
Write a program that will constantly ask user to enter a number (via prompt) and when the user enters stop instead of a number, alert the sum of all numbers they entered.
*/