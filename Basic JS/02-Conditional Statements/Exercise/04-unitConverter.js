function unitConverter(input) {
    let num = Number(input[0]);
    let type = input[1];
    let result = input[2];

    if (type === 'mm') {
        num = num / 1000;
    } else if (type === 'cm') {
        num = num / 100;
    } else {
        num = num;
    }

    if (result === 'm') {
        console.log(num.toFixed(3));
    } else if (result === 'cm') {
        console.log((num * 100).toFixed(3));
    } else if (result === 'mm') {
        console.log((num * 1000).toFixed(3));
    }
}
unitConverter(['45', 'cm', 'mm']);