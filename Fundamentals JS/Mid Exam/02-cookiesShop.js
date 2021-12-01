function vector(arr) {
    let biscuits = arr.shift().split(', ');
    for (let iterator of arr) {
        if (iterator === 'No More Money') {
            let result = biscuits.filter(n => n !== 'None');
            console.log(result.join(' '));
            return;
        }

        let [command, cookie, index] = iterator.split(' ');
        switch (command) {
            case 'OutOfStock':
                let flag = false;
                while (!flag) {
                    if (biscuits.includes(cookie)) {
                        let idx = biscuits.indexOf(cookie);
                        biscuits.splice(idx, 1, 'None');
                    } else {
                        flag = true;
                    }
                }
                break;
            case 'Required':
                if (index < biscuits.length && index >= 0) {
                    if (biscuits[index] !== 'None') {
                        biscuits[index] = cookie;
                    }
                }
                break;
            case 'Last':
                biscuits.push(cookie);
                break;
            default:
                break;
        }
    }
}

vector(['Vanilla, Chocolate, Raspberry, Chocolate', 'OutOfStock Chocolate', 'Required BBB 3', 'No More Money']);
vector(['Vanilla, Chocolate, Raspberry, Vegan', 'Required SB 3', 'OutOfStock Walnuts', 'No More Money']);
