function vacation(params) {
    let index = 0;
    let target = Number(params[index]);
    index++;
    let startMoney = Number(params[index]);
    index++;

    let days = 0;
    let spendDays = 0;
    while (true) {
        let command = params[index];
        index++;
        let amount = Number(params[index]);
        if (command === 'spend') {
            spendDays++;
            days++;
            if (amount > startMoney) {
                startMoney = 0;
            } else {
                startMoney -= amount;
            }
        } else if (command === 'save') {
            spendDays = 0;
            days++;
            startMoney += amount;
        }
        if (spendDays === 5) {
            console.log('You can\'t save the money.');
            console.log(days);
            break;
        }
        if (startMoney >= target) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }
        index++;
    }
}
vacation(['2000', '1000', 'spend', '1200', 'save', '2000']);