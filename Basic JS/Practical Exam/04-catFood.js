function catFood(params) {
    let index = 0;
    let cats = Number(params[index++]);

    let small = 0;
    let big = 0;
    let giant = 0;
    let price = 0;
    for (let i = 0; i < cats; i++) {
        let cats = Number(params[index]);
        if (cats >= 100 && cats < 200) {
            small++;
            price += cats;
        } else if (cats >= 200 && cats < 300) {
            big++;
            price += cats;
        } else if (cats >= 300 && cats < 400) {
            giant++;
            price += cats;
        }
        index++;
    }
    console.log(`Group 1: ${small} cats.`);
    console.log(`Group 2: ${big} cats.`);
    console.log(`Group 3: ${giant} cats.`);
    console.log(`Price for food per day: ${((price / 1000) * 12.45).toFixed(2)} lv.`);
}
catFood(['6', '102', '236', '123', '399', '342', '222']);