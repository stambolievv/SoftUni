function deckOfCards(cards) {
    try {
        console.log(cards.map(card => {
            const face = card.slice(0, -1);
            const suit = card.slice(-1);
            try {
                return playingCards(face, suit);
            } catch (err) {
                throw new Error('Invalid card: ' + card);
            }
        }).join(' '));
    } catch (err) {
        console.log(err.message);
    }

    function playingCards(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = { 'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663' };
        if (!faces.includes(face)) { throw new Error('Invalid face'); }
        if (!Object.keys(suits).includes(suit)) { throw new Error('Invalid suit'); }
        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        };
    }
}
deckOfCards(['AS', '10D', 'KH', '2C']);