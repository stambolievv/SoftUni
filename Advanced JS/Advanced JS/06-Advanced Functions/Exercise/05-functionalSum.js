function functionalSum(num) {
    let sum = num;
    function add(num2) {
        sum += num2;
        return add;
    }
    add.toString = () => { return sum; };
    return add;
}
console.log(functionalSum(1).toString());
console.log(functionalSum(1)(6)(-3).toString());