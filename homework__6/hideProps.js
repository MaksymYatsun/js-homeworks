'use strict'

function hideProps(obj, arr) {
  const result = {};

  for (const prop in obj) {
    let listed = false;

    for (const value of arr) {
      if (value === prop) {
        listed = true;
      }
    }

    if (listed) {
      continue;
    }

    result[prop] = obj[prop];
  }

  return result;
}


console.log(hideProps({
  x: 1,
  y: 2,
  z: 3,
  a: 'test',
  b: true,
  v: [],
}, ['y', 'v', 'z']));

//1. Given an object and an array of properties, return a new object that won't contain provided properties.
//{ x: 1, a: 'test', b: true }