function cardValidation(cardNum) {
  let cardArr = cardNum.toString().split('').map(Number);
  let checkDigit = cardArr[cardArr.length - 1];
  let cardSum = 0;
  cardArr.pop();
  for (i = 0; i < cardArr.length; i++) {
    if (i % 2 === 0) {
      cardArr[i] *= 2;
      if (cardArr[i] >= 10) {
        cardArr[i] -= 9;
      }
    }
    cardSum += cardArr[i]
  }
  if ((checkDigit + cardSum) % 10 === 0) {
    return true
  }
  return false
}

console.log(cardValidation(4441114414052504)) // RealCard
console.log(cardValidation(4149609014545778)) // RealCard
console.log(cardValidation(8881147414052364)) // FakeCard

// 1 .Write a function that takes a credit card number (string) and returns boolean whether the number is valid. Use the Lunh algorithm to validate the number.