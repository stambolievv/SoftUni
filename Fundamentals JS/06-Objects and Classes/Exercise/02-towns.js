function towns(arr) {
    for (const iterator of arr) {
        let [name, lat, lon] = iterator.split(' | ');
        let data = {
            town: name,
            latitude: Number(lat).toFixed(2),
            longitude: Number(lon).toFixed(2)
        };
        console.log(data);
    }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);