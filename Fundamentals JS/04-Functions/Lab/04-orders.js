function orders(product, quantity) {
    let result = 0;
    switch (product) {
        case 'coffee': result = 1.5 * quantity; break;
        case 'water': result = 1.0 * quantity; break;
        case 'coke': result = 1.4 * quantity; break;
        case 'snacks': result = 2.0 * quantity; break;
        default: break;
    }
    console.log(result.toFixed(2));
}
orders('water', 5);