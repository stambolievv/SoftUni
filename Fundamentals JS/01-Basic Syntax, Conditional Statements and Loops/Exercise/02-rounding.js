function ages(age) {
    if (age >= 0 && age <= 2) {
        console.log('baby');
    } else if (age >= 3 && age <= 13) {
        console.log('child');
    } else if (age >= 14 && age <= 19) {
        console.log('teenager');
    } else if (age >= 12 && age <= 65) {
        console.log('adult');
    } else if (age > 65) {
        console.log('elder');
    } else {
        console.log('out of bounds');
    }
}
ages(34);

function rounding(num, point) {
    if (point > 15) {
        point = 15;
    }

    const result = num.toFixed(point);
    const rounded = parseFloat(result);
    console.log(rounded);
}
rounding(3.14159265, 2);
