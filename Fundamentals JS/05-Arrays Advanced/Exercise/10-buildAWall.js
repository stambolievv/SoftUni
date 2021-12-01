function buildAWall(arr) {
    let parsedArr = arr.map(Number);
    let crews = parsedArr.filter(len => len < 30).length;
    let dailyConcrete = [];

    while (crews !== 0) {
        let concreteByAllCrews = 0;
        for (let i = 0; i < parsedArr.length; i++) {
            if (parsedArr[i] !== 30) {
                parsedArr[i]++;
                concreteByAllCrews += 195;
                if (parsedArr[i] === 30) {
                    crews--;
                }
            }
        }
        dailyConcrete.push(concreteByAllCrews);
    }
    console.log(dailyConcrete.join(', '));
    console.log(dailyConcrete.reduce((a, b) => a + b, 0) * 1900 + ' pesos');
}
buildAWall([17, 22, 17, 19, 17]);