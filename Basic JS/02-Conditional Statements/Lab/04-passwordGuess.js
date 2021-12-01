function passwordGuess(input) {
    let realPass = 's3cr3t!P@ssw0rd';
    let enteredPass = input[0];

    if (realPass === enteredPass) {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}
passwordGuess(['qwerty']);