function personalTitles(params) {
    let age = Number(params[0]);
    let gender = params[1];

    if (age >= 16) {
        if (gender == 'm') {
            console.log('Mr.');
        } else {
            console.log('Ms.');
        }
    } else {
        if (gender == 'm') {
            console.log('Master');
        } else {
            console.log('Miss');
        }
    }
}
personalTitles(['17', 'm']);