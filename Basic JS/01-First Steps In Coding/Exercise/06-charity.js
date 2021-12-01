function charity(input) {
    let days = Number(input[0]);
    let cookers = Number(input[1]);
    let cakes = Number(input[2]);
    let waffles = Number(input[3]);
    let pancakes = Number(input[4]);

    let cakesPrice = 45;
    let wafflePrice = 5.8;
    let pancakesPrice = 3.2;

    let totalOneDay = ((cakes * cakesPrice) + (waffles * wafflePrice) + (pancakes * pancakesPrice)) * cookers;
    let totalAllDays = totalOneDay * days;
    let resources = totalAllDays - (totalAllDays / 8);

    console.log(resources);
}
charity(['23', '8', '14', '30', '16']);