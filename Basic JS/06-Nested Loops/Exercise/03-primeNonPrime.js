function primeNonPrime(params) {
    let index = 0;
    let command = params[index];
    index++;

    let countPrime = 0;
    let countNonPrime = 0;
    while (command !== 'stop') {
        let num = Number(command);
        let prime = true;
        if (num < 0) {
            console.log('Number is negative.');
            command = params[index++];
            continue;
        } else if (num === 1 || num === 0) {
            prime = false;
        } else {
            for (let i = 2; i < num; i++) {
                if (num % i === 0 && num !== i) {
                    prime = false;
                    break;
                }
            }
        }
        if (prime) {
            countPrime += num;
        } else {
            countNonPrime += num;
        }
        command = params[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${countPrime}`);
    console.log(`Sum of all non prime numbers is: ${countNonPrime}`);
}
primeNonPrime(['30', '83', '33', '-1', '20', 'stop']);