'use strict'

function validateCard2(cardNum) {
  const cardArr = cardNum.split('');
  const checkDigit = parseInt(cardArr.pop());
  let cardDigitSum = 0;

  for (let i = 0; i < cardArr.length; i++) {
    cardArr[i] = parseInt(cardArr[i]);
    if (i % 2 === 0) {
      cardArr[i] *= 2;
    }
  }

  for (let i = 0; i < cardArr.length; i++) {
    if (cardArr[i] >= 10) {
      cardArr[i] -= 9;
    }
    cardDigitSum += cardArr[i];
  }

  return (cardDigitSum + checkDigit) % 10 === 0;
}

console.log(validateCard2('4441114414052504')) // RealCard
console.log(validateCard2('4149609014545778')) // RealCard
console.log(validateCard2('8881147414052364')) // FakeCard

// 1 .Write a function that takes a credit card number (string) and returns boolean whether the number is valid. Use the Lunh algorithm to validate the number.