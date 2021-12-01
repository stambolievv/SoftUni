function wordsUppercase(str) {
    const matches = str
        .match(/[\w]+/g)
        .map(word => word.toUpperCase())
        .join(', ');
    console.log(matches);
}
wordsUppercase('Hi, how are you?');