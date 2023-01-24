'use strict'

function rgbToGrayscale(rgbArr) {
  const grayscaleArr = [];

  for (let i = 0; i < rgbArr.length; i++) {
    const r = rgbArr[i][0] * 0.3;
    const g = rgbArr[i][1] * 0.59;
    const b = rgbArr[i][2] * 0.11;
    grayscaleArr.push(Math.round(r + g + b));
  }

  return grayscaleArr;
}

console.log(rgbToGrayscale([[171, 15, 0], [182, 53, 144], [14, 99, 150]]))

/*
2.  Given an array of arrays where each sub-array represents an rgb value, return an array of the same colors converted to grayscale (black and white). 
You can use a Luminosity Method to convert a single rgb value to grayscale.
*/