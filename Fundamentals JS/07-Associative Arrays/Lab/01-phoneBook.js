function phoneBook(arr) {
    let personInfo = {};

    for (const iterator of arr) {
        let [name, phoneNumber] = iterator.split(' ');
        personInfo[name] = phoneNumber;
    }

    for (const key in personInfo) {
        console.log(`${key} -> ${personInfo[key]}`);
    }
}
phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);