function building(params) {
    let x = Number(params[0]);
    let y = Number(params[1]);

    for (let i = x; i > 0; i--) {
        let buf = '';
        for (let j = 0; j < y; j++) {
            if (i == x) {
                buf += 'L' + i + j + ' ';
            } else if (i % 2 === 0) {
                buf += 'O' + i + j + ' ';
            } else {
                buf += 'A' + i + j + ' ';
            }
        }
        console.log(buf);
    }
}
building(['9', '4']);