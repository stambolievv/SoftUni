function hardWord(arr) {
    let sentence = arr.shift().split(' ');
    let words = arr.shift();
    let result = '';

    for (const currentWord of sentence) {
        if (currentWord.includes('_')) {
            for (const word of words) {
                if (currentWord.slice(-1) !== '_') {
                    console.log('yes');
                    const newWord = currentWord.slice(-1);
                    if (newWord.length == currentWord.length) {
                        result += `${newWord} `;
                    }
                } else {
                    if (word.length == currentWord.length) {
                        result += `${word} `;
                    }
                }
            }
        }
        else {
            result += `${currentWord} `;
        }
    }
    console.log(result);
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);