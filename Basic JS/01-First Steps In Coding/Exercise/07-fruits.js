function fruits(input) {
    let strawberryPrice = Number(input[0]);
    let bananaInKg = Number(input[1]);
    let orangesInKg = Number(input[2]);
    let raspberryInKg = Number(input[3]);
    let strawberryInKg = Number(input[4]);

    let raspberryPrice = strawberryPrice / 2;
    let orangesPrice = raspberryPrice - (raspberryPrice * 0.4);
    let bananaPrice = raspberryPrice - (raspberryPrice * 0.8);

    let strawberryTotal = strawberryInKg * strawberryPrice;
    let bananaTotal = bananaInKg * bananaPrice;
    let orangesTotal = orangesInKg * orangesPrice;
    let raspberryTotal = raspberryInKg * raspberryPrice;

    let totalPrice = (strawberryTotal + bananaTotal + orangesTotal + raspberryTotal);
    console.log(totalPrice);
}
fruits(['48', '10', '3.3', '6.5', '1.7']);