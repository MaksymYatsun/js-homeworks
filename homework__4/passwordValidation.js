function passwordValidation(password) {
  for (i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
      if (password.length <= 8 || password.length >= 30) {
        return false;
      } else if (password.includes('%') || password.includes('?') || password.includes('!') || password.includes('*') || password.includes('#')) {
        return false;
      } else if (password.toLowerCase() === password) {
        return false;
      }
      return true;
    }
  }
  return false
}

console.log(passwordValidation('Str0ngpassw0rd')); // Valid
console.log(passwordValidation('justabiggerpassword1')); // Too long
console.log(passwordValidation('He1llo World!')); // Forbidden character

// 4. Write a function that accepts a password and returns boolean whether the password is valid. The password is valid when.