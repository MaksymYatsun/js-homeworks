function min(arr, n = arr.length, result = arr[0]) {
  n--;

  if (arr[n] < result) {
    result = arr[n];
  }

  if (n > 0) {
    return min(arr, n, result)
  }

  return result;
}

console.log(min([2, 55, 19, 84, 15, 17, 29, 7])); // 1

//3. Given an array of numbers, return the smallest number.