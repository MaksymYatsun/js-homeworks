function removeAdults(person) {
  return person.age <= 18;
}

console.log([
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
].filter(removeAdults));

// 3. Given an array people, get rid of all adults (>= 18 yrs old).