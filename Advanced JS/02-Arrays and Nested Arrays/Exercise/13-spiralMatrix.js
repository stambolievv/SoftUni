function spiralMatrix(rows, cols) {
    let [count, maxCount, minRow, minCol, maxRow, maxCol] = [0, rows * cols, 0, 0, rows - 1, cols - 1];

    const matrix = [];
    for (let r = 0; r < rows; r++) { matrix[r] = []; }

    while (count < maxCount) {
        for (let c = minCol; c <= maxCol && count < maxCount; c++) { matrix[minRow][c] = ++count; }
        minRow++;
        for (let r = minRow; r <= maxRow && count < maxCount; r++) { matrix[r][maxCol] = ++count; }
        maxCol--;
        for (let c = maxCol; c >= minCol && count < maxCount; c--) { matrix[maxRow][c] = ++count; }
        maxRow--;
        for (let r = maxRow; r >= minRow && count < maxCount; r--) { matrix[r][minCol] = ++count; }
        minCol++;
    }
    matrix.forEach(row => console.log(row.join(' ')));
}
spiralMatrix(5, 12);