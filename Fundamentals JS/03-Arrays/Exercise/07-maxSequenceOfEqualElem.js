function maxSequenceOfEqualElem(arr) {
    let result = [];
    let leftMost = 0;

    for (let i = 0; i < arr.length; i++) {
        let current = [arr[i]];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                current.push(arr[j]);
            } else {
                break;
            }
        }

        if (current.length > result.length) {
            result = [];
            for (let j = 0; j < current.length; j++) {
                result.push(current[j]);
            }
        } else if (current.length === result.length) {
            if (i < leftMost) {
                leftMost = i;
            }
        }
    }
    console.log(result.join(' '));
}
maxSequenceOfEqualElem([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);