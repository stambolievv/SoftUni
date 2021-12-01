function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let ptc = Number(input[3]);

    let volume = length * width * height;
    let liters = volume * 0.001;
    let rate = ptc * 0.01;
    let realLiters = liters * (1 - rate);
    console.log(realLiters);
}
fishTank(['85', '75', '47', '17']);