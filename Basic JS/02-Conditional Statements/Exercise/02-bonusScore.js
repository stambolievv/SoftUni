function bonusScore(input) {
    let num = Number(input[0]);
    let score = 0;

    if (num <= 100) {
        score = score + 5;
    } else if (num > 1000) {
        score = score + num * 0.1;
    } else {
        score = score + num * 0.2;
    }

    if (num % 2 === 0) {
        score = score + 1;
    } else if (num % 10 === 5) {
        score = score + 2;
    }

    console.log(score);
    console.log(num + score);
}
bonusScore(['15875']);