function journey(params) {
    let budget = Number(params[0]);
    let season = params[1];
    let price;

    if (budget <= 100) {
        if (season === 'summer') {
            price = budget * 0.3;
            console.log('Somewhere in Bulgaria');
            console.log(`Camp - ${(price.toFixed(2))}`);
        } else {
            price = budget * 0.7;
            console.log('Somewhere in Bulgaria');
            console.log(`Hotel - ${(price.toFixed(2))}`);
        }
    } else if (budget <= 1000) {
        if (season === 'summer') {
            price = budget * 0.4;
            console.log('Somewhere in Balkans');
            console.log(`Camp - ${(price.toFixed(2))}`);
        } else {
            price = budget * 0.8;
            console.log('Somewhere in Balkans');
            console.log(`Hotel - ${(price.toFixed(2))}`);
        }
    } else if (budget > 1000) {
        price = budget * 0.9;
        console.log('Somewhere in Europe');
        console.log(`Hotel - ${(price.toFixed(2))}`);
    }
}
journey(['312', 'summer']);