function fuelMoney(distance, passengers, price) {
    let require = (distance / 100) * 7;
    require += passengers * 0.1;
    let total = require * price;
    console.log(`Needed money for that trip is ${total}lv.`);
}
fuelMoney(260, 9, 2.49);