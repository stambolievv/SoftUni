function schoolGrades(arr) {
    let classbook = {};
    for (const iterator of arr) {
        let [name, ...grades] = iterator.split(' ');
        grades = grades.map(Number);
        if (classbook.hasOwnProperty(name)) {
            classbook[name] = classbook[name].concat(grades);
        } else {
            classbook[name] = grades;
        }
    }

    let sorted = Object.entries(classbook).sort((a, b) => { return average(a, b); });
    for (const [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(', ')}`);
    }

    function average(a, b) {
        let aSum = 0;
        for (let i = 0; i < a[1].length; i++) {
            aSum += a[1][i];
        }
        let bSum = 0;
        for (let i = 0; i < b[1].length; i++) {
            bSum += b[1][i];
        }
        let aAverage = aSum / a[1].length;
        let bAverage = bSum / b[1].length;
        return aAverage - bAverage;
    }
}
schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);