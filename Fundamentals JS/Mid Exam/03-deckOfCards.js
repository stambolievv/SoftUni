function cards(arr) {
    let deck = arr.shift().split(':');
    let myDeck = [];
    for (let iterator of arr) {
        if (iterator === 'Ready') {
            console.log(myDeck.join(' '));
            return;
        }

        let [command, card, index] = iterator.split(' ');
        let idx = myDeck.indexOf(card);
        switch (command) {
            case 'Add':
                if (deck.includes(card)) {
                    myDeck.push(card);
                } else {
                    console.log('Card not found.');
                }
                break;
            case 'Insert':
                if (deck.includes(card) && (index < myDeck.length && index >= 0)) {
                    myDeck.splice(index, 0, card);
                } else {
                    console.log('Error!');
                }
                break;
            case 'Remove':
                if (myDeck.includes(card)) {
                    myDeck.splice(idx, 1);
                } else {
                    console.log('Card not found.');
                }
                break;
            case 'Swap':
                let firstCardIdx = idx;
                let secondCardIdx = myDeck.indexOf(index);

                let temp = myDeck[firstCardIdx];
                myDeck[firstCardIdx] = myDeck[secondCardIdx];
                myDeck[secondCardIdx] = temp;
                break;
            case 'Shuffle':
                myDeck.reverse();
                break;
            default:
                break;
        }
    }
}
cards([
    'Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
    'Add Moonfire',
    'Add Pounce',
    'Add Bite',
    'Add Wrath',
    'Insert Claw 0',
    'Swap Claw Moonfire',
    'Remove Bite',
    'Shuffle deck',
    'Ready'
]);

cards([
    'Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Add Pop',
    'Add Exodia',
    'Add Aso',
    'Remove Wrath',
    'Add SineokBqlDrakon',
    'Shuffle deck',
    'Insert Pesho 0',
    'Ready'
]);
