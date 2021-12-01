function countStringOccurrences(sentence, word) {
    console.log(sentence.split(' ').filter(x => x === word).length);

    let sentenceArr = sentence.split(' ');
    let count = 0;
    for (const iterator of sentenceArr) {
        if (iterator == word) {
            count++;
        }
    }
    console.log(count);
}
countStringOccurrences('This is a word and it also is a sentence', 'is');