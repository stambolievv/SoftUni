function factorial(params) {
    let num = Number(params[0]);
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log(fact);
}
factorial(['5']);