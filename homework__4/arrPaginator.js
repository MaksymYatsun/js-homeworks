'use strict'

function arrPaginator(arr, value) {
  const paginatedArr = [];

  for (let i = 0; i < arr.length; i += value) {
    paginatedArr.push(arr.slice(i, value + i));
  }

  return paginatedArr;
}

console.log(arrPaginator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(arrPaginator(['Bob', 'Billy', 'Kevin', 'Shawn', 'Jake', 'Jeff', "Amy"], 2));

/*
3. Write a function that accepts an array of values and a number. 
The function should divide the given array into multiple smaller ones with the length given as a second argument.
*/