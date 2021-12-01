function modernTimesOfHashTag(str) {
    str = str.split(' ');
    for (const currentWord of str) {
        if (currentWord[0] === '#' && currentWord.length > 1) {
            let isValid = false;
            let currentWordArray = currentWord.slice(1).split('');
            currentWordArray.every(char => {
                if ((char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)) {
                    return isValid = true;
                } else {
                    return isValid = false;
                }
            });
            if (isValid) {
                console.log(currentWord.slice(1));
            }
        }
    }
}
modernTimesOfHashTag('Nowadays everyone uses #a#a to tag a #special word in #socialMedia');