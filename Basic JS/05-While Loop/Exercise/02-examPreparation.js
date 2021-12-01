function examPreparation(params) {
    let index = 0;
    let poor = Number(params[index]);
    index++;
    let command = params[index];

    let tasks = 0;
    let grade = 0;
    let totalGrades = 0;
    let poorGrades = 0;
    while (command !== 'Enough') {
        command = params[index];
        if (command >= 2) {
            grade = Number(params[index]);
            totalGrades += grade;
            tasks++;
            index++;
            if (grade <= 4) {
                poorGrades++;
            }
        } else {
            index++;
        }

        if (poorGrades >= poor) {
            console.log(`You need a break, ${poorGrades} poor grades.`);
            break;
        }
    }

    if (command === 'Enough') {
        console.log(`Average score: ${(totalGrades / tasks).toFixed(2)}`);
        console.log(`Number of problems: ${tasks}`);
        console.log(`Last problem: ${params[index - 3]}`);
    }
}
examPreparation(['4', 'Stone Age', '5', 'Freedom', '5', 'Storage', '3', 'Enough']);