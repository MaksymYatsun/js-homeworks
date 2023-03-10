"use strict";

//1)Ask a user to enter any string and console.log whether the string is only consists of uppercase characters.

const input = prompt("1)Enter text", "");
const inputUpper = input.toUpperCase();

if (input === inputUpper) {
  console.log("1)String entered with only uppercase letters");
} else {
  console.log("1)String entered with lowercase letters;");
};

//2)Ask a user to enter their email and console.log whether their email provider is gmail

const inputMail = prompt("2)Enter email", "");

if (inputMail.endsWith("@gmail.com")) {
  console.log("2)Your email provider is Gmail.");
} else {
  console.log("2)Your email provider is not Gmail");
};

//3)Ask a user to enter their Ukrainian phone number and console.log the name of the mobile service they are using (Kyivstar/vodafone/lifecell)

const phone = prompt("3)Enter your phone including your country code!", "+38");
const phoneCode = phone.substring(3, 6);
const kyivstar = phoneCode === "039" || phoneCode === "096" || phoneCode === "097" || phoneCode === "098" || phoneCode === "067";
const vodafone = phoneCode === "050" || phoneCode === "066" || phoneCode === "095" || phoneCode === "099";
const lifecell = phoneCode === "063" || phoneCode === "073" || phoneCode === "093";

if (phone.includes("+380")) {
  if (kyivstar) {
    console.log("3)You operator is Kyivstar");
  } else if (vodafone) {
    console.log("3)You operator is Vodafone");
  } else if (lifecell) {
    console.log("3)You operator is Lifecell");
  } else {
    console.log("3)Unknown operator");
  }
} else {
  console.log("3)Please specify your county code")
};

//4)Transform the following string "[html, body, header, div, img]" into this "html->body->header->div->img" (I left the quotes here to identify that it's a string)

const string = "[html, body, header, div, img]";
const modifiedSyntax = string.replaceAll(", ", "->");
const index = modifiedSyntax.length - 2;

console.log(modifiedSyntax.substr(1, index));

//5)You have the following string "Kate, Steve, Jack, Bob, John", ask a user to enter any name and check if this string contains this name. If it doesn't, just let the user know via console.log. If it does, remove all names before this name and console.log the result:

const names = "Kate, Steve, Jack, Bob, John";
const userName = prompt("5)Enter random name or chose one of the list (Kate, Steve, Jack, Bob, John)", "");

if (names.includes(userName)) {
  console.log("5)", names.substring(names.indexOf(userName)));
} else {
  console.log("5)Name is not in the list");
};

//6)Mini-calculator game. Ask a user to enter 2 numbers and a sign (+ /-///*). Then perform the selected math operation on these numbers and console.log the result.

const num1 = Number(prompt("6)Enter first number"));
const num2 = Number(prompt("6)Enter second number"));
const operator = prompt("6)Enter math operator", "");
let result;

if (!isNaN(num1) && !isNaN(num2)) {
  if (operator == "+" || operator == "-" || operator == "/" || operator == "*") {
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "/") {
      result = num1 / num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else {
      console.log("6)Try another operator")
    }
  } else {
    console.log("6)Try another operator");
  }
} else {
  console.log("6)Must be numbers")
};

console.log("6)Result is", result);
