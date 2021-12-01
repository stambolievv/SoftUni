function petShop(input) {
    let dogs = Number(input[0]);
    let otherAnimals = Number(input[1]);
    let finalSum = (dogs * 2.5) + (otherAnimals * 4);
    console.log(finalSum);
}
petShop(['5', '4']);