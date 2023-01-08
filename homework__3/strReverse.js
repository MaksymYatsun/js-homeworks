'use strict'

const str = 'Check-this-awesome-sentence';
const arr = str.split('-');
const arrReversed = arr.reverse();
const strReversed = arr.join('-');

console.log(strReversed);

/*
Given a string: Check-this-awesome-sentence reverse the words in it (NOT CHARACTERS): sentence-awesome-this-Check.
*/