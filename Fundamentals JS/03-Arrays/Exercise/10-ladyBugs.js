function ladyBugs(arr) {
    let ladybugsArray = [];
    for (let i = 2; i < arr.length; i++) {
        let [ladybugIndex, command, jumpLength] = arr[i].split(' ');
        ladybugIndex = +ladybugIndex;
        jumpLength = +jumpLength;

        if (ladybugsArray[ladybugIndex] !== 1 || ladybugIndex < 0 || ladybugIndex >= ladybugsArray.length) {
            continue;
        }
        if (jumpLength < 0) {
            jumpLength = Math.abs(jumpLength);
            if (command === 'right') {
                command = 'left';
            } else if (command === 'left') {
                command = 'right';
            }
        }
        ladybugsArray[ladybugIndex] = 0;
        if (command === 'right') {
            let newPosition = ladybugIndex + jumpLength;
            if (ladybugsArray[newPosition] === 1) {
                newPosition = newPosition + jumpLength;
            }
            if (newPosition <= ladybugsArray.length) {
                ladybugsArray[newPosition] = 1;
            }

        } else {
            let newPosition = ladybugIndex - jumpLength;
            if (ladybugsArray[newPosition] === 1) {
                newPosition = newPosition - jumpLength;
            }
            if (newPosition >= 0) {
                ladybugsArray[newPosition] = 1;
            }
        }

    }

    console.log(ladybugsArray.join(' '));
}
ladyBugs([3, '0 1', '0 right 1', '2 right 1']);
ladyBugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladyBugs([5, '3', '3 left 2', '1 left -2']);
ladyBugs([-10, '0 1 -5']);