let index = 0;
let smallestNum = Number.MAX_VALUE;

function min(arr) {
  if (index < arr.length - 1) {
    if (arr[index] < smallestNum) {
      smallestNum = arr[index];
      index++;

      return min(arr);
    }
    index++;

    return min(arr);
  }

  let result = smallestNum;
  index = 0;
  smallestNum = Number.MAX_VALUE;

  return result;
}

console.log(min([55, 19, 84, 1, 17, 29, 7])); // 1

//3. Given an array of numbers, return the smallest number.