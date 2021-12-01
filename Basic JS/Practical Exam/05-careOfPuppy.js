function careOfPuppy(params) {
    let index = 0;
    let food = Number(params[index++]) * 1000;
    let command = params[index++];
    let totalFood = 0;
    while (command != 'Adopted') {
        totalFood += Number(command);
        command = params[index++];
    }

    if ((food - totalFood) >= 0) {
        console.log(`Food is enough! Leftovers: ${food - totalFood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${totalFood - food} grams more.`);
    }
}
careOfPuppy(['4', '130', '345', '400', '180', '230', '120', 'Adopted']);
