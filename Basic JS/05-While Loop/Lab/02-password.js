function password(params) {
    let index = 0;
    let name = params[index];
    index++;
    let password = params[index];
    index++;
    while (true) {
        let command = params[index];
        index++;
        if (command === password) {
            console.log(`Welcome ${name}!`);
            break;
        }
    }
}
password(['Sashko', '1234', 'Pass', '1324', '1234']);