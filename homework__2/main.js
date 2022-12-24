"use strict";

//1)Ask a user to enter any string and console.log whether the string is only consists of uppercase characters.

const input = prompt("1)Enter text", "");
const inputUpper = input.toUpperCase();

if (input === inputUpper) {
  console.log("1)String entered with only uppercase leters");
} else {
  console.log("1)String entered with lovercase letters;");
}

//2)Ask a user to enter their email and console.log whether their email provider is gmail

const inputMail = prompt("2)Enter email", "");

if (inputMail.includes("gmail.com")) {
  console.log("2)Your email provider is Gmail.");
} else {
  console.log("2)Your email provider is not Gmail");
}

//3)Ask a user to enter their Ukrainian phone number and console.log the name of the mobile service they are using (Kyivstar/vodafone/lifecell)

const phone = prompt("3)Enter your phone including your country code!", "+38");
const kyivstar = phone.includes("039", 3) || phone.includes("096", 3) || phone.includes("097", 3) || phone.includes("098", 3) || phone.includes("067", 3);
const vodafone = phone.includes("050", 3) || phone.includes("066", 3) || phone.includes("095", 3) || phone.includes("099", 3);
const lifecell = phone.includes("063", 3) || phone.includes("073", 3) || phone.includes("093", 3);

if (phone.includes("+380")) {
  if (kyivstar === true) {
    console.log("3)You using Kyivstar");
  } else if (vodafone === true) {
    console.log("3)You using Vodafone");
  } else if (lifecell === true) {
    console.log("3)You using Lifecell");
  } else {
    console.log("3)You using unrecognized mobile service");
  }
} else {
  console.log("3)You forgot to specify your country code");
}

//4)Transform the following string "[html, body, header, div, img]" into this "html->body->header->div->img" (I left the quotes here to identify that it's a string)

const string = "[html, body, header, div, img]";
const modifiedSyntax = string.replaceAll(", ", "->");
const index = modifiedSyntax.length - 2;

console.log(modifiedSyntax.substr(1, index));

//5)You have the following string "Kate, Steve, Jack, Bob, John"  , ask a user to enter any name and check if this string contains this name. If it doesn't, just let the user know via console.log. If it does, remove all names before this name and console.log the result:

const names = "Kate, Steve, Jack, Bob, John";
const userName = prompt("5)Enter random name or chose one of the list (Kate, Steve, Jack, Bob, John)", "");

if (names.includes(userName)) {
  console.log("5)", names.substring(names.indexOf(userName) + 0));
} else {
  console.log("5)Name is not in the list");
}

//6)Mini-calculator game. Ask a user to enter 2 numbers and a sign (+ /-///*). Then perform the selected math operation on these numbers and console.log the result.

const num1 = +prompt("6)Enter first num", "");
const num2 = +prompt("6)Enter second number", "");
const operator = prompt("6)Enter math operator", "");
let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "/") {
  result = num1 / num2;
} else if (operator === "*") {
  result = num1 * num2;
} else {
  console.log("6)Something went wrong");
}

console.log("6)Your result", result);
