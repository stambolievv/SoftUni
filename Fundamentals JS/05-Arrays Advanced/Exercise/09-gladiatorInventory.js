function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');
    for (const iterator of arr) {
        let string = iterator.split(' ');
        let command = string[0];
        let item = string[1];
        switch (command) {
            case 'Buy':
                inventory.includes(item) ? null : inventory.push(item);
                break;
            case 'Trash':
                inventory.includes(item) ? inventory.splice(inventory.indexOf(item), 1) : null;
                break;
            case 'Repair':
                if (inventory.includes(item)) {
                    inventory.splice(inventory.indexOf(item), 1);
                    inventory.push(item);
                }
                break;
            case 'Upgrade':
                let equipment = item.split('-')[0];
                let upgrade = item.split('-')[1];
                if (inventory.includes(equipment)) {
                    inventory.splice(inventory.indexOf(equipment) + 1, 0, `${equipment}:${upgrade}`);
                }
                break;
            default:
                break;
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);