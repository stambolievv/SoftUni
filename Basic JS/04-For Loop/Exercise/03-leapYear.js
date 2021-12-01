function leapYear(params) {
    let firstYear = Number(params[0]);
    let lastYear = Number(params[1]);
    for (let i = firstYear; i <= lastYear; i++) {
        if (i % 4 === 0) {
            console.log(i);
        }
    }
}
leapYear(['1908', '1919']);