function storeProvision(storeArr, orderArr) {
    let store = [];

    for (let i = 0; i < storeArr.length - 1; i += 2) {
        let item = storeArr[i];
        let quantity = Number(storeArr[i + 1]);
        let productsData = {};
        productsData.item = item;
        productsData.quantity = quantity;
        store.push(productsData);
    }

    for (let i = 0; i < orderArr.length - 1; i += 2) {
        let item = orderArr[i];
        let quantity = Number(orderArr[i + 1]);
        let productsData = {};
        productsData.item = item;
        productsData.quantity = quantity;

        let isExisting = false;
        store.forEach(element => {
            if (element.item == item) {
                element.quantity += quantity;
                isExisting = true;
            }
        });
        if (!isExisting) {
            store.push(productsData);
        }
    }

    for (const iterator of store) {
        console.log(`${iterator.item} -> ${iterator.quantity}`);

    }
}
storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);