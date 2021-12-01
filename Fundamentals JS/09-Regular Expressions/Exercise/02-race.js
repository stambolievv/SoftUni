function race(arr) {
    let namePattern = /[A-Za-z]/g;
    let numPattern = /\d/g;

    let racersName = arr.shift().split(', ');
    let racers = {};
    for (const name of racersName) {
        racers[name] = 0;
    }

    let line = arr.shift();
    while (line !== 'end of race') {
        let letters = line.match(namePattern);
        let digits = line.match(numPattern);
        let name = letters.join('');
        let distance = digits.map(Number).reduce((a, b) => a + b, 0);
        if (racers[name] !== undefined) {
            racers[name] += distance;
        }
        line = arr.shift();
    }
    let result = Object.entries(racers).sort((a, b) => b[1] - a[1]).slice(0, 3);
    let suffixes = { '0': 'st', '1': 'nd', '2': 'rd' };
    for (let i = 0; i < result.length; i++) {
        console.log(`${i + 1}${suffixes[i]} place: ${result[i][0]}`);
    }
}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&amp;6',
    'end of race'
]);