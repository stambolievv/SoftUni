function fruit(name, weight, money) {
    const moneyNeeded = (weight / 1000 * money).toFixed(2);
    const weightInKilos = (weight / 1000).toFixed(2);
    console.log(`I need $${moneyNeeded} to buy ${weightInKilos} kilograms ${name}.`);
}
fruit('orange', 2500, 1.80);