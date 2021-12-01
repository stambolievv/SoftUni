function validityChecker(x1, y1, x2, y2) {
    const x1y1_00 = Math.sqrt(((0 - x1) ** 2) + ((0 - y1) ** 2));
    const x2y2_00 = Math.sqrt(((x2 - 0) ** 2) + ((y2 - 0) ** 2));
    const x1y1_x2y2 = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

    if (x1y1_00 % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (x2y2_00 % 1 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (x1y1_x2y2 % 1 === 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
validityChecker(2, 1, 1, 1);