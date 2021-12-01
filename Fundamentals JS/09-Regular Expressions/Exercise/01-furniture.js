function furniture(arr) {
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/;
    let total = 0;
    let furnitures = [];
    for (const iterator of arr) {
        if (iterator === 'Purchase') {
            console.log('Bought furniture:');
            furnitures.length > 0 ? console.log(furnitures.join('\n')) : null;
            console.log(`Total money spend: ${total.toFixed(2)}`);
            return;
        }
        let match = pattern.exec(iterator);
        if (match !== null) {
            let { name, price, qty } = match.groups;
            price = Number(price);
            qty = Number(qty);
            total += price * qty;
            furnitures.push(name);
        }
    }
}
furniture(['>>Sofia<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);