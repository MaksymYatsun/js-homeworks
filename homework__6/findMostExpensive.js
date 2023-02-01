function findMostExpensive(arr) {
  let result = arr[0];

  for (const obj of arr) {
    if (obj.price > result.price) result = obj;
  }

  return result;
}

console.log(findMostExpensive(
  [
    {
      id: 1,
      title: 'iPhone 14',
      price: 1500,
    },
    {
      id: 2,
      title: 'AirPods Pro',
      price: 270,
    },
    {
      id: 3,
      title: 'iPad Mini',
      price: 550,
    },
    {
      id: 4,
      title: 'MacBook Pro',
      price: 2500,
    },
    {
      id: 5,
      title: 'Apple Watch Ultra',
      price: 850,
    },
    {
      id: 6,
      title: 'Mac Mini',
      price: 950,
    },
  ]
));

// 2. Given an array of items, find the most expensive one.