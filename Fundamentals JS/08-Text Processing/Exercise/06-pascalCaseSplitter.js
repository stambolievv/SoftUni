function pascalCaseSplitter(str) {
    let lower = str.toLocaleLowerCase();
    let result = str[0];
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== lower[i]) {
            result += ', ';
        }
        result += str[i];
    }
    console.log(result);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');