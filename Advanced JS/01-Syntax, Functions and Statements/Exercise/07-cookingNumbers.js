function cookingNumbers(startingPoint, ...commands) {
    startingPoint = Number(startingPoint);
    for (const command of commands) {
        if (command == 'chop') {
            startingPoint /= 2;
            console.log(startingPoint);
        } else if (command == 'dice') {
            startingPoint = Math.sqrt(startingPoint);
            console.log(startingPoint);
        } else if (command == 'spice') {
            startingPoint++;
            console.log(startingPoint);
        } else if (command == 'bake') {
            startingPoint *= 3;
            console.log(startingPoint);
        } else if (command == 'fillet') {
            startingPoint -= (startingPoint * 0.2);
            console.log(startingPoint);
        }
    }
}
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');