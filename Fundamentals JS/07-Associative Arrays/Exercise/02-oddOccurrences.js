function oddOccurrences(input) {
    input = input.toLowerCase().split(' ');

    let count = {};
    for (const iterator of input) {
        if (!Object.keys(count).includes(iterator)) {
            count[iterator] = 0;
        }
        count[iterator]++;
    }

    let result = '';
    for (const [lang, times] of Object.entries(count)) {
        if (times % 2 !== 0) {
            result += `${lang} `;
        }
    }

    console.log(result);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');