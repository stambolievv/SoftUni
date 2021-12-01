function greaterNumber(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);

    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
greaterNumber(['3', '5']);