function storage(arr) {
    let store = new Map();
    for (const iterator of arr) {
        let [product, quantity] = iterator.split(' ');

        if (store.has(product)) {
            let old = store.get(product);
            store.set(product, (Number(quantity) + old));
        } else {
            store.set(product, Number(quantity));
        }
    }
    store.forEach((v, k) => { console.log(`${k} -> ${v}`); });

    // let store = {};

    // for (const iterator of arr) {
    //     let [product, quantity] = iterator.split(' ');
    //     if (store.hasOwnProperty(product)) {
    //         store[product] += Number(quantity);
    //     } else {
    //         store[product] = Number(quantity);
    //     }
    // }

    // for (const key in store) {
    //     console.log(`${key} -> ${store[key]}`);
    // }
}
storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);