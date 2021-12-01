function equalSums(arr) {
    let found = false;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let r = i + 1; r < arr.length; r++) {
            rightSum += arr[r];
        }
        for (let l = 0; l < i; l++) {
            leftSum += arr[l];
        }
        if (leftSum === rightSum) {
            console.log(i);
            found = true;
            break;
        }
    }
    if (!found) {
        console.log('no');
    }
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);