function nationalCourt(arr) {
    let [firstEmployee, secondEmployee, thirdEmployee, peopleCount] = arr.map(Number);
    let hour = 0;
    while (peopleCount > 0) {
        hour++;
        if (hour % 4 !== 0) {
            peopleCount -= (firstEmployee + secondEmployee + thirdEmployee);
        }
    }
    console.log(`Time needed: ${hour}h.`);
}
nationalCourt(['5', '6', '4', '20']);
// nationalCourt(['1', '2', '3', '45']);
// nationalCourt(['2', '3', '5', '40']);