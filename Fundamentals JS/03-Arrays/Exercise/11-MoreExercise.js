function printNElement(arr) {
    let step = Number(arr.pop(arr.length - 1));
    let result = '';
    for (let i = 0; i < arr.length; i += step) {
        result += `${arr[i]} `;
    }
    console.log(result);
}
printNElement(['5', '20', '31', '4', '20', '2']);

function addNRemove(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            result.push(i + 1);
        } else {
            result.pop();
        }
    }
    if (result.length > 0) {
        console.log(result.join(' '));
    } else {
        console.log('Empty');
    }
}
addNRemove(['add', 'add', 'remove', 'add', 'add']);

function rotateArray(arr) {
    let rotation = Number(arr.pop(arr.length - 1));
    for (let i = 1; i <= rotation; i++) {
        let temp = arr.pop();
        arr.unshift(temp);
    }
    console.log(arr.join(' '));
}
rotateArray(['1', '2', '3', '4', '2']);

function noDecreasingSubsequence(arr) {
    let biggestNum = arr[0];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= biggestNum) {
            biggestNum = arr[i];
            result.push(arr[i]);
        }
    }
    console.log(result.join(' '));
}
noDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);

function tseamAccount(arr) {
    let games = arr[0].split(' ');

    for (let i = 0; i < arr.length; i++) {
        let list = arr[i].split(' ');
        let command = list[0];
        let game = list[1];

        if (command === 'Play!') {
            break;
        } else if (command === 'Install' && !games.includes(game)) {
            games.push(game);
        } else if (command === 'Uninstall' && games.includes(game)) {
            let index = games.indexOf(game);
            games.splice(index, 1);
        } else if (command === 'Update' && games.includes(game)) {
            let index = games.indexOf(game);
            games.splice(index, 1);
            games.push(game);
        } else if (command === 'Expansion') {
            let expansion = game.split('-');
            if (games.includes(expansion[0])) {
                let index = games.indexOf(expansion[0]);
                games.splice(index + 1, 0, `${expansion[0]}:${expansion[1]}`);
            }
        }
    }
}
tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
