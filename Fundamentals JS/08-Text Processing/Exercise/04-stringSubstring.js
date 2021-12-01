function stringSubstring(word, sentence) {
    sentence = sentence.split(' ');
    for (const token of sentence) {
      if (token.toLocaleLowerCase() === word.toLocaleLowerCase()) {
        return console.log(word);
      }
    }
    console.log(`${word} not found!`);
  }
  stringSubstring('javascript', 'JavaScript is the best programming language');