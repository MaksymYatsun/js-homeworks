'use strict'

function stringSplitter(str, delimiter = '') {
  const arr = [];
  let tmpStr = '';
  let isDelimiter = false;

  if (delimiter.length === 0) {

    for (let i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }

    return arr;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === delimiter[0]) {

      for (let j = 0; j < delimiter.length; j++) {
        if (str[i + j] === delimiter[j]) {
          isDelimiter = true;
        }

        if (str[i + j] !== delimiter[j]) {
          isDelimiter = false;
        }
      }
    }

    if (isDelimiter === false) {
      tmpStr += str[i];
    }

    if (isDelimiter) {
      arr.push(tmpStr);
      tmpStr = '';
      isDelimiter = false;
      i += delimiter.length - 1;
    }
  }
  arr.push(tmpStr);

  return arr;
}

console.log(stringSplitter('Jake, Jim, Kate, John', ', '));
console.log(stringSplitter('ABCXYZDHFXYTXYZBLA', 'XYZ'));
console.log(stringSplitter('Hello'));
console.log(stringSplitter('TEST1-*--TEST2-*-*--TEST3-**-TEST4', '-*-'));

/* 
Write a simplified version of String.split() function. It should accept a string and a delimiter (default value is ''). 
It should return an array of substrings separated by the given delimiter.
*/