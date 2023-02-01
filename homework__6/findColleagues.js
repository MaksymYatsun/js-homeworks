function findColleagues(arr, str, result = []) {
  for (const obj of arr) {
    if (obj.job?.company === str) {
      result.push(obj);
    }

    if (obj.friends) {
      findColleagues(obj.friends, str, result);
    }
  }

  return result;
}

console.log(findColleagues(
  [
    {
      id: 1,
      name: 'John',
      job: {
        title: 'Software Engineer',
        company: 'Microsoft',
      },
    },
    {
      id: 2,
      name: 'Andrew',
      job: {
        title: 'Software Engineer',
        company: 'Google',
      },
    },
    {
      id: 3,
      name: 'John',
      job: null,
    },
    {
      id: 4,
      name: 'Kate',
      job: {
        title: 'Marketing Assistant',
        company: 'Microsoft',
      },
      friends: [
        {
          id: 5,
          name: 'Eric',
          job: {
            title: 'QA Engineer',
            company: 'Amazon',
          },
        },
        {
          id: 6,
          name: 'Stacy',
          job: {
            title: 'Business Development Manager',
            company: 'Microsoft',
          },
        },
      ]
    },
  ],
  'Microsoft'));

// 3. Given an array of different people and a company name, return a new array of people who work in the given company.