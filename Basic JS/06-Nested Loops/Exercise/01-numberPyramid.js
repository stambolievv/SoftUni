function numberPyramid(params) {
    let num = Number(params[0]);
    let current = 1;
    let bigger = false;
    let output = '';
    for (let rows = 1; rows <= num; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > num) {
                bigger = true;
                break;
            }
            output += current + ' ';
            current++;
        }
        console.log(output);
        output = '';
        if (bigger) { break; }
    }
}
numberPyramid(['7']);