function sortAnArrayByTwoCriteria(arr) {
    return arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n');
}
console.log(sortAnArrayByTwoCriteria(['Isaac', 'Theodor', 'Jack', 'Harrison', 'George']));