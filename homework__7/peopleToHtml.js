'use strict'

const people = [
  {
    id: 1,
    name: 'Kate',
    age: 22,
    country: 'USA',
  },
  {
    id: 2,
    name: 'Bruce',
    age: 9,
    country: 'Denmark',
  },
  {
    id: 3,
    name: 'Ian',
    age: 16,
    country: 'Croatia',
  },
  {
    id: 4,
    name: 'John',
    age: 48,
    country: 'Portugal',
  },
  {
    id: 5,
    name: 'Stephen',
    age: 31,
    country: 'United Kingdom'
  }
];

function personToHTML(person) {
  return `<div>
            <h2>${person.name}</h2>
            <p>Country:${person.country}</p>
            <p>Age: ${person.age}</p>
          </div>`;
}

function peopleToHTML(people) {
  return people.map(personToHTML);
}

console.log(peopleToHTML(people));