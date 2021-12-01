function numEndingWithSeven() {
    for (let i = 7; i <= 1000; i++) {
        if (i % 10 === 7) { console.log(i); }
    }
}
numEndingWithSeven();