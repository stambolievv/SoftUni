function dayOfWeek(num) {
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];
    let index = num - 1;
    num > 7 || num < 1 ? console.log('Invalid day!') : console.log(days[index]);
}
dayOfWeek(3);