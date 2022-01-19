function juiceFlavors(juices) {
    const bottles = {};
    const fullBottles = {};
    for (const juice of juices) {
        const [type, quantity] = juice.split(' => ');
        if (!bottles.hasOwnProperty(type)) { bottles[type] = 0; }
        bottles[type] += Number(quantity);

        if (bottles[type] >= 1000) {
            const oneBottle = Math.trunc(bottles[type] / 1000);
            if (!fullBottles.hasOwnProperty(type)) {
                Object.assign(fullBottles, { [type]: oneBottle });
            } else {
                fullBottles[type] += oneBottle;
            }

            bottles[type] -= oneBottle * 1000;
        }
    }
    Object.entries(fullBottles).forEach(([name, quantity]) => console.log(`${name} => ${quantity}`));
}
juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);