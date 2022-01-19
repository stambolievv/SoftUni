function lowestPricesInCities(arr) {
    const catalogue = {};
    for (const line of arr) {
        const [town, item, price] = line.split(' | ');

        if (!catalogue[item]) {
            catalogue[item] = {};
        }
        catalogue[item][town] = Number(price);
    }
    for (const prod in catalogue) {
        const sorted = Object.entries(catalogue[prod]).sort((a, b) => a[1] - b[1]);
        console.log(`${prod} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}
lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);