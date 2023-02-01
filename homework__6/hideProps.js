function hideProps(obj, arr) {
  const result = {};

  for (const key in obj) {
    result[key] = obj[key];
  }

  for (const key of arr) {
    delete result[key];
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