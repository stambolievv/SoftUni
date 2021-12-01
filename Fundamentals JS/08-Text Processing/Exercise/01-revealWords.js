function revealWords(words, sentence) {
    words = words.split(', ');
    sentence = sentence.split(' ');

    for (const currentWord of words) {
        sentence.forEach((word) => {
            if (word === '*'.repeat(currentWord.length)) {
                sentence[sentence.indexOf(word)] = currentWord;
            }
        });
    }
    console.log(sentence.join(' '));
}
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');