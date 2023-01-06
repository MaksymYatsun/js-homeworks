'use strict'

const words = ['car', 'Ann', 'text', 'Ace', 'chunk'];
const capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  if (words[i][0] === words[i][0].toUpperCase()) {
    capitalizedWords.push(words[i]);
  }
};

console.log(capitalizedWords);

/* 
Given an array of words: ['car', 'Ann', 'Speed', 'text', 'Ace', 'chunk']. 
Create a new array that will only contain capitalized words from the first one (Ann, Speed, Ace etc).
*/