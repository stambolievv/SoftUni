function godzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let statist = Number(input[1]);
    let dressPrice = Number(input[2]);
    let totalDress = statist * dressPrice;
    let decor = movieBudget * 0.1;

    if (statist > 150) {
        totalDress = totalDress * 0.9;
    }

    let total = decor + totalDress;

    if (total > movieBudget) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${(total - movieBudget).toFixed(2)} leva more.`);
    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(movieBudget - total).toFixed(2)} leva left.`);
    }
}
godzillaVsKong(['9587.88', '222', '55.68']);