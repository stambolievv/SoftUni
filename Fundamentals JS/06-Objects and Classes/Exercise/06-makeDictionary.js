function makeDictionary(arr) {
    let allObjects = [];

    loop:
    for (const iterator of arr) {
        let data = JSON.parse(iterator);

        let key = Object.keys(data).toString();
        let value = Object.values(data).toString();

        let current = {};
        current.term = key;
        current.definition = value;

        for (let i in allObjects) {
            if (allObjects[i].term == key) {
                allObjects[i].definition = value;
                break loop;
            }
        }

        allObjects.push(current);
    }

    allObjects.sort((a, b) => a.term.localeCompare(b.term));   //sort array of objects where 'term' is property name

    allObjects.forEach(element => {
        console.log(`Term: ${element.term} => Definition: ${element.definition}`);
    });
}
makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);