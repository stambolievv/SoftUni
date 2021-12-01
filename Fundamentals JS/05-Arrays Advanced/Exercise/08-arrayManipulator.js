function arrayManipulator(arrNums, arrOperator) {
    for (const iterator of arrOperator) {
        let command = iterator.split(' ');
        let index = Number(command[1]);
        switch (command[0]) {
            case 'add':
                arrNums.splice(index, 0, Number(command[2]));
                break;
            case 'addMany':
                arrNums.splice(index, 0, command.slice(2).map(Number));
                break;
            case 'contains':
                console.log(arrNums.indexOf(index));
                break;
            case 'remove':
                arrNums.splice(index, 1);
                break;
            case 'shift':
                for (let i = 0; i < index; i++) {
                    arrNums.push(arrNums.shift());
                }
                break;
            case 'sumPairs':
                for (let i = 0; i < arrNums.length - 1; i++) {
                    let nextNum = arrNums[i + 1];
                    arrNums[i] += nextNum;
                    arrNums.splice(i + 1, 1);
                }
                break;
            case 'print':
                return console.log(`[ ${arrNums.join(', ')} ]`);

            default:
                break;
        }
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5], ['add 1 8', 'addMany 5 9 8 7 6 5 1', 'contains 15', 'contains 1', 'remove 3', 'shift 1', 'sumPairs', 'print']);
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ['sumPairs', 'sumPairs', 'addMany 0 -1 -2 -3', 'print']);