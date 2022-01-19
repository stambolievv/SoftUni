import { request } from './request.js';
import { element as e } from './element.js';

(async function readTables() {
    const data = await request('/data/furniture', {
        method: 'get',
    });

    Object.values(data).map(t => {
        const table = e('tr', {},
            e('td', {}, e('img', { src: t.img })),
            e('td', {}, e('p', {}, t.name)),
            e('td', {}, e('p', {}, t.price)),
            e('td', {}, e('p', {}, t.factor)),
            e('td', {}, e('input', { type: 'checkbox', disabled: true }))
        );
        return document.querySelector('tbody').appendChild(table);
    });

})();