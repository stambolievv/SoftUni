function pyramidOfKingDjoser(base, increment) {
    let step = 1;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    for (base; base > 0; base -= 2) {
        if (base < 3) {
            gold += (base * base) * increment;
            break;
        } else {
            stone += ((base - 2) * (base - 2)) * increment;
        }

        if (step % 5 === 0) {
            lapis += ((base - 1) * 4) * increment;
        } else {
            marble += ((base - 1) * 4) * increment;
        }

        step++;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(step * increment)}`);
}
pyramidOfKingDjoser(11, 0.75);