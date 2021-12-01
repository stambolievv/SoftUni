function starEnigma(arr) {
    const numOfCommand = arr.shift();

    const patternLetters = /[star]/gi;
    const patternMsg = /@(?<name>[A-Za-z]+)[^@\-!:>]*:(?:\d+)[^@\-!:>]*!(?<type>[A|D])![^@\-!:>]*->(?:\d+)/;

    let attacked = [];
    let destroyed = [];

    for (let i = 0; i < numOfCommand; i++) {
        const encryptedMsg = arr[i];
        let decryptedMsg = '';
        const allLetters = encryptedMsg.match(patternLetters);
        if (allLetters !== null) {
            [...encryptedMsg].forEach(symbol => {
                const decrypt = symbol.charCodeAt(0) - allLetters.length;
                decryptedMsg += String.fromCharCode(decrypt);
            });
        }

        const isValid = patternMsg.test(decryptedMsg);
        if (isValid) {
            const { name, type } = patternMsg.exec(decryptedMsg).groups;
            type === 'A' ? attacked.push(name) : destroyed.push(name);
        }
    }
    attacked = attacked.sort((a, b) => a.localeCompare(b));
    destroyed = destroyed.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attacked.length}`);
    attacked.forEach(name => { console.log(`-> ${name}`); });
    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed.forEach(name => { console.log(`-> ${name}`); });
}
starEnigma(['3', ' ', 'GQhrr|A977777(H(TTTT', 'EHfsytsnhf?8555&I&2C9555SR']);
starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);