function biscuits(arr) {
    arr = arr.map(Number);
    let biscuitsPerDay = arr.shift();
    let workers = arr.shift();
    let competingFactory = arr.shift();
    let myBiscuits = 0;
    for (let i = 0; i < 30; i++) {
        if (i % 3 === 0) {
            let third = (biscuitsPerDay * workers) * 0.75;
            myBiscuits += Math.floor(third);
        } else {
            myBiscuits += biscuitsPerDay * workers;
        }
    }
    let difference = myBiscuits - competingFactory;
    let percentage = (difference / competingFactory) * 100;

    console.log(`You have produced ${myBiscuits} biscuits for the past month.`);
    if (myBiscuits >= competingFactory) {
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    } else {
        console.log(`You produce ${Math.abs(percentage).toFixed(2)} percent less biscuits.`);
    }
}
biscuits(['65', '12', '26000']);
biscuits(['78', '8', '16000']);
biscuits(['163', '16', '67020']);

