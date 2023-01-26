function removeAdjacentCharacters(str, result = '', i = 0) {
  if (i < str.length - 1) {
    if (str[i] !== str[i + 1]) result += str[i];

    return removeAdjacentCharacters(str, result, i + 1);
  }

  return result += str[i];
}

console.log(removeAdjacentCharacters('AABBBCDDD')) // 'ABCD';
console.log(removeAdjacentCharacters('Hello World!')) // 'Helo World!';
console.log(removeAdjacentCharacters('ABC')) // 'ABC';

//4. Given a string, remove all DUPLICATED adjacent characters of every character.