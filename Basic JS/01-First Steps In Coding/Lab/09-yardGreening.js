function yardGreening(input) {
    let price = Number(input[0]);
    let finalPrice = price * 7.61;
    let discount = finalPrice * 0.18;
    let total = finalPrice - discount;
    console.log(`The final price is: ${total}.`);
    console.log(`The discount is: ${discount}. `);
}
yardGreening(['150']);