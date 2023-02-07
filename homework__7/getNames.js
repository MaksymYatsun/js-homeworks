'use strict'

const people = [
  {
    id: 1,
    name: 'Kate',
    age: 22,
  },
  {
    id: 2,
    name: 'Bruce',
    age: 9,
  },
  {
    id: 3,
    name: 'Ian',
    age: 16,
  },
  {
    id: 4,
    name: 'John',
    age: 48,
  },
  {
    id: 5,
    name: 'Stephen',
    age: 31
  }
];

function getNames(arr) {
  function addNameToString(previous, current) {
    if (previous === '') {
      return previous + current.name;
    }

    return previous + ', ' + current.name;
  }

  return arr.reduce(addNameToString, '');
}

console.log(getNames(people));