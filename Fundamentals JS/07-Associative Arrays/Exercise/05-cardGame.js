function cardGame(arr) {
    let symbolsAsPower = { S: 4, H: 3, D: 2, C: 1, J: 11, Q: 12, K: 13, A: 14 };
    let players = {};
    for (const iterator of arr) {
        let [name, cards] = iterator.split(': ');
        cards = cards.split(', ');
        if (players.hasOwnProperty(name)) {
            players[name] = players[name].concat(cards);
        } else {
            players[name] = cards;
        }
        //Get all unique values
        players[name] = players[name].filter((item, pos) => players[name].indexOf(item) == pos);
    }

    for (const [name, points] of Object.entries(players)) {
        points.forEach(cards => {
            let currentCard = cards.split('');
            let type = currentCard.pop();
            let power = currentCard.join('');
            let idx = players[name].indexOf(cards);
            if (Object.keys(symbolsAsPower).includes(power)) {
                players[name][idx] = symbolsAsPower[power] * symbolsAsPower[type];
            } else {
                players[name][idx] = Number(power) * symbolsAsPower[type];
            }
        });
        players[name] = points.reduce((a, b) => { return a + b; }, 0);
    }

    for (const [name, points] of Object.entries(players)) {
        console.log(`${name}: ${points}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);