function magicMatrices(matrix) {
    // const rows = matrix.every(row => row.reduce((acc, val) => acc + val, 0));
    const result = [];
    let rows = 0;
    let cols = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            rows += matrix[i][j];
            cols += matrix[j][i];
        }
        result.push(cols, rows);
        rows = 0;
        cols = 0;
    }
    return result.every(v => v === result[0]);
}
console.log(magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));