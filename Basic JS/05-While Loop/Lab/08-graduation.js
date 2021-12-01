function graduation(params) {
    let name = params[0];

    let index = 0;
    let averageGrade = 0;
    let level = 1;
    let fails = 0;
    let isBadGradeReceived = false;
    while (level <= 12) {
        index++;
        let grade = Number(params[index]);
        if (grade >= 4) {
            averageGrade += grade;
            level++;
            continue;
        }
        fails++;
        averageGrade += grade;
        if (fails > 1) {
            isBadGradeReceived = true;
            break;
        }
    }

    if (isBadGradeReceived) {
        console.log(`${name} has been excluded at ${level} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${(averageGrade / 12).toFixed(2)}`);
    }
}
graduation(['Gosho', '5', '5.5', '6', '5.43', '5.5', '6', '5.55', '5', '2', '6', '5.43', '5']);