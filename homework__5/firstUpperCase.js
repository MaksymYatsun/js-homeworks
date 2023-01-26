let index = 0;
function firstUpperCase(str) {
  if (str[index] === str[index].toLowerCase()) {
    if (index < str.length - 1) {
      index++;

      return firstUpperCase(str);
    }

    return;
  }
  let resultIndex = index;
  index = 0;

  return str[resultIndex];
}


console.log(firstUpperCase('abCde')); // C
console.log(firstUpperCase('alllowercase')); // undefined

//2. Given a string, return the first uppercase letter in it.