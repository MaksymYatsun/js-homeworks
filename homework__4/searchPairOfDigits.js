function searchPairOfDigits(arr, value) {

  for (i = 0; i < arr.length; i++) {

    for (j = (i + 1); j < arr.length; j++) {
      if (arr[i] + arr[j] === value) {

        return true;
      }
    }
  }

  return false;
}


console.log(searchPairOfDigits([4, 8, 3, 11, 5, 6], 9));
console.log(searchPairOfDigits([5, 9, 7, 0, 11, 4], 4));
console.log(searchPairOfDigits([3, 9, 4, 6, 0, 7], 8));

// 5. Write a function that accepts an array and a digit. Return boolean whether the array contains 2 digits that add up to the given one.