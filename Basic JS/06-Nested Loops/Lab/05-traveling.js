function traveling(params) {
    let index = 0;
    let inputLine = params[index];
    index++;
    while (inputLine !== 'End') {
        let minBudgetNeeded = Number(params[index]);
        index++;
        let savedSum = 0;
        while (savedSum <= minBudgetNeeded) {
            let currentSavedSum = Number(params[index]);
            index++;
            savedSum += currentSavedSum;
            if (savedSum >= minBudgetNeeded) {
                console.log(`Going to ${inputLine}!`);
                break;
            }
        }
        inputLine = params[index];
        index++;
    }
}
traveling(['Greece', '1000', '200', '200', '300', '100', '150', '240', 'Spain', '1200', '300', '500', '193', '423', 'End']);