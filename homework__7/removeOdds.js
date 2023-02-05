function isNotOdd(num) {
  return num % 2 !== 0;
}

console.log([1, 2, 3, 4, 5, 6, 7, 8].filter(isNotOdd));

// 2.  Given an array of numbers, get rid of all odd numbers.