function carFactory(obj) {
    const car = {
        model: obj.model,
        engine: getEngine(obj.power),
        carriage: { type: obj.carriage, color: obj.color },
        wheels: getWheels(obj.wheelsize)
    };
    function getWheels(size) {
        if (size % 2 == 0) {
            return new Array(4).fill(size - 1);
        } else {
            return new Array(4).fill(size);
        }
    }
    function getEngine(power) {
        let volume;
        if (power > 120) {
            volume = 3500;
            power = 200;
        } else if (power > 90) {
            volume = 2400;
            power = 120;
        } else {
            volume = 1800;
            power = 90;
        }
        return { power, volume };
    }
    return car;
}
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));