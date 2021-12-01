function ages(age) {
    let result = '';
    switch (age) {
        case (age >= 0 && age <= 2): result = 'baby'; break;
        case (age >= 3 && age <= 13): result = 'child'; break;
        case (age >= 14 && age <= 19): result = 'teenager'; break;
        case (age >= 20 && age <= 65): result = 'adult'; break;
        case (age >= 66): result = 'elder'; break;
        default: result = 'out of bounds'; break;
    }
    console.log(result);
}
