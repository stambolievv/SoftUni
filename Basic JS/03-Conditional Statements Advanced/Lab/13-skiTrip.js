function skiTrip(params) {
    let nights = Number(params[0]) - 1;
    let type = params[1];
    let grade = params[2];
    let result = 0;
    if (nights < 10) {
        switch (type) {
            case 'room for one person':
                result = nights * 18.0;
                break;
            case 'apartment':
                result = nights * 25.0;
                result = result * 0.70;
                break;
            case 'president apartment':
                result = nights * 35.0;
                result = result * 0.90;
                break;
        }
    } else if (nights >= 10 && nights <= 15) {
        switch (type) {
            case 'room for one person':
                result = nights * 18.0;
                break;
            case 'apartment':
                result = nights * 25.0;
                result = result * 0.65;
                break;
            case 'president apartment':
                result = nights * 35.0;
                result = result * 0.85;
                break;
        }
    } else {
        switch (type) {
            case 'room for one person':
                result = nights * 18.0;
                break;
            case 'apartment':
                result = nights * 25.0;
                result = result * 0.50;
                break;
            case 'president apartment':
                result = nights * 35.0;
                result = result * 0.80;
                break;
        }
    }
    if (grade === 'positive') {
        result = result * 1.25;
    } else {
        result = result * 0.90;
    }
    console.log(result.toFixed(2));
}
skiTrip(['30', 'president apartment', 'negative']);