'use strict'

function arrPaginator(arr, value) {
  const paginatedArr = [];
  let tmpArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (tmpArr.length < value) {
      tmpArr.push(arr[i])
    }

    if (tmpArr.length === value) {
      paginatedArr.push(tmpArr)
      tmpArr = [];
    }
  }

  return paginatedArr;
}

console.log(arrPaginator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(arrPaginator(['Bob', 'Billy', 'Kevin', 'Shawn', 'Jake', 'Jeff', "Amy"], 2));

/*
3. Write a function that accepts an array of values and a number. 
The function should divide the given array into multiple smaller ones with the length given as a second argument.
*/