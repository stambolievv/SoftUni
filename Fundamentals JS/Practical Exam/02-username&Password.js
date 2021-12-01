function solve(arr) {
    // const namePattern = /[A-Z][a-z]{2,}/
    // const passPattern = /[A-Za-z]{5,}[\d]+/
    const pattern = /(U\$)(?<name>[A-Z][a-z]{2,})\1(P@\$)(?<pass>[A-Za-z]{5,}[\d]+)\3/;

    const numOfLoops = Number(arr.shift());
    let successfulReg = 0;
    for (let i = 0; i < numOfLoops; i++) {
        // const name = arr[i].split('U$')[1];
        // const pass = arr[i].split('P@$')[1];
        // if ((name !== undefined && pass !== undefined) && (namePattern.test(name) && passPattern.test(pass))) {
        //     console.log('Registration was successful');
        //     console.log(`Username: ${name}, Password: ${pass}`);
        //     successfulReg++;
        // } else {
        //     console.log('Invalid username or password');
        // }

        let match = pattern.exec(arr[i]);
        if (match !== null) {
            console.log('Registration was successful');
            const { name, pass } = match.groups;
            console.log(`Username: ${name}, Password: ${pass}`);
            successfulReg++;
        } else {
            console.log('Invalid username or password');
        }
    }
    return console.log(`Successful registrations: ${successfulReg}`);
}
solve([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
]);
