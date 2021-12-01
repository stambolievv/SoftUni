function moving(params) {
    let index = 0;
    let width = Number(params[index++]);
    let length = Number(params[index++]);
    let height = Number(params[index++]);

    let cubic = width * height * length;

    let isFreeSpace = true;
    let command = params[index++];
    while (command !== 'Done') {
        let box = Number(command);
        cubic -= box;
        if (cubic < 0) {
            console.log(`No more free space! You need ${Math.abs(cubic)} Cubic meters more.`);
            isFreeSpace = false;
            break;
        }
        command = params[index];
        index++;
    }
    if (isFreeSpace) {
        console.log(`${cubic} Cubic meters left.`);
    }
}
moving(['10', '1', '2', '4', '6', 'Done']);