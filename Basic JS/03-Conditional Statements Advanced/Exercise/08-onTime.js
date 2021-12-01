function onTime(params) {
    let hourTest = Number(params[0]);
    let minTest = Number(params[1]);
    let hourArrive = Number(params[2]);
    let minArrive = Number(params[3]);

    let totalTest = (hourTest * 60) + minTest;
    let totalArrive = (hourArrive * 60) + minArrive;
    let total = totalTest - totalArrive;
    let absTotal = Math.abs(total);
    let hours = (absTotal / 60);
    let roundedHours = Math.floor(hours);
    let minutes = (hours - roundedHours) * 60;
    let roundedMinutes = Math.round(minutes);

    if ((total) < 0) {
        console.log('Late');
        if (absTotal > 59) {
            if (minutes < 10) {
                console.log(`${roundedHours}:0${roundedMinutes} hours after the start`);
            } else {
                console.log(`${roundedHours}:${roundedMinutes} hours after the start`);
            }
        } else {
            console.log(`${absTotal} minutes after the start`);
        }
    } else if ((total) > 30) {
        console.log('Early');
        if (absTotal > 59) {
            if (minutes < 10) {
                console.log(`${roundedHours}:0${roundedMinutes} hours before the start`);
            } else {
                console.log(`${roundedHours}:${roundedMinutes} hours before the start`);
            }
        } else {
            console.log(`${absTotal} minutes before the start`);
        }
    } else {
        console.log('On time');
        if (absTotal > 59) {
            if (minutes < 10) {
                console.log(`${roundedHours}:0${roundedMinutes} hours before the start`);
            } else {
                console.log(`${roundedHours}:${roundedMinutes} hours before the start`);
            }
        } else if (total !== 0) {
            console.log(`${absTotal} minutes before the start`);
        }
    }
}
onTime(['9', '00', '10', '30']);