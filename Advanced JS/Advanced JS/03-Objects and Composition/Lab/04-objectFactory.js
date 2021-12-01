function objectFactory(library, orders) {
    return orders.map(order => {
        const result = Object.assign({}, order.template);
        for (const part of order.parts) {
            result[part] = library[part];
        }
        return result;
    });

    // const result = [];
    // for (const order of orders) {
    //     const device = Object.assign({}, order.template);
    //     for (const part of order.parts) {
    //         device[part] = library[part];
    //     }
    //     result.push(device);
    // }
}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

console.log(objectFactory(library, orders));