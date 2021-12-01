function imitationGame(arr) {
    let str = arr.shift();

    for (const line of arr) {
        const [command, param1, param2] = line.split('|');
        if (command === 'Move') {
            const left = str.substring(0, Number(param1));
            const right = str.substring(Number(param1));
            str = right + left;
        } else if (command === 'Insert') {
            const left = str.substring(0, Number(param1));
            const right = str.substring(Number(param1));
            str = left + param2 + right;
        } else if (command === 'ChangeAll') {
            str = str.split(param1).join(param2);
        }
    }
    console.log('The decrypted message is: ' + str);
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);