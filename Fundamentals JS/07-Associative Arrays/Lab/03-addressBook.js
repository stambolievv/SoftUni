function addressBook(arr) {
    let personInfo = {};
    for (const iterator of arr) {
        let [name, address] = iterator.split(':');
        personInfo[name] = address;
    }

    let sorted = Object.entries(personInfo).sort((a, b) => { return a[0].localeCompare(b[0]); });
    sorted.forEach(info => {
        console.log(`${info[0]} -> ${info[1]}`);
    });
}
addressBook([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);