function cinemaTicket(params) {
    let day = params[0];
    switch (day) {
        case 'Monday':
        case 'Tuesday': console.log('12'); break;
        case 'Wednesday':
        case 'Thursday': console.log('14'); break;
        case 'Friday': console.log('12'); break;
        case 'Saturday':
        case 'Sunday': console.log('16'); break;
    }
}
cinemaTicket(['Friday']);