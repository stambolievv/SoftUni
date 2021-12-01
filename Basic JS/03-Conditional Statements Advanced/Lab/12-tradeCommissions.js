function tradeCommissions(params) {
    let town = params[0];
    let sales = Number(params[1]);
    let result = 0;

    if (sales >= 0 && sales <= 500) {
        switch (town) {
            case 'Sofia': result = sales * 0.050; break;
            case 'Varna': result = sales * 0.045; break;
            case 'Plovdiv': result = sales * 0.055; break;
        }
    } else if (sales > 500 && sales <= 1000) {
        switch (town) {
            case 'Sofia': result = sales * 0.070; break;
            case 'Varna': result = sales * 0.075; break;
            case 'Plovdiv': result = sales * 0.080; break;
        }

    } else if (sales > 1000 && sales <= 10000) {
        switch (town) {
            case 'Sofia': result = sales * 0.080; break;
            case 'Varna': result = sales * 0.100; break;
            case 'Plovdiv': result = sales * 0.120; break;
        }
    } else {
        switch (town) {
            case 'Sofia': result = sales * 0.120; break;
            case 'Varna': result = sales * 0.130; break;
            case 'Plovdiv': result = sales * 0.145; break;
        }
    }
    if (result > 0) {
        console.log(result.toFixed(2));
    } else {
        console.log('error');
    }
}
tradeCommissions(['Plovdiv', '499.99']);