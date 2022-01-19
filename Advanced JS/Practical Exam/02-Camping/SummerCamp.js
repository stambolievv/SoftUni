class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { 'child': 150, 'student': 300, 'collegian': 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) { throw new Error('Unsuccessful registration at the camp.'); }
        for (const person of this.listOfParticipants) {
            if (person.name == name) { return `The ${name} is already registered at the camp.`; }
        }
        if (money < this.priceForTheCamp[condition]) { return 'The money is not enough to pay the stay at the camp.'; }
        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
    }
    unregisterParticipant(name) {
        const isParticipant = this.listOfParticipants.every(p => p.name != name);
        if (isParticipant) {
            throw new Error(`The ${name} is not registered in the camp.`);
        } else {
            for (const person of this.listOfParticipants) {
                const index = this.listOfParticipants.indexOf(person);
                if (person.name == name) {
                    this.listOfParticipants.splice(index, 1);
                    return `The ${name} removed successfully.`;
                }
            }
        }
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        const player1 = this.listOfParticipants.find(p => p.name == participant1);
        const player2 = this.listOfParticipants.find(p => p.name == participant2);
        if (typeOfGame == 'WaterBalloonFights') {
            if (player1 == undefined || player2 == undefined) { throw new Error('Invalid entered name/s.'); }
            if (player1.condition != player2.condition) { throw new Error('Choose players with equal condition.'); }
            let winner;
            if (player1.power > player2.power) {
                player1.wins++;
                winner = player1.name;
            } else if (player1.power < player2.power) {
                player2.wins++;
                winner = player2.name;
            } else {
                return 'There is no winner.';
            }
            return `The ${winner} is winner in the game ${typeOfGame}.`;
        } else if (typeOfGame == 'Battleship') {
            if (player1 == undefined) { throw new Error('Invalid entered name/s.'); }
            player1.power += 20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
    }
    toString() {
        const result = [];
        const info = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;
        result.push(info);
        const sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        sorted.forEach(p => result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));
        return result.join('\n');
    }
}

// const summerCamp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
// console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 200));
// console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));
// console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));
// console.log(summerCamp.registerParticipant('Leila Wolfe', 'childd', 200));

// const summerCamp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
// console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));
// console.log(summerCamp.unregisterParticipant('Petar'));
// console.log(summerCamp.unregisterParticipant('Petar Petarson'));

// const summerCamp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
// console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));
// console.log(summerCamp.timeToPlay('Battleship', 'Petar Petarson'));
// console.log(summerCamp.registerParticipant('Sara Dickinson', 'child', 200));
// console.log(summerCamp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Sara Dickinson'));
// console.log(summerCamp.registerParticipant('Dimitur Kostov', 'student', 300));
// console.log(summerCamp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Dimitur Kostov'));

const summerCamp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));
console.log(summerCamp.timeToPlay('Battleship', 'Petar Petarson'));
console.log(summerCamp.registerParticipant('Sara Dickinson', 'child', 200));
// console.log(summerCamp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Sara Dickinson'));
console.log(summerCamp.registerParticipant('Dimitur Kostov', 'student', 300));
console.log(summerCamp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Dimitur Kostov'));

console.log(summerCamp.toString());
