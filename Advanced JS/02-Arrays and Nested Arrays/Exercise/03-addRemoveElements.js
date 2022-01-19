function addRemoveElements(arr) {
    const result = [];
    let number = 1;
    for (const iterator of arr) {
        // if (iterator === 'add') {
        //     result.push(number);
        // } else {
        //     result.pop();
        // }
        iterator === 'add' ? result.push(number) : result.pop();
        number++;
    }
    console.log(result.length > 0 ? result.join('\n') : 'Empty');
}
addRemoveElements(['add', 'add', 'remove', 'add', 'add']);