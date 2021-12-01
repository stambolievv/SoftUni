function commonElements(arr1, arr2) {
    for (let elemOfFirst of arr1) {
        for (let elemOfSecond of arr2) {
            if (elemOfFirst === elemOfSecond) {
                console.log(elemOfFirst);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);