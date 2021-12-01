function houseParty(arr) {
    let listOfPeople = [];
    for (const iterator of arr) {
        let name = iterator.split(' ');
        if (!listOfPeople.includes(name[0]) && name[2] === 'going!') {
            listOfPeople.push(name[0]);
        } else if (listOfPeople.includes(name[0]) && name[2] === 'going!') {
            console.log(`${name[0]} is already in the list!`);
        } else if (!listOfPeople.includes(name[0]) && name[2] === 'not') {
            console.log(`${name[0]} is not in the list!`);
        } else if (listOfPeople.includes(name[0]) && name[2] === 'not') {
            listOfPeople.splice(listOfPeople.indexOf(name[0]), 1);
        }
    }
    console.log(listOfPeople.join('\n'));
}
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);