function censoredWords(sentence, word) {
    console.log(sentence.split(word).join('*'.repeat(word.length)));
}
censoredWords('A small sentence with some words', 'small');