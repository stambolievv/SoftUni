function smallShop(params) {
    let product = params[0];
    let town = params[1];
    let quantity = Number(params[2]);
    let result = 0;

    switch (product) {
        case 'coffee':
            switch (town) {
                case 'Sofia': result = quantity * 0.50; break;
                case 'Plovdiv': result = quantity * 0.40; break;
                case 'Varna': result = quantity * 0.45; break;
            }break;
        case 'water':
            switch (town) {
                case 'Sofia': result = quantity * 0.80; break;
                case 'Plovdiv': result = quantity * 0.70; break;
                case 'Varna': result = quantity * 0.70; break;
            }break;
        case 'beer':
            switch (town) {
                case 'Sofia': result = quantity * 1.20; break;
                case 'Plovdiv': result = quantity * 1.15; break;
                case 'Varna': result = quantity * 1.10; break;
            }break;
        case 'sweets':
            switch (town) {
                case 'Sofia': result = quantity * 1.45; break;
                case 'Plovdiv': result = quantity * 1.30; break;
                case 'Varna': result = quantity * 1.35; break;
            }break;
        case 'peanuts':
            switch (town) {
                case 'Sofia': result = quantity * 1.60; break;
                case 'Plovdiv': result = quantity * 1.50; break;
                case 'Varna': result = quantity * 1.55; break;
            }break;
    }
    console.log(result);
}
smallShop(['coffee', 'Varna', '2']);