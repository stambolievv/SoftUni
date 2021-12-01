function searchForANumber(arr, arrManipulations) {
    let take = arrManipulations.shift();
    let del = arrManipulations.shift();
    let search = arrManipulations.shift();

    let result = arr.slice(0, take);

    for (let i = 0; i < del; i++) {
        result.shift();
    }

    let count = 0;

    result.forEach(e => { e === search ? count++ : null; });

    console.log(`Number ${search} occurs ${count} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);