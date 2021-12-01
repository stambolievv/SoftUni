function heartDelivery(arr) {
    let neighborhood = arr.shift().split('@').map(Number);
    let index = 0;
    for (const iterator of arr) {
        if (iterator === 'Love!') {
            console.log(`Cupid's last position was ${index}.`);
            let missed = neighborhood.filter(x => x > 0).length;
            if (missed === 0) {
                console.log('Mission was successful.');
            } else {
                console.log(`Cupid has failed ${missed} places.`);
            }
            return;
        }

        let [jump, num] = iterator.split(' ');
        index += Number(num);

        if (index > neighborhood.length - 1) {
            index = 0;
        }

        if (neighborhood[index] !== 0) {
            neighborhood[index] -= 2;
        } else {
            console.log(`Place ${index} already had Valentine's day.`);
            continue;
        }

        if (neighborhood[index] === 0) {
            console.log(`Place ${index} has Valentine's day.`);
        }
    }
}
// heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);
heartDelivery(['2@4@2', 'Jump 2', 'Jump 2', 'Jump 8', 'Jump 3', 'Jump 1', 'Love!']);