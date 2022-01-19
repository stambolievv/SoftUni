function circleArea(r) {
    if (typeof (r) != 'number') {
        return console.log(`We can not calculate the circle area, because we receive a ${typeof (r)}.`);
    }
    console.log((r ** 2 * Math.PI).toFixed(2));
}
circleArea(5);