function charactersInRange(firstChar, secondChar) {
    let min = firstChar.charCodeAt(0);
    let max = secondChar.charCodeAt(0);

    let result = '';

    if (min > max) {
        let temp = min;
        min = max;
        max = temp;
    }

    for (let i = min + 1; i < max; i++) {
        result += `${String.fromCharCode(i)} `;
    }

    console.log(result);
}
charactersInRange('d', 'a');