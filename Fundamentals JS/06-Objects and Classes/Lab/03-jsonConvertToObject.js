function jsonConvertToObject(obj) {
    let data = JSON.parse(obj);

    for (const iterator of Object.keys(data)) {
        console.log(`${iterator}: ${data[iterator]}`);
    }
}
jsonConvertToObject('{"name": "George","age": 40,"town": "Sofia"}');