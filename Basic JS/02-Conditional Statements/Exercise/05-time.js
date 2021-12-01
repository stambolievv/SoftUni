function time(input) {
    let hour = Number(input[0]);
    let min = Number(input[1]) + 15;

    if (min >= 60) {
        hour = hour + 1;
        min = min - 60;
    }

    if (hour >= 24) {
        hour = hour - 24;
    }

    if (min > 9) {
        console.log(`${hour}:${min}`);
    } else {
        console.log(`${hour}:0${min}`);
    }
}
time(['1', '46']);