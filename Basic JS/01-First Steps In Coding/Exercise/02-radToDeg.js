function radToDeg(input) {
    let radians = Number(input[0]);
    let degree = radians * 180 / Math.PI;
    console.log(degree.toFixed(0));
}
radToDeg(['3.1416']);