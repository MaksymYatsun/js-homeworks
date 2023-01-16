function validatePassword(password) {
  if (password.length < 8 || password.length > 30) {

    return false
  } else if (password.toLowerCase() === password) {

    return false
  } else if (password.includes('%') || password.includes('?') || password.includes('!') || password.includes('*') || password.includes('#')) {

    return false
  }

  for (i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {

      return true
    }
  }
}

console.log(validatePassword('Str0ngpassw0rd'));
console.log(validatePassword('justabiggerpassword1'));
console.log(validatePassword('He1llo World!'));

// 4. Write a function that accepts a password and returns boolean whether the password is valid.