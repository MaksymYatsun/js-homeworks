let tmpStr = '';
let index = 0;

function removeAdjacentCharacters(str) {
  if (index < str.length - 1) {
    if (str[index] !== str[index + 1]) {
      tmpStr += str[index];
      index++;

      return removeAdjacentCharacters(str);
    }
    index++;

    return removeAdjacentCharacters(str);
  }
  tmpStr += str[index];

  let result = tmpStr;

  tmpStr = '';
  index = 0;

  return result;
}

console.log(removeAdjacentCharacters('AABBBCDDD')) // 'ABCD';
console.log(removeAdjacentCharacters('Hello World!')) // 'Helo World!';
console.log(removeAdjacentCharacters('ABC')) // 'ABC';

//4. Given a string, remove all DUPLICATED adjacent characters of every character.