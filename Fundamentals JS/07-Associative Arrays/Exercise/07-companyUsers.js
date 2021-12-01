function companyUsers(arr) {
    let companies = {};
    for (const iterator of arr) {
        let [comp, employee] = iterator.split(' -> ');
        if (companies.hasOwnProperty(comp)) {
            if (!companies[comp].includes(`-- ${employee}`)) {
                companies[comp].push(`-- ${employee}`);
            }
        } else {
            companies[comp] = [`-- ${employee}`];
        }
    }
    companies = Object.entries(companies).sort((a, b) => { return a[0].localeCompare(b[0]); });
    for (const [comp, employee] of companies) {
        console.log(`${comp}\n${employee.join('\n')}`);
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);