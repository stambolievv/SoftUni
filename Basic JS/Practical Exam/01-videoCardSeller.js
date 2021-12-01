function videoCardSeller(params) {
    let video = Number(params[0]);
    let adapter = Number(params[1]);
    let electricity = Number(params[2]);
    let profitForDay = Number(params[3]);

    let totalVideo = video * 13;
    let totalAdapter = adapter * 13;
    let totalMoneySpent = totalVideo + totalAdapter + 1000;
    let totalProfit = profitForDay - electricity;
    let totalProfitForDay = 13 * totalProfit;
    let finalPrice = totalMoneySpent / totalProfitForDay;

    console.log(totalMoneySpent);
    console.log(Math.ceil(finalPrice));
}
videoCardSeller(['700', '15', '0.20', '2']);