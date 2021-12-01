function cake(params) {
    let index = 0;
    let width = Number(params[index++]);
    let height = Number(params[index++]);

    let cake = width * height;

    let pieces = 0;
    let command = params[index++];
    while (command !== 'STOP') {
        pieces += Number(command);
        if (pieces > cake) {
            break;
        }
        command = params[index];
        index++;
    }

    if (pieces > cake) {
        console.log(`No more cake left! You need ${pieces - cake} pieces more.`);
    } else {
        console.log(`${cake - pieces} pieces are left.`);
    }
}
cake(['10', '2', '2', '4', '6', 'STOP']);