function townsToJSON(arr) {
    const result = [];
    const [town, lat, lon] = arr[0].split('|').filter(x => x).map(x => x.trim());
    for (let i = 1; i < arr.length; i++) {
        const [currentTown, currentLat, currentLon] = arr[i].split('|').filter(x => x != '').map(x => x.trim());
        result.push({
            [town]: currentTown,
            [lat]: Number(Number(currentLat).toFixed(2)),
            [lon]: Number(Number(currentLon).toFixed(2))
        });
        // const obj = {}
        // obj[town] = currentTown;
        // obj[lat] = Number(Number(currentLat).toFixed(2));
        // obj[lon] =  Number(Number(currentLon).toFixed(2));
        // result.push(obj);
    }
    console.log(JSON.stringify(result));
}
townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);