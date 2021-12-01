function goldMine(params) {
    let index = 0;
    let locations = Number(params[index]);
    index++;
    for (let i = 0; i < locations; i++) {
        let sumExtraction = Number(params[index++]);
        let days = Number(params[index++]);
        let total = 0;
        for (let j = 0; j < days; j++) {
            let extraction = Number(params[index]);
            total += extraction;
            index++;
        }
        let average = total / days;

        if (average >= sumExtraction) {
            console.log(`Good job! Average gold per day: ${average.toFixed(2)}.`);
        } else {
            console.log(`You need ${(sumExtraction - average).toFixed(2)} gold.`);
        }
    }
}
goldMine(['2', '10', '3', '10', '10', '11', '20', '2', '20', '10']);


