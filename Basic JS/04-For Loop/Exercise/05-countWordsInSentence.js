function countWordsInSentence(params) {
    let sentence = params[0];
    let buffer = 0;
    for (let i = 0; i <= sentence.length; i++) {
        if (sentence[i] === ' ') {
            buffer++;
        }
    }
    if (buffer > 9) {
        console.log(`The message is too long to be send! Has ${buffer + 1} words.`);
    } else {
        console.log('The message was send successfully!');
    }
}
countWordsInSentence(['This message has exactly eleven words. One more as it\'s allowed!']);