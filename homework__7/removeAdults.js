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
]

function removeAdults(arr) {
  return arr.filter(function (person) {
    return person.age < 18;
  })
}

console.log(removeAdults(peoples))


// 3. Given an array people, get rid of all adults (>= 18 yrs old).