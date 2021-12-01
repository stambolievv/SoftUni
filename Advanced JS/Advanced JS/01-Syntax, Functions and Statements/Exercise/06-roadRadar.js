function roadRadar(km, area) {
    const speedLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };

    if (km > speedLimits[area]) {
        const difference = km - speedLimits[area];
        let status;
        if (difference > 40) {
            status = 'reckless driving';
        } else if (difference > 20) {
            status = 'excessive speeding';
        } else {
            status = 'speeding';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimits[area]} - ${status}`);
    } else {
        console.log(`Driving ${km} km/h in a ${speedLimits[area]} zone`);
    }
}
roadRadar(40, 'city');