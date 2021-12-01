function cinemaTickets(params) {
    let index = 0;
    let command = params[index++];

    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    while (command !== 'Finish') {
        let name = command;
        let freeSpace = Number(params[index++]);
        let type = params[index++];
        let tempTickets = 0;
        while (type !== 'End') {
            switch (type) {
                case 'standard':
                    standardTickets++;
                    totalTickets++;
                    break;
                case 'student':
                    studentTickets++;
                    totalTickets++;
                    break;
                case 'kid':
                    kidTickets++;
                    totalTickets++;
                    break;
                default:
                    break;
            }
            tempTickets++;
            if (freeSpace <= tempTickets) { break; }
            type = params[index++];
        }
        console.log(`${name} - ${(tempTickets / freeSpace * 100).toFixed(2)}% full.`);
        command = params[index++];
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(['Taxi', '10', 'standard', 'kid', 'student', 'student', 'standard', 'standard', 'End', 'Scary Movie', '6', 'student', 'student', 'student', 'student', 'student', 'student', 'Finish']);