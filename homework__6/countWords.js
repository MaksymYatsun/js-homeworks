function countWords(str) {
  const wordsArr = str.toLowerCase().replaceAll('\n', '').replaceAll(',', '').split(' ');
  const wordsObj = {};

  for (const word of wordsArr) {
    if (word.length > 0) {
      wordsObj[word] = wordsObj[word] ? wordsObj[word] + 1 : 1;
    }
  }

  return wordsObj;
}


console.log(countWords(
  `
    When I reminisce ignorance was bliss
    Back in the days where the magic exist
    Never be the same as it was, 'cause the way it was
    Just another day in the maze of a myth
    Had a lot of fun living life on a run
    Never had a chance to pause to get a better glance
    Everything was free and everything was fast
    Never even thought it wouldn't last
    When you got the mind of a man in the middle
    Life is just a big fat riddle, so figure it out
    Always thinking that you know, every little thing there's to know
    But you don't really know, you know
    It's like love, some people get it
    For some it's just a glove that just never fitted
    For me it's just a pain in the ass
    But I'm addicted to the taste of hoping it could last
  `
));

//4.  Given a string, return an object with the following structure [key: word -> value: number of occurrences].