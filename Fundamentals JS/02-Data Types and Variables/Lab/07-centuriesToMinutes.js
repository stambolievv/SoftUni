function centuriesToMinutes(centuries) {
    let years = 100 * centuries;
    let days = Math.trunc(365.2422 * years);
    let hours = 24 * days;
    let minutes = 60 * hours;
    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
centuriesToMinutes(1);