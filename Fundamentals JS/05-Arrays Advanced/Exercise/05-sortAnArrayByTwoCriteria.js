function sortAnArrayByTwoCriteria(arr) {
    console.log(arr
        .sort((a, b) => { return a.length - b.length || a.localeCompare(b); })
        .join('\n'));
}
sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);