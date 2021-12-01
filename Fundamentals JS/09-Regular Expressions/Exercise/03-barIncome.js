function barIncome(arr) {
    let pattern = /%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/;
    let line = arr.shift();
    let total = 0;
    while (line !== 'end of shift') {
        let match = pattern.exec(line);
        if (match !== null) {
            let [_, name, product, qty, price] = match;
            qty = Number(qty);
            price = Number(price);
            total += qty * price;
            console.log(`${name}: ${product} - ${(qty * price).toFixed(2)}`);
        }
        line = arr.shift();
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}
barIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4$',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);