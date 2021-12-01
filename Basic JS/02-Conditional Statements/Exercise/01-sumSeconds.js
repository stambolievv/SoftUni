function sumSeconds(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    let total = first + second + third;
    let min = Math.floor(total / 60);
    let sec = total % 60;

    if (sec < 10) {
        console.log(`${min}:0${sec}`);
    } else {
        console.log(`${min}:${sec}`);
    }
}
sumSeconds(['35', '45', '44']);
