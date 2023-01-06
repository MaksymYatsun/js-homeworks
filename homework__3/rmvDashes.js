'use strict'

const str = 'Hello - new - world - hey';
const arr = str.split('-');
const arrTmp = [];

for (let i = 0; i < arr.length; i++) {
  arrTmp.push(arr[i].trim());
}

const strTrimmed = arrTmp.join(' ')

console.log(strTrimmed)

/*
Given a string Hello - new - world - hey remove all dashes in it: Hello new world hey.
*/