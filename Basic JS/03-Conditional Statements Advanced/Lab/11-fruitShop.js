function fruitShop(params) {
    let fruit = params[0];
    let day = params[1];
    let quantity = Number(params[2]);
    let result = 0;
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch (fruit) {
                case 'banana': result = quantity * 2.50; break;
                case 'apple': result = quantity * 1.20; break;
                case 'orange': result = quantity * 0.85; break;
                case 'grapefruit': result = quantity * 1.45; break;
                case 'kiwi': result = quantity * 2.70; break;
                case 'pineapple': result = quantity * 5.50; break;
                case 'grapes': result = quantity * 3.85; break;
                default: console.log('error'); break;
            }
            break;
        case 'Saturday':
        case 'Sunday':
            switch (fruit) {
                case 'banana': result = quantity * 2.70; break;
                case 'apple': result = quantity * 1.25; break;
                case 'orange': result = quantity * 0.90; break;
                case 'grapefruit': result = quantity * 1.60; break;
                case 'kiwi': result = quantity * 3.00; break;
                case 'pineapple': result = quantity * 5.60; break;
                case 'grapes': result = quantity * 4.20; break;
                default: console.log('error'); break;
            }break;
        default: console.log('error'); break;
    }
    if (result > 0) {
        console.log(result.toFixed(2));
    }
}
fruitShop(['apple', 'Monday', '2']);