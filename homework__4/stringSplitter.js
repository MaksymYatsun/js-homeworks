'use strict'

function stringSplitter(str, del = '') {
  const arr = [];
  let delLength = del.length;

  for (let i = 0; i < str.length; i++) {
    if (str.substr(i, delLength) === del) {
      if (str.substr(0, i).length !== 0) {
        arr.push(str.substr(0, i));
      }
    }
  }
  arr.push(str.substr(0, str.length));

  for (let i = arr.length - 1; i > 0; i--) {
    let startPosition = delLength + arr[i - 1].length;
    arr[i] = arr[i].substr(startPosition);
    if (arr[i].length === 0) {
      arr.splice(i, 1);
    }
  }

  return arr;
}

console.log(stringSplitter('Jake, Jim, Kate, John', ', '))
console.log(stringSplitter('ABCXYZDHFXYTXYZBLA', 'XYZ'))
console.log(stringSplitter('Hello'))
console.log(stringSplitter('TEST1-*--TEST2-*-*--TEST3-**-TEST4', '-*-'))

/* 
Write a simplified version of String.split() function. It should accept a string and a delimiter (default value is ''). 
It should return an array of substrings separated by the given delimiter.
*/