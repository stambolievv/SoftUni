function volleyball(params) {
    let typeOfYear = params[0];
    let holydays = Number(params[1]);
    let weekends = Number(params[2]);

    let weekendsPerYear = 48;
    let weekendsSofia = weekendsPerYear - weekends;
    let gamesInSofia = weekendsSofia * (3 / 4);
    let gamesOnHolydays = holydays * (2 / 3);
    let allPlayedGames = gamesInSofia + weekends + gamesOnHolydays;

    if (typeOfYear === 'leap') { allPlayedGames = allPlayedGames * 1.15; }
    console.log(Math.trunc(allPlayedGames));
}
volleyball(['leap', '5', '2']);