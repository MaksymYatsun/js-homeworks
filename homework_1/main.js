"use strict";

//1) Solve this math expression (see the screenshot) with JS
const expression = (((-2 * (7 / 24)) / (1 + (5 / 6))) - (1.6 * (-0.3))) / (-9.5 / ((5 + (7 / 10)) - (4 + (12 / 35))));
console.log("1) Math expretion result:", expression.toFixed(5));

//2) Create a variable x with a value of 3 and a variable y with a value of 7 . Now swap these values.

let x = 3;
let y = 7;

[x, y] = [y, x]
console.log("2) Swapped values", x, y);

//3) Ask a user to enter the year they were born in and then console.log their age.

const year = prompt("Enter a year you borned");
console.log("3) User borned in year:", year);

//4) Ask a user to enter 2 numbers. Then console.log the result of a) addition b) subtraction c) multiplication d) division and e) the sum of their square roots.

const num1 = +prompt("Enter first number", "0");
const num2 = +prompt("Enter second number", "0");

console.log("4) Your values:", num1, num2)
console.log("4.1) Added values", num1 + num2);
console.log("4.2) Substracted values", num1 - num2);
console.log("4.3) Multiplied values", num1 * num2);
console.log("4.4) Divided values", num1 / num2)
console.log("4.5) Sum of the square roots", Math.sqrt(num1) + Math.sqrt(num2))

//5) Ask a user to enter a year and then console.log whether it is a leap year or not.

const inputYear = +prompt("Enter random year", "0");

function lepYearDefiner(inputYear) {
  if (inputYear < 1582) {
    console.log("5) Gregorian calendar was introdused after 1582ce, chose a year greather then that")
  }
  else if ((0 == inputYear % 4 && 0 == inputYear % 400)) {
    console.log("5)", inputYear, "its a leap year");
  } else {
    console.log("5)", inputYear, "is not a leap year");
  }
};

lepYearDefiner(inputYear);

//6) Ask a user to enter a number and then console.log whether it's even or odd

const num3 = +prompt("Enter a number to check if it is odd or even", "0");

function oddEvenDefiner(num3) {
  if (num3 % 2 == 0) {
    console.log("6)", num3, "is even");
  } else {
    console.log("6)", num3, "is odd.");
  }
};

oddEvenDefiner(num3);
