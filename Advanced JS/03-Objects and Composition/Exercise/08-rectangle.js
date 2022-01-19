function rectangle(width, height, color) {
    const rectObj = {
        width,
        height,
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea() { return width * height; }
    };
    return rectObj;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());