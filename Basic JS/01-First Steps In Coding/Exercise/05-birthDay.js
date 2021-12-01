function birthDay(input) {
    let room = Number(input[0]);

    let cake = room * 0.2;
    let drink = cake - (cake * 0.45);
    let clown = room / 3;

    let total = room + cake + drink + clown;
    console.log(total);
}
birthDay(['2250']);