function accountBalance(params) {
    let total = 0;

    let index = 0;
    let command = params[index];
    index++;
    while (command !== 'NoMoreMoney') {
        let num = Number(command);
        if (num < 0) {
            console.log('Invalid operation!');
            break;
        }
        total += num;
        console.log(`Increase: ${num.toFixed(2)}`);

        command = params[index];
        index++;
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(['5.51', '69.42', '100', 'NoMoreMoney']);