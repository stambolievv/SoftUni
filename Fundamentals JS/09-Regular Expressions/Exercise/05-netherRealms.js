function netherRealms(str) {
    str = str.split(/[,\s]+/g);

    let patternHealth = /[^0-9+\-\*\/\.]/g;
    let patterDamage = /(-?\d+(?:\.\d+)?)/g;
    let patterMltplr = /[\*\/]+/g;

    let demons = [];

    for (const name of str) {
        let healthChars = name.match(patternHealth);
        let damageChars = name.match(patterDamage);
        let multiplierChars = name.match(patterMltplr);

        let health = 0;
        if (healthChars !== null) {
            health = healthChars.map(symbol => symbol.charCodeAt(0)).reduce((total, current) => total + current, 0);
        }

        let damage = 0;
        if (damageChars !== null) {
            damage = damageChars.map(Number).reduce((total, current) => total + current, 0);
        }

        if (multiplierChars !== null) {
            let multipliers = multiplierChars.join('').split('');
            multipliers.forEach(mltplr => { return mltplr === '*' ? damage *= 2 : damage /= 2; });
        }
        demons.push(`${name} - ${health} health, ${damage.toFixed(2)} damage`);
    }
    demons = demons.sort((a, b) => a.localeCompare(b));
    console.log(demons.join('\n'));
}
netherRealms('m15*/c-5.0, azazel');