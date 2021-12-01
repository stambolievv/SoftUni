function loadingBar(num) {
    if (num === 100) {
        console.log('100% Complete!\n[%%%%%%%%%%]');
    } else {
        let result = '';
        for (let i = 1; i <= 10; i++) {
            if (i <= num / 10) {
                result += '%';
            } else {
                result += '.';
            }
        }
        console.log(`${num}% [${result}]\nStill loading...`);
    }
}
loadingBar(100);