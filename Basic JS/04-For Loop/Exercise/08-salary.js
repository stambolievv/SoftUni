function salary(params) {
    let salary = Number(params[1]);
    for (let i = 2; i <= params.length - 1; i++) {
        let currentTab = params[i];
        switch (currentTab) {
            case 'Facebook': salary -= 150; break;
            case 'Instagram': salary -= 100; break;
            case 'Reddit': salary -= 50; break;
        }
    }
    if (salary <= 0) {
        console.log('You have lost your salary.');
    } else {
        console.log(salary);
    }
}
salary(['10', '750', 'Facebook', 'Dev.bg', 'Instagram', 'Facebook', 'Reddit', 'Facebook', 'Facebook']);