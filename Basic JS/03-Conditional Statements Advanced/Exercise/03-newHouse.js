function newHouse(params) {
    let type = params[0];
    let num = Number(params[1]);
    let budget = Number(params[2]);
    let result = 0;

    switch (type) {
        case 'Roses':
            result = num * 5.00;
            if (num > 80) { result = result * 0.90; }
            break;
        case 'Dahlias':
            result = num * 3.80;
            if (num > 90) { result = result * 0.85; }
            break;
        case 'Tulips':
            result = num * 2.80;
            if (num > 80) { result = result * 0.85; }
            break;
        case 'Narcissus':
            result = num * 3.00;
            if (num < 120) { result = result * 1.15; }
            break;
        case 'Gladiolus':
            result = num * 2.50;
            if (num < 80) { result = result * 1.20; }
            break;
        default: break;
    }
    if (result > budget) {
        console.log(`Not enough money, you need ${(result - budget).toFixed(2)} leva more.`);
    } else {
        console.log(`Hey, you have a great garden with ${num} ${type} and ${(budget - result).toFixed(2)} leva left.`);
    }
}
newHouse(['Narcissus', '119', '360']);