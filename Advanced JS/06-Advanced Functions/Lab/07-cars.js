function cars(arr) {
    const cars = {};

    const actions = {
        'create': createObj,
        'set': setProperty,
        'print': printResult
    };

    for (const line of arr) {
        const [command, ...rest] = line.split(' ');
        const action = actions[command];
        if (action !== undefined) { action(...rest); };
    }

    function createObj(name, isInherits, parentName) {
        cars[name] = isInherits ? Object.create(cars[parentName]) : {};
        // if (isInherits) {
        //     cars[name] = Object.create(cars[parentName]);
        // } else {
        //     cars[name] = {};
        // }
    }
    function setProperty(name, key, value) {
        cars[name][key] = value;
    }
    function printResult(name) {
        const entry = [];
        for (const key in cars[name]) {
            entry.push(`${key}:${cars[name][key]}`);
        }
        console.log(entry.join());
    }
}
cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);