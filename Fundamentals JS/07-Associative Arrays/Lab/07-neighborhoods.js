function neighborhoods(arr) {
    let listOfNeighborhoods = arr.shift().split(', ');
    let neighborhoods = {};

    listOfNeighborhoods.forEach(street => {
        neighborhoods[street] = [];
    });

    for (const iterator of arr) {
        let [street, person] = iterator.split(' - ');
        if (neighborhoods.hasOwnProperty(street)) {
            neighborhoods[street].push(`--${person}`);
        }
    }

    let sorted = Object.entries(neighborhoods).sort((a, b) => { return b[1].length - a[1].length; });
    for (const [street, person] of sorted) {
        console.log(`${street}: ${person.length}\n${person.join('\n')}`);
    }
}
neighborhoods([
    'Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
]);