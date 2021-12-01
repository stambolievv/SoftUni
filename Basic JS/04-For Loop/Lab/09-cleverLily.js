function cleverLily([arg1, arg2, arg3]) {
    let age = Number(arg1);
    let washingM = Number(arg2);
    let toyPrice = Number(arg3);

    let sumOfToys = 0;
    let sumOfMoney = 0;
    let currentMoney = 10;
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            sumOfMoney += currentMoney;
            sumOfMoney -= 1;
            currentMoney += 10;
        } else {
            sumOfToys++;
        }
    }
    sumOfMoney += sumOfToys * toyPrice;
    if (sumOfMoney >= washingM) {
        console.log(`Yes! ${(sumOfMoney - washingM).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingM - sumOfMoney).toFixed(2)}`);
    }
}
cleverLily(['21', '1570.98', '3']);