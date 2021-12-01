function scholarship(input) {
    let income = Number(input[0]);
    let evaluation = Number(input[1]);
    let minSalary = Number(input[2]);

    let socialScholarship = minSalary * 0.35;
    let excellentScholarship = evaluation * 25;

    if (income < minSalary && evaluation > 4.5) {
        if (evaluation >= 5.5 && socialScholarship < excellentScholarship) {
            console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
        } else {
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
        }
    } else if (income >= minSalary && evaluation >= 5.5) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
    } else {
        console.log('You cannot get a scholarship!');
    }
}
scholarship(['300.00', '5.65', '420.00']);