function processors(params) {
    let goal = Number(params[0]);
    let employees = Number(params[1]);
    let days = Number(params[2]);

    let workHours = employees * days * 8;
    let processorsMade = Math.floor(workHours / 3);

    if (goal > processorsMade) {
        console.log(`Losses: -> ${((goal - processorsMade) * 110.10).toFixed(2)} BGN`);
    } else {
        console.log(`Profit: -> ${((processorsMade - goal) * 110.10).toFixed(2)} BGN`);
    }
}
processors(['150', '7', '18']);