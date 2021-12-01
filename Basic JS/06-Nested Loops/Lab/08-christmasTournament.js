function christmasTournament(params) {
    let index = 0;
    let days = Number(params[index]);
    index++;
    let donations = 0;
    let counterWin = 0;
    let counterLose = 0;

    for (let i = 1; i <= days; i++) {
        let command = params[index];
        index++;
        let dayDonations = 0;
        let dayWin = 0;
        let dayLose = 0;

        while (command !== 'Finish') {
            let rate = params[index];
            index++;
            switch (rate) {
                case 'win':
                    dayDonations += 20;
                    counterWin++;
                    dayWin++;
                    break;
                case 'lose':
                    counterLose++;
                    dayLose++;
                    break;
                default:
                    break;
            }
            command = params[index];
            index++;
        }
        if (dayWin > dayLose) {
            dayDonations *= 1.1;
            donations += dayDonations;
        } else {
            donations += dayDonations;
        }
    }
    if (counterWin > counterLose) {
        donations *= 1.2;
        console.log(`You won the tournament! Total raised money: ${donations.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${donations.toFixed(2)}`);
    }
}
christmasTournament(['3', 'darts', 'lose', 'handball', 'lose', 'judo', 'win', 'Finish', 'snooker', 'lose', 'swimming', 'lose', 'squash', 'lose', 'table tennis', 'win', 'Finish', 'volleyball', 'win', 'basketball', 'win', 'Finish']);