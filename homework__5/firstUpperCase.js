function firstUpperCase(str, i = 0) {
  if (i === str.length) return;
  if (str[i] === str[i].toUpperCase()) return str[i];

  return firstUpperCase(str, i + 1);
}


console.log(firstUpperCase('abCde')); // C
console.log(firstUpperCase('alllowercase')); // undefined

//2. Given a string, return the first uppercase letter in it.