function rightPlace(str, char, match) {
    let temp = '';
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] == '_') {
            temp += char;
        } else {
            temp += str[i];
        }
    }

    if (temp === match) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'i', 'String');