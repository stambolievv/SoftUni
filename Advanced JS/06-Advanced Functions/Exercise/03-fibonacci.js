function fibonacci() {
    let number = 1;
    let lastNum = 0;
    function calc() {
        const nextNum = lastNum + number;
        lastNum = number;
        number = nextNum;
        return lastNum;
    }
    return calc;
}
let fib = fibonacci();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());