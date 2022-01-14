// function triangleOfNumbers(step) {
//     for (let i = 1; i <= step; i++) {
//         let space = '';
//         for (let j = 1; j <= i; j++) {
//             space += `${i} `;
//         }
//         console.log(space);
//     }
// }

function triangleOfNumbers(step) {
    for (let i = 1; i <= step; i++) {
        console.log(`${i} `.repeat(i);
    }
}
triangleOfNumbers(3);
