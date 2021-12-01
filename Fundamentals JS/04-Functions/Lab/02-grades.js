function grades(grade) {
    let description = 'Fail';
    if (grade < 3) {
        description = 'Fail';
    } else if (grade >= 3 && grade < 3.5) {
        description = 'Poor';
    } else if (grade < 4.5) {
        description = 'Good';
    } else if (grade < 5.5) {
        description = 'Very good';
    } else {
        description = 'Excellent';
    }
    console.log(`${description} (${grade < 3 ? 2 : grade.toFixed(2)})`);
}
grades(2.99);