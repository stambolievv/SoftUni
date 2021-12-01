function login(arr) {
    const user = arr.shift();
    for (let i = 0; i < arr.length; i++) {
        const passwordAsList = arr[i].split('');
        const passwordAsListReverse = passwordAsList.reverse();
        const passwordAsString = passwordAsListReverse.join('');

        if (passwordAsString === user) {
            console.log(`User ${user} logged in.`);
            break;
        } else {
            if (i === arr.length - 1) {
                console.log(`User ${user} blocked!`);
                break;
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'reccA']);