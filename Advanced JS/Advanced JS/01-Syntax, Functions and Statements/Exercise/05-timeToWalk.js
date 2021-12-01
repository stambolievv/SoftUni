function timeToWalk(steps, footprintLength, kmh) {
    const kmToUni = (steps * footprintLength) / 1000;
    const brakeTime = Math.trunc(kmToUni / 0.5);
    const totalTime = ((kmToUni / kmh) * 60) + brakeTime;
    let hours = 0;
    let minutes = Math.trunc(totalTime);
    let seconds = Math.round((totalTime % 1) * 60);
    if (minutes >= 60) {
        hours++;
        minutes -= 60;
    }
    if (hours < 10) {
        if (minutes < 10) {
            console.log(`0${hours}:0${minutes}:${seconds}`);
        } else {
            console.log(`0${hours}:${minutes}:${seconds}`);
        }
    } else {
        if (minutes < 10) {
            console.log(`${hours}:0${minutes}:${seconds}`);
        } else {
            console.log(`${hours}:${minutes}:${seconds}`);
        }
    }
}
timeToWalk(4000, 0.60, 5);