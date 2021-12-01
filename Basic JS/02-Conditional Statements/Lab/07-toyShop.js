function toyShop(input) {
    let vacationPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let toysCount = puzzles + dolls + bears + minions + trucks;
    let totalPrice = puzzles * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;

    if (toysCount >= 50) {
        totalPrice = totalPrice * 0.75;
    }

    totalPrice = totalPrice * 0.9;

    if (totalPrice >= vacationPrice) {
        console.log(`Yes! ${(totalPrice - vacationPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(Math.abs(totalPrice - vacationPrice).toFixed(2))} lv needed.`);
    }
}
toyShop(['320', '8', '2', '5', '5', '1']);