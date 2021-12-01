function workingHours(params) {
    let hour = Number(params[0]);
    let day = params[1];

    if (hour >= 10 && hour <= 18) {
        switch (day) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday':
            case 'Saturday': console.log('open'); break;
            case 'Sunday': console.log('closed'); break;
            default: console.log('closed'); break;
        }
    } else {
        console.log('closed');
    }
}
workingHours(['11', 'Sunday']);