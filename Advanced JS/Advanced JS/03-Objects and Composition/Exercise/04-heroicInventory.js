function heroicInventory(arr) {
    const heroes = [];
    for (const line of arr) {
        const [name, level, items] = line.split(' / ');
        heroes.push({
            name,
            level: Number(level),
            items: items ? items.split(', ') : []
        });
        // const currentHero = {};
        // currentHero["name"] = name;
        // currentHero["level"] = Number(level);
        // currentHero["items"] = [items];
        // heroes.push(currentHero);
    }
    console.log(JSON.stringify(heroes));
}
heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);