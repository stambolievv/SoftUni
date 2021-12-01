function employees(arr) {
    for (const iterator of arr) {
        let data = {
            name: iterator,
            personalNumber: iterator.length
        };
        console.log(`Name: ${data.name} -- Personal Number: ${data.personalNumber}`);
    }
}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);