function partyTime(arr) {
    let vip = [];
    let regular = [];
    let reservation = arr.shift();
    while (reservation !== 'PARTY') {
        if (isNaN(Number(reservation.charAt(0)))) {
            regular.push(reservation);
        } else {
            vip.push(reservation);
        }
        reservation = arr.shift();
    }
    for (const iterator of arr) {
        if (vip.indexOf(iterator) >= 0) {
            vip.splice(vip.indexOf(iterator), 1);
        }
        if (regular.indexOf(iterator) >= 0) {
            regular.splice(regular.indexOf(iterator), 1);
        }
    }
    console.log(vip.length + regular.length);
    console.log(vip.join('\n'));
    console.log(regular.join('\n'));
}
partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);