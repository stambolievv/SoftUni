function ticTacToe(arr) {
    const gameField = [
        [false, false, false],
        [false, false, false],
        [false, false, false]];

    let hasWon = false;
    let currentPlayer = 'X';

    for (const coords of arr) {
        const [x, y] = coords.split(' ').map(Number);

        if (gameField.flat().every(spot => spot != false)) {
            break;
        }

        if (!gameField[x][y]) {
            gameField[x][y] = currentPlayer;

            if (checkWinner(gameField, [x, y])) {
                console.log(`Player ${currentPlayer} wins!`);
                hasWon = true;
                return gameField.forEach(v => console.log(v.join('\t')));
            }

            currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
        } else {
            console.log('This place is already taken. Please choose another!');
        }
    }

    if (!hasWon) {
        console.log('The game ended! Nobody wins :(');
        return gameField.forEach(v => console.log(v.join('\t')));
    }

    function checkWinner(field, [x, y]) {
        const left_Right = field[x].every((v, i, a) => v === a[0]);
        const up_Down = field.map(v => v[y]).every((v, i, a) => v === a[0]);
        const upLeft_DownRight = field.map((v, i) => v[i]).every((v, i, a) => v === a[0] && v != false);
        const downLeft_UpRight = field.map((v, i) => v[v.length - i - 1]).every((v, i, a) => v === a[0] && v != false);
        return (left_Right || up_Down || upLeft_DownRight || downLeft_UpRight);
    }
}
ticTacToe(['0 1', '0 0', '0 2', '2 0', '1 0', '1 1', '1 2', '2 2', '2 1', '0 0']);
ticTacToe(['0 0', '0 0', '1 1', '0 1', '1 2', '0 2', '2 2', '1 2', '2 2', '2 1']);
ticTacToe(['0 1', '0 0', '0 2', '2 0', '1 0', '1 2', '1 1', '2 1', '2 2', '0 0']);