function autoEngineeringCompany(carsArr) {
    const cars = {};
    for (const entry of carsArr) {
        const [brand, model, produced] = entry.split(' | ');
        if (!cars.hasOwnProperty(brand)) {
            cars[brand] = {};
        }
        if (cars[brand].hasOwnProperty(model)) {
            cars[brand][model] += Number(produced);
            continue;
        }
        Object.assign(cars[brand], { [model]: Number(produced) });
    }

    Object.entries(cars).forEach(([brand, info]) => {
        console.log(brand);
        Object.entries(info).forEach(([model, produced]) => {
            console.log(`###${model} -> ${produced}`);
        });
    });
}
autoEngineeringCompany([
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyundai | Electra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200'
]);