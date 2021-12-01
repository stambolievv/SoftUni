function plantDiscovery(arr) {
    const numOfPlants = Number(arr.shift());

    const plants = {};
    for (let i = 0; i < numOfPlants; i++) {
        const [name, rarity] = arr.shift().split('<->');
        plants[name] = { 'rarity': Number(rarity), 'rating': [], 'average': 0 };
    }

    const actions = {
        'Rate': ratePlant,
        'Update': updatePlant,
        'Reset': resetPlant
    };

    for (const line of arr) {
        if (line === 'Exhibition') {
            const sorted = Object.entries(plants).sort((a, b) => { return b[1].rarity - a[1].rarity || b[1].average - a[1].average; });
            console.log('Plants for the exhibition:');
            return sorted.forEach(plant => { console.log(`- ${plant[0]}; Rarity: ${plant[1].rarity}; Rating: ${plant[1].average.toFixed(2)}`); });
        }

        const [command, plant] = line.split(': ');
        const action = actions[command];
        action(plant);
    }

    function ratePlant(plant) {
        const [name, rating] = plant.split(' - ');
        if (plants.hasOwnProperty(name)) {
            plants[name].rating.push(Number(rating));

            const averageRate = plants[name].rating.reduce((total, current) => total + current, 0) / plants[name].rating.length;
            plants[name].average = averageRate;
        } else {
            console.log('error');
        }
    }

    function updatePlant(plant) {
        const [name, rarity] = plant.split(' - ');
        if (plants.hasOwnProperty(name)) {
            plants[name].rarity = Number(rarity);
        } else {
            console.log('error');
        }
    }

    function resetPlant(name) {
        if (plants.hasOwnProperty(name)) {
            plants[name].rating = [];
            plants[name].average = 0;
        } else {
            console.log('error');
        }
    }
}
plantDiscovery([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
]);