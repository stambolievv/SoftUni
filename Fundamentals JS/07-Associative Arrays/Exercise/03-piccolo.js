function piccolo(arr) {
    let cars = [];
    for (const iterator of arr) {
        let [direction, carNumber] = iterator.split(', ');
        if (direction === 'IN') {
            !cars.includes(carNumber) ? cars.push(carNumber) : null;
        } else if (direction === 'OUT') {
            cars.includes(carNumber) ? cars.splice(cars.indexOf(carNumber), 1) : null;
        }
    }
    cars = cars.sort((a, b) => { return a.localeCompare(b); });
    cars.length > 0 ? console.log(cars.join('\n')) : console.log('Parking Lot is Empty');
}
piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);