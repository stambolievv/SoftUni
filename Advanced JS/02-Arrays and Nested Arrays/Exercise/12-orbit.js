function orbit([width, height, x, y]) {
    const matrix = [];
    for (let row = 0; row < width; row++) {
        matrix[row] = [];
        for (let col = 0; col < height; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }
    matrix.forEach(row => console.log(row.join(' ')));
}
orbit([5, 5, 2, 2]);