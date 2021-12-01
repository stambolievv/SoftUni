function destinationMapper(str) {
    let pattern = /(=|\/)([A-Z][A-Za-z]{2,})(\1)/g;
    let result = [];
    let match = str.match(pattern);
    if (match !== null) {
        match.forEach(word => { result.push(word.slice(1, -1)); });
    }
    console.log('Destinations: ' + result.join(', '));
    console.log('Travel Points: ' + result.join('').length);
}
destinationMapper('ThisIs some InvalidInput');