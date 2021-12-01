function hotelRoom(params) {
    let month = params[0];
    let nights = Number(params[1]);
    let studio = 0;
    let apartment = 0;

    switch (month) {
        case 'May':
            studio = 50 * nights;
            apartment = 65 * nights;
            if (nights > 7 && nights <= 14) {
                studio = studio * 0.95;
            } else if (nights > 14) {
                studio = studio * 0.70;
            }
            break;
        case 'June':
            studio = 75.20 * nights;
            apartment = 68.70 * nights;
            if (nights > 14) {
                studio = studio * 0.80;
            }
            break;
        case 'July':
            studio = 76 * nights;
            apartment = 77 * nights;
            break;
        case 'August':
            studio = 76 * nights;
            apartment = 77 * nights;
            break;
        case 'September':
            studio = 75.20 * nights;
            apartment = 68.70 * nights;
            if (nights > 14) {
                studio = studio * 0.80;
            }
            break;
        case 'October':
            studio = 50 * nights;
            apartment = 65 * nights;
            if (nights > 7 && nights <= 14) {
                studio = studio * 0.95;
            } else if (nights > 14) {
                studio = studio * 0.70;
            }
            break;
        default: break;
    }

    if (nights > 14) { apartment = apartment * 0.90; }
    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
hotelRoom(['August', '20']);