import { render } from './lib/lib.js';
import { readData, createData } from './lib/request.js';
import { template } from './templates/template.js';

const container = document.getElementById('container');
const form = document.querySelector('form');
form.addEventListener('submit', addItem);

function update(data) {
    const values = template(data);
    render(values, container);
}

async function addItem(e) {
    e.preventDefault();

    const value = document.getElementById('itemText').value;

    await createData(value);
    getData();

    form.reset();
}

async function getData() {
    const data = await readData();

    update(Object.values(data));
}

getData();