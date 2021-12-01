function bitcoinMining(arr) {
    const bitcoin = 11949.16;
    const gold = 67.51;
    let amountMoney = 0;
    let amountBitcoin = 0;
    let countDay = 1;
    let purchasedBitcoin = false;
    let firstDay = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        let current = arr[i];

        if (countDay % 3 === 0) {
            current *= 0.7;
        }

        amountMoney += (current * gold);

        while (amountMoney >= bitcoin) {
            amountMoney -= bitcoin;
            amountBitcoin++;
            purchasedBitcoin = true;
            if (firstDay === 0) {
                firstDay = countDay;
            }
        }

        countDay++;
    }

    console.log(`Bought bitcoins: ${amountBitcoin}`);

    if (purchasedBitcoin) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }

    console.log(`Left money: ${amountMoney.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);