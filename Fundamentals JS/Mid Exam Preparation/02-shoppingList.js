function shoppingList(arr) {
    let list = arr.shift().split('!');

    for (const iterator of arr) {
        if (iterator === 'Go Shopping!') {        //early ending
            return list.join(', ');
        }

        let [command, item, newItem] = iterator.split(' ');
        let index = list.indexOf(item);
        switch (command) {
            case 'Urgent':
                !list.includes(item) ? list.unshift(item) : null;
                break;
            case 'Unnecessary':
                list.includes(item) ? list.splice(index, 1) : null;
                break;
            case 'Correct':
                // list.includes(item) ? list[index] = newItem : null;
                list.includes(item) ? list.splice(index, 1, newItem) : null;
                break;
            case 'Rearrange':
                list.includes(item) ? list.push(list.splice(index, 1)) : null;
                break;
        }
    }
}
console.log(shoppingList(['Tomatoes!Potatoes!Bread', 'Unnecessary Milk', 'Urgent Tomatoes', 'Go Shopping!']));
// console.log(shoppingList(['Milk!Pepper!Salt!Water!Banana', 'Urgent Salt', 'Unnecessary Grapes', 'Correct Pepper Onion', 'Rearrange Grapes', 'Correct Tomatoes Potatoes', 'Go Shopping!']));