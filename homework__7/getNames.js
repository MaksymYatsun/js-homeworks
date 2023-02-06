'use strict'

const peoples = [
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
  return arr.map(function (person) {
    return person.name;
  }).join(', ');
}

console.log(getNames(peoples));