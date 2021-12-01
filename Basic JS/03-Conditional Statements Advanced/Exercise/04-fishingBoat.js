function fishingBoat(params) {
    let budget = Number(params[0]);
    let season = params[1];
    let fishermen = Number(params[2]);
    let boatPrice = 0;

    if (season === 'Spring') {
        boatPrice = 3000;
    }
    else if (season === 'Summer' || season === 'Autumn') {
        boatPrice = 4200;
    }
    else if (season === 'Winter') {
        boatPrice = 2600;
    }

    if (fishermen <= 6) {
        boatPrice = boatPrice * 0.90;
    }
    else if (fishermen > 7 && fishermen <= 11) {
        boatPrice = boatPrice * 0.85;
    }
    else {
        boatPrice = boatPrice * 0.75;
    }

    if (fishermen % 2 === 0 && season !== 'Autumn') {
        boatPrice = boatPrice * 0.95;
    } else {
        boatPrice = boatPrice;
    }

    if (budget >= boatPrice) {
        console.log(`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`);
    }
}
fishingBoat(['3600', 'Autumn', '6']);