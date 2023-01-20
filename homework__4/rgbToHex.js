'use strict'

function rgbToHex(r, g, b) {
  const hexArr = [r, g, b];
  let hexStr = '#';

  for (let i = 0; i < hexArr.length; i++) {
    if (hexArr[i] <= 15) {
      hexStr += '0';
    }
    hexStr += hexArr[i].toString(16);
  }

  return hexStr.toUpperCase();
}

console.log(rgbToHex(255, 255, 255)); // rgbToHex(255, 255, 255) === '#FFFFFF';
console.log(rgbToHex(172, 155, 11)); // rgbToHex(172, 155, 11) === '#AC9B0B';
console.log(rgbToHex(0, 203, 15)); // rgbToHex(0, 203, 15) === '#00CB0F';

// 1. Write a function that converts rgb to HEX (should accept 3 numbers and return a string that represents the value in hex).