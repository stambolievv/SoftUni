function sumNumbers(params) {
    let index = 0;
    let num = Number(params[index]);
    index++;

    let sum = 0;
    while (sum < num) {
        let current = Number(params[index]);
        index++;
        sum += current;
    }
    console.log(sum);
}
sumNumbers(['100', '10', '20', '30', '40']);