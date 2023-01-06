const arr1 = [15, 45, 84, 32, 99];
const arr2 = [16, 81, 13, 24, 500];
const arrLength = (arr1.length) === (arr2.length);
const arrBiggerNums = [];

if (arrLength) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] < arr2[i]) {
      arrBiggerNums.push(arr2[i])
    } else if (arr1[i] > arr2[i]) {
      arrBiggerNums.push(arr1[i])
    }
  }
  console.log(arrBiggerNums)
} else {
  console.log('Arrays length is different')
}

/* 
Given two arrays of the same length:
const arr1 = [15, 45, 84, 32, 99];
const arr2 = [16, 81, 13, 24, 500];
Compare each number from arr1 with a corresponding (e.g. the one with the same index) number from arr2 and then create an array of bigger numbers:
[16, 81, 84, 32, 500];
*/