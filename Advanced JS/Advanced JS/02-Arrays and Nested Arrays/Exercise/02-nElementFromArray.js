function nElementFromArray(arr, n) {
    return arr.filter((v, i) => i % n == 0);
}
console.log(nElementFromArray(['5', '20', '31', '4', '20'], 2));