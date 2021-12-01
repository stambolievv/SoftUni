function meetings(arr) {
    let meetings = {};

    for (const iterator of arr) {
        let [day, name] = iterator.split(' ');
        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}
meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);