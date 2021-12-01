function walking(params) {
    let steps = 0;
    let stepsGoal = 10000;
    let goHome = params[params.length - 2];
    if (goHome === 'Going home') {
        let i = 0;
        while (i < params.length - 2) {
            let current = Number(params[i]);
            steps += current;
            i++;
        }
        steps += Number(params[params.length - 1]);
    } else {
        let i = 0;
        while (i < params.length) {
            let current = Number(params[i]);
            steps += current;
            i++;
        }
    }


    if (steps > stepsGoal) {
        console.log('Goal reached! Good job!');
        console.log(`${steps - stepsGoal} steps over the goal!`);
    } else {
        console.log(`${stepsGoal - steps} more steps to reach goal.`);
    }
}
walking(['1000', '1500', '2000', '6500']);