function areaOfFigures(input) {
    let type = input[0];
    let area;
    if (type === 'square') {
        let numA = Number(input[1]);
        area = numA * numA;
    } else if (type === 'rectangle') {
        let numA = Number(input[1]);
        let numB = Number(input[2]);
        area = numA * numB;
    } else if (type === 'circle') {
        let numA = Number(input[1]);
        area = Math.PI * numA * numA;
    } else {
        let numA = Number(input[1]);
        let numB = Number(input[2]);
        area = numA * numB / 2;
    }
    console.log(area.toFixed(3));
}
areaOfFigures(['triangle', '4.5', '20']);