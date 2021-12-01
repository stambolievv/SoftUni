function minerTask(arr) {
    let resource = {};
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            if (resource.hasOwnProperty(arr[i])) {
                resource[arr[i]] += Number(arr[i + 1]);
            } else {
                resource[arr[i]] = Number(arr[i + 1]);
            }
        }
    }
    for (const [type, quantity] of Object.entries(resource)) {
        console.log(`${type} -> ${quantity}`);
    }
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);