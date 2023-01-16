function validateCard(cardNum) {
  const cardArr = cardNum.split('');
  const checkDigit = parseInt(cardArr.pop());
  let cardSum = 0;

  for (i = 0; i < cardArr.length; i++) {
    cardArr[i] = parseInt(cardArr[i])
    if (i % 2 === 0) {
      cardArr[i] *= 2;
      if (cardArr[i] >= 10) {
        cardArr[i] -= 9;
      }
    }
    cardSum += cardArr[i]
  }

  return 0 === (checkDigit + cardSum) % 10
}

console.log(validateCard('4441114414052504')) // RealCard
console.log(validateCard('4149609014545778')) // RealCard
console.log(validateCard('8881147414052364')) // FakeCard

// 1 .Write a function that takes a credit card number (string) and returns boolean whether the number is valid. Use the Lunh algorithm to validate the number.