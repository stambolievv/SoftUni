function pastryShop(params) {
    let cakeType = params[0];
    let purchasedCakes = Number(params[1]);
    let day = Number(params[2]);
    let totalPrice = 0;
    switch (cakeType) {
        case 'Cake':
            if (day <= 15) {
                totalPrice = purchasedCakes * 24;
            } else {
                totalPrice = purchasedCakes * 28.70;
            }
            break;
        case 'Souffle':
            if (day <= 15) {
                totalPrice = purchasedCakes * 6.66;
            } else {
                totalPrice = purchasedCakes * 9.80;
            }
            break;
        case 'Baklava':
            if (day <= 15) {
                totalPrice = purchasedCakes * 12.60;
            } else {
                totalPrice = purchasedCakes * 16.98;
            }
            break;
        default: break;
    }
    if (day <= 22) {
        if (totalPrice >= 100 && totalPrice <= 200) {
            totalPrice *= 0.85;
        } else if (totalPrice > 200) {
            totalPrice *= 0.75;
        }
        if (day <= 15) { totalPrice *= 0.9; }
    }
    console.log(totalPrice.toFixed(2));
}
pastryShop(['Souffle', '20', '24']);