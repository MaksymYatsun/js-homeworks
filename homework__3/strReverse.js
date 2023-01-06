'use strict'

const str = 'Check-this-awesome-sentence';
const transformedStr = str.replace(/-/g, ', '); //replaceAll throwing an error in node(works fine in browser)
const arr = transformedStr.split(', ');
const arrReversed = arr.reverse();
const strReversed = arr.join('-');

console.log(strReversed);

/*
Given a string: Check-this-awesome-sentence reverse the words in it (NOT CHARACTERS): sentence-awesome-this-Check.
*/