function attachEventsListeners() {
    document.getElementsByTagName('main')[0].addEventListener('click', onConvert);

    // const daysInput = document.getElementById('days');
    // const hoursInput = document.getElementById('hours');
    // const minutesInput = document.getElementById('minutes');
    // const secondsInput = document.getElementById('seconds');
    //*Syntactic Sugar - better solution
    const inputs = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };
    function onConvert(e) {
        if (e.target.tagName == 'INPUT' && e.target.type == 'button') {
            const input = e.target.parentNode.querySelector('input[type="text"]');
            const time = convert(Number(input.value), input.id);

            // daysInput.value = time.days;
            // hoursInput.value = time.hours;
            // minutesInput.value = time.minutes;
            // secondsInput.value = time.seconds;
            //*Syntactic Sugar - better solution
            Object.keys(time).forEach(unit => inputs[unit].value = time[unit]);
        }
    }

    const ratios = { days: 1, hours: 24, minutes: 1440, seconds: 86400 };
    function convert(value, unit) {
        const inDays = value / ratios[unit];
        return {
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        };
    }
}
