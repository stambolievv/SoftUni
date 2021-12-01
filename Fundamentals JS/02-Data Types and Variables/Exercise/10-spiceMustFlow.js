function spiceMustFlow(yields) {
    let days = 0;
    let spices = 0;
    while (yields >= 100) {
        days++;
        spices += (yields - 26);
        yields -= 10;
    }
    if (spices >= 26) {
        spices -= 26;
    }
    console.log(days);
    console.log(spices);
}
spiceMustFlow(111);