function NxNMatrix(num) {
    for (let i = 0; i < num; i++) {
        let result = '';
        for (let j = 0; j < num; j++) {
            result += `${num} `;
        }
        console.log(result);
    }
}
NxNMatrix(7);