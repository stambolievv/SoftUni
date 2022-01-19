function diagonalAttack(arr) {
    const matrix = arr.map(v => v.split(' ').map(Number));
    const upLeft_DownRight = matrix.map((v, i) => v[i]).reduce((acc, val) => acc + val, 0);
    const downLeft_UpRight = matrix.map((v, i) => v[v.length - i - 1]).reduce((acc, val) => acc + val, 0);
    if (upLeft_DownRight == downLeft_UpRight) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (i != j && i != matrix.length - j - 1) {
                    matrix[i][j] = upLeft_DownRight;
                }
            }
        }
        return matrix.forEach(row => console.log(row.join(' ')));
    } else {
        return console.log(arr.join('\n'));
    }
}
diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);