function coins(params) {
    let cents = Number(params[0]) * 100;
    let coins = 0;
    while (cents !== 0) {
        if (cents - 200 >= 0) {
            coins++;
            cents -= 200;
        } else if (cents - 100 >= 0) {
            coins++;
            cents -= 100;
        } else if (cents - 50 >= 0) {
            coins++;
            cents -= 50;
        } else if (cents - 20 >= 0) {
            coins++;
            cents -= 20;
        } else if (cents - 10 >= 0) {
            coins++;
            cents -= 10;
        } else if (cents - 5 >= 0) {
            coins++;
            cents -= 5;
        } else if (cents - 2 >= 0) {
            coins++;
            cents -= 2;
        } else if (cents - 1 >= 0) {
            coins++;
            cents -= 1;
        } else {
            break;
        }
    }
    console.log(coins);
}
coins(['0.56']);