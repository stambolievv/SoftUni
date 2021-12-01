function catalogue(arr) {
    let catalogue = [];
    for (const item of arr) {
        let [name, price] = item.split(' : ');
        catalogue.push({ name, price });
    }

    catalogue.sort((a, b) => a.name.localeCompare(b.name));

    let currentLetter = '';
    for (const product of catalogue) {
        if (product.name[0].toUpperCase() === currentLetter) {
            console.log(`  ${product.name}: ${product.price}`);
        } else {
            currentLetter = product.name[0].toUpperCase();
            console.log(currentLetter);
            console.log(`  ${product.name}: ${product.price}`);

        }
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);