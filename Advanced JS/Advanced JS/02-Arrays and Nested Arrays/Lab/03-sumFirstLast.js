function sumFirstLast(arr) {
    const first = [...arr].shift();
    const last = [...arr].pop();
    console.log(Number(first) + Number(last));
}
sumFirstLast(['20', '30', '40']);