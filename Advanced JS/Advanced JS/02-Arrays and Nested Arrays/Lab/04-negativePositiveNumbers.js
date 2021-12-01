function negativePositiveNumbers(arr) {
    const result = [];
    arr.forEach(num => { num < 0 ? result.unshift(num) : result.push(num); });
    // for (const num of arr) {
    //     if (num < 0) {
    //         result.unshift(num);
    //     } else {
    //         result.push(num);
    //     }
    // }
    console.log(result.join(' '));
}
negativePositiveNumbers([3, -2, 0, -1]);