function pieceOfPie(arr, startPie, endPie) {
    const start = arr.indexOf(startPie);
    const end = arr.indexOf(endPie);
    const result = arr.slice(start, end + 1);
    return result;
}
console.log(pieceOfPie(
    [
        'Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));