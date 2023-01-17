'use strict'

function filterByDomain(arr, domain) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].endsWith(domain)) {
      result.push(arr[i])
    }
  }

  return result
}

console.log(filterByDomain(['steve@yahoo.com', 'jack@google.com', 'kate@mailbox.com', 'luke@google.com'], "@google.com"))

// 3. Write a function that accepts an array of emails and a domain name. Return a new array containing emails with the given domain name.