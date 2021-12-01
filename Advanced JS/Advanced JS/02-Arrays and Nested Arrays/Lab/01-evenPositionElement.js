function evenPositionElement(arr) {
    const result = arr.filter((v, i) => i % 2 == 0).join(' ');
    // let result = '';
    // for (let i = 0; i < arr.length; i += 2) {
    //     result += `${arr[i]} `;
    // }
    console.log(result);
}
evenPositionElement(['20', '30', '40', '50', '60']);