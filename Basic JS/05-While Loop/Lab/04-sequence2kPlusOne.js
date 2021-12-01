function sequence2kPlusOne(params) {
    let num = Number(params[0]);

    let result = 1;
    while (result <= num) {
        console.log(result);
        result = result * 2 + 1;
    }
}
sequence2kPlusOne(['17']);