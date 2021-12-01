import { request } from './request.js';
import { element as e } from './element.js';

const loggedUser = JSON.parse(sessionStorage.getItem('user'));
readTables();
readOrders();

function onBuy(e) {
    e.preventDefault();
    Array
        .from(document.querySelectorAll('tr input[type="checkbox"]:checked'))
        .map(table => Array.from(table.parentElement.parentElement.children))
        .map(row => row
            .map(item => {
                if (item.firstElementChild.src) { return item.firstElementChild.src; }
                return item.firstElementChild.textContent;
            })
            .filter(item => item != '')
        )
        .map(row => ({
            img: row[0],
            name: row[1],
            price: row[2],
            factor: row[3]
        }))
        .forEach(async table => await createOrders(table));
}

async function onCreate(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const inputFields = Array
        .from(formData.entries())
        .map(([k, v]) => [k, v.trim()])
        .reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});

    if (Object.values(inputFields).some(x => x == '')) {
        alert('All fields must be completed!\nTry again.');
        throw new Error('All fields must be completed!\nTry again.');
    }

    await createTable(inputFields);
    document.querySelector('tbody').appendChild(template(inputFields));

    e.target.reset();
}

async function onLogout(e) {
    e.preventDefault();
    await request('/users/logout', {
        method: 'get',
        headers: { 'X-Authorization': loggedUser.token }
    });

    sessionStorage.removeItem('user');
    return window.location = './home.html';
}

async function createTable(table) {
    return await request('/data/furniture', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': loggedUser.token
        },
        body: JSON.stringify(table)
    });
}

async function readTables() {
    const data = await request('/data/furniture', {
        method: 'get',
    });

    Object.values(data).map(t => document.querySelector('tbody').appendChild(template(t)));
};

async function createOrders(table) {
    return await request('/data/orders', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': loggedUser.token
        },
        body: JSON.stringify(table)
    });
}

async function readOrders() {
    const data = await request('/data/orders', {
        method: 'get'
    });

    const owner = data
        .filter(row => row._ownerId == loggedUser.id)
        .map(item => ({
            name: item.name,
            price: item.price
        }));

    const boughtFurniture = owner.map(i => i.name).join(', ');
    const totalPrice = owner.map(i => Number(i.price)).reduce((a, b) => a + b, 0);

    document.getElementById('bought').textContent = boughtFurniture;
    document.getElementById('total').textContent = totalPrice + ' $';
};

function template(table) {
    return e('tr', {},
        e('td', {}, e('img', { src: table.img })),
        e('td', {}, e('p', {}, table.name)),
        e('td', {}, e('p', {}, table.price)),
        e('td', {}, e('p', {}, table.factor)),
        e('td', {}, e('input', { type: 'checkbox' }))
    );
}

document.getElementById('buyBtn').addEventListener('click', onBuy);
document.getElementById('allOrders').addEventListener('click', readOrders);
document.getElementById('createForm').addEventListener('submit', onCreate);
document.getElementById('logoutBtn').addEventListener('click', onLogout);
