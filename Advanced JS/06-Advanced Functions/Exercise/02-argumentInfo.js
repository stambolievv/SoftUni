function argumentInfo(...params) {
    const argumentTypes = {};
    for (const argument of params) {
        const type = typeof argument;
        console.log(`${type}: ${argument}`);
        argumentTypes.hasOwnProperty(type) ? argumentTypes[type]++ : argumentTypes[type] = 1;
        // if (argumentTypes.hasOwnProperty(type)) {
        //     argumentTypes[type]++;
        // } else {
        //     argumentTypes[type] = 1;
        // }
    }
    return Object.entries(argumentTypes).sort((a, b) => b[1] - a[1]).forEach(argument => console.log(`${argument[0]} = ${argument[1]}`));
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });
argumentInfo({ name: 'bob' }, 3.333, 9.999);