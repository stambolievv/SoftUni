function vacation(people, type, week) {
    let price;
    if (type === 'Students') {
        if (week === 'Friday') {
            price = 8.45 * people;
        } else if (week === 'Saturday') {
            price = 9.80 * people;
        } else if (week === 'Sunday') {
            price = 10.46 * people;
        }
        if (people >= 30) {
            price *= 0.85;
        }
    } else if (type === 'Business') {
        if (people >= 100) { 
            people -= 10; 
        }
        if (week === 'Friday') {
            price = 10.90 * people;
        } else if (week === 'Saturday') {
            price = 15.60 * people;
        } else if (week === 'Sunday') {
            price = 16.00 * people;
        }
    } else if (type === 'Regular') {
        if (week === 'Friday') {
            price = 15.00 * people;
        } else if (week === 'Saturday') {
            price = 20.00 * people;
        } else if (week === 'Sunday') {
            price = 22.50 * people;
        }
        if (people >= 10 && people <= 20) {
            price *= 0.95;
        }
    }
    console.log('Total price: ' + price.toFixed(2));
}
vacation(30, 'Students', 'Sunday');
