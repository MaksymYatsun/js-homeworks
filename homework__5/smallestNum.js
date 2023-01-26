function min(arr) {
  if (arr.length === 1) return arr[0];

  return Math.min(arr.pop(), min(arr));
}

console.log(min([55, 19, 84, 15, 1, 17, 29, 7])); // 1

//3. Given an array of numbers, return the smallest number.