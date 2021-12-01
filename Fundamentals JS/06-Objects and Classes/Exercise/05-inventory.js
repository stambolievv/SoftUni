function inventory(arr) {
    let allHeroes = [];
    for (const iterator of arr) {
        let [heroName, heroLevel, ...heroItems] = iterator.split(' / ');
        heroItems =
            heroItems
                .pop()
                .split(', ')
                .sort((a, b) => a.localeCompare(b))
                .join(', ');

        let currentHero = {};
        currentHero.hero = heroName;
        currentHero.level = heroLevel;
        currentHero.items = heroItems;

        allHeroes.push(currentHero);
    }

    allHeroes.sort((a, b) => a.level - b.level);

    allHeroes.forEach(element => {
        console.log(`Hero: ${element.hero}\nlevel => ${element.level}\nitems => ${element.items}`);
    });
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);