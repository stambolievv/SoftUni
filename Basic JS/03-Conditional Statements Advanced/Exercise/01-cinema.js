function cinema(params) {
    let project = params[0];
    let row = Number(params[1]);
    let col = Number(params[2]);
    let price;

    switch (project) {
        case 'Premiere':
            price = row * col * 12.0;
            break;
        case 'Normal':
            price = row * col * 7.5;
            break;
        case 'Discount':
            price = row * col * 5.0;
            break;
        default: break;
    }
    console.log(`${price.toFixed(2)} leva`);
}
cinema(['Premiere', '10', '12']);