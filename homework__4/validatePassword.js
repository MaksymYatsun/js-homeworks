'use strict'

function includesNumbers(password) {
  for (let i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
      return true;
    }
  }

  return false;
}

function validatePassword(password) {
  const forbiddenChars = ['%', '?', '!', '*', '#'];

  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    if (forbiddenChars.includes(char)) {
      return false;
    }
  }

  if (password.length < 8 || password.length > 30) {
    return false;
  }
  if (password.toLowerCase() === password) {
    return false;
  }

  return includesNumbers(password);
}

console.log(validatePassword('Str0ngpassw0rd'));
console.log(validatePassword('justabiggerpassword1'));
console.log(validatePassword('Hello World!'));

// 4. Write a function that accepts a password and returns boolean whether the password is valid.